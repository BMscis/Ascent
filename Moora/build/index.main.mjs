// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      14: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v251 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v251],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v251, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v256], secs: v258, time: v257, didSend: v30, from: v255 } = txn1;
      
      sim_r.txns.push({
        amt: v256,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v262 = stdlib.add(v257, stdlib.checkedBigNumberify('./index.rsh:37:42:decimal', stdlib.UInt_max, '10'));
      const v269 = stdlib.add(v257, v262);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v256], secs: v258, time: v257, didSend: v30, from: v255 } = txn1;
  ;
  const v262 = stdlib.add(v257, stdlib.checkedBigNumberify('./index.rsh:37:42:decimal', stdlib.UInt_max, '10'));
  const v269 = stdlib.add(v257, v262);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v269],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v255, v256, v262, v269],
      evt_cnt: 0,
      funcNum: 2,
      lct: v257,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v475, time: v474, didSend: v219, from: v473 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v255,
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
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v475, time: v474, didSend: v219, from: v473 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:28:29:application',
      fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:26:20:function exp)', 'at ./index.rsh:46:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v275, time: v274, didSend: v41, from: v273 } = txn2;
    const v277 = stdlib.add(v256, v256);
    ;
    let v278 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v279 = v274;
    let v286 = v277;
    
    while (await (async () => {
      const v294 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v294;})()) {
      const v301 = stdlib.add(v279, v262);
      const v305 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:54:48:application',
        fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v306 = stdlib.protect(ctc0, await interact.shout(v305), {
        at: './index.rsh:55:46:application',
        fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:15:function exp)'],
        msg: 'shout',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v255, v256, v262, v273, v286, v301, v305, v306],
        evt_cnt: 2,
        funcNum: 4,
        lct: v279,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:57:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v308, v309], secs: v311, time: v310, didSend: v65, from: v307 } = txn3;
          
          ;
          const v319 = stdlib.add(v310, v262);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v301],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v255, v256, v262, v273, v286, v301],
          evt_cnt: 0,
          funcNum: 5,
          lct: v279,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v356, time: v355, didSend: v137, from: v354 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v273,
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
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v356, time: v355, didSend: v137, from: v354 } = txn4;
        ;
        const v357 = stdlib.addressEq(v255, v354);
        const v358 = stdlib.addressEq(v273, v354);
        const v359 = v357 ? true : v358;
        stdlib.assert(v359, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:28:29:application',
          fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:26:20:function exp)', 'at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v308, v309], secs: v311, time: v310, didSend: v65, from: v307 } = txn3;
        ;
        const v312 = stdlib.addressEq(v255, v307);
        stdlib.assert(v312, {
          at: './index.rsh:57:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v319 = stdlib.add(v310, v262);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v319],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v255, v256, v262, v273, v286, v308, v309, v319],
            evt_cnt: 0,
            funcNum: 7,
            lct: v310,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v338, time: v337, didSend: v103, from: v336 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v255,
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
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v338, time: v337, didSend: v103, from: v336 } = txn5;
          ;
          const v339 = stdlib.addressEq(v255, v336);
          const v340 = stdlib.addressEq(v273, v336);
          const v341 = v339 ? true : v340;
          stdlib.assert(v341, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:28:29:application',
            fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:26:20:function exp)', 'at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v326, v327], secs: v329, time: v328, didSend: v77, from: v325 } = txn4;
          ;
          const v330 = stdlib.addressEq(v273, v325);
          stdlib.assert(v330, {
            at: './index.rsh:67:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v331 = stdlib.add(v308, v326);
          const v332 = stdlib.eq(v331, v309);
          const v333 = stdlib.eq(v331, v327);
          const v334 = v333 ? stdlib.checkedBigNumberify('./index.rsh:6:53:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:6:57:decimal', stdlib.UInt_max, '1');
          const v335 = v332 ? stdlib.checkedBigNumberify('./index.rsh:6:34:decimal', stdlib.UInt_max, '0') : v334;
          const cv278 = v335;
          const cv279 = v328;
          const cv286 = v286;
          
          v278 = cv278;
          v279 = cv279;
          v286 = cv286;
          
          continue;}
        
        }
      
      }
    const v375 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:76:21:decimal', stdlib.UInt_max, '0'));
    if (v375) {
      const v380 = stdlib.sub(v286, v286);
      ;
      const v382 = 'A';
      stdlib.protect(ctc1, await interact.showWinner(v382), {
        at: './index.rsh:78:42:application',
        fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:20:function exp)'],
        msg: 'showWinner',
        who: 'Alice'
        });
      
      const v385 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
      if (v385) {
        ;
        const v392 = 'B';
        stdlib.protect(ctc1, await interact.showWinner(v392), {
          at: './index.rsh:82:42:application',
          fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        const v395 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v395) {
          ;
          ;
          const v405 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v405), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Alice'
            });
          
          return;
          }
        else {
          return;
          }}
      else {
        const v412 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v412) {
          ;
          ;
          const v422 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v422), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Alice'
            });
          
          return;
          }
        else {
          return;
          }}}
    else {
      const v429 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
      if (v429) {
        ;
        const v436 = 'B';
        stdlib.protect(ctc1, await interact.showWinner(v436), {
          at: './index.rsh:82:42:application',
          fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
          msg: 'showWinner',
          who: 'Alice'
          });
        
        const v439 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v439) {
          ;
          ;
          const v449 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v449), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Alice'
            });
          
          return;
          }
        else {
          return;
          }}
      else {
        const v456 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v456) {
          ;
          ;
          const v466 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v466), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Alice'
            });
          
          return;
          }
        else {
          return;
          }}}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v256], secs: v258, time: v257, didSend: v30, from: v255 } = txn1;
  ;
  const v262 = stdlib.add(v257, stdlib.checkedBigNumberify('./index.rsh:37:42:decimal', stdlib.UInt_max, '10'));
  const v269 = stdlib.add(v257, v262);
  const txn2 = await (ctc.sendrecv({
    args: [v255, v256, v262, v269],
    evt_cnt: 0,
    funcNum: 1,
    lct: v257,
    onlyIf: true,
    out_tys: [],
    pay: [v256, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v275, time: v274, didSend: v41, from: v273 } = txn2;
      
      const v277 = stdlib.add(v256, v256);
      sim_r.txns.push({
        amt: v256,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v278 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v279 = v274;
      const v286 = v277;
      
      if (await (async () => {
        const v294 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v294;})()) {
        const v301 = stdlib.add(v279, v262);
        sim_r.isHalt = false;
        }
      else {
        const v375 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:76:21:decimal', stdlib.UInt_max, '0'));
        if (v375) {
          const v380 = stdlib.sub(v286, v286);
          sim_r.txns.push({
            kind: 'from',
            to: v255,
            tok: undefined /* Nothing */
            });
          
          const v385 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
          if (v385) {
            sim_r.txns.push({
              kind: 'from',
              to: v273,
              tok: undefined /* Nothing */
              });
            
            const v395 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
            if (v395) {
              sim_r.txns.push({
                kind: 'from',
                to: v273,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v255,
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
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v412 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
            if (v412) {
              sim_r.txns.push({
                kind: 'from',
                to: v273,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v255,
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
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v429 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
          if (v429) {
            sim_r.txns.push({
              kind: 'from',
              to: v273,
              tok: undefined /* Nothing */
              });
            
            const v439 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
            if (v439) {
              sim_r.txns.push({
                kind: 'from',
                to: v273,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v255,
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
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v456 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
            if (v456) {
              sim_r.txns.push({
                kind: 'from',
                to: v273,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v255,
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
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v269],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v255, v256, v262, v269],
      evt_cnt: 0,
      funcNum: 2,
      lct: v257,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v475, time: v474, didSend: v219, from: v473 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v255,
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
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v475, time: v474, didSend: v219, from: v473 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:28:29:application',
      fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:26:20:function exp)', 'at ./index.rsh:46:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v275, time: v274, didSend: v41, from: v273 } = txn2;
    const v277 = stdlib.add(v256, v256);
    ;
    let v278 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v279 = v274;
    let v286 = v277;
    
    while (await (async () => {
      const v294 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v294;})()) {
      const v301 = stdlib.add(v279, v262);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v301],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v255, v256, v262, v273, v286, v301],
          evt_cnt: 0,
          funcNum: 5,
          lct: v279,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v356, time: v355, didSend: v137, from: v354 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v273,
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
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v356, time: v355, didSend: v137, from: v354 } = txn4;
        ;
        const v357 = stdlib.addressEq(v255, v354);
        const v358 = stdlib.addressEq(v273, v354);
        const v359 = v357 ? true : v358;
        stdlib.assert(v359, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:28:29:application',
          fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:26:20:function exp)', 'at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v308, v309], secs: v311, time: v310, didSend: v65, from: v307 } = txn3;
        ;
        const v312 = stdlib.addressEq(v255, v307);
        stdlib.assert(v312, {
          at: './index.rsh:57:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v319 = stdlib.add(v310, v262);
        const v323 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:64:48:application',
          fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:14:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v324 = stdlib.protect(ctc0, await interact.shout(v323), {
          at: './index.rsh:65:46:application',
          fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:14:function exp)'],
          msg: 'shout',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v255, v256, v262, v273, v286, v308, v309, v319, v323, v324],
          evt_cnt: 2,
          funcNum: 6,
          lct: v310,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:67:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v326, v327], secs: v329, time: v328, didSend: v77, from: v325 } = txn4;
            
            ;
            const v331 = stdlib.add(v308, v326);
            const v332 = stdlib.eq(v331, v309);
            const v333 = stdlib.eq(v331, v327);
            const v334 = v333 ? stdlib.checkedBigNumberify('./index.rsh:6:53:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:6:57:decimal', stdlib.UInt_max, '1');
            const v335 = v332 ? stdlib.checkedBigNumberify('./index.rsh:6:34:decimal', stdlib.UInt_max, '0') : v334;
            const cv278 = v335;
            const cv279 = v328;
            const cv286 = v286;
            
            await (async () => {
              const v278 = cv278;
              const v279 = cv279;
              const v286 = cv286;
              
              if (await (async () => {
                const v294 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v294;})()) {
                const v301 = stdlib.add(v279, v262);
                sim_r.isHalt = false;
                }
              else {
                const v375 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:76:21:decimal', stdlib.UInt_max, '0'));
                if (v375) {
                  const v380 = stdlib.sub(v286, v286);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v255,
                    tok: undefined /* Nothing */
                    });
                  
                  const v385 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
                  if (v385) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v273,
                      tok: undefined /* Nothing */
                      });
                    
                    const v395 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
                    if (v395) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v273,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v255,
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
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v412 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
                    if (v412) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v273,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v255,
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
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}
                else {
                  const v429 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
                  if (v429) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v273,
                      tok: undefined /* Nothing */
                      });
                    
                    const v439 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
                    if (v439) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v273,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v255,
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
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v456 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
                    if (v456) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v273,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v255,
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
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v319],
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v255, v256, v262, v273, v286, v308, v309, v319],
            evt_cnt: 0,
            funcNum: 7,
            lct: v310,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v338, time: v337, didSend: v103, from: v336 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v255,
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
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v338, time: v337, didSend: v103, from: v336 } = txn5;
          ;
          const v339 = stdlib.addressEq(v255, v336);
          const v340 = stdlib.addressEq(v273, v336);
          const v341 = v339 ? true : v340;
          stdlib.assert(v341, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:28:29:application',
            fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:26:20:function exp)', 'at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v326, v327], secs: v329, time: v328, didSend: v77, from: v325 } = txn4;
          ;
          const v330 = stdlib.addressEq(v273, v325);
          stdlib.assert(v330, {
            at: './index.rsh:67:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v331 = stdlib.add(v308, v326);
          const v332 = stdlib.eq(v331, v309);
          const v333 = stdlib.eq(v331, v327);
          const v334 = v333 ? stdlib.checkedBigNumberify('./index.rsh:6:53:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:6:57:decimal', stdlib.UInt_max, '1');
          const v335 = v332 ? stdlib.checkedBigNumberify('./index.rsh:6:34:decimal', stdlib.UInt_max, '0') : v334;
          const cv278 = v335;
          const cv279 = v328;
          const cv286 = v286;
          
          v278 = cv278;
          v279 = cv279;
          v286 = cv286;
          
          continue;}
        
        }
      
      }
    const v375 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:76:21:decimal', stdlib.UInt_max, '0'));
    if (v375) {
      const v380 = stdlib.sub(v286, v286);
      ;
      const v384 = 'A';
      stdlib.protect(ctc1, await interact.showWinner(v384), {
        at: './index.rsh:78:42:application',
        fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:20:function exp)'],
        msg: 'showWinner',
        who: 'Bob'
        });
      
      const v385 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
      if (v385) {
        ;
        const v394 = 'B';
        stdlib.protect(ctc1, await interact.showWinner(v394), {
          at: './index.rsh:82:42:application',
          fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        const v395 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v395) {
          ;
          ;
          const v407 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v407), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Bob'
            });
          
          return;
          }
        else {
          return;
          }}
      else {
        const v412 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v412) {
          ;
          ;
          const v424 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v424), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Bob'
            });
          
          return;
          }
        else {
          return;
          }}}
    else {
      const v429 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:80:21:decimal', stdlib.UInt_max, '2'));
      if (v429) {
        ;
        const v438 = 'B';
        stdlib.protect(ctc1, await interact.showWinner(v438), {
          at: './index.rsh:82:42:application',
          fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:20:function exp)'],
          msg: 'showWinner',
          who: 'Bob'
          });
        
        const v439 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v439) {
          ;
          ;
          const v451 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v451), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Bob'
            });
          
          return;
          }
        else {
          return;
          }}
      else {
        const v456 = stdlib.eq(v278, stdlib.checkedBigNumberify('./index.rsh:84:21:decimal', stdlib.UInt_max, '1'));
        if (v456) {
          ;
          ;
          const v468 = 'D';
          stdlib.protect(ctc1, await interact.showWinner(v468), {
            at: './index.rsh:87:42:application',
            fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
            msg: 'showWinner',
            who: 'Bob'
            });
          
          return;
          }
        else {
          return;
          }}}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAECUCAIDlgoDAdoBTAmAgEAACI1ADEYQQPPKWRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAclJgQYMQADXSSEKDEAAUyEKEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABOIbs6mwMgY0AyELWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgLvSCEGNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/0k1BUkiWzX+IQVbNf2ABEohy/w0/hZQNP0WULAyBjQDIQtbDEQ0/zEAEkQ0AyEHWzT+CDX8NANXACA0AyEEWzQDIQhbNP8jJDT8NP0STSI0/DQDgWBbEk0yBjQDJVtCAdtJIQwMQABQSCEJNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQdbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAhtIIQk0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hCFs1/VcwIDX8JVs1+0k1BUkiWzX6IQVbNfmABBBGrXM0+hZQNPkWULAyBjQDIQdbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlAoSwFXAHBnSCEGNQEyBjUCQgGjSSMMQACOSSQMQABAJBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IBO0gjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBeDQDVwAgNP80AyEIWzEAIzIGNP9JCEIAXEiBoI0GiAFYIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IATIyBoEKCDX+MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCzNf81/jX9Nfw1+zX6Nfk0/SMSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQk1ATIGNQJCAG80/SISQQAvsSKyATT/sggjshA0+bIHszT9JBJBABWxIrIBNP9JCbIII7IQNPyyB7NCACBCAB00/SQSQQATsSKyATT/sggjshA0/LIHs0IAA0IAADEZIQwSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
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
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
        "internalType": "struct T7",
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
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
        "internalType": "struct T7",
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
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
        "internalType": "struct T7",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200176538038062001765833981016040819052620000269162000248565b6000808055436003556040805180820182528281526020808201939093528151338152845181850152928401515183830152905190917f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d919081900360600190a16020820151516200009c903414600762000178565b620000a9600a43620002ea565b808252620000b89043620002ea565b816020018181525050620000f6604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208481015151818401908152845160408086019182528684015160608088019182526001600081905543905582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200016e929190620001a2565b505050506200034e565b816200019e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b09062000311565b90600052602060002090601f016020900481019282620001d457600085556200021f565b82601f10620001ef57805160ff19168380011785556200021f565b828001600101855582156200021f579182015b828111156200021f57825182559160200191906001019062000202565b506200022d92915062000231565b5090565b5b808211156200022d576000815560010162000232565b60008183036040808212156200025d57600080fd5b80518082016001600160401b0380821183831017156200028d57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620002a757600080fd5b835194506020850191508482108183111715620002d457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600082198211156200030c57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200032657607f821691505b602082108114156200034857634e487b7160e01b600052602260045260246000fd5b50919050565b611407806200035e6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea5780638e314769146100ff578063ab53f2c614610112578063bf2c5b2414610135578063ebdbfdcc1461014857005b80631e93b0f11461008d57806321642639146100b15780632c10a159146100c45780637eea518c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611082565b61015b565b61008b6100d23660046110a5565b610359565b61008b6100e53660046110a5565b6104f0565b3480156100f657600080fd5b5060015461009e565b61008b61010d3660046110a5565b61066e565b34801561011e57600080fd5b50610127610809565b6040516100a89291906110b7565b61008b6101433660046110a5565b6108a6565b61008b610156366004611082565b610a3d565b61016b600e60005414601c610cda565b6101858135158061017e57506001548235145b601d610cda565b60008080556002805461019790611114565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390611114565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190611165565b90506102406040518060200160405280600081525090565b6102518260e001514310601e610cda565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f3384604051610282929190611211565b60405180910390a16102963415601a610cda565b60608201516102b1906001600160a01b03163314601b610cda565b60a08201516102c590602085013590611258565b81526102cf610f3b565b825181516001600160a01b0391821690526020808501518351909101526040808501518351909101526060808501518351921691015260c083015182511461032b57815160408501351461032457600161032e565b600261032e565b60005b6020808301805192909252815143910152608084015190516040015261035381610cff565b50505050565b6103696001600054146009610cda565b6103838135158061037c57506001548235145b600a610cda565b60008080556002805461039590611114565b80601f01602080910402602001604051908101604052809291908181526020018280546103c190611114565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b50505050508060200190518101906104269190611270565b905061043981606001514310600b610cda565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161046a9291906112e9565b60405180910390a1610483816020015134146008610cda565b61048b610f3b565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152516104d99080611258565b6020820151604001526104eb81610cff565b505050565b610500600160005414600d610cda565b61051a8135158061051357506001548235145b600e610cda565b60008080556002805461052c90611114565b80601f016020809104026020016040519081016040528092919081815260200182805461055890611114565b80156105a55780601f1061057a576101008083540402835291602001916105a5565b820191906000526020600020905b81548152906001019060200180831161058857829003601f168201915b50505050508060200190518101906105bd9190611270565b90506105d18160600151431015600f610cda565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106029291906112e9565b60405180910390a16106163415600c610cda565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610653573d6000803e3d6000fd5b506000808055600181905561066a90600290610f94565b5050565b61067e600c600054146017610cda565b6106988135158061069157506001548235145b6018610cda565b6000808055600280546106aa90611114565b80601f01602080910402602001604051908101604052809291908181526020018280546106d690611114565b80156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b505050505080602001905181019061073b9190611326565b905061074f8160a001514310156019610cda565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107809291906112e9565b60405180910390a161079434156015610cda565b80516107c8906001600160a01b031633146107be5760608201516001600160a01b031633146107c1565b60015b6016610cda565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610653573d6000803e3d6000fd5b60006060600054600280805461081e90611114565b80601f016020809104026020016040519081016040528092919081815260200182805461084a90611114565b80156108975780601f1061086c57610100808354040283529160200191610897565b820191906000526020600020905b81548152906001019060200180831161087a57829003601f168201915b50505050509050915091509091565b6108b6600e600054146021610cda565b6108d0813515806108c957506001548235145b6022610cda565b6000808055600280546108e290611114565b80601f016020809104026020016040519081016040528092919081815260200182805461090e90611114565b801561095b5780601f106109305761010080835404028352916020019161095b565b820191906000526020600020905b81548152906001019060200180831161093e57829003601f168201915b50505050508060200190518101906109739190611165565b90506109878160e001514310156023610cda565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33836040516109b89291906112e9565b60405180910390a16109cc3415601f610cda565b8051610a00906001600160a01b031633146109f65760608201516001600160a01b031633146109f9565b60015b6020610cda565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610653573d6000803e3d6000fd5b610a4d600c600054146012610cda565b610a6781351580610a6057506001548235145b6013610cda565b600080805560028054610a7990611114565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa590611114565b8015610af25780601f10610ac757610100808354040283529160200191610af2565b820191906000526020600020905b815481529060010190602001808311610ad557829003601f168201915b5050505050806020019051810190610b0a9190611326565b9050610b226040518060200160405280600081525090565b610b338260a0015143106014610cda565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610b64929190611211565b60405180910390a1610b7834156010610cda565b8151610b90906001600160a01b031633146011610cda565b6040820151610b9f9043611258565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e0840152600e600055436001559051610caf9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610cd3929190610fd1565b5050505050565b8161066a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160011415610e21578151604001516020808401510151610d349190611258565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d01918252600c600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610353929190610fd1565b602082015151610ee457815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610e6e573d6000803e3d6000fd5b5060208201515160021415610ece578151606001516020830151604001516001600160a01b03909116906108fc90610ea690806113ba565b6040518115909202916000818181858888f19350505050158015610653573d6000803e3d6000fd5b6000808055600181905561066a90600290610f94565b60208201515160021415610ece578160000151606001516001600160a01b03166108fc8360200151604001519081150290604051600060405180830381858888f19350505050158015610653573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610f8f60405180606001604052806000815260200160008152602001600081525090565b905290565b508054610fa090611114565b6000825580601f10610fb0575050565b601f016020900490600052602060002090810190610fce9190611055565b50565b828054610fdd90611114565b90600052602060002090601f016020900481019282610fff5760008555611045565b82601f1061101857805160ff1916838001178555611045565b82800160010185558215611045579182015b8281111561104557825182559160200191906001019061102a565b50611051929150611055565b5090565b5b808211156110515760008155600101611056565b60006060828403121561107c57600080fd5b50919050565b60006060828403121561109457600080fd5b61109e838361106a565b9392505050565b60006040828403121561107c57600080fd5b82815260006020604081840152835180604085015260005b818110156110eb578581018301518582016060015282016110cf565b818111156110fd576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061112857607f821691505b6020821081141561107c57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461116057600080fd5b919050565b600061010080838503121561117957600080fd5b6040519081019067ffffffffffffffff821181831017156111aa57634e487b7160e01b600052604160045260246000fd5b816040526111b784611149565b815260208401516020820152604084015160408201526111d960608501611149565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161109e60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b6000821982111561126b5761126b611242565b500190565b60006080828403121561128257600080fd5b6040516080810181811067ffffffffffffffff821117156112b357634e487b7160e01b600052604160045260246000fd5b6040526112bf83611149565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461131757600080fd5b80604085015250509392505050565b600060c0828403121561133857600080fd5b60405160c0810181811067ffffffffffffffff8211171561136957634e487b7160e01b600052604160045260246000fd5b60405261137583611149565b8152602083015160208201526040830151604082015261139760608401611149565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000828210156113cc576113cc611242565b50039056fea2646970667358221220e85ef4659134b4f6c09cf59e68dc30404de9c74a42e418076e2155bd1b30018164736f6c634300080c0033`,
  BytecodeLen: 5989,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:46:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:51:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:61:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
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
