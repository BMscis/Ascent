'reach 0.1';

export const main = Reach.App(() => {
    const Eve = Participant("Eve",{
        getTimeOut : Fun([],UInt)
    })
    const Alice = Participant("Alice",{
        timeExpiration : Fun([],Null)

    })

    init();
    Eve.only(()=> {
        const deadline = declassify(interact.getTimeOut)
    })
    Eve.publish(deadline)
    .pay(1)
    .timeout(relativeTime(deadline), () => Alice.interact.timeExpiration())

    commit();
    exit();
})