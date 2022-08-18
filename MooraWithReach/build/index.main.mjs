// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v304 = stdlib.protect(ctc1, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v304],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v304, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v308], secs: v310, time: v309, didSend: v29, from: v307 } = txn1;
      
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v314 = stdlib.add(v309, stdlib.checkedBigNumberify('./index.rsh:36:42:decimal', stdlib.UInt_max, '10'));
      const v321 = stdlib.add(v309, v314);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v308], secs: v310, time: v309, didSend: v29, from: v307 } = txn1;
  ;
  const v314 = stdlib.add(v309, stdlib.checkedBigNumberify('./index.rsh:36:42:decimal', stdlib.UInt_max, '10'));
  const v321 = stdlib.add(v309, v314);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v321],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v307, v308, v314, v321],
      evt_cnt: 0,
      funcNum: 2,
      lct: v309,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v511, time: v510, didSend: v263, from: v509 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v307,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v511, time: v510, didSend: v263, from: v509 } = txn3;
    ;
    ;
    stdlib.protect(ctc0, await interact.informTimeout(), {
      at: './index.rsh:27:29:application',
      fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:45:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v328, time: v327, didSend: v41, from: v326 } = txn2;
    const v330 = stdlib.add(v308, v308);
    ;
    stdlib.protect(ctc0, await interact.gameReady(), {
      at: './index.rsh:47:39:application',
      fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:18:function exp)'],
      msg: 'gameReady',
      who: 'Alice'
      });
    
    await stdlib.mapSet(map0, v307, stdlib.checkedBigNumberify('./index.rsh:49:13:decimal', stdlib.UInt_max, '0'));
    await stdlib.mapSet(map0, v326, stdlib.checkedBigNumberify('./index.rsh:51:13:decimal', stdlib.UInt_max, '0'));
    let v333 = stdlib.checkedBigNumberify('./index.rsh:53:15:decimal', stdlib.UInt_max, '0');
    let v334 = v327;
    let v341 = v330;
    
    while (await (async () => {
      const v345 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:56:17:decimal', stdlib.UInt_max, '3'));
      
      return v345;})()) {
      let v346 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      let v347 = v334;
      let v354 = v341;
      
      while (await (async () => {
        const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v362;})()) {
        const v369 = stdlib.add(v347, v314);
        const v373 = stdlib.protect(ctc1, await interact.getHand(), {
          at: './index.rsh:79:49:application',
          fs: ['at ./index.rsh:78:12:application call to [unknown function] (defined at: ./index.rsh:78:16:function exp)'],
          msg: 'getHand',
          who: 'Alice'
          });
        const v374 = stdlib.protect(ctc1, await interact.shout(v373), {
          at: './index.rsh:80:47:application',
          fs: ['at ./index.rsh:78:12:application call to [unknown function] (defined at: ./index.rsh:78:16:function exp)'],
          msg: 'shout',
          who: 'Alice'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v307, v308, v314, v326, v333, v354, v369, v373, v374],
          evt_cnt: 2,
          funcNum: 6,
          lct: v347,
          onlyIf: true,
          out_tys: [ctc1, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:82:8:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            
            const {data: [v376, v377], secs: v379, time: v378, didSend: v78, from: v375 } = txn3;
            
            ;
            const v387 = stdlib.add(v378, v314);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v369],
          tys: [ctc3, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v307, v308, v314, v326, v333, v354, v369],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              
              const {data: [], secs: v446, time: v445, didSend: v176, from: v444 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v326,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v446, time: v445, didSend: v176, from: v444 } = txn4;
          ;
          const v447 = stdlib.addressEq(v307, v444);
          const v448 = stdlib.addressEq(v326, v444);
          const v449 = v447 ? true : v448;
          stdlib.assert(v449, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:84:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc0, await interact.informTimeout(), {
            at: './index.rsh:27:29:application',
            fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:84:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v376, v377], secs: v379, time: v378, didSend: v78, from: v375 } = txn3;
          ;
          const v380 = stdlib.addressEq(v307, v375);
          stdlib.assert(v380, {
            at: './index.rsh:82:8:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v387 = stdlib.add(v378, v314);
          const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc1, ctc1],
            timeoutAt: ['time', v387],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv({
              args: [v307, v308, v314, v326, v333, v354, v376, v377, v387],
              evt_cnt: 0,
              funcNum: 9,
              lct: v378,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                stdlib.simMapDupe(sim_r, 0, map0);
                stdlib.simMapDupe(sim_r, 1, map1);
                
                const {data: [], secs: v428, time: v427, didSend: v142, from: v426 } = txn5;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v307,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc1, ctc1, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v428, time: v427, didSend: v142, from: v426 } = txn5;
            ;
            const v429 = stdlib.addressEq(v307, v426);
            const v430 = stdlib.addressEq(v326, v426);
            const v431 = v429 ? true : v430;
            stdlib.assert(v431, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:94:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc0, await interact.informTimeout(), {
              at: './index.rsh:27:29:application',
              fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:94:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v394, v395], secs: v397, time: v396, didSend: v90, from: v393 } = txn4;
            ;
            const v398 = stdlib.addressEq(v326, v393);
            stdlib.assert(v398, {
              at: './index.rsh:92:8:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v399 = stdlib.add(v376, v394);
            const v400 = stdlib.eq(v399, v377);
            const v401 = stdlib.eq(v399, v395);
            const v402 = v401 ? stdlib.checkedBigNumberify('./index.rsh:62:59:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:62:63:decimal', stdlib.UInt_max, '1');
            const v403 = v400 ? stdlib.checkedBigNumberify('./index.rsh:62:40:decimal', stdlib.UInt_max, '0') : v402;
            const v404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v307), null);
            const v405 = stdlib.fromSome(v404, stdlib.checkedBigNumberify('./index.rsh:63:37:decimal', stdlib.UInt_max, '0'));
            const v406 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v326), null);
            const v407 = stdlib.fromSome(v406, stdlib.checkedBigNumberify('./index.rsh:64:37:decimal', stdlib.UInt_max, '0'));
            const v408 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
            if (v408) {
              const v409 = stdlib.add(v405, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
              await stdlib.mapSet(map0, v307, v409);
              const v411 = 'A';
              stdlib.protect(ctc0, await interact.roundWinner(v333, v411), {
                at: './index.rsh:67:49:application',
                fs: ['at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:26:function exp)', 'at ./index.rsh:97:31:application call to "checkResult" (defined at: ./index.rsh:60:41:function exp)'],
                msg: 'roundWinner',
                who: 'Alice'
                });
              
              const v414 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, '2'));
              if (v414) {
                const v415 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                await stdlib.mapSet(map1, v326, v415);
                const v417 = 'B';
                stdlib.protect(ctc0, await interact.roundWinner(v333, v417), {
                  at: './index.rsh:71:49:application',
                  fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:26:function exp)', 'at ./index.rsh:97:31:application call to "checkResult" (defined at: ./index.rsh:60:41:function exp)'],
                  msg: 'roundWinner',
                  who: 'Alice'
                  });
                
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}
              else {
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}}
            else {
              const v420 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, '2'));
              if (v420) {
                const v421 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                await stdlib.mapSet(map1, v326, v421);
                const v423 = 'B';
                stdlib.protect(ctc0, await interact.roundWinner(v333, v423), {
                  at: './index.rsh:71:49:application',
                  fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:26:function exp)', 'at ./index.rsh:97:31:application call to "checkResult" (defined at: ./index.rsh:60:41:function exp)'],
                  msg: 'roundWinner',
                  who: 'Alice'
                  });
                
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}
              else {
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}}}
          
          }
        
        }
      const txn3 = await (ctc.sendrecv({
        args: [v307, v308, v314, v326, v333, v354],
        evt_cnt: 0,
        funcNum: 5,
        lct: v347,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:101:6:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v464, time: v463, didSend: v195, from: v462 } = txn3;
          
          ;
          const v466 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '1'));
          const cv333 = v466;
          const cv334 = v463;
          const cv341 = v354;
          
          await (async () => {
            const v333 = cv333;
            const v334 = cv334;
            const v341 = cv341;
            
            if (await (async () => {
              const v345 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:56:17:decimal', stdlib.UInt_max, '3'));
              
              return v345;})()) {
              const v346 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v347 = v334;
              const v354 = v341;
              
              if (await (async () => {
                const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v362;})()) {
                const v369 = stdlib.add(v347, v314);
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v467 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v307), null);
              const v468 = stdlib.fromSome(v467, stdlib.checkedBigNumberify('./index.rsh:108:37:decimal', stdlib.UInt_max, '0'));
              const v469 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v326), null);
              const v470 = stdlib.fromSome(v469, stdlib.checkedBigNumberify('./index.rsh:109:37:decimal', stdlib.UInt_max, '0'));
              const v471 = stdlib.eq(v468, v470);
              const v472 = stdlib.gt(v468, v470);
              if (v471) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v326,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v307,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                if (v472) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v307,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v326,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc1, ctc1, ctc3, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v464, time: v463, didSend: v195, from: v462 } = txn3;
      ;
      const v465 = stdlib.addressEq(v307, v462);
      stdlib.assert(v465, {
        at: './index.rsh:101:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v466 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '1'));
      const cv333 = v466;
      const cv334 = v463;
      const cv341 = v354;
      
      v333 = cv333;
      v334 = cv334;
      v341 = cv341;
      
      continue;
      
      }
    const v467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v307), null);
    const v468 = stdlib.fromSome(v467, stdlib.checkedBigNumberify('./index.rsh:108:37:decimal', stdlib.UInt_max, '0'));
    const v469 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v326), null);
    const v470 = stdlib.fromSome(v469, stdlib.checkedBigNumberify('./index.rsh:109:37:decimal', stdlib.UInt_max, '0'));
    const v471 = stdlib.eq(v468, v470);
    const v472 = stdlib.gt(v468, v470);
    if (v471) {
      ;
      ;
      const v482 = 'D';
      stdlib.protect(ctc0, await interact.showWinner(v482), {
        at: './index.rsh:116:42:application',
        fs: ['at ./index.rsh:116:9:application call to [unknown function] (defined at: ./index.rsh:116:20:function exp)'],
        msg: 'showWinner',
        who: 'Alice'
        });
      
      return;
      }
    else {
      if (v472) {
        ;
        const v493 = 'A';
        stdlib.protect(ctc0, await interact.showWinner(v493), {
          at: './index.rsh:120:42:application',
          fs: ['at ./index.rsh:120:9:application call to [unknown function] (defined at: ./index.rsh:120:20:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }
      else {
        ;
        const v504 = 'B';
        stdlib.protect(ctc0, await interact.showWinner(v504), {
          at: './index.rsh:124:42:application',
          fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:20:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v308], secs: v310, time: v309, didSend: v29, from: v307 } = txn1;
  ;
  const v314 = stdlib.add(v309, stdlib.checkedBigNumberify('./index.rsh:36:42:decimal', stdlib.UInt_max, '10'));
  const v321 = stdlib.add(v309, v314);
  stdlib.protect(ctc3, await interact.AcceptWager(v308), {
    at: './index.rsh:40:56:application',
    fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:12:function exp)'],
    msg: 'AcceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v307, v308, v314, v321],
    evt_cnt: 0,
    funcNum: 1,
    lct: v309,
    onlyIf: true,
    out_tys: [],
    pay: [v308, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v328, time: v327, didSend: v41, from: v326 } = txn2;
      
      const v330 = stdlib.add(v308, v308);
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      await stdlib.simMapSet(sim_r, 0, v307, stdlib.checkedBigNumberify('./index.rsh:49:13:decimal', stdlib.UInt_max, '0'));
      await stdlib.simMapSet(sim_r, 0, v326, stdlib.checkedBigNumberify('./index.rsh:51:13:decimal', stdlib.UInt_max, '0'));
      const v333 = stdlib.checkedBigNumberify('./index.rsh:53:15:decimal', stdlib.UInt_max, '0');
      const v334 = v327;
      const v341 = v330;
      
      if (await (async () => {
        const v345 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:56:17:decimal', stdlib.UInt_max, '3'));
        
        return v345;})()) {
        const v346 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v347 = v334;
        const v354 = v341;
        
        if (await (async () => {
          const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          
          return v362;})()) {
          const v369 = stdlib.add(v347, v314);
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v467 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v307), null);
        const v468 = stdlib.fromSome(v467, stdlib.checkedBigNumberify('./index.rsh:108:37:decimal', stdlib.UInt_max, '0'));
        const v469 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v326), null);
        const v470 = stdlib.fromSome(v469, stdlib.checkedBigNumberify('./index.rsh:109:37:decimal', stdlib.UInt_max, '0'));
        const v471 = stdlib.eq(v468, v470);
        const v472 = stdlib.gt(v468, v470);
        if (v471) {
          sim_r.txns.push({
            kind: 'from',
            to: v326,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v307,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          if (v472) {
            sim_r.txns.push({
              kind: 'from',
              to: v307,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v326,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v321],
    tys: [ctc4, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v307, v308, v314, v321],
      evt_cnt: 0,
      funcNum: 2,
      lct: v309,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v511, time: v510, didSend: v263, from: v509 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v307,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v511, time: v510, didSend: v263, from: v509 } = txn3;
    ;
    ;
    stdlib.protect(ctc0, await interact.informTimeout(), {
      at: './index.rsh:27:29:application',
      fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:45:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v328, time: v327, didSend: v41, from: v326 } = txn2;
    const v330 = stdlib.add(v308, v308);
    ;
    stdlib.protect(ctc0, await interact.gameReady(), {
      at: './index.rsh:47:39:application',
      fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:18:function exp)'],
      msg: 'gameReady',
      who: 'Bob'
      });
    
    await stdlib.mapSet(map0, v307, stdlib.checkedBigNumberify('./index.rsh:49:13:decimal', stdlib.UInt_max, '0'));
    await stdlib.mapSet(map0, v326, stdlib.checkedBigNumberify('./index.rsh:51:13:decimal', stdlib.UInt_max, '0'));
    let v333 = stdlib.checkedBigNumberify('./index.rsh:53:15:decimal', stdlib.UInt_max, '0');
    let v334 = v327;
    let v341 = v330;
    
    while (await (async () => {
      const v345 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:56:17:decimal', stdlib.UInt_max, '3'));
      
      return v345;})()) {
      let v346 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      let v347 = v334;
      let v354 = v341;
      
      while (await (async () => {
        const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v362;})()) {
        const v369 = stdlib.add(v347, v314);
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc1, ctc1],
          timeoutAt: ['time', v369],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v307, v308, v314, v326, v333, v354, v369],
            evt_cnt: 0,
            funcNum: 7,
            lct: v347,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              
              const {data: [], secs: v446, time: v445, didSend: v176, from: v444 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v326,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v446, time: v445, didSend: v176, from: v444 } = txn4;
          ;
          const v447 = stdlib.addressEq(v307, v444);
          const v448 = stdlib.addressEq(v326, v444);
          const v449 = v447 ? true : v448;
          stdlib.assert(v449, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:84:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc0, await interact.informTimeout(), {
            at: './index.rsh:27:29:application',
            fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:84:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v376, v377], secs: v379, time: v378, didSend: v78, from: v375 } = txn3;
          ;
          const v380 = stdlib.addressEq(v307, v375);
          stdlib.assert(v380, {
            at: './index.rsh:82:8:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v387 = stdlib.add(v378, v314);
          const v391 = stdlib.protect(ctc1, await interact.getHand(), {
            at: './index.rsh:89:49:application',
            fs: ['at ./index.rsh:88:12:application call to [unknown function] (defined at: ./index.rsh:88:15:function exp)'],
            msg: 'getHand',
            who: 'Bob'
            });
          const v392 = stdlib.protect(ctc1, await interact.shout(v391), {
            at: './index.rsh:90:47:application',
            fs: ['at ./index.rsh:88:12:application call to [unknown function] (defined at: ./index.rsh:88:15:function exp)'],
            msg: 'shout',
            who: 'Bob'
            });
          
          const txn4 = await (ctc.sendrecv({
            args: [v307, v308, v314, v326, v333, v354, v376, v377, v387, v391, v392],
            evt_cnt: 2,
            funcNum: 8,
            lct: v378,
            onlyIf: true,
            out_tys: [ctc1, ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:92:8:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              stdlib.simMapDupe(sim_r, 0, map0);
              stdlib.simMapDupe(sim_r, 1, map1);
              
              const {data: [v394, v395], secs: v397, time: v396, didSend: v90, from: v393 } = txn4;
              
              ;
              const v399 = stdlib.add(v376, v394);
              const v400 = stdlib.eq(v399, v377);
              const v401 = stdlib.eq(v399, v395);
              const v402 = v401 ? stdlib.checkedBigNumberify('./index.rsh:62:59:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:62:63:decimal', stdlib.UInt_max, '1');
              const v403 = v400 ? stdlib.checkedBigNumberify('./index.rsh:62:40:decimal', stdlib.UInt_max, '0') : v402;
              const v404 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v307), null);
              const v405 = stdlib.fromSome(v404, stdlib.checkedBigNumberify('./index.rsh:63:37:decimal', stdlib.UInt_max, '0'));
              const v406 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v326), null);
              const v407 = stdlib.fromSome(v406, stdlib.checkedBigNumberify('./index.rsh:64:37:decimal', stdlib.UInt_max, '0'));
              const v408 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
              if (v408) {
                const v409 = stdlib.add(v405, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                await stdlib.simMapSet(sim_r, 0, v307, v409);
                
                const v414 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, '2'));
                if (v414) {
                  const v415 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                  await stdlib.simMapSet(sim_r, 1, v326, v415);
                  
                  const cv346 = v403;
                  const cv347 = v396;
                  const cv354 = v354;
                  
                  await (async () => {
                    const v346 = cv346;
                    const v347 = cv347;
                    const v354 = cv354;
                    
                    if (await (async () => {
                      const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                      
                      return v362;})()) {
                      const v369 = stdlib.add(v347, v314);
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.isHalt = false;
                      }})();}
                else {
                  const cv346 = v403;
                  const cv347 = v396;
                  const cv354 = v354;
                  
                  await (async () => {
                    const v346 = cv346;
                    const v347 = cv347;
                    const v354 = cv354;
                    
                    if (await (async () => {
                      const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                      
                      return v362;})()) {
                      const v369 = stdlib.add(v347, v314);
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.isHalt = false;
                      }})();}}
              else {
                const v420 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, '2'));
                if (v420) {
                  const v421 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                  await stdlib.simMapSet(sim_r, 1, v326, v421);
                  
                  const cv346 = v403;
                  const cv347 = v396;
                  const cv354 = v354;
                  
                  await (async () => {
                    const v346 = cv346;
                    const v347 = cv347;
                    const v354 = cv354;
                    
                    if (await (async () => {
                      const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                      
                      return v362;})()) {
                      const v369 = stdlib.add(v347, v314);
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.isHalt = false;
                      }})();}
                else {
                  const cv346 = v403;
                  const cv347 = v396;
                  const cv354 = v354;
                  
                  await (async () => {
                    const v346 = cv346;
                    const v347 = cv347;
                    const v354 = cv354;
                    
                    if (await (async () => {
                      const v362 = stdlib.eq(v346, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                      
                      return v362;})()) {
                      const v369 = stdlib.add(v347, v314);
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.isHalt = false;
                      }})();}}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v387],
            tys: [ctc4, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv({
              args: [v307, v308, v314, v326, v333, v354, v376, v377, v387],
              evt_cnt: 0,
              funcNum: 9,
              lct: v378,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                stdlib.simMapDupe(sim_r, 0, map0);
                stdlib.simMapDupe(sim_r, 1, map1);
                
                const {data: [], secs: v428, time: v427, didSend: v142, from: v426 } = txn5;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v307,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc1, ctc1, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v428, time: v427, didSend: v142, from: v426 } = txn5;
            ;
            const v429 = stdlib.addressEq(v307, v426);
            const v430 = stdlib.addressEq(v326, v426);
            const v431 = v429 ? true : v430;
            stdlib.assert(v431, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:94:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc0, await interact.informTimeout(), {
              at: './index.rsh:27:29:application',
              fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:25:20:function exp)', 'at ./index.rsh:94:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v394, v395], secs: v397, time: v396, didSend: v90, from: v393 } = txn4;
            ;
            const v398 = stdlib.addressEq(v326, v393);
            stdlib.assert(v398, {
              at: './index.rsh:92:8:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v399 = stdlib.add(v376, v394);
            const v400 = stdlib.eq(v399, v377);
            const v401 = stdlib.eq(v399, v395);
            const v402 = v401 ? stdlib.checkedBigNumberify('./index.rsh:62:59:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:62:63:decimal', stdlib.UInt_max, '1');
            const v403 = v400 ? stdlib.checkedBigNumberify('./index.rsh:62:40:decimal', stdlib.UInt_max, '0') : v402;
            const v404 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v307), null);
            const v405 = stdlib.fromSome(v404, stdlib.checkedBigNumberify('./index.rsh:63:37:decimal', stdlib.UInt_max, '0'));
            const v406 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v326), null);
            const v407 = stdlib.fromSome(v406, stdlib.checkedBigNumberify('./index.rsh:64:37:decimal', stdlib.UInt_max, '0'));
            const v408 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
            if (v408) {
              const v409 = stdlib.add(v405, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
              await stdlib.mapSet(map0, v307, v409);
              const v413 = 'A';
              stdlib.protect(ctc0, await interact.roundWinner(v333, v413), {
                at: './index.rsh:67:49:application',
                fs: ['at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:26:function exp)', 'at ./index.rsh:97:31:application call to "checkResult" (defined at: ./index.rsh:60:41:function exp)'],
                msg: 'roundWinner',
                who: 'Bob'
                });
              
              const v414 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, '2'));
              if (v414) {
                const v415 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                await stdlib.mapSet(map1, v326, v415);
                const v419 = 'B';
                stdlib.protect(ctc0, await interact.roundWinner(v333, v419), {
                  at: './index.rsh:71:49:application',
                  fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:26:function exp)', 'at ./index.rsh:97:31:application call to "checkResult" (defined at: ./index.rsh:60:41:function exp)'],
                  msg: 'roundWinner',
                  who: 'Bob'
                  });
                
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}
              else {
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}}
            else {
              const v420 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:69:23:decimal', stdlib.UInt_max, '2'));
              if (v420) {
                const v421 = stdlib.add(v407, stdlib.checkedBigNumberify('./index.rsh:59:35:decimal', stdlib.UInt_max, '1'));
                await stdlib.mapSet(map1, v326, v421);
                const v425 = 'B';
                stdlib.protect(ctc0, await interact.roundWinner(v333, v425), {
                  at: './index.rsh:71:49:application',
                  fs: ['at ./index.rsh:71:15:application call to [unknown function] (defined at: ./index.rsh:71:26:function exp)', 'at ./index.rsh:97:31:application call to "checkResult" (defined at: ./index.rsh:60:41:function exp)'],
                  msg: 'roundWinner',
                  who: 'Bob'
                  });
                
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}
              else {
                const cv346 = v403;
                const cv347 = v396;
                const cv354 = v354;
                
                v346 = cv346;
                v347 = cv347;
                v354 = cv354;
                
                continue;}}}
          
          }
        
        }
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 5,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v464, time: v463, didSend: v195, from: v462 } = txn3;
      ;
      const v465 = stdlib.addressEq(v307, v462);
      stdlib.assert(v465, {
        at: './index.rsh:101:6:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v466 = stdlib.add(v333, stdlib.checkedBigNumberify('./index.rsh:102:20:decimal', stdlib.UInt_max, '1'));
      const cv333 = v466;
      const cv334 = v463;
      const cv341 = v354;
      
      v333 = cv333;
      v334 = cv334;
      v341 = cv341;
      
      continue;
      
      }
    const v467 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v307), null);
    const v468 = stdlib.fromSome(v467, stdlib.checkedBigNumberify('./index.rsh:108:37:decimal', stdlib.UInt_max, '0'));
    const v469 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v326), null);
    const v470 = stdlib.fromSome(v469, stdlib.checkedBigNumberify('./index.rsh:109:37:decimal', stdlib.UInt_max, '0'));
    const v471 = stdlib.eq(v468, v470);
    const v472 = stdlib.gt(v468, v470);
    if (v471) {
      ;
      ;
      const v484 = 'D';
      stdlib.protect(ctc0, await interact.showWinner(v484), {
        at: './index.rsh:116:42:application',
        fs: ['at ./index.rsh:116:9:application call to [unknown function] (defined at: ./index.rsh:116:20:function exp)'],
        msg: 'showWinner',
        who: 'Bob'
        });
      
      return;
      }
    else {
      if (v472) {
        ;
        const v495 = 'A';
        stdlib.protect(ctc0, await interact.showWinner(v495), {
          at: './index.rsh:120:42:application',
          fs: ['at ./index.rsh:120:9:application call to [unknown function] (defined at: ./index.rsh:120:20:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }
      else {
        ;
        const v506 = 'B';
        stdlib.protect(ctc0, await interact.showWinner(v506), {
          at: './index.rsh:124:42:application',
          fs: ['at ./index.rsh:124:9:application call to [unknown function] (defined at: ./index.rsh:124:20:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAEIAglYICgLUGAScAUwJgQBAAEBAAkBAAAAAAAAAAAiNQAxGEEFuypkSSJbNQEkWzUCMRkjEkEACjEAKCELr2ZCBYg2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEGDEACpkkkDEABq0khBAxAAFQhBBJEIQg0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASiBWaOsDIGNAMhDFsPRDT/MQASNANXMCAxABIRRLEisgE0AyEFW7III7IQNP+yB7NCBMtIIQg0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQZbNf4hB1s1/VcwIDX8IQlbNfshBVs1+kk1BUkiWzX5JFs1+IAENRoq0DT5FlA0+BZQsDIGNAMhDFsMRDT8MQASRDQDIQpbNPkINfcjJTT3NPgSTSI09zQDgWhbEk019iI0/IgEslcJCUk19CNbNPQiVU019TT2IhJBAG80/yg0/4gElCkiNP+IBI1XAAlJNfQjWzT0IlVNIwgWUDX0VwkJNPRMUGY09iUSQQArNPwoNPyIBGMpNPUjCBZQNfRXAAk09FBmNP80/jT9NPw0+zT2MgY0+kIDYjT/NP40/TT8NPs09jIGNPpCA0809iUSQQArNPwoNPyIBB4pNPUjCBZQNfRXAAk09FBmNP80/jT9NPw0+zT2MgY0+kIDHTT/NP40/TT8NPs09jIGNPpCAwpJgQcMQABRSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AE4huzqbAyBjQDIQpbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBVuyCCOyEDT/sgezQgMjSCEENAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEGWzX+IQdbNf1XMCA1/CEJWzX7IQVbNfpJNQVJIls1+SRbNfiABEohy/w0+RZQNPgWULAyBjQDIQpbDEQ0/zEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlA09xZQKEsBVwB4Z0ghCDUBMgY1AkICokklDEAAkUkhDQxAAEpIJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABMyZklywNP8xABJENP80AyEGWzQDIQdbNANXMCA0AyEJWyMIMgY0AyEFW0IBEyUSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDlsPRLEisgE0AyEGW7III7IQNANXACCyB7NCAe9JIwxAAHFIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQZbNf6ABJqLkXSwMgY0AyEOWwxENP6IAi80/yg0/4gCGCs1/VcJCTT9TFBmMQAoMQCIAgUrNf1XCQk0/UxQZjT/NP40AyEHWzEAIjIGNP5JCEIAXEiBoI0GiAHsIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAcYyBoEKCDX+MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgE4Nf81/jX9Nfw1+zX6Nfk0/YEDDEEAEjT5NPo0+zT8NP0jNP40/0IAgyI0+YgBW1cACUk19yNbNPciVU01+CI0/IgBRlcJCUk19iNbNPYiVU019zT4NPcSQQAjsSKyATT6sggjshA0/LIHs7EisgE0+rIII7IQNPmyB7NCAJ80+DT3DUEAE7EisgE0/7III7IQNPmyB7NCAISxIrIBNP+yCCOyEDT8sgezQgBxNf81/jX9Nfw1+zX6Nfk1+DT9IxJBADM0/jT6CDX3NPg0+RZQNPoWUDT7UDT8FlA0/xZQNPcWUChLAVcAaGdIIQQ1ATIGNQJCAEM0+DT5FlA0+hZQNPtQNPwWUDT/FlAoSwFXAGBnSCQ1ATIGNQJCABwxGSENEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghC6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v376",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v376",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v377",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v394",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200210138038062002101833981016040819052620000269162000248565b6000808055436003556040805180820182528281526020808201939093528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a16020820151516200009c903414600762000178565b620000a9600a43620002ea565b808252620000b89043620002ea565b816020018181525050620000f6604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208481015151818401908152845160408086019182528684015160608088019182526001600081905543905582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200016e929190620001a2565b505050506200034e565b816200019e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b09062000311565b90600052602060002090601f016020900481019282620001d457600085556200021f565b82601f10620001ef57805160ff19168380011785556200021f565b828001600101855582156200021f579182015b828111156200021f57825182559160200191906001019062000202565b506200022d92915062000231565b5090565b5b808211156200022d576000815560010162000232565b60008183036040808212156200025d57600080fd5b80518082016001600160401b0380821183831017156200028d57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620002a757600080fd5b835194506020850191508482108183111715620002d457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600082198211156200030c57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200032657607f821691505b602082108114156200034857634e487b7160e01b600052602260045260246000fd5b50919050565b611da3806200035e6000396000f3fe6080604052600436106100a55760003560e01c80638328d4c4116100615780638328d4c41461014d5780638e31476914610160578063ab53f2c614610173578063bf2c5b2414610196578063cadc2e7a146101a9578063de736998146101c957005b80631e93b0f1146100ae57806321642639146100d25780632c10a159146100e55780633bc5b7bf146100f85780637eea518c14610125578063832307571461013857005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e03660046118fd565b6101dc565b6100ac6100f3366004611920565b610494565b34801561010457600080fd5b50610118610113366004611947565b610679565b6040516100c9919061197a565b6100ac610133366004611920565b6106a5565b34801561014457600080fd5b506001546100bf565b6100ac61015b3660046118fd565b610823565b6100ac61016e366004611920565b610bce565b34801561017f57600080fd5b50610188610d6e565b6040516100c99291906119bf565b6100ac6101a4366004611920565b610e0b565b3480156101b557600080fd5b506101186101c4366004611947565b610fa6565b6100ac6101d7366004611920565b610fcc565b6101ec6009600054146016611164565b610206813515806101ff57506001548235145b6017611164565b60008080556002805461021890611a1c565b80601f016020809104026020016040519081016040528092919081815260200182805461024490611a1c565b80156102915780601f1061026657610100808354040283529160200191610291565b820191906000526020600020905b81548152906001019060200180831161027457829003601f168201915b50505050508060200190518101906102a99190611a94565b90506102c16040518060200160405280600081525090565b6102d28260c0015143106018611164565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f3384604051610303929190611b3a565b60405180910390a161031734156014611164565b815161032f906001600160a01b031633146015611164565b604082015161033e9043611b6b565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c08401528582013560e08401528351610100840152600b6000554360015590516104699183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6040516020818303038152906040526002908051906020019061048d92919061177e565b5050505050565b6104a46001600054146009611164565b6104be813515806104b757506001548235145b600a611164565b6000808055600280546104d090611a1c565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90611a1c565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b50505050508060200190518101906105619190611b91565b905061057481606001514310600b611164565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516105a5929190611c0e565b60405180910390a16105be816020015134146008611164565b80516001600160a01b039081166000908152600460205260408082208054600160ff1991821681179092558551909416835281832081018390553383529082208054909316811783559190910155610614611802565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600090525143920191909152516106629080611b6b565b60208201516040015261067481611189565b505050565b604080516060810182526000808252602082018190529181019190915261069f826113d5565b92915050565b6106b5600160005414600d611164565b6106cf813515806106c857506001548235145b600e611164565b6000808055600280546106e190611a1c565b80601f016020809104026020016040519081016040528092919081815260200182805461070d90611a1c565b801561075a5780601f1061072f5761010080835404028352916020019161075a565b820191906000526020600020905b81548152906001019060200180831161073d57829003601f168201915b50505050508060200190518101906107729190611b91565b90506107868160600151431015600f611164565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516107b7929190611c0e565b60405180910390a16107cb3415600c611164565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610808573d6000803e3d6000fd5b506000808055600181905561081f9060029061185c565b5050565b610833600b600054146020611164565b61084d8135158061084657506001548235145b6021611164565b60008080556002805461085f90611a1c565b80601f016020809104026020016040519081016040528092919081815260200182805461088b90611a1c565b80156108d85780601f106108ad576101008083540402835291602001916108d8565b820191906000526020600020905b8154815290600101906020018083116108bb57829003601f168201915b50505050508060200190518101906108f09190611c4b565b905061091660405180606001604052806000815260200160008152602001600081525090565b61092882610100015143106022611164565b7f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e3384604051610959929190611b3a565b60405180910390a161096d3415601e611164565b6060820151610988906001600160a01b03163314601f611164565b60c082015161099c90602085013590611b6b565b80825260e0830151146109c35780516040840135146109bc5760016109c6565b60026109c6565b60005b602082015260016109da83606001516114a8565b5160018111156109ec576109ec611964565b146109f8576000610a0a565b610a0582606001516114a8565b604001515b60408201526020810151610b945781516001600160a01b03166000908152600460205260409020805460ff1916600190811790915582518190610a4c906113d5565b516001811115610a5e57610a5e611964565b14610a6a576000610a7a565b8251610a75906113d5565b604001515b610a849190611b6b565b82516001600160a01b031660009081526004602090815260409091206001019190915581015160021415610b8c5760608201516001600160a01b0316600090815260056020526040902080546001919060ff191682805b021790555060018160400151610af19190611b6b565b60608301516001600160a01b0316600090815260056020526040902060010155610b19611899565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092526080808601518451909101528381015181840180519190915280514392019190915260a0850151905190910152610b8681611535565b50505050565b610b19611899565b600281602001511415610b8c5760608201516001600160a01b0316600090815260056020526040902080546001919060ff19168280610adb565b610bde6008600054146012611164565b610bf881351580610bf157506001548235145b6013611164565b600080805560028054610c0a90611a1c565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3690611a1c565b8015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b5050505050806020019051810190610c9b9190611cd4565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610cce929190611c0e565b60405180910390a1610ce234156010611164565b8051610cfa906001600160a01b031633146011611164565b610d02611802565b815181516001600160a01b039182169052602080840151835190910152604080840151835190910152606080840151835192169101526080820151610d4990600190611b6b565b602080830180519290925281514391015260a083015190516040015261067481611189565b600060606000546002808054610d8390611a1c565b80601f0160208091040260200160405190810160405280929190818152602001828054610daf90611a1c565b8015610dfc5780601f10610dd157610100808354040283529160200191610dfc565b820191906000526020600020905b815481529060010190602001808311610ddf57829003601f168201915b50505050509050915091509091565b610e1b600960005414601b611164565b610e3581351580610e2e57506001548235145b601c611164565b600080805560028054610e4790611a1c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7390611a1c565b8015610ec05780601f10610e9557610100808354040283529160200191610ec0565b820191906000526020600020905b815481529060010190602001808311610ea357829003601f168201915b5050505050806020019051810190610ed89190611a94565b9050610eec8160c00151431015601d611164565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f1d929190611c0e565b60405180910390a1610f3134156019611164565b8051610f65906001600160a01b03163314610f5b5760608201516001600160a01b03163314610f5e565b60015b601a611164565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610808573d6000803e3d6000fd5b604080516060810182526000808252602082018190529181019190915261069f826114a8565b610fdc600b600054146025611164565b610ff681351580610fef57506001548235145b6026611164565b60008080556002805461100890611a1c565b80601f016020809104026020016040519081016040528092919081815260200182805461103490611a1c565b80156110815780601f1061105657610100808354040283529160200191611081565b820191906000526020600020905b81548152906001019060200180831161106457829003601f168201915b50505050508060200190518101906110999190611c4b565b90506110ae8161010001514310156027611164565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110df929190611c0e565b60405180910390a16110f334156023611164565b8051611127906001600160a01b0316331461111d5760608201516001600160a01b03163314611120565b60015b6024611164565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610808573d6000803e3d6000fd5b8161081f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080518082019091526000808252602082015260208201515160031115611227576111b3611899565b82515181516001600160a01b039182169052835160209081015183518201528451604090810151845182015285516060908101518551941693019290925280850180515184516080015281840180516001905281518301518151909301929092525182015190519091015261067481611535565b6001825151611235906113d5565b51600181111561124757611247611964565b14611253576000611264565b81515161125f906113d5565b604001515b81526001825160600151611277906114a8565b51600181111561128957611289611964565b146112955760006112a9565b8151606001516112a4906114a8565b604001515b602082018190528151141561133c57815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156112fb573d6000803e3d6000fd5b50815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610808573d6000803e3d6000fd5b60208101518151111561138c57815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610808573d6000803e3d6000fd5b8160000151606001516001600160a01b03166108fc8360200151604001519081150290604051600060405180830381858888f19350505050158015610808573d6000803e3d6000fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561142157611421611964565b1415611498576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561146257611462611964565b600181111561147357611473611964565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156114f4576114f4611964565b1415611498576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561146257611462611964565b6040805160208101909152600081526020820151516001141561167757815160400151602080840151015161156a9190611b6b565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b0390811680835284516020908101518185019081528651604090810151818701908152885160609081015187168189019081528a51608090810151818b01908152878d015186015160a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610b8692919061177e565b6116c26040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b0390811680835284516020908101518185019081528651604090810151818701908152885160609081015187168189019081528a51608090810151818b01908152878d015186015160a0808d019182526008600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610b869291905b82805461178a90611a1c565b90600052602060002090601f0160209004810192826117ac57600085556117f2565b82601f106117c557805160ff19168380011785556117f2565b828001600101855582156117f2579182015b828111156117f25782518255916020019190600101906117d7565b506117fe9291506118d0565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b815260200161185760405180606001604052806000815260200160008152602001600081525090565b905290565b50805461186890611a1c565b6000825580601f10611878575050565b601f01602090049060005260206000209081019061189691906118d0565b50565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819061182e565b5b808211156117fe57600081556001016118d1565b6000606082840312156118f757600080fd5b50919050565b60006060828403121561190f57600080fd5b61191983836118e5565b9392505050565b6000604082840312156118f757600080fd5b6001600160a01b038116811461189657600080fd5b60006020828403121561195957600080fd5b813561191981611932565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061199f57634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b82815260006020604081840152835180604085015260005b818110156119f3578581018301518582016060015282016119d7565b81811115611a05576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611a3057607f821691505b602082108114156118f757634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff81118282101715611a8357634e487b7160e01b600052604160045260246000fd5b60405290565b80516114a381611932565b600060e08284031215611aa657600080fd5b60405160e0810181811067ffffffffffffffff82111715611ad757634e487b7160e01b600052604160045260246000fd5b6040528251611ae581611932565b8082525060208301516020820152604083015160408201526060830151611b0b81611932565b806060830152506080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526080810161191960208301848035825260208082013590830152604090810135910152565b60008219821115611b8c57634e487b7160e01b600052601160045260246000fd5b500190565b600060808284031215611ba357600080fd5b6040516080810181811067ffffffffffffffff82111715611bd457634e487b7160e01b600052604160045260246000fd5b6040528251611be281611932565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611c3c57600080fd5b80604085015250509392505050565b60006101208284031215611c5e57600080fd5b611c66611a51565b611c6f83611a89565b81526020830151602082015260408301516040820152611c9160608401611a89565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c08284031215611ce657600080fd5b60405160c0810181811067ffffffffffffffff82111715611d1757634e487b7160e01b600052604160045260246000fd5b6040528251611d2581611932565b8082525060208301516020820152604083015160408201526060830151611d4b81611932565b60608201526080838101519082015260a092830151928101929092525091905056fea2646970667358221220e94cf10e27175fada772ecb31865e3b39e34cda3ef4a0c82d0508f122fc7921364736f6c634300080c0033`,
  BytecodeLen: 8449,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:45:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:126:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:126:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:126:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:100:4:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:77:6:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:86:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:94:13:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
