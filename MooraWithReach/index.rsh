'reach 0.1';

const [hand,ZERO,ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN] = makeEnum(11)
const [isOutcome, A_WINS,DRAW,B_WINS] = makeEnum(3)

const common = {
  getHand : Fun([],UInt),
  shout   : Fun([UInt],UInt),
  showWinner : Fun([Bytes(1)],Null),
  roundWinner : Fun([UInt,Bytes(1)],Null),
  informTimeout : Fun([],Null),
  gameReady : Fun([],Null)
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...common,
    wager:UInt,
  });
  const B = Participant('Bob', {
    ...common,
    AcceptWager:Fun([UInt],Bool)
  });
  init()

  const noRes = () => {
    each([A,B], () => {
      interact.informTimeout()
    })
  }

  A.only(() => {
    const wager = declassify(interact.wager)
  })
  A.publish(wager)
  .pay(wager)
  const deadline = thisConsensusTime() + 10
  commit()

  B.only(()=>{
    const acceptWager = declassify(interact.AcceptWager(wager))
  })
  B.publish()
    .pay(wager)
    .timeout(relativeTime(deadline),() =>
    closeTo(A, noRes))

  each([A,B], () => interact.gameReady());
  const Amap = new Map(UInt)
  Amap[A] = 0
  const Bmap = new Map(UInt)
  Amap[B] = 0

  var round = 0

  invariant(balance() == 2 * wager)
  while(round < 3){
    var determinant = DRAW
    { 
      const addToMap = (x) => x + 1 
      const checkResult = (hA,cA,hB,cB) => {
        const result = hA + hB
        const outcome = result == cA ? 0 : result == cB ? 2 : 1
        const Ap = fromSome(Amap[A],0)
        const Bp = fromSome(Bmap[B],0)
        if(outcome == 0) {
          Amap[A] = addToMap(Ap)
          each([A,B], () => interact.roundWinner(round,'A'));
        }
        if(outcome == 2) {
          Bmap[B] = addToMap(Bp)
          each([A,B], () => interact.roundWinner(round,'B'));
        }
        else{
          each([A,B], () => interact.roundWinner(round,'D'));
        }
        return outcome
    }}
   invariant( balance() == 2 * wager && isOutcome(determinant))
   while(determinant == DRAW){
     commit()
     A.only(() => {
       const handA = declassify(interact.getHand())
       const callA = declassify(interact.shout(handA))
     })
     A.publish(handA,callA)
     .timeout(relativeTime(deadline),() =>
     closeTo(B, noRes))

     commit();

     B.only(()=>{
       const handB = declassify(interact.getHand())
       const callB = declassify(interact.shout(handB))
     })
     B.publish(handB,callB)
     .timeout(relativeTime(deadline),() =>
     closeTo(A, noRes))
     //commit();

     determinant = checkResult(handA,callA,handB,callB)
     continue
   }
   commit()
   A.publish()
   round = round + 1
   continue
  }


  //assert(isOutcome(determinant))
  const Aoutcome = fromSome(Amap[A],0)
  const Boutcome = fromSome(Bmap[B],0)
  const checkDraw = Aoutcome == Boutcome
  const winner = Aoutcome > Boutcome

  if(checkDraw) {
    transfer(wager).to(B)
    transfer(wager).to(A)
    each([A,B], () => interact.showWinner('D'));
  }
  else if(winner){ 
    transfer(balance()).to(A)
    each([A,B], () => interact.showWinner('A'));
  }
  else {
    transfer(balance()).to(B)
    each([A,B], () => interact.showWinner('B'));
  }
  commit()
  exit();
});
