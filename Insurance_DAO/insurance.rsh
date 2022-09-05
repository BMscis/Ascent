// 'reach 0.1';
// //1 algo == 100jsr
// const TokenPay = Tuple(UInt,UInt,Token)
// // const TokenizableOrder = Struct([
// //     ["AssetName",     Bytes(32)],
// //     ["symbol",        Bytes(8)],
// //     ["AssetType",     UInt],
// //     ["AssetValue",    UInt],
// //     ["AccountAddr",   Address],
// //     ["ExtCID",        Bytes(96)],
// //     ["PurchaseDate",  Bytes(32)],
// //     ["OwnershipDate", Bytes(32)],
// // ])

// //fees
// const TAX_CUT = 30
// // Tokenizables Asset
// const Rights =Struct([
//     ["name",     Bytes(32)],
//     ["symbol",   Bytes(8)],
//     ["url",      Bytes(96)],
//     ["metadata", Digest],
//     ["supply",   UInt],
//     ["decimals", UInt]
// ])
// // Tokenizables Asset Object
// const RightsObj = Object({
//   name: Bytes(32), 
//   symbol: Bytes(8), 
//   url: Bytes(96), 
//   metadata: Bytes(32), 
//   supply: UInt, 
//   decimals: UInt
// })
// const Comt = Tuple(Digest, UInt)
// //Tokenized asset with timestamp
// const WERA = Struct([
//     ["AssetName",      Bytes(32)],
//     ["AssetSymbol",    Bytes(8)],
//     ["AssetType",      UInt],
//     ["AssetValue",     UInt],
//     ["OwnerAddress",   Address],
//     ["AdminAddress",   Address],
//     ["Hash",           Digest],
//     ["Time",           UInt],
//     ["ExtCID",         Bytes(96)],
// ])
// //Asset to tokenize
// const WERAd = Struct([
//     ["AssetName",      Bytes(32)],
//     ["AssetSymbol",    Bytes(8)],
//     ["AssetType",      UInt],
//     ["AssetValue",     UInt],
//     ["OwnerAddress",   Address],
//     ["AdminAddress",   Address],
//     ["Time",           UInt],
//     ["ExtCID",         Bytes(96)],
// ])
// // Tokenized asset to send back to USER
// const WERAt = Tuple(Bytes(32),Bytes(8),UInt,UInt,Address,Address,Digest,UInt,Bytes(96))
// const WeraFTuple = Tuple(Bytes(32),Bytes(8),UInt,UInt,Bytes(96))
// const AdminApiInterface = {deprecate: Fun([Bool], Bool),
// // update   : Fun([TokenPay], Bool),
// fundJSR  : Fun([UInt], Bool),
// fundALGOS: Fun([UInt], Bool),}
// const AdminInterface = {halt       : Fun([], Null),
// ready      : Fun([Contract], Null),
// tokenParams: Fun([],TokenPay)}
// const UserInterface = {
//   ...hasRandom,
// getAdmin : Fun([], Contract),
// tokenize : WeraFTuple,
// showWera : Fun([WERAt], Null),
// Done : Fun([], Null)}
// const EventsInterface = {
//   showBid: [Bytes(2),Address,UInt],
//   auctionEnd:[Bytes(2),Address,UInt]
// }
// const BidderInterface = {
//   makePurchase :Fun([UInt], Token),
//   makeBid      :Fun([UInt], Token),
//   makeSell     :Fun([UInt], Tuple(UInt,UInt)),
// }
// const UserApInterface = {GetJASIRIS  : Fun([WERAt], Tuple(WERAt,UInt)),}
// const AdminView = {
// SeeAddress   : Fun([], Address),
// SetCompanion : Fun([], Contract),
// ContractBalance: UInt
// }
// const remoteUserToAdminView = {
// AddressView_SeeAddress: Fun([], Address),
// }
// const protocolInterface = {
// ...hasRandom,
// GetSale    :Fun([], Tuple(WERAt, Bytes(32))),
// GetToken   :Fun([], Token),
// PshowToken :Fun([Token,UInt,Contract], Null),
// AuctionStarted :Fun([],Null),
// AuctionEnded :Fun([],Null),
// }
// //function to check the digest of an tokenized asset
// const checkDigest = (dg) => {
//     const [AN,AS,AT,AV,OA,AA,lHS,CT,EC] = WERA.toTuple(dg)
//     const TokenAsset = WERAd.fromTuple([AN,AS,AT,AV,OA,AA,CT,EC])
//     const HS = digest(TokenAsset)
//     return [OA,HS,lHS,AV]
// }
// //function to check the digest of an tokenized asset
// const checkDigestP = (dg) => {
//     const [AN,AS,AT,AV,OA,AA,lHS,CT,EC] = WERA.toTuple(dg)
//     const TokenAsset = WERAd.fromTuple([AN,AS,AT,AV,OA,AA,CT,EC])
//     const HS = digest(TokenAsset)
//     return [AN,AS,AV,OA,AA,lHS,HS,EC]
// }
// //Pay function used across code
// const FPay = (algo,jsr,tokn) => [algo,[jsr, tokn]];

