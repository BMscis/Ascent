'reach 0.1';

const common = {
    seePrice: FUN([],UInt),
    getDescription:FUN([], Byte(1))
}

export const main = Reach.App(() => {

    const Creator = Participant('Creator', { 
        ...common
     })
    const Bidder = Participant('Bidder', { 
        ...common
     })
    const Buyer = Participant('Buyer', { 
        ...common
     })

     Bidder.only(() => {
        const price = declassify(Bidder.interact.seePrice())

        Bidder.publish()
     })

     Buyer.only(() => {
        const description = declassify(Buyer.interact.getDescription())

        Buyer.publish()
     })

})