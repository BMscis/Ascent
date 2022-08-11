'reach 0.1';

const common = {
    getChallenge: FUN([],UInt),
    seeResult:FUN([UInt], Null)
}

export const main = Reach.App(() => {

    const Pat = Participant('Pat', { 
        ...common
     })
    const Vanna = Participant('Vanna', { 
        ...common
     })

     Pat.only(() => {
        const challengePat = declassify(interact.getChallenge())

        Pat.publish();
     })
     Vanna.only(() => {
        const challengeVanna = declassify(interact.getChallenge())

        Vanna.publish()
     })

     commit()

     exit()
})