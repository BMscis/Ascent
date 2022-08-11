'reach 0.1';
const [hand,ZERO,ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN] = makeEnum(11)
const [isOutcome, A_WINS,DRAW,B_WINS] = makeEnum(3)
const checkResult = (hA,cA,hB,cB) => {
  const result = hA + hB
  const outcome = result == cA ? 0 : result == cB ? 2 : 1
  return outcome
}
const common = {
  getHand : Fun([],UInt),
  shout   : Fun([UInt],UInt),
  showWinner : Fun([Bytes(1)],Null),
  informTimeout : Fun([],Null)
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...common,
    wager:UInt,
  });
  const B = Participant('Bob', {
    ...common,
    AcceptWager:Bool
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
    const acceptWager = declassify(interact.AcceptWager)
  })
  B.publish()
    .pay(wager)
    .timeout(relativeTime(deadline),() =>
    closeTo(A, noRes))

  var determinant = DRAW
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
  assert(isOutcome(determinant))
  if(determinant == 0){ 
    transfer(balance()).to(A)
    each([A,B], () => interact.showWinner('A'));
  }
  if(determinant == 2) {
    transfer(balance()).to(B)
    each([A,B], () => interact.showWinner('B'));
  }
  if(determinant == 1) {
    transfer(wager).to(B)
    transfer(wager).to(A)
    each([A,B], () => interact.showWinner('D'));
  }

  commit()
  exit();
});