// //Function to preserve created token
// const preserveToken = (preserver, owner,token,ctx) =>
// {
//   const supply = 1
//   const [tR, kG] = makeDeadline(20)
//   const [done] = parallelReduce([false])
//     .invariant(
//     balance() == 0 && 
//     balance(token) <= token.supply())
//     .while(balance(token) <= token.supply())
//     .api(preserver.makeSell,
//       ((tn)=>{
//         assume(this == owner, "Token not similar.")
//       }),
//       //((tkn)=>FPay(0,1,tkn)),
//       ((tn)=>0),
//       ((tn, fn)=>{
//         require(this == owner, "Token not similar.")
//         fn([balance(token), token.supply()])
//         return [true]
//       }))
//     //  .timeout(DEADLINE, () => {
//     //    TIMEOUT_BLOCK
//     //  });
//   token.burn();
//   token.destroy();
// }
// /**
//  * AdminConsole responsible for distributing JASIRIS
//  * 
//  * @pre Must add Algos
//  * @pre Must add Jasiris
//  * @post Ends when JASIRI balance <= 0
//  * 
//  * @param network: Blockchain network to connect to
//  * @param networkContract: Contract address to set for admin
//  * 
//  */
// const AdminConsole = (network, networkContract) => Reach.App(() =>{
//     setOptions({untrustworthyMaps: true,connectors:network});
//     const Admin = Participant("Admin",      AdminInterface);
//     const AdminApi = API("AdminApi",        AdminApiInterface)
//     const UserApi = API("UserApi",          UserApInterface)
//     const AnyApi = API("AnyApi",            {h: Fun([], Null)})
//     const AddressView = View("AddressView", AdminView);
//     init();
//     Admin.only(() => {const AA = this
//     const [algos,supply, JASIRI] = declassify(interact.tokenParams())
//     assume(algos > 0 && supply > 0, "Please fund account");
//     assume(typeOf(JASIRI) == Token, "Make sure you have the right Jasiri token")
//     })
//     Admin.publish(AA, algos, supply, JASIRI);
//     require(algos > 0 && supply > 0, "Please fund account");
//     require(typeOf(JASIRI) == Token, "Make sure you have the right Jasiri token")
//     commit();
    
