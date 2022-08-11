import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const getNum = () => Math.floor(Math.random() * 10)
const getHNum = () => Math.floor(Math.random() * 5)
const common = {
  getHand : () => {
    const num = getHNum()
    console.log("Hand: ", num)
    return num
  },
  shout   : (x) => {
    let num = getNum()
    while (num < x){
      num = getNum()
    }
    console.log("Shout: ", num)
    return num
  },
  showWinner : (x) => {
    switch (x) {
      case 'A':
        console.log("A won")
        break;
      case 'B':
        console.log("B won")
        break;
      case 'D':
        console.log("DRAW")
        break;
    }
  }

}
const checkBalance = async (x) => {
  const [who,acc] = x
  const bal = await stdlib.balanceOf(acc)
  console.log(who,"'s ALGO balance is : ", stdlib.formatCurrency(bal,4))
}
const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

await checkBalance(["Alice", accAlice])
await checkBalance(["bob", accBob])

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...common,
    wager : stdlib.parseCurrency(10),
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...common,
    acceptWager : true
    // implement Bob's interact object here
  }),
]);

await checkBalance(["Alice", accAlice])
await checkBalance(["bob", accBob])

console.log('Goodbye, Alice and Bob!');