//     Admin.pay(FPay(algos,supply,JASIRI));
//     const GetAddr = () => fromSome(Maybe(Address).Some(AA), getAddress())
//     AddressView.SeeAddress.set(GetAddr)
//     AddressView.SetCompanion.set(networkContract)
//     Admin.interact.ready(getContract())
//     const [payFee, userNumber,startingBal] = parallelReduce([ 0,0,supply ])
//       .define(() => {
//             AddressView.ContractBalance.set(balance(JASIRI))
//             const isAdmin = (who) => check(who == AA, 'You are not the admin');
//             const pry = (rk,ts) => {
//                 const [rOA,rHS,rlHS,rAV]= checkDigest(rk)
//                 assume(rAV > 1000)
//                 assume(ts == rOA && rHS == rlHS && balance(JASIRI) >= rAV, "You don't own this asset")
//                 verifyMuldiv(rAV , TAX_CUT,100)
//                 const Fee = muldiv(rAV , TAX_CUT,100)
//                 assume(Fee + 1 < rAV)
//             };
//             const poke = (pk,ts) => {
//                 const [pOA,pHS,plHS,pAV]= checkDigest(pk)
//                 require(pAV > 1000)
//                 require(ts == pOA && pHS == plHS && balance(JASIRI) >= pAV, "You don't own this asset")
//                 verifyMuldiv(pAV , TAX_CUT,100)
//                 const Fee = muldiv(pAV , TAX_CUT,100)
//                 require(Fee + 1 < pAV,"Not enough do")
//                 const netPay = pAV - Fee
//                 return [netPay,Fee];}
//         })
//       .invariant(balance(JASIRI) >= 0)
//       .while(balance(JASIRI) > 0)
//       .api(AdminApi.fundALGOS,
//         ((fs)=> isAdmin(this)),
//         ((fs)=> 0),
//         ((fs,fn)=> {isAdmin(this)
//         fn(true)
//         return [0,userNumber,startingBal]}))
//       .api(AdminApi.fundJSR,
//         ((fs)=> isAdmin(this)),
//         ((fs)=> 0),
//         ((fs,fn)=> {isAdmin(this)
//         fn(true)
//         return [0,userNumber,startingBal]}))
//       .api(AdminApi.deprecate,
//         ((dp)=>isAdmin(this)),
//         ((dp)=>0),
//         ((dp,fn)=> {isAdmin(this)
//         fn(true)
//         return [0, userNumber,startingBal]}))
//       .api(UserApi.GetJASIRIS,
//       ((Wera)=>{pry(Wera,this)}),
//       ((Wera)=> 0),
//       ((Wera, fn)=> {
//         const [aV,fee] = poke(Wera,this)
//         const SB = balance(JASIRI) + aV + fee
//         transfer(aV, JASIRI).to(this)
//         transfer(fee, JASIRI).to(AA)
//         fn([Wera,aV])
//         return [aV + fee,userNumber + 1,SB]}))
//     //assert(isDep == true);
//     commit();
//     const [[], haltK] = call(AnyApi.h);
//     haltK(null);
//     transfer(balance()).to(Admin);
//     transfer(balance(JASIRI), JASIRI).to(Admin);
//     commit();
//     exit();
// });
// /**
//  * Server gives access to Admin Console
//  */
// export const Server = AdminConsole([ALGO],
// () => fromSome(getCompanion(), getContract()));
// /**
//  * TokenizeAsset responsible for converting real assets to tokenizable rights
//  * 
//  * @pre Asset can only be tokenized once
//  * @pre A hash function is used to create the asset
//  * @post A timestamp is used in consensus time as a stamp that confirms the eligibility of the asset
//  * 
//  */
// export const TokenizeAsset = Reach.App(() => {
//     const User = Participant("User", UserInterface)
//     init();
//     User.only(() => {const OA = this
//     const AdminContract = declassify(interact.getAdmin())})
//     User.publish(AdminContract, OA);
//     const CT = thisConsensusTime();
//     commit();
//     User.publish();
//     const r = remote(AdminContract, remoteUserToAdminView);
//     const AA = r.AddressView_SeeAddress();
//     commit();
//     User.only(() => {const [AN, AS, AT, AV, EC,] = declassify(interact.tokenize)
//     const TokenAsset = WERAd.fromTuple([AN,AS,AT,AV,OA,AA,CT,EC])
//     const HS = digest(TokenAsset)
//     const WeraAsset = WERA.fromTuple([AN,AS,AT,AV,OA,AA,HS,CT,EC])})
//     User.publish(WeraAsset)
//     const WT = WERA.toTuple(WeraAsset)
//     User.interact.showWera(WT)
//     transfer(balance()).to(User)
//     commit();
//     User.interact.Done()
//     exit();
// });
// /**
//  * Market responsible for creating the token rights token with a chance for bids
//  * 
//  * @pre Tokenized assets is passed
//  * @pre A token is created from the tokenized asset
//  * @post Highest bidder gets the rights to the tokenized asset.
//  * 
//  */
// export const Market = Reach.App(() => {
//   const Protocol = Participant("Protocol", protocolInterface)
//   const Bidder = API("Bidder", BidderInterface)
//   const MarketView = Events("MarketView",EventsInterface)
//   init();
//   Protocol.only(() => {
//       const checkAddr = this
//       const [WA,meta] = declassify(interact.GetSale())
//       const JASIRI = declassify(interact.GetToken())
//       const [OA,HS,lHS,AV] = checkDigest(WA)
//       assume(OA == checkAddr && HS == lHS,"Not the same")
//   })
//   Protocol.publish(WA, checkAddr,meta)
//   const [xAN,xAS,xAV,xOA,xAA,xHS,yHS,xEC] = checkDigestP(WA)
//   require(xOA == checkAddr && xHS == yHS,"Not the same")
//   commit()
//   Protocol.publish(JASIRI)

//   const supply = 1
//   const makeToken = Rights.fromTuple([xAN,xAS,xEC,meta,supply,0])
//   const TKR = new Token(Rights.toObject(makeToken))
//   require(supply == 1)
//   require(TKR != JASIRI)
//   commit();
//   Protocol.interact.PshowToken(TKR,xAV,getContract())
//   Protocol.publish()
//   assert(balance() == 0)
//   assert(balance(JASIRI) == 0)
//   Protocol.interact.AuctionStarted()
//   const [ timeRemaining, keepGoing ] = makeDeadline(120)
//    const [
//     highestBidder,
//     lastPrice,
//     isFirstBid] = parallelReduce([Protocol,xAV,true])
//    .invariant(
//     balance(TKR) == supply && 
//     balance(JASIRI) == 0 && 
//     balance() == (isFirstBid ? 0 : lastPrice))
//    .while(keepGoing())
//    .api(Bidder.makePurchase,
//        ((bid)=> assume(this == xOA && bid == lastPrice, "You don't own this asset.") ),
//        ((bid)=> FPay(bid,0,JASIRI)),
//        ((bid,fn)=>{
//            require(this == xOA && bid == lastPrice, "You don't own this asset.")
//            if ( ! isFirstBid ) {
//             transfer(lastPrice).to(highestBidder);
//          }
//           MarketView.showBid("SB",this,bid)
//            fn(TKR)
//            return [this, bid, false]
//        }))
//    .api(Bidder.makeBid,
//        ((bid)=> assume(bid > lastPrice, "Bid must be greater than asset value.") ),
//        ((bid)=> FPay(bid,0,JASIRI)),
//        ((bid,fn)=>{
//            require(bid > lastPrice, "Bid must be greater than asset value.")
//            if ( ! isFirstBid ) {
//               transfer(lastPrice).to(highestBidder);
//            }
//            fn(TKR)
//            MarketView.showBid("SB",this,bid)
//            return [this, bid, false]
//        }))
//      .timeout(timeRemaining(), () => {
//          Protocol.publish();
//          return [highestBidder,lastPrice,isFirstBid];
//        });
//   MarketView.auctionEnd("AE",highestBidder,lastPrice)
//   if ( ! isFirstBid ) { 
//     transfer(lastPrice).to(Protocol)
//   }
//   transfer(balance(),JASIRI).to(Protocol)
//   transfer(supply, TKR).to(highestBidder)
//   preserveToken(
//     Bidder,
//     highestBidder,
//     TKR,
//     Protocol
//   );
//   commit()
//   exit();
// })