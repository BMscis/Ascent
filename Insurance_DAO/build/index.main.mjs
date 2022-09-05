// Automatically generated with Reach 0.1.11 (da882525)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (da882525)';
export const _backendVersion = 23;

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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Object({
    Insurance_provided: ctc0,
    InsuredParty: ctc4,
    Kyc: ctc6,
    Licence_plate: ctc7,
    Model: ctc8,
    Valuation: ctc0,
    Vehicle_purpose: ctc0,
    Year: ctc0
    });
  const ctc10 = stdlib.T_Token;
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Data({
    None: ctc11,
    Some: ctc11
    });
  const ctc13 = stdlib.T_Object({
    Consensus_time: ctc0,
    Expiry_date: ctc0,
    Insurance_provided: ctc0,
    InsuredParty: ctc4,
    Kyc: ctc6,
    Licence_plate: ctc7,
    Model: ctc8,
    Valuation: ctc0,
    Vehicle_purpose: ctc0,
    Year: ctc0,
    hash: ctc5
    });
  const ctc14 = stdlib.T_Data({
    None: ctc11,
    Some: ctc13
    });
  const ctc15 = stdlib.T_Data({
    None: ctc11,
    Some: ctc0
    });
  const map0_ctc = ctc12;
  
  const map1_ctc = ctc14;
  
  const map2_ctc = ctc12;
  
  const map3_ctc = ctc12;
  
  const map4_ctc = ctc12;
  
  const map5_ctc = ctc12;
  
  const map6_ctc = ctc15;
  
  const map7_ctc = ctc15;
  
  const map8_ctc = ctc15;
  
  const map9_ctc = ctc15;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4, ctc0, ctc0],
      2: [ctc3, ctc4, ctc0, ctc0, ctc5],
      3: [ctc3, ctc4, ctc0, ctc0, ctc5, ctc4, ctc9, ctc0, ctc0, ctc0, ctc0],
      5: [ctc3, ctc4, ctc0, ctc5, ctc4, ctc9, ctc0, ctc0, ctc0, ctc0],
      7: [ctc3, ctc4, ctc5, ctc4, ctc0, ctc8, ctc7, ctc6],
      8: [ctc3, ctc4, ctc5, ctc4, ctc0, ctc8, ctc7, ctc6, ctc8],
      9: [ctc4, ctc5, ctc4, ctc0, ctc10, ctc3, ctc2],
      15: [ctc4, ctc5, ctc4, ctc10, ctc3, ctc0],
      16: [ctc4, ctc5, ctc4, ctc10, ctc3, ctc0],
      17: [ctc3, ctc4, ctc0, ctc0, ctc5, ctc4, ctc9, ctc0, ctc0, ctc0],
      19: [ctc3, ctc4, ctc5, ctc4, ctc0, ctc8, ctc7, ctc6],
      20: [ctc3, ctc4, ctc5, ctc4, ctc0, ctc8, ctc7, ctc6, ctc8],
      21: [ctc4, ctc5, ctc4, ctc0, ctc10, ctc3, ctc2],
      27: [ctc4, ctc5, ctc4, ctc10, ctc3, ctc0],
      28: [ctc4, ctc5, ctc4, ctc10, ctc3, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc9, ctc1, ctc1, ctc1, ctc1, ctc10, ctc10, ctc10, ctc10]);
  return {
    mapDataTy: ctc11
    };
  };
export async function _CheckExpiry_PlaceClaim15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _CheckExpiry_PlaceClaim15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _CheckExpiry_PlaceClaim15 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Data({
    CheckExpiry_PlaceClaim0_238: ctc15,
    CheckExpiry_check0_238: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc12, ctc2]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc9;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc1;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc1;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc1;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc10;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc10;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc10;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v745, v758, v780, v872, v917, v918] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2]);
  const v946 = ctc.selfAddress();
  const v948 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:7:application call to [unknown function] (defined at: ./index.rsh:351:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_PlaceClaim0_238" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'in',
    who: 'CheckExpiry_PlaceClaim'
    });
  const v952 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v946), null);
  const v953 = {
    None: 0,
    Some: 1
    }[v952[0]];
  const v954 = stdlib.eq(v953, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v954, {
    at: './index.rsh:352:15:application',
    fs: ['at ./index.rsh:351:7:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:351:7:application call to [unknown function] (defined at: ./index.rsh:351:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_PlaceClaim0_238" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'You are not insured',
    who: 'CheckExpiry_PlaceClaim'
    });
  const v958 = ['CheckExpiry_PlaceClaim0_238', v948];
  
  const txn1 = await (ctc.sendrecv({
    args: [v745, v758, v780, v872, v917, v918, v958],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:354:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v965], secs: v967, time: v966, didSend: v333, from: v964 } = txn1;
      
      switch (v965[0]) {
        case 'CheckExpiry_PlaceClaim0_238': {
          const v968 = v965[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CheckExpiry_PlaceClaim"
            });
          ;
          const v977 = v968[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v964), null);
          const v981 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v964), null);
          const v982 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v983 = '00000000';
          const v984 = '00000000000000000000000000000000';
          const v985 = {
            Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            InsuredParty: v745,
            Kyc: v982,
            Licence_plate: v983,
            Model: v984,
            Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            hash: v758
            };
          const v986 = stdlib.fromSome(v981, v985);
          const v987 = v986.InsuredParty;
          const v988 = stdlib.addressEq(v987, v964);
          const v990 = v986.Expiry_date;
          const v991 = stdlib.lt(v990, v966);
          const v992 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          const v993 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v964), null);
          const v994 = {
            None: 0,
            Some: 1
            }[v993[0]];
          const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v996 = v995 ? false : true;
          const v997 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v998 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v964), null);
          const v999 = {
            None: 0,
            Some: 1
            }[v998[0]];
          const v1000 = stdlib.eq(v999, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1001 = v1000 ? false : true;
          const v1002 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v1003 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v964), null);
          const v1004 = {
            None: 0,
            Some: 1
            }[v1003[0]];
          const v1005 = stdlib.eq(v1004, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1006 = v1005 ? false : true;
          const v1007 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
          const v1008 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v964), null);
          const v1009 = {
            None: 0,
            Some: 1
            }[v1008[0]];
          const v1010 = stdlib.eq(v1009, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1011 = v1010 ? false : true;
          const v1012 = v1007 ? v1011 : false;
          const v1013 = v1002 ? v1006 : v1012;
          const v1014 = v997 ? v1001 : v1013;
          const v1015 = v992 ? v996 : v1014;
          const v1016 = v986.Valuation;
          let v1018;
          if (v992) {
            const v1019 = stdlib.safeDiv(v1016, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
            v1018 = v1019;
            }
          else {
            let v1021;
            if (v997) {
              const v1022 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1016, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
              v1021 = v1022;
              }
            else {
              let v1024;
              if (v1002) {
                const v1025 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1016, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
                v1024 = v1025;
                }
              else {
                let v1027;
                if (v1007) {
                  const v1028 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1016, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
                  v1027 = v1028;
                  }
                else {
                  v1027 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
                  }
                v1024 = v1027;
                }
              v1021 = v1024;
              }
            v1018 = v1021;
            }
          const v1029 = v988 ? v991 : false;
          const v1030 = v1029 ? v1015 : false;
          const v1032 = stdlib.gt(v918, v1018);
          const v1033 = v1030 ? v1032 : false;
          if (v1033) {
            const v1039 = stdlib.sub(v918, v1018);
            sim_r.txns.push({
              kind: 'from',
              to: v964,
              tok: undefined /* Nothing */
              });
            const v1040 = [true, v1018];
            const v1041 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1040', ctc17, v1040);
            
            if (v992) {
              await stdlib.simMapSet(sim_r, 2, v964, null);
              await stdlib.simMapSet(sim_r, 6, v964, v1018);
              const v3834 = v917;
              const v3835 = v1039;
              const v3836 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v3837 = v3836[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v3838 = v3836[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v3839 = stdlib.lt(v3837, v3838);
              if (v3839) {
                sim_r.isHalt = false;
                }
              else {
                const v3840 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                if (v3840) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v745,
                    tok: undefined /* Nothing */
                    });
                  const v3843 = stdlib.sub(v3837, v3837);
                  const v3844 = stdlib.Array_set(v3836, '0', v3843);
                  const v3845 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3844);
                  const v3846 = v3845[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v3847 = v3846[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v3848 = stdlib.sub(v3847, v3837);
                  const v3849 = stdlib.Array_set(v3846, '1', v3848);
                  const v3850 = stdlib.Array_set(v3845, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3849);
                  stdlib.simTokenBurn(sim_r, v872, v3837);
                  const v3851 = v3850[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v3852 = v3851[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v3852) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v872);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v3855 = stdlib.sub(v3837, v3837);
                  const v3856 = stdlib.Array_set(v3836, '0', v3855);
                  const v3857 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3856);
                  const v3858 = v3857[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v3859 = v3858[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v3860 = stdlib.sub(v3859, v3837);
                  const v3861 = stdlib.Array_set(v3858, '1', v3860);
                  const v3862 = stdlib.Array_set(v3857, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3861);
                  stdlib.simTokenBurn(sim_r, v872, v3837);
                  const v3863 = v3862[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v3864 = v3863[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v3864) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v872);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}
            else {
              if (v997) {
                await stdlib.simMapSet(sim_r, 3, v964, null);
                await stdlib.simMapSet(sim_r, 7, v964, v1018);
                const v3866 = v917;
                const v3867 = v1039;
                const v3868 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v3869 = v3868[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v3870 = v3868[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                const v3871 = stdlib.lt(v3869, v3870);
                if (v3871) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3872 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                  if (v3872) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v745,
                      tok: undefined /* Nothing */
                      });
                    const v3875 = stdlib.sub(v3869, v3869);
                    const v3876 = stdlib.Array_set(v3868, '0', v3875);
                    const v3877 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3876);
                    const v3878 = v3877[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v3879 = v3878[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v3880 = stdlib.sub(v3879, v3869);
                    const v3881 = stdlib.Array_set(v3878, '1', v3880);
                    const v3882 = stdlib.Array_set(v3877, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3881);
                    stdlib.simTokenBurn(sim_r, v872, v3869);
                    const v3883 = v3882[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v3884 = v3883[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v3884) {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      stdlib.simTokenDestroy(sim_r, v872);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v3887 = stdlib.sub(v3869, v3869);
                    const v3888 = stdlib.Array_set(v3868, '0', v3887);
                    const v3889 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3888);
                    const v3890 = v3889[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v3891 = v3890[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v3892 = stdlib.sub(v3891, v3869);
                    const v3893 = stdlib.Array_set(v3890, '1', v3892);
                    const v3894 = stdlib.Array_set(v3889, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3893);
                    stdlib.simTokenBurn(sim_r, v872, v3869);
                    const v3895 = v3894[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v3896 = v3895[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v3896) {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      stdlib.simTokenDestroy(sim_r, v872);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}
              else {
                if (v1002) {
                  await stdlib.simMapSet(sim_r, 4, v964, null);
                  await stdlib.simMapSet(sim_r, 8, v964, v1018);
                  const v3898 = v917;
                  const v3899 = v1039;
                  const v3900 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                  const v3901 = v3900[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                  const v3902 = v3900[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                  const v3903 = stdlib.lt(v3901, v3902);
                  if (v3903) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v3904 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                    if (v3904) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v745,
                        tok: undefined /* Nothing */
                        });
                      const v3907 = stdlib.sub(v3901, v3901);
                      const v3908 = stdlib.Array_set(v3900, '0', v3907);
                      const v3909 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3908);
                      const v3910 = v3909[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                      const v3911 = v3910[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                      const v3912 = stdlib.sub(v3911, v3901);
                      const v3913 = stdlib.Array_set(v3910, '1', v3912);
                      const v3914 = stdlib.Array_set(v3909, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3913);
                      stdlib.simTokenBurn(sim_r, v872, v3901);
                      const v3915 = v3914[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                      const v3916 = v3915[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                      if (v3916) {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        stdlib.simTokenDestroy(sim_r, v872);
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v3919 = stdlib.sub(v3901, v3901);
                      const v3920 = stdlib.Array_set(v3900, '0', v3919);
                      const v3921 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3920);
                      const v3922 = v3921[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                      const v3923 = v3922[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                      const v3924 = stdlib.sub(v3923, v3901);
                      const v3925 = stdlib.Array_set(v3922, '1', v3924);
                      const v3926 = stdlib.Array_set(v3921, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3925);
                      stdlib.simTokenBurn(sim_r, v872, v3901);
                      const v3927 = v3926[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                      const v3928 = v3927[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                      if (v3928) {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        stdlib.simTokenDestroy(sim_r, v872);
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}
                else {
                  if (v1007) {
                    await stdlib.simMapSet(sim_r, 5, v964, null);
                    await stdlib.simMapSet(sim_r, 9, v964, v1018);
                    const v3930 = v917;
                    const v3931 = v1039;
                    const v3932 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v3933 = v3932[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v3934 = v3932[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                    const v3935 = stdlib.lt(v3933, v3934);
                    if (v3935) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v3936 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                      if (v3936) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v745,
                          tok: undefined /* Nothing */
                          });
                        const v3939 = stdlib.sub(v3933, v3933);
                        const v3940 = stdlib.Array_set(v3932, '0', v3939);
                        const v3941 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3940);
                        const v3942 = v3941[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v3943 = v3942[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v3944 = stdlib.sub(v3943, v3933);
                        const v3945 = stdlib.Array_set(v3942, '1', v3944);
                        const v3946 = stdlib.Array_set(v3941, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3945);
                        stdlib.simTokenBurn(sim_r, v872, v3933);
                        const v3947 = v3946[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v3948 = v3947[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v3948) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v872);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v3951 = stdlib.sub(v3933, v3933);
                        const v3952 = stdlib.Array_set(v3932, '0', v3951);
                        const v3953 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3952);
                        const v3954 = v3953[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v3955 = v3954[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v3956 = stdlib.sub(v3955, v3933);
                        const v3957 = stdlib.Array_set(v3954, '1', v3956);
                        const v3958 = stdlib.Array_set(v3953, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3957);
                        stdlib.simTokenBurn(sim_r, v872, v3933);
                        const v3959 = v3958[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v3960 = v3959[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v3960) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v872);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}
                  else {
                    const v3962 = v917;
                    const v3963 = v1039;
                    const v3964 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v3965 = v3964[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v3966 = v3964[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                    const v3967 = stdlib.lt(v3965, v3966);
                    if (v3967) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v3968 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                      if (v3968) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v745,
                          tok: undefined /* Nothing */
                          });
                        const v3971 = stdlib.sub(v3965, v3965);
                        const v3972 = stdlib.Array_set(v3964, '0', v3971);
                        const v3973 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3972);
                        const v3974 = v3973[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v3975 = v3974[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v3976 = stdlib.sub(v3975, v3965);
                        const v3977 = stdlib.Array_set(v3974, '1', v3976);
                        const v3978 = stdlib.Array_set(v3973, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3977);
                        stdlib.simTokenBurn(sim_r, v872, v3965);
                        const v3979 = v3978[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v3980 = v3979[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v3980) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v872);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v3983 = stdlib.sub(v3965, v3965);
                        const v3984 = stdlib.Array_set(v3964, '0', v3983);
                        const v3985 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3984);
                        const v3986 = v3985[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v3987 = v3986[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v3988 = stdlib.sub(v3987, v3965);
                        const v3989 = stdlib.Array_set(v3986, '1', v3988);
                        const v3990 = stdlib.Array_set(v3985, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3989);
                        stdlib.simTokenBurn(sim_r, v872, v3965);
                        const v3991 = v3990[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v3992 = v3991[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v3992) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v872);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}}}}}
          else {
            const v1121 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v1122 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1121', ctc17, v1121);
            
            const v3994 = v917;
            const v3995 = v918;
            const v3996 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v3997 = v3996[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v3998 = v3996[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v3999 = stdlib.lt(v3997, v3998);
            if (v3999) {
              sim_r.isHalt = false;
              }
            else {
              const v4000 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v4000) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v745,
                  tok: undefined /* Nothing */
                  });
                const v4003 = stdlib.sub(v3997, v3997);
                const v4004 = stdlib.Array_set(v3996, '0', v4003);
                const v4005 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4004);
                const v4006 = v4005[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4007 = v4006[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4008 = stdlib.sub(v4007, v3997);
                const v4009 = stdlib.Array_set(v4006, '1', v4008);
                const v4010 = stdlib.Array_set(v4005, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4009);
                stdlib.simTokenBurn(sim_r, v872, v3997);
                const v4011 = v4010[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4012 = v4011[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4012) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v872);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v4015 = stdlib.sub(v3997, v3997);
                const v4016 = stdlib.Array_set(v3996, '0', v4015);
                const v4017 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4016);
                const v4018 = v4017[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4019 = v4018[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4020 = stdlib.sub(v4019, v3997);
                const v4021 = stdlib.Array_set(v4018, '1', v4020);
                const v4022 = stdlib.Array_set(v4017, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4021);
                stdlib.simTokenBurn(sim_r, v872, v3997);
                const v4023 = v4022[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4024 = v4023[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4024) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v872);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        case 'CheckExpiry_check0_238': {
          const v1181 = v965[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v965], secs: v967, time: v966, didSend: v333, from: v964 } = txn1;
  switch (v965[0]) {
    case 'CheckExpiry_PlaceClaim0_238': {
      const v968 = v965[1];
      undefined /* setApiDetails */;
      ;
      const v977 = v968[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
      const v978 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
      const v979 = {
        None: 0,
        Some: 1
        }[v978[0]];
      const v980 = stdlib.eq(v979, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v980, {
        at: './index.rsh:356:16:application',
        fs: ['at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
        msg: 'You are not insured',
        who: 'CheckExpiry_PlaceClaim'
        });
      const v981 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v964), null);
      const v982 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const v983 = '00000000';
      const v984 = '00000000000000000000000000000000';
      const v985 = {
        Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        InsuredParty: v745,
        Kyc: v982,
        Licence_plate: v983,
        Model: v984,
        Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        hash: v758
        };
      const v986 = stdlib.fromSome(v981, v985);
      const v987 = v986.InsuredParty;
      const v988 = stdlib.addressEq(v987, v964);
      const v990 = v986.Expiry_date;
      const v991 = stdlib.lt(v990, v966);
      const v992 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v993 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v964), null);
      const v994 = {
        None: 0,
        Some: 1
        }[v993[0]];
      const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v996 = v995 ? false : true;
      const v997 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v998 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v964), null);
      const v999 = {
        None: 0,
        Some: 1
        }[v998[0]];
      const v1000 = stdlib.eq(v999, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1001 = v1000 ? false : true;
      const v1002 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v1003 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v964), null);
      const v1004 = {
        None: 0,
        Some: 1
        }[v1003[0]];
      const v1005 = stdlib.eq(v1004, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1006 = v1005 ? false : true;
      const v1007 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      const v1008 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v964), null);
      const v1009 = {
        None: 0,
        Some: 1
        }[v1008[0]];
      const v1010 = stdlib.eq(v1009, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1011 = v1010 ? false : true;
      const v1012 = v1007 ? v1011 : false;
      const v1013 = v1002 ? v1006 : v1012;
      const v1014 = v997 ? v1001 : v1013;
      const v1015 = v992 ? v996 : v1014;
      const v1016 = v986.Valuation;
      let v1018;
      if (v992) {
        const v1019 = stdlib.safeDiv(v1016, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
        v1018 = v1019;
        }
      else {
        let v1021;
        if (v997) {
          const v1022 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1016, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
          v1021 = v1022;
          }
        else {
          let v1024;
          if (v1002) {
            const v1025 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1016, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
            v1024 = v1025;
            }
          else {
            let v1027;
            if (v1007) {
              const v1028 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1016, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
              v1027 = v1028;
              }
            else {
              v1027 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
              }
            v1024 = v1027;
            }
          v1021 = v1024;
          }
        v1018 = v1021;
        }
      const v1029 = v988 ? v991 : false;
      const v1030 = v1029 ? v1015 : false;
      const v1032 = stdlib.gt(v918, v1018);
      const v1033 = v1030 ? v1032 : false;
      if (v1033) {
        const v1039 = stdlib.sub(v918, v1018);
        ;
        const v1040 = [true, v1018];
        const v1041 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1040', ctc17, v1040);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v968, v1041), {
            at: './index.rsh:350:10:application',
            fs: ['at ./index.rsh:350:10:application call to [unknown function] (defined at: ./index.rsh:350:10:function exp)', 'at ./index.rsh:365:15:application call to "fn" (defined at: ./index.rsh:355:7:function exp)', 'at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_PlaceClaim'
            });
          }
        else {
          }
        
        if (v992) {
          await stdlib.mapSet(map2, v964, null);
          await stdlib.mapSet(map6, v964, v1018);
          const v3834 = v917;
          const v3835 = v1039;
          const v3836 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v3837 = v3836[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v3838 = v3836[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
          const v3839 = stdlib.lt(v3837, v3838);
          if (v3839) {
            return;
            }
          else {
            const v3840 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
            if (v3840) {
              ;
              const v3843 = stdlib.sub(v3837, v3837);
              const v3844 = stdlib.Array_set(v3836, '0', v3843);
              const v3845 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3844);
              const v3846 = v3845[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v3847 = v3846[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v3848 = stdlib.sub(v3847, v3837);
              const v3849 = stdlib.Array_set(v3846, '1', v3848);
              const v3850 = stdlib.Array_set(v3845, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3849);
              undefined /* TokenBurn */;
              const v3851 = v3850[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v3852 = v3851[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v3852) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}
            else {
              const v3855 = stdlib.sub(v3837, v3837);
              const v3856 = stdlib.Array_set(v3836, '0', v3855);
              const v3857 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3856);
              const v3858 = v3857[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v3859 = v3858[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v3860 = stdlib.sub(v3859, v3837);
              const v3861 = stdlib.Array_set(v3858, '1', v3860);
              const v3862 = stdlib.Array_set(v3857, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3861);
              undefined /* TokenBurn */;
              const v3863 = v3862[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v3864 = v3863[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v3864) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}}}
        else {
          if (v997) {
            await stdlib.mapSet(map3, v964, null);
            await stdlib.mapSet(map7, v964, v1018);
            const v3866 = v917;
            const v3867 = v1039;
            const v3868 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v3869 = v3868[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v3870 = v3868[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v3871 = stdlib.lt(v3869, v3870);
            if (v3871) {
              return;
              }
            else {
              const v3872 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v3872) {
                ;
                const v3875 = stdlib.sub(v3869, v3869);
                const v3876 = stdlib.Array_set(v3868, '0', v3875);
                const v3877 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3876);
                const v3878 = v3877[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v3879 = v3878[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v3880 = stdlib.sub(v3879, v3869);
                const v3881 = stdlib.Array_set(v3878, '1', v3880);
                const v3882 = stdlib.Array_set(v3877, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3881);
                undefined /* TokenBurn */;
                const v3883 = v3882[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v3884 = v3883[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v3884) {
                  return;
                  }
                else {
                  undefined /* TokenDestroy */;
                  return;
                  }}
              else {
                const v3887 = stdlib.sub(v3869, v3869);
                const v3888 = stdlib.Array_set(v3868, '0', v3887);
                const v3889 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3888);
                const v3890 = v3889[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v3891 = v3890[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v3892 = stdlib.sub(v3891, v3869);
                const v3893 = stdlib.Array_set(v3890, '1', v3892);
                const v3894 = stdlib.Array_set(v3889, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3893);
                undefined /* TokenBurn */;
                const v3895 = v3894[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v3896 = v3895[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v3896) {
                  return;
                  }
                else {
                  undefined /* TokenDestroy */;
                  return;
                  }}}}
          else {
            if (v1002) {
              await stdlib.mapSet(map4, v964, null);
              await stdlib.mapSet(map8, v964, v1018);
              const v3898 = v917;
              const v3899 = v1039;
              const v3900 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v3901 = v3900[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v3902 = v3900[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v3903 = stdlib.lt(v3901, v3902);
              if (v3903) {
                return;
                }
              else {
                const v3904 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                if (v3904) {
                  ;
                  const v3907 = stdlib.sub(v3901, v3901);
                  const v3908 = stdlib.Array_set(v3900, '0', v3907);
                  const v3909 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3908);
                  const v3910 = v3909[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v3911 = v3910[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v3912 = stdlib.sub(v3911, v3901);
                  const v3913 = stdlib.Array_set(v3910, '1', v3912);
                  const v3914 = stdlib.Array_set(v3909, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3913);
                  undefined /* TokenBurn */;
                  const v3915 = v3914[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v3916 = v3915[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v3916) {
                    return;
                    }
                  else {
                    undefined /* TokenDestroy */;
                    return;
                    }}
                else {
                  const v3919 = stdlib.sub(v3901, v3901);
                  const v3920 = stdlib.Array_set(v3900, '0', v3919);
                  const v3921 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3920);
                  const v3922 = v3921[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v3923 = v3922[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v3924 = stdlib.sub(v3923, v3901);
                  const v3925 = stdlib.Array_set(v3922, '1', v3924);
                  const v3926 = stdlib.Array_set(v3921, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3925);
                  undefined /* TokenBurn */;
                  const v3927 = v3926[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v3928 = v3927[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v3928) {
                    return;
                    }
                  else {
                    undefined /* TokenDestroy */;
                    return;
                    }}}}
            else {
              if (v1007) {
                await stdlib.mapSet(map5, v964, null);
                await stdlib.mapSet(map9, v964, v1018);
                const v3930 = v917;
                const v3931 = v1039;
                const v3932 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v3933 = v3932[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v3934 = v3932[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                const v3935 = stdlib.lt(v3933, v3934);
                if (v3935) {
                  return;
                  }
                else {
                  const v3936 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                  if (v3936) {
                    ;
                    const v3939 = stdlib.sub(v3933, v3933);
                    const v3940 = stdlib.Array_set(v3932, '0', v3939);
                    const v3941 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3940);
                    const v3942 = v3941[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v3943 = v3942[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v3944 = stdlib.sub(v3943, v3933);
                    const v3945 = stdlib.Array_set(v3942, '1', v3944);
                    const v3946 = stdlib.Array_set(v3941, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3945);
                    undefined /* TokenBurn */;
                    const v3947 = v3946[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v3948 = v3947[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v3948) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}
                  else {
                    const v3951 = stdlib.sub(v3933, v3933);
                    const v3952 = stdlib.Array_set(v3932, '0', v3951);
                    const v3953 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3952);
                    const v3954 = v3953[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v3955 = v3954[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v3956 = stdlib.sub(v3955, v3933);
                    const v3957 = stdlib.Array_set(v3954, '1', v3956);
                    const v3958 = stdlib.Array_set(v3953, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3957);
                    undefined /* TokenBurn */;
                    const v3959 = v3958[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v3960 = v3959[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v3960) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}}}
              else {
                const v3962 = v917;
                const v3963 = v1039;
                const v3964 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v3965 = v3964[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v3966 = v3964[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                const v3967 = stdlib.lt(v3965, v3966);
                if (v3967) {
                  return;
                  }
                else {
                  const v3968 = stdlib.gt(v1039, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                  if (v3968) {
                    ;
                    const v3971 = stdlib.sub(v3965, v3965);
                    const v3972 = stdlib.Array_set(v3964, '0', v3971);
                    const v3973 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3972);
                    const v3974 = v3973[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v3975 = v3974[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v3976 = stdlib.sub(v3975, v3965);
                    const v3977 = stdlib.Array_set(v3974, '1', v3976);
                    const v3978 = stdlib.Array_set(v3973, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3977);
                    undefined /* TokenBurn */;
                    const v3979 = v3978[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v3980 = v3979[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v3980) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}
                  else {
                    const v3983 = stdlib.sub(v3965, v3965);
                    const v3984 = stdlib.Array_set(v3964, '0', v3983);
                    const v3985 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3984);
                    const v3986 = v3985[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v3987 = v3986[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v3988 = stdlib.sub(v3987, v3965);
                    const v3989 = stdlib.Array_set(v3986, '1', v3988);
                    const v3990 = stdlib.Array_set(v3985, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v3989);
                    undefined /* TokenBurn */;
                    const v3991 = v3990[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v3992 = v3991[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v3992) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}}}}}}}
      else {
        const v1121 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1122 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1121', ctc17, v1121);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v968, v1122), {
            at: './index.rsh:350:10:application',
            fs: ['at ./index.rsh:350:10:application call to [unknown function] (defined at: ./index.rsh:350:10:function exp)', 'at ./index.rsh:368:18:application call to "fn" (defined at: ./index.rsh:355:7:function exp)', 'at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_PlaceClaim'
            });
          }
        else {
          }
        
        const v3994 = v917;
        const v3995 = v918;
        const v3996 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v3997 = v3996[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v3998 = v3996[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
        const v3999 = stdlib.lt(v3997, v3998);
        if (v3999) {
          return;
          }
        else {
          const v4000 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
          if (v4000) {
            ;
            const v4003 = stdlib.sub(v3997, v3997);
            const v4004 = stdlib.Array_set(v3996, '0', v4003);
            const v4005 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4004);
            const v4006 = v4005[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4007 = v4006[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4008 = stdlib.sub(v4007, v3997);
            const v4009 = stdlib.Array_set(v4006, '1', v4008);
            const v4010 = stdlib.Array_set(v4005, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4009);
            undefined /* TokenBurn */;
            const v4011 = v4010[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4012 = v4011[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4012) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}
          else {
            const v4015 = stdlib.sub(v3997, v3997);
            const v4016 = stdlib.Array_set(v3996, '0', v4015);
            const v4017 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4016);
            const v4018 = v4017[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4019 = v4018[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4020 = stdlib.sub(v4019, v3997);
            const v4021 = stdlib.Array_set(v4018, '1', v4020);
            const v4022 = stdlib.Array_set(v4017, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4021);
            undefined /* TokenBurn */;
            const v4023 = v4022[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4024 = v4023[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4024) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      break;
      }
    case 'CheckExpiry_check0_238': {
      const v1181 = v965[1];
      return;
      break;
      }
    }
  
  
  };
export async function _CheckExpiry_PlaceClaim27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _CheckExpiry_PlaceClaim27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _CheckExpiry_PlaceClaim27 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Data({
    CheckExpiry_PlaceClaim0_238: ctc15,
    CheckExpiry_check0_238: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc12, ctc2]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc9;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc1;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc1;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc1;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc10;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc10;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc10;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v745, v758, v780, v1582, v1627, v1628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2]);
  const v1656 = ctc.selfAddress();
  const v1658 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:351:7:application call to [unknown function] (defined at: ./index.rsh:351:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_PlaceClaim0_238" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'in',
    who: 'CheckExpiry_PlaceClaim'
    });
  const v1662 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1656), null);
  const v1663 = {
    None: 0,
    Some: 1
    }[v1662[0]];
  const v1664 = stdlib.eq(v1663, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1664, {
    at: './index.rsh:352:15:application',
    fs: ['at ./index.rsh:351:7:application call to [unknown function] (defined at: ./index.rsh:351:13:function exp)', 'at ./index.rsh:351:7:application call to [unknown function] (defined at: ./index.rsh:351:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_PlaceClaim0_238" (defined at: ./index.rsh:350:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'You are not insured',
    who: 'CheckExpiry_PlaceClaim'
    });
  const v1668 = ['CheckExpiry_PlaceClaim0_238', v1658];
  
  const txn1 = await (ctc.sendrecv({
    args: [v745, v758, v780, v1582, v1627, v1628, v1668],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:354:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v1675], secs: v1677, time: v1676, didSend: v333, from: v1674 } = txn1;
      
      switch (v1675[0]) {
        case 'CheckExpiry_PlaceClaim0_238': {
          const v1678 = v1675[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CheckExpiry_PlaceClaim"
            });
          ;
          const v1687 = v1678[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1674), null);
          const v1691 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1674), null);
          const v1692 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v1693 = '00000000';
          const v1694 = '00000000000000000000000000000000';
          const v1695 = {
            Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            InsuredParty: v745,
            Kyc: v1692,
            Licence_plate: v1693,
            Model: v1694,
            Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            hash: v758
            };
          const v1696 = stdlib.fromSome(v1691, v1695);
          const v1697 = v1696.InsuredParty;
          const v1698 = stdlib.addressEq(v1697, v1674);
          const v1700 = v1696.Expiry_date;
          const v1701 = stdlib.lt(v1700, v1676);
          const v1702 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          const v1703 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1674), null);
          const v1704 = {
            None: 0,
            Some: 1
            }[v1703[0]];
          const v1705 = stdlib.eq(v1704, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1706 = v1705 ? false : true;
          const v1707 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          const v1708 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1674), null);
          const v1709 = {
            None: 0,
            Some: 1
            }[v1708[0]];
          const v1710 = stdlib.eq(v1709, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1711 = v1710 ? false : true;
          const v1712 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v1713 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1674), null);
          const v1714 = {
            None: 0,
            Some: 1
            }[v1713[0]];
          const v1715 = stdlib.eq(v1714, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1716 = v1715 ? false : true;
          const v1717 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
          const v1718 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1674), null);
          const v1719 = {
            None: 0,
            Some: 1
            }[v1718[0]];
          const v1720 = stdlib.eq(v1719, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v1721 = v1720 ? false : true;
          const v1722 = v1717 ? v1721 : false;
          const v1723 = v1712 ? v1716 : v1722;
          const v1724 = v1707 ? v1711 : v1723;
          const v1725 = v1702 ? v1706 : v1724;
          const v1726 = v1696.Valuation;
          let v1728;
          if (v1702) {
            const v1729 = stdlib.safeDiv(v1726, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
            v1728 = v1729;
            }
          else {
            let v1731;
            if (v1707) {
              const v1732 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1726, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
              v1731 = v1732;
              }
            else {
              let v1734;
              if (v1712) {
                const v1735 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1726, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
                v1734 = v1735;
                }
              else {
                let v1737;
                if (v1717) {
                  const v1738 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1726, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
                  v1737 = v1738;
                  }
                else {
                  v1737 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
                  }
                v1734 = v1737;
                }
              v1731 = v1734;
              }
            v1728 = v1731;
            }
          const v1739 = v1698 ? v1701 : false;
          const v1740 = v1739 ? v1725 : false;
          const v1742 = stdlib.gt(v1628, v1728);
          const v1743 = v1740 ? v1742 : false;
          if (v1743) {
            const v1749 = stdlib.sub(v1628, v1728);
            sim_r.txns.push({
              kind: 'from',
              to: v1674,
              tok: undefined /* Nothing */
              });
            const v1750 = [true, v1728];
            const v1751 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1750', ctc17, v1750);
            
            if (v1702) {
              await stdlib.simMapSet(sim_r, 2, v1674, null);
              await stdlib.simMapSet(sim_r, 6, v1674, v1728);
              const v4090 = v1627;
              const v4091 = v1749;
              const v4092 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4093 = v4092[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4094 = v4092[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v4095 = stdlib.lt(v4093, v4094);
              if (v4095) {
                sim_r.isHalt = false;
                }
              else {
                const v4096 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                if (v4096) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v745,
                    tok: undefined /* Nothing */
                    });
                  const v4099 = stdlib.sub(v4093, v4093);
                  const v4100 = stdlib.Array_set(v4092, '0', v4099);
                  const v4101 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4100);
                  const v4102 = v4101[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4103 = v4102[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4104 = stdlib.sub(v4103, v4093);
                  const v4105 = stdlib.Array_set(v4102, '1', v4104);
                  const v4106 = stdlib.Array_set(v4101, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4105);
                  stdlib.simTokenBurn(sim_r, v1582, v4093);
                  const v4107 = v4106[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4108 = v4107[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4108) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v1582);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4111 = stdlib.sub(v4093, v4093);
                  const v4112 = stdlib.Array_set(v4092, '0', v4111);
                  const v4113 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4112);
                  const v4114 = v4113[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4115 = v4114[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4116 = stdlib.sub(v4115, v4093);
                  const v4117 = stdlib.Array_set(v4114, '1', v4116);
                  const v4118 = stdlib.Array_set(v4113, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4117);
                  stdlib.simTokenBurn(sim_r, v1582, v4093);
                  const v4119 = v4118[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4120 = v4119[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4120) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v1582);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}
            else {
              if (v1707) {
                await stdlib.simMapSet(sim_r, 3, v1674, null);
                await stdlib.simMapSet(sim_r, 7, v1674, v1728);
                const v4122 = v1627;
                const v4123 = v1749;
                const v4124 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v4125 = v4124[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v4126 = v4124[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                const v4127 = stdlib.lt(v4125, v4126);
                if (v4127) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v4128 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                  if (v4128) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v745,
                      tok: undefined /* Nothing */
                      });
                    const v4131 = stdlib.sub(v4125, v4125);
                    const v4132 = stdlib.Array_set(v4124, '0', v4131);
                    const v4133 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4132);
                    const v4134 = v4133[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v4135 = v4134[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v4136 = stdlib.sub(v4135, v4125);
                    const v4137 = stdlib.Array_set(v4134, '1', v4136);
                    const v4138 = stdlib.Array_set(v4133, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4137);
                    stdlib.simTokenBurn(sim_r, v1582, v4125);
                    const v4139 = v4138[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v4140 = v4139[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v4140) {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      stdlib.simTokenDestroy(sim_r, v1582);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v4143 = stdlib.sub(v4125, v4125);
                    const v4144 = stdlib.Array_set(v4124, '0', v4143);
                    const v4145 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4144);
                    const v4146 = v4145[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v4147 = v4146[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v4148 = stdlib.sub(v4147, v4125);
                    const v4149 = stdlib.Array_set(v4146, '1', v4148);
                    const v4150 = stdlib.Array_set(v4145, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4149);
                    stdlib.simTokenBurn(sim_r, v1582, v4125);
                    const v4151 = v4150[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v4152 = v4151[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v4152) {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      stdlib.simTokenDestroy(sim_r, v1582);
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}
              else {
                if (v1712) {
                  await stdlib.simMapSet(sim_r, 4, v1674, null);
                  await stdlib.simMapSet(sim_r, 8, v1674, v1728);
                  const v4154 = v1627;
                  const v4155 = v1749;
                  const v4156 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                  const v4157 = v4156[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                  const v4158 = v4156[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                  const v4159 = stdlib.lt(v4157, v4158);
                  if (v4159) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4160 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                    if (v4160) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v745,
                        tok: undefined /* Nothing */
                        });
                      const v4163 = stdlib.sub(v4157, v4157);
                      const v4164 = stdlib.Array_set(v4156, '0', v4163);
                      const v4165 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4164);
                      const v4166 = v4165[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                      const v4167 = v4166[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                      const v4168 = stdlib.sub(v4167, v4157);
                      const v4169 = stdlib.Array_set(v4166, '1', v4168);
                      const v4170 = stdlib.Array_set(v4165, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4169);
                      stdlib.simTokenBurn(sim_r, v1582, v4157);
                      const v4171 = v4170[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                      const v4172 = v4171[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                      if (v4172) {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        stdlib.simTokenDestroy(sim_r, v1582);
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v4175 = stdlib.sub(v4157, v4157);
                      const v4176 = stdlib.Array_set(v4156, '0', v4175);
                      const v4177 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4176);
                      const v4178 = v4177[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                      const v4179 = v4178[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                      const v4180 = stdlib.sub(v4179, v4157);
                      const v4181 = stdlib.Array_set(v4178, '1', v4180);
                      const v4182 = stdlib.Array_set(v4177, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4181);
                      stdlib.simTokenBurn(sim_r, v1582, v4157);
                      const v4183 = v4182[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                      const v4184 = v4183[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                      if (v4184) {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        stdlib.simTokenDestroy(sim_r, v1582);
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}
                else {
                  if (v1717) {
                    await stdlib.simMapSet(sim_r, 5, v1674, null);
                    await stdlib.simMapSet(sim_r, 9, v1674, v1728);
                    const v4186 = v1627;
                    const v4187 = v1749;
                    const v4188 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v4190 = v4188[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                    const v4191 = stdlib.lt(v4189, v4190);
                    if (v4191) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v4192 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                      if (v4192) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v745,
                          tok: undefined /* Nothing */
                          });
                        const v4195 = stdlib.sub(v4189, v4189);
                        const v4196 = stdlib.Array_set(v4188, '0', v4195);
                        const v4197 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4196);
                        const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v4199 = v4198[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v4200 = stdlib.sub(v4199, v4189);
                        const v4201 = stdlib.Array_set(v4198, '1', v4200);
                        const v4202 = stdlib.Array_set(v4197, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4201);
                        stdlib.simTokenBurn(sim_r, v1582, v4189);
                        const v4203 = v4202[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v4204 = v4203[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v4204) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v1582);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v4207 = stdlib.sub(v4189, v4189);
                        const v4208 = stdlib.Array_set(v4188, '0', v4207);
                        const v4209 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4208);
                        const v4210 = v4209[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v4211 = v4210[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v4212 = stdlib.sub(v4211, v4189);
                        const v4213 = stdlib.Array_set(v4210, '1', v4212);
                        const v4214 = stdlib.Array_set(v4209, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4213);
                        stdlib.simTokenBurn(sim_r, v1582, v4189);
                        const v4215 = v4214[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v4216 = v4215[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v4216) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v1582);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}
                  else {
                    const v4218 = v1627;
                    const v4219 = v1749;
                    const v4220 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v4221 = v4220[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                    const v4222 = v4220[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                    const v4223 = stdlib.lt(v4221, v4222);
                    if (v4223) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v4224 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                      if (v4224) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v745,
                          tok: undefined /* Nothing */
                          });
                        const v4227 = stdlib.sub(v4221, v4221);
                        const v4228 = stdlib.Array_set(v4220, '0', v4227);
                        const v4229 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4228);
                        const v4230 = v4229[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v4231 = v4230[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v4232 = stdlib.sub(v4231, v4221);
                        const v4233 = stdlib.Array_set(v4230, '1', v4232);
                        const v4234 = stdlib.Array_set(v4229, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4233);
                        stdlib.simTokenBurn(sim_r, v1582, v4221);
                        const v4235 = v4234[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v4236 = v4235[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v4236) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v1582);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}
                      else {
                        const v4239 = stdlib.sub(v4221, v4221);
                        const v4240 = stdlib.Array_set(v4220, '0', v4239);
                        const v4241 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4240);
                        const v4242 = v4241[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                        const v4243 = v4242[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                        const v4244 = stdlib.sub(v4243, v4221);
                        const v4245 = stdlib.Array_set(v4242, '1', v4244);
                        const v4246 = stdlib.Array_set(v4241, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4245);
                        stdlib.simTokenBurn(sim_r, v1582, v4221);
                        const v4247 = v4246[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                        const v4248 = v4247[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                        if (v4248) {
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }
                        else {
                          stdlib.simTokenDestroy(sim_r, v1582);
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }}}}}}}}
          else {
            const v1831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v1832 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1831', ctc17, v1831);
            
            const v4250 = v1627;
            const v4251 = v1628;
            const v4252 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4253 = v4252[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4254 = v4252[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v4255 = stdlib.lt(v4253, v4254);
            if (v4255) {
              sim_r.isHalt = false;
              }
            else {
              const v4256 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v4256) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v745,
                  tok: undefined /* Nothing */
                  });
                const v4259 = stdlib.sub(v4253, v4253);
                const v4260 = stdlib.Array_set(v4252, '0', v4259);
                const v4261 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4260);
                const v4262 = v4261[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4263 = v4262[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4264 = stdlib.sub(v4263, v4253);
                const v4265 = stdlib.Array_set(v4262, '1', v4264);
                const v4266 = stdlib.Array_set(v4261, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4265);
                stdlib.simTokenBurn(sim_r, v1582, v4253);
                const v4267 = v4266[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4268 = v4267[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4268) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1582);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v4271 = stdlib.sub(v4253, v4253);
                const v4272 = stdlib.Array_set(v4252, '0', v4271);
                const v4273 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4272);
                const v4274 = v4273[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4275 = v4274[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4276 = stdlib.sub(v4275, v4253);
                const v4277 = stdlib.Array_set(v4274, '1', v4276);
                const v4278 = stdlib.Array_set(v4273, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4277);
                stdlib.simTokenBurn(sim_r, v1582, v4253);
                const v4279 = v4278[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4280 = v4279[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4280) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1582);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        case 'CheckExpiry_check0_238': {
          const v1891 = v1675[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1675], secs: v1677, time: v1676, didSend: v333, from: v1674 } = txn1;
  switch (v1675[0]) {
    case 'CheckExpiry_PlaceClaim0_238': {
      const v1678 = v1675[1];
      undefined /* setApiDetails */;
      ;
      const v1687 = v1678[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
      const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1674), null);
      const v1689 = {
        None: 0,
        Some: 1
        }[v1688[0]];
      const v1690 = stdlib.eq(v1689, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1690, {
        at: './index.rsh:356:16:application',
        fs: ['at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
        msg: 'You are not insured',
        who: 'CheckExpiry_PlaceClaim'
        });
      const v1691 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1674), null);
      const v1692 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const v1693 = '00000000';
      const v1694 = '00000000000000000000000000000000';
      const v1695 = {
        Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        InsuredParty: v745,
        Kyc: v1692,
        Licence_plate: v1693,
        Model: v1694,
        Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        hash: v758
        };
      const v1696 = stdlib.fromSome(v1691, v1695);
      const v1697 = v1696.InsuredParty;
      const v1698 = stdlib.addressEq(v1697, v1674);
      const v1700 = v1696.Expiry_date;
      const v1701 = stdlib.lt(v1700, v1676);
      const v1702 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v1703 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1674), null);
      const v1704 = {
        None: 0,
        Some: 1
        }[v1703[0]];
      const v1705 = stdlib.eq(v1704, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1706 = v1705 ? false : true;
      const v1707 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v1708 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1674), null);
      const v1709 = {
        None: 0,
        Some: 1
        }[v1708[0]];
      const v1710 = stdlib.eq(v1709, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1711 = v1710 ? false : true;
      const v1712 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v1713 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1674), null);
      const v1714 = {
        None: 0,
        Some: 1
        }[v1713[0]];
      const v1715 = stdlib.eq(v1714, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1716 = v1715 ? false : true;
      const v1717 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      const v1718 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1674), null);
      const v1719 = {
        None: 0,
        Some: 1
        }[v1718[0]];
      const v1720 = stdlib.eq(v1719, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1721 = v1720 ? false : true;
      const v1722 = v1717 ? v1721 : false;
      const v1723 = v1712 ? v1716 : v1722;
      const v1724 = v1707 ? v1711 : v1723;
      const v1725 = v1702 ? v1706 : v1724;
      const v1726 = v1696.Valuation;
      let v1728;
      if (v1702) {
        const v1729 = stdlib.safeDiv(v1726, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
        v1728 = v1729;
        }
      else {
        let v1731;
        if (v1707) {
          const v1732 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1726, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
          v1731 = v1732;
          }
        else {
          let v1734;
          if (v1712) {
            const v1735 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1726, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
            v1734 = v1735;
            }
          else {
            let v1737;
            if (v1717) {
              const v1738 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1726, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
              v1737 = v1738;
              }
            else {
              v1737 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
              }
            v1734 = v1737;
            }
          v1731 = v1734;
          }
        v1728 = v1731;
        }
      const v1739 = v1698 ? v1701 : false;
      const v1740 = v1739 ? v1725 : false;
      const v1742 = stdlib.gt(v1628, v1728);
      const v1743 = v1740 ? v1742 : false;
      if (v1743) {
        const v1749 = stdlib.sub(v1628, v1728);
        ;
        const v1750 = [true, v1728];
        const v1751 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1750', ctc17, v1750);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v1678, v1751), {
            at: './index.rsh:350:10:application',
            fs: ['at ./index.rsh:350:10:application call to [unknown function] (defined at: ./index.rsh:350:10:function exp)', 'at ./index.rsh:365:15:application call to "fn" (defined at: ./index.rsh:355:7:function exp)', 'at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_PlaceClaim'
            });
          }
        else {
          }
        
        if (v1702) {
          await stdlib.mapSet(map2, v1674, null);
          await stdlib.mapSet(map6, v1674, v1728);
          const v4090 = v1627;
          const v4091 = v1749;
          const v4092 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v4093 = v4092[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v4094 = v4092[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
          const v4095 = stdlib.lt(v4093, v4094);
          if (v4095) {
            return;
            }
          else {
            const v4096 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
            if (v4096) {
              ;
              const v4099 = stdlib.sub(v4093, v4093);
              const v4100 = stdlib.Array_set(v4092, '0', v4099);
              const v4101 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4100);
              const v4102 = v4101[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v4103 = v4102[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v4104 = stdlib.sub(v4103, v4093);
              const v4105 = stdlib.Array_set(v4102, '1', v4104);
              const v4106 = stdlib.Array_set(v4101, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4105);
              undefined /* TokenBurn */;
              const v4107 = v4106[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v4108 = v4107[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v4108) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}
            else {
              const v4111 = stdlib.sub(v4093, v4093);
              const v4112 = stdlib.Array_set(v4092, '0', v4111);
              const v4113 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4112);
              const v4114 = v4113[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v4115 = v4114[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v4116 = stdlib.sub(v4115, v4093);
              const v4117 = stdlib.Array_set(v4114, '1', v4116);
              const v4118 = stdlib.Array_set(v4113, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4117);
              undefined /* TokenBurn */;
              const v4119 = v4118[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v4120 = v4119[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v4120) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}}}
        else {
          if (v1707) {
            await stdlib.mapSet(map3, v1674, null);
            await stdlib.mapSet(map7, v1674, v1728);
            const v4122 = v1627;
            const v4123 = v1749;
            const v4124 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4125 = v4124[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4126 = v4124[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v4127 = stdlib.lt(v4125, v4126);
            if (v4127) {
              return;
              }
            else {
              const v4128 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v4128) {
                ;
                const v4131 = stdlib.sub(v4125, v4125);
                const v4132 = stdlib.Array_set(v4124, '0', v4131);
                const v4133 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4132);
                const v4134 = v4133[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4135 = v4134[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4136 = stdlib.sub(v4135, v4125);
                const v4137 = stdlib.Array_set(v4134, '1', v4136);
                const v4138 = stdlib.Array_set(v4133, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4137);
                undefined /* TokenBurn */;
                const v4139 = v4138[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4140 = v4139[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4140) {
                  return;
                  }
                else {
                  undefined /* TokenDestroy */;
                  return;
                  }}
              else {
                const v4143 = stdlib.sub(v4125, v4125);
                const v4144 = stdlib.Array_set(v4124, '0', v4143);
                const v4145 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4144);
                const v4146 = v4145[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4147 = v4146[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4148 = stdlib.sub(v4147, v4125);
                const v4149 = stdlib.Array_set(v4146, '1', v4148);
                const v4150 = stdlib.Array_set(v4145, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4149);
                undefined /* TokenBurn */;
                const v4151 = v4150[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4152 = v4151[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4152) {
                  return;
                  }
                else {
                  undefined /* TokenDestroy */;
                  return;
                  }}}}
          else {
            if (v1712) {
              await stdlib.mapSet(map4, v1674, null);
              await stdlib.mapSet(map8, v1674, v1728);
              const v4154 = v1627;
              const v4155 = v1749;
              const v4156 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4157 = v4156[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4158 = v4156[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v4159 = stdlib.lt(v4157, v4158);
              if (v4159) {
                return;
                }
              else {
                const v4160 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                if (v4160) {
                  ;
                  const v4163 = stdlib.sub(v4157, v4157);
                  const v4164 = stdlib.Array_set(v4156, '0', v4163);
                  const v4165 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4164);
                  const v4166 = v4165[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4167 = v4166[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4168 = stdlib.sub(v4167, v4157);
                  const v4169 = stdlib.Array_set(v4166, '1', v4168);
                  const v4170 = stdlib.Array_set(v4165, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4169);
                  undefined /* TokenBurn */;
                  const v4171 = v4170[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4172 = v4171[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4172) {
                    return;
                    }
                  else {
                    undefined /* TokenDestroy */;
                    return;
                    }}
                else {
                  const v4175 = stdlib.sub(v4157, v4157);
                  const v4176 = stdlib.Array_set(v4156, '0', v4175);
                  const v4177 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4176);
                  const v4178 = v4177[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4179 = v4178[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4180 = stdlib.sub(v4179, v4157);
                  const v4181 = stdlib.Array_set(v4178, '1', v4180);
                  const v4182 = stdlib.Array_set(v4177, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4181);
                  undefined /* TokenBurn */;
                  const v4183 = v4182[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4184 = v4183[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4184) {
                    return;
                    }
                  else {
                    undefined /* TokenDestroy */;
                    return;
                    }}}}
            else {
              if (v1717) {
                await stdlib.mapSet(map5, v1674, null);
                await stdlib.mapSet(map9, v1674, v1728);
                const v4186 = v1627;
                const v4187 = v1749;
                const v4188 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v4190 = v4188[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                const v4191 = stdlib.lt(v4189, v4190);
                if (v4191) {
                  return;
                  }
                else {
                  const v4192 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                  if (v4192) {
                    ;
                    const v4195 = stdlib.sub(v4189, v4189);
                    const v4196 = stdlib.Array_set(v4188, '0', v4195);
                    const v4197 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4196);
                    const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v4199 = v4198[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v4200 = stdlib.sub(v4199, v4189);
                    const v4201 = stdlib.Array_set(v4198, '1', v4200);
                    const v4202 = stdlib.Array_set(v4197, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4201);
                    undefined /* TokenBurn */;
                    const v4203 = v4202[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v4204 = v4203[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v4204) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}
                  else {
                    const v4207 = stdlib.sub(v4189, v4189);
                    const v4208 = stdlib.Array_set(v4188, '0', v4207);
                    const v4209 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4208);
                    const v4210 = v4209[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v4211 = v4210[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v4212 = stdlib.sub(v4211, v4189);
                    const v4213 = stdlib.Array_set(v4210, '1', v4212);
                    const v4214 = stdlib.Array_set(v4209, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4213);
                    undefined /* TokenBurn */;
                    const v4215 = v4214[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v4216 = v4215[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v4216) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}}}
              else {
                const v4218 = v1627;
                const v4219 = v1749;
                const v4220 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v4221 = v4220[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                const v4222 = v4220[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                const v4223 = stdlib.lt(v4221, v4222);
                if (v4223) {
                  return;
                  }
                else {
                  const v4224 = stdlib.gt(v1749, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                  if (v4224) {
                    ;
                    const v4227 = stdlib.sub(v4221, v4221);
                    const v4228 = stdlib.Array_set(v4220, '0', v4227);
                    const v4229 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4228);
                    const v4230 = v4229[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v4231 = v4230[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v4232 = stdlib.sub(v4231, v4221);
                    const v4233 = stdlib.Array_set(v4230, '1', v4232);
                    const v4234 = stdlib.Array_set(v4229, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4233);
                    undefined /* TokenBurn */;
                    const v4235 = v4234[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v4236 = v4235[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v4236) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}
                  else {
                    const v4239 = stdlib.sub(v4221, v4221);
                    const v4240 = stdlib.Array_set(v4220, '0', v4239);
                    const v4241 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4240);
                    const v4242 = v4241[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                    const v4243 = v4242[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                    const v4244 = stdlib.sub(v4243, v4221);
                    const v4245 = stdlib.Array_set(v4242, '1', v4244);
                    const v4246 = stdlib.Array_set(v4241, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4245);
                    undefined /* TokenBurn */;
                    const v4247 = v4246[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                    const v4248 = v4247[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                    if (v4248) {
                      return;
                      }
                    else {
                      undefined /* TokenDestroy */;
                      return;
                      }}}}}}}}
      else {
        const v1831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1832 = await txn1.getOutput('CheckExpiry_PlaceClaim', 'v1831', ctc17, v1831);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v1678, v1832), {
            at: './index.rsh:350:10:application',
            fs: ['at ./index.rsh:350:10:application call to [unknown function] (defined at: ./index.rsh:350:10:function exp)', 'at ./index.rsh:368:18:application call to "fn" (defined at: ./index.rsh:355:7:function exp)', 'at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_PlaceClaim'
            });
          }
        else {
          }
        
        const v4250 = v1627;
        const v4251 = v1628;
        const v4252 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v4253 = v4252[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v4254 = v4252[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
        const v4255 = stdlib.lt(v4253, v4254);
        if (v4255) {
          return;
          }
        else {
          const v4256 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
          if (v4256) {
            ;
            const v4259 = stdlib.sub(v4253, v4253);
            const v4260 = stdlib.Array_set(v4252, '0', v4259);
            const v4261 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4260);
            const v4262 = v4261[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4263 = v4262[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4264 = stdlib.sub(v4263, v4253);
            const v4265 = stdlib.Array_set(v4262, '1', v4264);
            const v4266 = stdlib.Array_set(v4261, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4265);
            undefined /* TokenBurn */;
            const v4267 = v4266[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4268 = v4267[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4268) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}
          else {
            const v4271 = stdlib.sub(v4253, v4253);
            const v4272 = stdlib.Array_set(v4252, '0', v4271);
            const v4273 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4272);
            const v4274 = v4273[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4275 = v4274[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4276 = stdlib.sub(v4275, v4253);
            const v4277 = stdlib.Array_set(v4274, '1', v4276);
            const v4278 = stdlib.Array_set(v4273, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4277);
            undefined /* TokenBurn */;
            const v4279 = v4278[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4280 = v4279[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4280) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      break;
      }
    case 'CheckExpiry_check0_238': {
      const v1891 = v1675[1];
      return;
      break;
      }
    }
  
  
  };
export async function _CheckExpiry_check15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _CheckExpiry_check15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _CheckExpiry_check15 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Data({
    CheckExpiry_PlaceClaim0_238: ctc15,
    CheckExpiry_check0_238: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc12, ctc2, ctc12]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc9;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc1;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc1;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc1;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc10;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc10;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc10;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v745, v758, v780, v872, v917, v918] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2]);
  const v932 = ctc.selfAddress();
  const v934 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:330:7:application call to [unknown function] (defined at: ./index.rsh:330:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_check0_238" (defined at: ./index.rsh:329:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'in',
    who: 'CheckExpiry_check'
    });
  const v938 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v932), null);
  const v939 = {
    None: 0,
    Some: 1
    }[v938[0]];
  const v940 = stdlib.eq(v939, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v940, {
    at: './index.rsh:331:15:application',
    fs: ['at ./index.rsh:330:7:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)', 'at ./index.rsh:330:7:application call to [unknown function] (defined at: ./index.rsh:330:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_check0_238" (defined at: ./index.rsh:329:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'You are not insured',
    who: 'CheckExpiry_check'
    });
  const v944 = ['CheckExpiry_check0_238', v934];
  
  const txn1 = await (ctc.sendrecv({
    args: [v745, v758, v780, v872, v917, v918, v944],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:333:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v965], secs: v967, time: v966, didSend: v333, from: v964 } = txn1;
      
      switch (v965[0]) {
        case 'CheckExpiry_PlaceClaim0_238': {
          const v968 = v965[1];
          
          break;
          }
        case 'CheckExpiry_check0_238': {
          const v1181 = v965[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CheckExpiry_check"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v964), null);
          const v1349 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v964), null);
          const v1350 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v1351 = '00000000';
          const v1352 = '00000000000000000000000000000000';
          const v1353 = {
            Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            InsuredParty: v745,
            Kyc: v1350,
            Licence_plate: v1351,
            Model: v1352,
            Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            hash: v758
            };
          const v1354 = stdlib.fromSome(v1349, v1353);
          const v1355 = v1354.InsuredParty;
          const v1356 = stdlib.addressEq(v1355, v964);
          const v1358 = v1354.Expiry_date;
          const v1359 = stdlib.lt(v1358, v966);
          if (v1356) {
            const v1361 = [v1359, v1358, true];
            const v1362 = await txn1.getOutput('CheckExpiry_check', 'v1361', ctc17, v1361);
            
            if (v1359) {
              sim_r.isHalt = false;
              }
            else {
              const v4538 = v917;
              const v4539 = v918;
              const v4540 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4541 = v4540[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4542 = v4540[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v4543 = stdlib.lt(v4541, v4542);
              if (v4543) {
                sim_r.isHalt = false;
                }
              else {
                const v4544 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                if (v4544) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v745,
                    tok: undefined /* Nothing */
                    });
                  const v4547 = stdlib.sub(v4541, v4541);
                  const v4548 = stdlib.Array_set(v4540, '0', v4547);
                  const v4549 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4548);
                  const v4550 = v4549[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4551 = v4550[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4552 = stdlib.sub(v4551, v4541);
                  const v4553 = stdlib.Array_set(v4550, '1', v4552);
                  const v4554 = stdlib.Array_set(v4549, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4553);
                  stdlib.simTokenBurn(sim_r, v872, v4541);
                  const v4555 = v4554[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4556 = v4555[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4556) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v872);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4559 = stdlib.sub(v4541, v4541);
                  const v4560 = stdlib.Array_set(v4540, '0', v4559);
                  const v4561 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4560);
                  const v4562 = v4561[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4563 = v4562[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4564 = stdlib.sub(v4563, v4541);
                  const v4565 = stdlib.Array_set(v4562, '1', v4564);
                  const v4566 = stdlib.Array_set(v4561, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4565);
                  stdlib.simTokenBurn(sim_r, v872, v4541);
                  const v4567 = v4566[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4568 = v4567[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4568) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v872);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}}
          else {
            const v1383 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
            const v1384 = await txn1.getOutput('CheckExpiry_check', 'v1383', ctc17, v1383);
            
            const v4570 = v917;
            const v4571 = v918;
            const v4572 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4573 = v4572[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4574 = v4572[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v4575 = stdlib.lt(v4573, v4574);
            if (v4575) {
              sim_r.isHalt = false;
              }
            else {
              const v4576 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v4576) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v745,
                  tok: undefined /* Nothing */
                  });
                const v4579 = stdlib.sub(v4573, v4573);
                const v4580 = stdlib.Array_set(v4572, '0', v4579);
                const v4581 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4580);
                const v4582 = v4581[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4583 = v4582[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4584 = stdlib.sub(v4583, v4573);
                const v4585 = stdlib.Array_set(v4582, '1', v4584);
                const v4586 = stdlib.Array_set(v4581, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4585);
                stdlib.simTokenBurn(sim_r, v872, v4573);
                const v4587 = v4586[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4588 = v4587[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4588) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v872);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v4591 = stdlib.sub(v4573, v4573);
                const v4592 = stdlib.Array_set(v4572, '0', v4591);
                const v4593 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4592);
                const v4594 = v4593[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4595 = v4594[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4596 = stdlib.sub(v4595, v4573);
                const v4597 = stdlib.Array_set(v4594, '1', v4596);
                const v4598 = stdlib.Array_set(v4593, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4597);
                stdlib.simTokenBurn(sim_r, v872, v4573);
                const v4599 = v4598[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4600 = v4599[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4600) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v872);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v965], secs: v967, time: v966, didSend: v333, from: v964 } = txn1;
  switch (v965[0]) {
    case 'CheckExpiry_PlaceClaim0_238': {
      const v968 = v965[1];
      return;
      break;
      }
    case 'CheckExpiry_check0_238': {
      const v1181 = v965[1];
      undefined /* setApiDetails */;
      ;
      const v1346 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
      const v1347 = {
        None: 0,
        Some: 1
        }[v1346[0]];
      const v1348 = stdlib.eq(v1347, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v1348, {
        at: './index.rsh:335:16:application',
        fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
        msg: 'You are not insured',
        who: 'CheckExpiry_check'
        });
      const v1349 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v964), null);
      const v1350 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const v1351 = '00000000';
      const v1352 = '00000000000000000000000000000000';
      const v1353 = {
        Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        InsuredParty: v745,
        Kyc: v1350,
        Licence_plate: v1351,
        Model: v1352,
        Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        hash: v758
        };
      const v1354 = stdlib.fromSome(v1349, v1353);
      const v1355 = v1354.InsuredParty;
      const v1356 = stdlib.addressEq(v1355, v964);
      const v1358 = v1354.Expiry_date;
      const v1359 = stdlib.lt(v1358, v966);
      if (v1356) {
        const v1361 = [v1359, v1358, true];
        const v1362 = await txn1.getOutput('CheckExpiry_check', 'v1361', ctc17, v1361);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v1181, v1362), {
            at: './index.rsh:329:10:application',
            fs: ['at ./index.rsh:329:10:application call to [unknown function] (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:340:13:application call to "fn" (defined at: ./index.rsh:334:7:function exp)', 'at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_check'
            });
          }
        else {
          }
        
        if (v1359) {
          return;
          }
        else {
          const v4538 = v917;
          const v4539 = v918;
          const v4540 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v4541 = v4540[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v4542 = v4540[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
          const v4543 = stdlib.lt(v4541, v4542);
          if (v4543) {
            return;
            }
          else {
            const v4544 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
            if (v4544) {
              ;
              const v4547 = stdlib.sub(v4541, v4541);
              const v4548 = stdlib.Array_set(v4540, '0', v4547);
              const v4549 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4548);
              const v4550 = v4549[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v4551 = v4550[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v4552 = stdlib.sub(v4551, v4541);
              const v4553 = stdlib.Array_set(v4550, '1', v4552);
              const v4554 = stdlib.Array_set(v4549, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4553);
              undefined /* TokenBurn */;
              const v4555 = v4554[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v4556 = v4555[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v4556) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}
            else {
              const v4559 = stdlib.sub(v4541, v4541);
              const v4560 = stdlib.Array_set(v4540, '0', v4559);
              const v4561 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4560);
              const v4562 = v4561[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v4563 = v4562[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v4564 = stdlib.sub(v4563, v4541);
              const v4565 = stdlib.Array_set(v4562, '1', v4564);
              const v4566 = stdlib.Array_set(v4561, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4565);
              undefined /* TokenBurn */;
              const v4567 = v4566[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v4568 = v4567[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v4568) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}}}}
      else {
        const v1383 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v1384 = await txn1.getOutput('CheckExpiry_check', 'v1383', ctc17, v1383);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v1181, v1384), {
            at: './index.rsh:329:10:application',
            fs: ['at ./index.rsh:329:10:application call to [unknown function] (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:346:13:application call to "fn" (defined at: ./index.rsh:334:7:function exp)', 'at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_check'
            });
          }
        else {
          }
        
        const v4570 = v917;
        const v4571 = v918;
        const v4572 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v4573 = v4572[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v4574 = v4572[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
        const v4575 = stdlib.lt(v4573, v4574);
        if (v4575) {
          return;
          }
        else {
          const v4576 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
          if (v4576) {
            ;
            const v4579 = stdlib.sub(v4573, v4573);
            const v4580 = stdlib.Array_set(v4572, '0', v4579);
            const v4581 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4580);
            const v4582 = v4581[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4583 = v4582[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4584 = stdlib.sub(v4583, v4573);
            const v4585 = stdlib.Array_set(v4582, '1', v4584);
            const v4586 = stdlib.Array_set(v4581, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4585);
            undefined /* TokenBurn */;
            const v4587 = v4586[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4588 = v4587[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4588) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}
          else {
            const v4591 = stdlib.sub(v4573, v4573);
            const v4592 = stdlib.Array_set(v4572, '0', v4591);
            const v4593 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4592);
            const v4594 = v4593[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4595 = v4594[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4596 = stdlib.sub(v4595, v4573);
            const v4597 = stdlib.Array_set(v4594, '1', v4596);
            const v4598 = stdlib.Array_set(v4593, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4597);
            undefined /* TokenBurn */;
            const v4599 = v4598[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4600 = v4599[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4600) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function _CheckExpiry_check27(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _CheckExpiry_check27 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _CheckExpiry_check27 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Token;
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc2, ctc2, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Data({
    CheckExpiry_PlaceClaim0_238: ctc15,
    CheckExpiry_check0_238: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc12, ctc2, ctc12]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc9;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc1;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc1;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc1;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc10;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: true,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc10;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: true,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc10;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: true,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: true,
    ty: map9_ctc
    });
  
  
  const [v745, v758, v780, v1582, v1627, v1628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27'), [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2]);
  const v1642 = ctc.selfAddress();
  const v1644 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:330:7:application call to [unknown function] (defined at: ./index.rsh:330:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_check0_238" (defined at: ./index.rsh:329:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'in',
    who: 'CheckExpiry_check'
    });
  const v1648 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1642), null);
  const v1649 = {
    None: 0,
    Some: 1
    }[v1648[0]];
  const v1650 = stdlib.eq(v1649, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1650, {
    at: './index.rsh:331:15:application',
    fs: ['at ./index.rsh:330:7:application call to [unknown function] (defined at: ./index.rsh:330:13:function exp)', 'at ./index.rsh:330:7:application call to [unknown function] (defined at: ./index.rsh:330:7:function exp)', 'at ./index.rsh:291:35:application call to "runCheckExpiry_check0_238" (defined at: ./index.rsh:329:9:function exp)', 'at ./index.rsh:291:35:application call to [unknown function] (defined at: ./index.rsh:291:35:function exp)'],
    msg: 'You are not insured',
    who: 'CheckExpiry_check'
    });
  const v1654 = ['CheckExpiry_check0_238', v1644];
  
  const txn1 = await (ctc.sendrecv({
    args: [v745, v758, v780, v1582, v1627, v1628, v1654],
    evt_cnt: 1,
    funcNum: 19,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:333:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v1675], secs: v1677, time: v1676, didSend: v333, from: v1674 } = txn1;
      
      switch (v1675[0]) {
        case 'CheckExpiry_PlaceClaim0_238': {
          const v1678 = v1675[1];
          
          break;
          }
        case 'CheckExpiry_check0_238': {
          const v1891 = v1675[1];
          sim_r.txns.push({
            kind: 'api',
            who: "CheckExpiry_check"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1674), null);
          const v2059 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1674), null);
          const v2060 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v2061 = '00000000';
          const v2062 = '00000000000000000000000000000000';
          const v2063 = {
            Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            InsuredParty: v745,
            Kyc: v2060,
            Licence_plate: v2061,
            Model: v2062,
            Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            hash: v758
            };
          const v2064 = stdlib.fromSome(v2059, v2063);
          const v2065 = v2064.InsuredParty;
          const v2066 = stdlib.addressEq(v2065, v1674);
          const v2068 = v2064.Expiry_date;
          const v2069 = stdlib.lt(v2068, v1676);
          if (v2066) {
            const v2071 = [v2069, v2068, true];
            const v2072 = await txn1.getOutput('CheckExpiry_check', 'v2071', ctc17, v2071);
            
            if (v2069) {
              sim_r.isHalt = false;
              }
            else {
              const v4794 = v1627;
              const v4795 = v1628;
              const v4796 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4797 = v4796[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v4798 = v4796[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v4799 = stdlib.lt(v4797, v4798);
              if (v4799) {
                sim_r.isHalt = false;
                }
              else {
                const v4800 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                if (v4800) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v745,
                    tok: undefined /* Nothing */
                    });
                  const v4803 = stdlib.sub(v4797, v4797);
                  const v4804 = stdlib.Array_set(v4796, '0', v4803);
                  const v4805 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4804);
                  const v4806 = v4805[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4807 = v4806[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4808 = stdlib.sub(v4807, v4797);
                  const v4809 = stdlib.Array_set(v4806, '1', v4808);
                  const v4810 = stdlib.Array_set(v4805, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4809);
                  stdlib.simTokenBurn(sim_r, v1582, v4797);
                  const v4811 = v4810[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4812 = v4811[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4812) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v1582);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4815 = stdlib.sub(v4797, v4797);
                  const v4816 = stdlib.Array_set(v4796, '0', v4815);
                  const v4817 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4816);
                  const v4818 = v4817[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                  const v4819 = v4818[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                  const v4820 = stdlib.sub(v4819, v4797);
                  const v4821 = stdlib.Array_set(v4818, '1', v4820);
                  const v4822 = stdlib.Array_set(v4817, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4821);
                  stdlib.simTokenBurn(sim_r, v1582, v4797);
                  const v4823 = v4822[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                  const v4824 = v4823[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                  if (v4824) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v1582);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}}
          else {
            const v2093 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
            const v2094 = await txn1.getOutput('CheckExpiry_check', 'v2093', ctc17, v2093);
            
            const v4826 = v1627;
            const v4827 = v1628;
            const v4828 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4829 = v4828[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v4830 = v4828[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v4831 = stdlib.lt(v4829, v4830);
            if (v4831) {
              sim_r.isHalt = false;
              }
            else {
              const v4832 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v4832) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v745,
                  tok: undefined /* Nothing */
                  });
                const v4835 = stdlib.sub(v4829, v4829);
                const v4836 = stdlib.Array_set(v4828, '0', v4835);
                const v4837 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4836);
                const v4838 = v4837[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4839 = v4838[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4840 = stdlib.sub(v4839, v4829);
                const v4841 = stdlib.Array_set(v4838, '1', v4840);
                const v4842 = stdlib.Array_set(v4837, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4841);
                stdlib.simTokenBurn(sim_r, v1582, v4829);
                const v4843 = v4842[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4844 = v4843[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4844) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1582);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v4847 = stdlib.sub(v4829, v4829);
                const v4848 = stdlib.Array_set(v4828, '0', v4847);
                const v4849 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4848);
                const v4850 = v4849[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v4851 = v4850[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v4852 = stdlib.sub(v4851, v4829);
                const v4853 = stdlib.Array_set(v4850, '1', v4852);
                const v4854 = stdlib.Array_set(v4849, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4853);
                stdlib.simTokenBurn(sim_r, v1582, v4829);
                const v4855 = v4854[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v4856 = v4855[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v4856) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1582);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc7, ctc3, ctc11, ctc14, ctc2, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1675], secs: v1677, time: v1676, didSend: v333, from: v1674 } = txn1;
  switch (v1675[0]) {
    case 'CheckExpiry_PlaceClaim0_238': {
      const v1678 = v1675[1];
      return;
      break;
      }
    case 'CheckExpiry_check0_238': {
      const v1891 = v1675[1];
      undefined /* setApiDetails */;
      ;
      const v2056 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1674), null);
      const v2057 = {
        None: 0,
        Some: 1
        }[v2056[0]];
      const v2058 = stdlib.eq(v2057, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2058, {
        at: './index.rsh:335:16:application',
        fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
        msg: 'You are not insured',
        who: 'CheckExpiry_check'
        });
      const v2059 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1674), null);
      const v2060 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const v2061 = '00000000';
      const v2062 = '00000000000000000000000000000000';
      const v2063 = {
        Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        InsuredParty: v745,
        Kyc: v2060,
        Licence_plate: v2061,
        Model: v2062,
        Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        hash: v758
        };
      const v2064 = stdlib.fromSome(v2059, v2063);
      const v2065 = v2064.InsuredParty;
      const v2066 = stdlib.addressEq(v2065, v1674);
      const v2068 = v2064.Expiry_date;
      const v2069 = stdlib.lt(v2068, v1676);
      if (v2066) {
        const v2071 = [v2069, v2068, true];
        const v2072 = await txn1.getOutput('CheckExpiry_check', 'v2071', ctc17, v2071);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v1891, v2072), {
            at: './index.rsh:329:10:application',
            fs: ['at ./index.rsh:329:10:application call to [unknown function] (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:340:13:application call to "fn" (defined at: ./index.rsh:334:7:function exp)', 'at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_check'
            });
          }
        else {
          }
        
        if (v2069) {
          return;
          }
        else {
          const v4794 = v1627;
          const v4795 = v1628;
          const v4796 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v4797 = v4796[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v4798 = v4796[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
          const v4799 = stdlib.lt(v4797, v4798);
          if (v4799) {
            return;
            }
          else {
            const v4800 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
            if (v4800) {
              ;
              const v4803 = stdlib.sub(v4797, v4797);
              const v4804 = stdlib.Array_set(v4796, '0', v4803);
              const v4805 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4804);
              const v4806 = v4805[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v4807 = v4806[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v4808 = stdlib.sub(v4807, v4797);
              const v4809 = stdlib.Array_set(v4806, '1', v4808);
              const v4810 = stdlib.Array_set(v4805, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4809);
              undefined /* TokenBurn */;
              const v4811 = v4810[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v4812 = v4811[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v4812) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}
            else {
              const v4815 = stdlib.sub(v4797, v4797);
              const v4816 = stdlib.Array_set(v4796, '0', v4815);
              const v4817 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4816);
              const v4818 = v4817[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v4819 = v4818[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v4820 = stdlib.sub(v4819, v4797);
              const v4821 = stdlib.Array_set(v4818, '1', v4820);
              const v4822 = stdlib.Array_set(v4817, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4821);
              undefined /* TokenBurn */;
              const v4823 = v4822[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v4824 = v4823[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v4824) {
                return;
                }
              else {
                undefined /* TokenDestroy */;
                return;
                }}}}}
      else {
        const v2093 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
        const v2094 = await txn1.getOutput('CheckExpiry_check', 'v2093', ctc17, v2093);
        if (v333) {
          stdlib.protect(ctc0, await interact.out(v1891, v2094), {
            at: './index.rsh:329:10:application',
            fs: ['at ./index.rsh:329:10:application call to [unknown function] (defined at: ./index.rsh:329:10:function exp)', 'at ./index.rsh:346:13:application call to "fn" (defined at: ./index.rsh:334:7:function exp)', 'at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
            msg: 'out',
            who: 'CheckExpiry_check'
            });
          }
        else {
          }
        
        const v4826 = v1627;
        const v4827 = v1628;
        const v4828 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v4829 = v4828[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v4830 = v4828[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
        const v4831 = stdlib.lt(v4829, v4830);
        if (v4831) {
          return;
          }
        else {
          const v4832 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
          if (v4832) {
            ;
            const v4835 = stdlib.sub(v4829, v4829);
            const v4836 = stdlib.Array_set(v4828, '0', v4835);
            const v4837 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4836);
            const v4838 = v4837[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4839 = v4838[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4840 = stdlib.sub(v4839, v4829);
            const v4841 = stdlib.Array_set(v4838, '1', v4840);
            const v4842 = stdlib.Array_set(v4837, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4841);
            undefined /* TokenBurn */;
            const v4843 = v4842[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4844 = v4843[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4844) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}
          else {
            const v4847 = stdlib.sub(v4829, v4829);
            const v4848 = stdlib.Array_set(v4828, '0', v4847);
            const v4849 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4848);
            const v4850 = v4849[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
            const v4851 = v4850[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
            const v4852 = stdlib.sub(v4851, v4829);
            const v4853 = stdlib.Array_set(v4850, '1', v4852);
            const v4854 = stdlib.Array_set(v4849, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v4853);
            undefined /* TokenBurn */;
            const v4855 = v4854[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
            const v4856 = v4855[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
            if (v4856) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function InsuredParty(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for InsuredParty expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for InsuredParty expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Object({
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc6, ctc2, ctc3, ctc5, ctc2, ctc2, ctc2, ctc4, ctc2, ctc2]);
  const ctc14 = stdlib.T_Token;
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Data({
    CheckExpiry_PlaceClaim0_238: ctc15,
    CheckExpiry_check0_238: ctc15
    });
  const ctc17 = stdlib.T_Tuple([ctc12, ctc2]);
  const ctc18 = stdlib.T_Tuple([ctc12, ctc2, ctc12]);
  const ctc19 = stdlib.T_Tuple([ctc2, ctc2, ctc12]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc9;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc1;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc1;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc1;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc10;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc10;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc10;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: false,
    ty: map9_ctc
    });
  
  
  const v730 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v731 = [v730];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v746, v747], secs: v749, time: v748, didSend: v35, from: v745 } = txn1;
  ;
  const v750 = stdlib.gt(v746, stdlib.checkedBigNumberify('./index.rsh:154:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v750, {
    at: './index.rsh:154:10:application',
    fs: [],
    msg: 'Starting balance must be greater than 0',
    who: 'InsuredParty'
    });
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v753, time: v752, didSend: v43, from: v751 } = txn2;
  ;
  const v756 = stdlib.addressEq(v745, v751);
  stdlib.assert(v756, {
    at: './index.rsh:156:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuredParty'
    });
  const v758 = stdlib.digest([ctc2], [v752]);
  const v761 = stdlib.protect(ctc11, await interact.Insure(), {
    at: './index.rsh:175:54:application',
    fs: ['at ./index.rsh:174:20:application call to [unknown function] (defined at: ./index.rsh:174:24:function exp)'],
    msg: 'Insure',
    who: 'InsuredParty'
    });
  const v767 = v761.Valuation;
  const v768 = v761.Vehicle_purpose;
  const v773 = stdlib.eq(v768, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  let v774;
  if (v773) {
    const v775 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:76:22:decimal', stdlib.UInt_max, '4'), v767, stdlib.checkedBigNumberify('./index.rsh:114:78:decimal', stdlib.UInt_max, '100'));
    v774 = v775;
    }
  else {
    const v776 = stdlib.eq(v768, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    let v777;
    if (v776) {
      const v778 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:77:25:decimal', stdlib.UInt_max, '6'), v767, stdlib.checkedBigNumberify('./index.rsh:115:75:decimal', stdlib.UInt_max, '100'));
      v777 = v778;
      }
    else {
      const v779 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, '5'), v767, stdlib.checkedBigNumberify('./index.rsh:116:44:decimal', stdlib.UInt_max, '100'));
      v777 = v779;
      }
    v774 = v777;
    }
  
  const txn3 = await (ctc.sendrecv({
    args: [v731, v745, v746, v747, v758, v761, v774],
    evt_cnt: 2,
    funcNum: 2,
    lct: v752,
    onlyIf: true,
    out_tys: [ctc11, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v781, v782], secs: v784, time: v783, didSend: v74, from: v780 } = txn3;
      
      ;
      const v785 = v781.Valuation;
      const v786 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v785, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
      const v787 = stdlib.safeMul(v786, stdlib.checkedBigNumberify('./index.rsh:180:31:decimal', stdlib.UInt_max, '3'));
      const v789 = stdlib.lt(v746, v787);
      if (v789) {
        const v796 = stdlib.safeAdd(v783, v747);
        sim_r.isHalt = false;
        }
      else {
        const v1531 = stdlib.safeAdd(v783, v747);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc20, ctc3, ctc2, ctc2, ctc7, ctc11, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v781, v782], secs: v784, time: v783, didSend: v74, from: v780 } = txn3;
  ;
  const v785 = v781.Valuation;
  const v786 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v785, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
  const v787 = stdlib.safeMul(v786, stdlib.checkedBigNumberify('./index.rsh:180:31:decimal', stdlib.UInt_max, '3'));
  const v789 = stdlib.lt(v746, v787);
  if (v789) {
    const v796 = stdlib.safeAdd(v783, v747);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc12],
      timeoutAt: ['time', v796],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v731, v745, v746, v747, v758, v780, v781, v782, v785, v787, v796],
        evt_cnt: 0,
        funcNum: 4,
        lct: v783,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v1511, time: v1510, didSend: v119, from: v1509 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v745,
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
        tys: [ctc20, ctc3, ctc2, ctc2, ctc7, ctc3, ctc11, ctc2, ctc2, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1511, time: v1510, didSend: v119, from: v1509 } = txn5;
      ;
      const v1512 = stdlib.addressEq(v780, v1509);
      const v1513 = stdlib.addressEq(v745, v1509);
      const v1514 = v1512 ? true : v1513;
      stdlib.assert(v1514, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:196:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      ;
      stdlib.protect(ctc0, await interact.NotEnoughFunds(), {
        at: './index.rsh:146:64:application',
        fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:145:17:function exp)', 'at ./index.rsh:196:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'NotEnoughFunds',
        who: 'InsuredParty'
        });
      
      return;
      
      }
    else {
      const {data: [v807], secs: v809, time: v808, didSend: v99, from: v806 } = txn4;
      const v811 = stdlib.safeSub(v787, v746);
      const v813 = stdlib.add(v746, v811);
      ;
      const v814 = stdlib.addressEq(v745, v806);
      stdlib.assert(v814, {
        at: './index.rsh:193:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      const v821 = stdlib.safeAdd(v808, v747);
      const v825 = stdlib.protect(ctc12, await interact.PayInsurance(v782), {
        at: './index.rsh:202:57:application',
        fs: ['at ./index.rsh:201:20:application call to [unknown function] (defined at: ./index.rsh:201:24:function exp)'],
        msg: 'PayInsurance',
        who: 'InsuredParty'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v731, v745, v747, v758, v780, v781, v782, v785, v813, v821, v825],
        evt_cnt: 1,
        funcNum: 5,
        lct: v808,
        onlyIf: v825,
        out_tys: [ctc12],
        pay: [v782, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [v827], secs: v829, time: v828, didSend: v145, from: v826 } = txn5;
          
          const v831 = stdlib.add(v813, v782);
          sim_r.txns.push({
            amt: v782,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v780, null);
          const v835 = stdlib.safeAdd(v828, v747);
          const v836 = v781.Model;
          const v837 = v781.Year;
          const v838 = v781.InsuredParty;
          const v839 = v781.Licence_plate;
          const v840 = v781.Vehicle_purpose;
          const v841 = v781.Insurance_provided;
          const v843 = v781.Kyc;
          const v844 = [v836, v837, v838, v839, v840, v841, v785, v843, v828, v835];
          const v845 = stdlib.digest([ctc13], [v844]);
          const v854 = {
            Consensus_time: v828,
            Expiry_date: v835,
            Insurance_provided: v841,
            InsuredParty: v838,
            Kyc: v843,
            Licence_plate: v839,
            Model: v836,
            Valuation: v785,
            Vehicle_purpose: v840,
            Year: v837,
            hash: v845
            };
          await stdlib.simMapSet(sim_r, 1, v826, v854);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v821],
        tys: [ctc20, ctc3, ctc2, ctc7, ctc3, ctc11, ctc2, ctc2, ctc2, ctc2, ctc12],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v731, v745, v747, v758, v780, v781, v782, v785, v813, v821],
          evt_cnt: 0,
          funcNum: 6,
          lct: v808,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            stdlib.simMapDupe(sim_r, 3, map3);
            stdlib.simMapDupe(sim_r, 4, map4);
            stdlib.simMapDupe(sim_r, 5, map5);
            stdlib.simMapDupe(sim_r, 6, map6);
            stdlib.simMapDupe(sim_r, 7, map7);
            stdlib.simMapDupe(sim_r, 8, map8);
            stdlib.simMapDupe(sim_r, 9, map9);
            
            const {data: [], secs: v1495, time: v1494, didSend: v558, from: v1493 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v745,
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
          tys: [ctc20, ctc3, ctc2, ctc7, ctc3, ctc11, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1495, time: v1494, didSend: v558, from: v1493 } = txn6;
        ;
        const v1496 = stdlib.addressEq(v780, v1493);
        const v1497 = stdlib.addressEq(v745, v1493);
        const v1498 = v1496 ? true : v1497;
        stdlib.assert(v1498, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'InsuredParty'
          });
        ;
        stdlib.protect(ctc0, await interact.InformTimeout(), {
          at: './index.rsh:143:63:application',
          fs: ['at ./index.rsh:143:9:application call to [unknown function] (defined at: ./index.rsh:143:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:142:17:function exp)', 'at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'InformTimeout',
          who: 'InsuredParty'
          });
        
        return;
        
        }
      else {
        const {data: [v827], secs: v829, time: v828, didSend: v145, from: v826 } = txn5;
        const v831 = stdlib.add(v813, v782);
        ;
        const v832 = stdlib.addressEq(v780, v826);
        stdlib.assert(v832, {
          at: './index.rsh:204:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'InsuredParty'
          });
        await stdlib.mapSet(map0, v780, null);
        const v835 = stdlib.safeAdd(v828, v747);
        const v836 = v781.Model;
        const v837 = v781.Year;
        const v838 = v781.InsuredParty;
        const v839 = v781.Licence_plate;
        const v840 = v781.Vehicle_purpose;
        const v841 = v781.Insurance_provided;
        const v843 = v781.Kyc;
        const v844 = [v836, v837, v838, v839, v840, v841, v785, v843, v828, v835];
        const v845 = stdlib.digest([ctc13], [v844]);
        const v854 = {
          Consensus_time: v828,
          Expiry_date: v835,
          Insurance_provided: v841,
          InsuredParty: v838,
          Kyc: v843,
          Licence_plate: v839,
          Model: v836,
          Valuation: v785,
          Vehicle_purpose: v840,
          Year: v837,
          hash: v845
          };
        await stdlib.mapSet(map1, v826, v854);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v860], secs: v862, time: v861, didSend: v183, from: v859 } = txn6;
        ;
        const v863 = stdlib.addressEq(v745, v859);
        stdlib.assert(v863, {
          at: './index.rsh:258:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'InsuredParty'
          });
        const txn7 = await (ctc.sendrecv({
          args: [v731, v745, v758, v780, v831, v836, v839, v843, v860],
          evt_cnt: 0,
          funcNum: 8,
          lct: v861,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:268:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            stdlib.simMapDupe(sim_r, 3, map3);
            stdlib.simMapDupe(sim_r, 4, map4);
            stdlib.simMapDupe(sim_r, 5, map5);
            stdlib.simMapDupe(sim_r, 6, map6);
            stdlib.simMapDupe(sim_r, 7, map7);
            stdlib.simMapDupe(sim_r, 8, map8);
            stdlib.simMapDupe(sim_r, 9, map9);
            
            const {data: [], secs: v869, time: v868, didSend: v191, from: v867 } = txn7;
            
            ;
            const v871 = stdlib.simTokenNew(sim_r, v836, v839, v843, v860, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:265:5:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
            const v872 = await txn7.getOutput('internal', 'v871', ctc14, v871);
            const v882 = v731[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
            const v883 = stdlib.Array_set(v882, '0', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
            const v884 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v883);
            const v886 = v884[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
            const v887 = stdlib.Array_set(v886, '1', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
            const v888 = stdlib.Array_set(v884, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v887);
            const v889 = v888[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
            const v890 = stdlib.Array_set(v889, '2', false);
            const v891 = stdlib.Array_set(v888, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v890);
            const v892 = v891[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc20, ctc3, ctc7, ctc3, ctc2, ctc6, ctc5, ctc4, ctc6],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v869, time: v868, didSend: v191, from: v867 } = txn7;
        ;
        const v870 = stdlib.addressEq(v780, v867);
        stdlib.assert(v870, {
          at: './index.rsh:268:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'InsuredParty'
          });
        const v871 = undefined /* TokenNew */;
        const v872 = await txn7.getOutput('internal', 'v871', ctc14, v871);
        const v882 = v731[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
        const v883 = stdlib.Array_set(v882, '0', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
        const v884 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v883);
        const v886 = v884[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
        const v887 = stdlib.Array_set(v886, '1', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
        const v888 = stdlib.Array_set(v884, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v887);
        const v889 = v888[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
        const v890 = stdlib.Array_set(v889, '2', false);
        const v891 = stdlib.Array_set(v888, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v890);
        const v892 = v891[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '0')];
        const v893 = v892[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '1')];
        const v894 = stdlib.eq(v893, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
        stdlib.assert(v894, {
          at: './index.rsh:270:10:application',
          fs: [],
          msg: null,
          who: 'InsuredParty'
          });
        stdlib.protect(ctc0, await interact.ShowPolicy(v872), {
          at: './index.rsh:287:58:application',
          fs: ['at ./index.rsh:287:7:application call to [unknown function] (defined at: ./index.rsh:287:36:function exp)'],
          msg: 'ShowPolicy',
          who: 'InsuredParty'
          });
        
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 9,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v899, time: v898, didSend: v218, from: v897 } = txn8;
        ;
        const v900 = stdlib.addressEq(v745, v897);
        stdlib.assert(v900, {
          at: './index.rsh:288:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'InsuredParty'
          });
        const v902 = v892[stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0')];
        const v906 = stdlib.sub(v902, stdlib.checkedBigNumberify('./index.rsh:289:12:decimal', stdlib.UInt_max, '1'));
        const v908 = stdlib.Array_set(v892, '0', v906);
        const v909 = stdlib.Array_set(v891, stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0'), v908);
        ;
        let v911 = v898;
        let v917 = v909;
        let v918 = v831;
        
        let txn9 = txn8;
        while (await (async () => {
          const v927 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v928 = v927[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v930 = v927[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
          const v931 = stdlib.lt(v928, v930);
          
          return v931;})()) {
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 11,
            out_tys: [ctc16],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v965], secs: v967, time: v966, didSend: v333, from: v964 } = txn10;
          switch (v965[0]) {
            case 'CheckExpiry_PlaceClaim0_238': {
              const v968 = v965[1];
              undefined /* setApiDetails */;
              ;
              const v977 = v968[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
              const v978 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
              const v979 = {
                None: 0,
                Some: 1
                }[v978[0]];
              const v980 = stdlib.eq(v979, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v980, {
                at: './index.rsh:356:16:application',
                fs: ['at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
                msg: 'You are not insured',
                who: 'InsuredParty'
                });
              const v981 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v964), null);
              const v982 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
              const v983 = '00000000';
              const v984 = '00000000000000000000000000000000';
              const v985 = {
                Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                InsuredParty: v745,
                Kyc: v982,
                Licence_plate: v983,
                Model: v984,
                Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                hash: v758
                };
              const v986 = stdlib.fromSome(v981, v985);
              const v987 = v986.InsuredParty;
              const v988 = stdlib.addressEq(v987, v964);
              const v990 = v986.Expiry_date;
              const v991 = stdlib.lt(v990, v966);
              const v992 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v993 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v964), null);
              const v994 = {
                None: 0,
                Some: 1
                }[v993[0]];
              const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v996 = v995 ? false : true;
              const v997 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const v998 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v964), null);
              const v999 = {
                None: 0,
                Some: 1
                }[v998[0]];
              const v1000 = stdlib.eq(v999, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1001 = v1000 ? false : true;
              const v1002 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              const v1003 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v964), null);
              const v1004 = {
                None: 0,
                Some: 1
                }[v1003[0]];
              const v1005 = stdlib.eq(v1004, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1006 = v1005 ? false : true;
              const v1007 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
              const v1008 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v964), null);
              const v1009 = {
                None: 0,
                Some: 1
                }[v1008[0]];
              const v1010 = stdlib.eq(v1009, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1011 = v1010 ? false : true;
              const v1012 = v1007 ? v1011 : false;
              const v1013 = v1002 ? v1006 : v1012;
              const v1014 = v997 ? v1001 : v1013;
              const v1015 = v992 ? v996 : v1014;
              const v1016 = v986.Valuation;
              let v1018;
              if (v992) {
                const v1019 = stdlib.safeDiv(v1016, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
                v1018 = v1019;
                }
              else {
                let v1021;
                if (v997) {
                  const v1022 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1016, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
                  v1021 = v1022;
                  }
                else {
                  let v1024;
                  if (v1002) {
                    const v1025 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1016, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
                    v1024 = v1025;
                    }
                  else {
                    let v1027;
                    if (v1007) {
                      const v1028 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1016, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
                      v1027 = v1028;
                      }
                    else {
                      v1027 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
                      }
                    v1024 = v1027;
                    }
                  v1021 = v1024;
                  }
                v1018 = v1021;
                }
              const v1029 = v988 ? v991 : false;
              const v1030 = v1029 ? v1015 : false;
              const v1032 = stdlib.gt(v918, v1018);
              const v1033 = v1030 ? v1032 : false;
              if (v1033) {
                const v1039 = stdlib.sub(v918, v1018);
                ;
                const v1040 = [true, v1018];
                await txn10.getOutput('CheckExpiry_PlaceClaim', 'v1040', ctc17, v1040);
                if (v992) {
                  await stdlib.mapSet(map2, v964, null);
                  await stdlib.mapSet(map6, v964, v1018);
                  const cv911 = v966;
                  const cv917 = v917;
                  const cv918 = v1039;
                  
                  v911 = cv911;
                  v917 = cv917;
                  v918 = cv918;
                  
                  txn9 = txn10;
                  continue;}
                else {
                  if (v997) {
                    await stdlib.mapSet(map3, v964, null);
                    await stdlib.mapSet(map7, v964, v1018);
                    const cv911 = v966;
                    const cv917 = v917;
                    const cv918 = v1039;
                    
                    v911 = cv911;
                    v917 = cv917;
                    v918 = cv918;
                    
                    txn9 = txn10;
                    continue;}
                  else {
                    if (v1002) {
                      await stdlib.mapSet(map4, v964, null);
                      await stdlib.mapSet(map8, v964, v1018);
                      const cv911 = v966;
                      const cv917 = v917;
                      const cv918 = v1039;
                      
                      v911 = cv911;
                      v917 = cv917;
                      v918 = cv918;
                      
                      txn9 = txn10;
                      continue;}
                    else {
                      if (v1007) {
                        await stdlib.mapSet(map5, v964, null);
                        await stdlib.mapSet(map9, v964, v1018);
                        const cv911 = v966;
                        const cv917 = v917;
                        const cv918 = v1039;
                        
                        v911 = cv911;
                        v917 = cv917;
                        v918 = cv918;
                        
                        txn9 = txn10;
                        continue;}
                      else {
                        const cv911 = v966;
                        const cv917 = v917;
                        const cv918 = v1039;
                        
                        v911 = cv911;
                        v917 = cv917;
                        v918 = cv918;
                        
                        txn9 = txn10;
                        continue;}}}}}
              else {
                const v1121 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                await txn10.getOutput('CheckExpiry_PlaceClaim', 'v1121', ctc17, v1121);
                const cv911 = v966;
                const cv917 = v917;
                const cv918 = v918;
                
                v911 = cv911;
                v917 = cv917;
                v918 = cv918;
                
                txn9 = txn10;
                continue;}
              break;
              }
            case 'CheckExpiry_check0_238': {
              const v1181 = v965[1];
              undefined /* setApiDetails */;
              ;
              const v1346 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
              const v1347 = {
                None: 0,
                Some: 1
                }[v1346[0]];
              const v1348 = stdlib.eq(v1347, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1348, {
                at: './index.rsh:335:16:application',
                fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
                msg: 'You are not insured',
                who: 'InsuredParty'
                });
              const v1349 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v964), null);
              const v1350 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
              const v1351 = '00000000';
              const v1352 = '00000000000000000000000000000000';
              const v1353 = {
                Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                InsuredParty: v745,
                Kyc: v1350,
                Licence_plate: v1351,
                Model: v1352,
                Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                hash: v758
                };
              const v1354 = stdlib.fromSome(v1349, v1353);
              const v1355 = v1354.InsuredParty;
              const v1356 = stdlib.addressEq(v1355, v964);
              const v1358 = v1354.Expiry_date;
              const v1359 = stdlib.lt(v1358, v966);
              if (v1356) {
                const v1361 = [v1359, v1358, true];
                await txn10.getOutput('CheckExpiry_check', 'v1361', ctc18, v1361);
                if (v1359) {
                  const txn11 = await (ctc.sendrecv({
                    args: [v745, v758, v780, v872, v917, v918],
                    evt_cnt: 0,
                    funcNum: 12,
                    lct: v966,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:343:31:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'), v872]]],
                    sim_p: (async (txn11) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      stdlib.simMapDupe(sim_r, 0, map0);
                      stdlib.simMapDupe(sim_r, 1, map1);
                      stdlib.simMapDupe(sim_r, 2, map2);
                      stdlib.simMapDupe(sim_r, 3, map3);
                      stdlib.simMapDupe(sim_r, 4, map4);
                      stdlib.simMapDupe(sim_r, 5, map5);
                      stdlib.simMapDupe(sim_r, 6, map6);
                      stdlib.simMapDupe(sim_r, 7, map7);
                      stdlib.simMapDupe(sim_r, 8, map8);
                      stdlib.simMapDupe(sim_r, 9, map9);
                      
                      const {data: [], secs: v1373, time: v1372, didSend: v496, from: v1371 } = txn11;
                      
                      ;
                      const v1374 = v917[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                      const v1375 = v1374[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                      const v1376 = stdlib.add(v1375, stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'));
                      const v1378 = stdlib.Array_set(v1374, '0', v1376);
                      const v1379 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0'), v1378);
                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'),
                        kind: 'to',
                        tok: v872
                        });
                      const cv911 = v1372;
                      const cv917 = v1379;
                      const cv918 = v918;
                      
                      await (async () => {
                        const v911 = cv911;
                        const v917 = cv917;
                        const v918 = cv918;
                        
                        if (await (async () => {
                          const v927 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                          const v928 = v927[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                          const v930 = v927[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                          const v931 = stdlib.lt(v928, v930);
                          
                          return v931;})()) {
                          sim_r.isHalt = false;
                          }
                        else {
                          const v1395 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                          if (v1395) {
                            sim_r.txns.push({
                              kind: 'from',
                              to: v745,
                              tok: undefined /* Nothing */
                              });
                            const v1401 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                            const v1402 = v1401[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                            const v1408 = stdlib.sub(v1402, v1402);
                            const v1410 = stdlib.Array_set(v1401, '0', v1408);
                            const v1411 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1410);
                            const v1412 = v1411[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                            const v1413 = v1412[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                            const v1414 = stdlib.sub(v1413, v1402);
                            const v1416 = stdlib.Array_set(v1412, '1', v1414);
                            const v1417 = stdlib.Array_set(v1411, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1416);
                            stdlib.simTokenBurn(sim_r, v872, v1402);
                            const v1418 = v1417[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                            const v1419 = v1418[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                            if (v1419) {
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              }
                            else {
                              
                              stdlib.simTokenDestroy(sim_r, v872);
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              }}
                          else {
                            const v1447 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                            const v1448 = v1447[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                            const v1454 = stdlib.sub(v1448, v1448);
                            const v1456 = stdlib.Array_set(v1447, '0', v1454);
                            const v1457 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1456);
                            const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                            const v1459 = v1458[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                            const v1460 = stdlib.sub(v1459, v1448);
                            const v1462 = stdlib.Array_set(v1458, '1', v1460);
                            const v1463 = stdlib.Array_set(v1457, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1462);
                            stdlib.simTokenBurn(sim_r, v872, v1448);
                            const v1464 = v1463[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                            const v1465 = v1464[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                            if (v1465) {
                              sim_r.txns.push({
                                kind: 'halt',
                                tok: undefined /* Nothing */
                                })
                              sim_r.isHalt = true;
                              }
                            else {
                              
                              stdlib.simTokenDestroy(sim_r, v872);
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
                    tys: [ctc3, ctc7, ctc3, ctc14, ctc20, ctc2],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v1373, time: v1372, didSend: v496, from: v1371 } = txn11;
                  ;
                  const v1374 = v917[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                  const v1375 = v1374[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                  const v1376 = stdlib.add(v1375, stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'));
                  const v1378 = stdlib.Array_set(v1374, '0', v1376);
                  const v1379 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0'), v1378);
                  ;
                  const v1380 = stdlib.addressEq(v780, v1371);
                  stdlib.assert(v1380, {
                    at: './index.rsh:343:26:dot',
                    fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
                    msg: 'sender correct',
                    who: 'InsuredParty'
                    });
                  const cv911 = v1372;
                  const cv917 = v1379;
                  const cv918 = v918;
                  
                  v911 = cv911;
                  v917 = cv917;
                  v918 = cv918;
                  
                  txn9 = txn11;
                  continue;
                  
                  }
                else {
                  const cv911 = v966;
                  const cv917 = v917;
                  const cv918 = v918;
                  
                  v911 = cv911;
                  v917 = cv917;
                  v918 = cv918;
                  
                  txn9 = txn10;
                  continue;}}
              else {
                const v1383 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
                await txn10.getOutput('CheckExpiry_check', 'v1383', ctc18, v1383);
                const cv911 = v966;
                const cv917 = v917;
                const cv918 = v918;
                
                v911 = cv911;
                v917 = cv917;
                v918 = cv918;
                
                txn9 = txn10;
                continue;}
              break;
              }
            }
          
          }
        const v1395 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
        if (v1395) {
          ;
          const v1401 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1402 = v1401[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1408 = stdlib.sub(v1402, v1402);
          const v1410 = stdlib.Array_set(v1401, '0', v1408);
          const v1411 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1410);
          const v1412 = v1411[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1413 = v1412[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
          const v1414 = stdlib.sub(v1413, v1402);
          const v1416 = stdlib.Array_set(v1412, '1', v1414);
          const v1417 = stdlib.Array_set(v1411, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1416);
          undefined /* TokenBurn */;
          const v1418 = v1417[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
          const v1419 = v1418[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
          if (v1419) {
            return;
            }
          else {
            stdlib.protect(ctc0, await interact.TokenDestroyed(), {
              at: './index.rsh:377:41:application',
              fs: ['at ./index.rsh:377:41:application call to [unknown function] (defined at: ./index.rsh:377:41:function exp)', 'at ./index.rsh:377:41:application call to "liftedInteract" (defined at: ./index.rsh:377:41:application)'],
              msg: 'TokenDestroyed',
              who: 'InsuredParty'
              });
            
            undefined /* TokenDestroy */;
            return;
            }}
        else {
          const v1447 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1448 = v1447[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1454 = stdlib.sub(v1448, v1448);
          const v1456 = stdlib.Array_set(v1447, '0', v1454);
          const v1457 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1456);
          const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1459 = v1458[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
          const v1460 = stdlib.sub(v1459, v1448);
          const v1462 = stdlib.Array_set(v1458, '1', v1460);
          const v1463 = stdlib.Array_set(v1457, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1462);
          undefined /* TokenBurn */;
          const v1464 = v1463[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
          const v1465 = v1464[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
          if (v1465) {
            return;
            }
          else {
            stdlib.protect(ctc0, await interact.TokenDestroyed(), {
              at: './index.rsh:377:41:application',
              fs: ['at ./index.rsh:377:41:application call to [unknown function] (defined at: ./index.rsh:377:41:function exp)', 'at ./index.rsh:377:41:application call to "liftedInteract" (defined at: ./index.rsh:377:41:application)'],
              msg: 'TokenDestroyed',
              who: 'InsuredParty'
              });
            
            undefined /* TokenDestroy */;
            return;
            }}
        
        
        
        
        
        }
      
      }
    
    }
  else {
    const v1531 = stdlib.safeAdd(v783, v747);
    const v1535 = stdlib.protect(ctc12, await interact.PayInsurance(v782), {
      at: './index.rsh:202:57:application',
      fs: ['at ./index.rsh:201:20:application call to [unknown function] (defined at: ./index.rsh:201:24:function exp)'],
      msg: 'PayInsurance',
      who: 'InsuredParty'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v731, v745, v746, v747, v758, v780, v781, v782, v785, v1531, v1535],
      evt_cnt: 1,
      funcNum: 13,
      lct: v783,
      onlyIf: v1535,
      out_tys: [ctc12],
      pay: [v782, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        stdlib.simMapDupe(sim_r, 3, map3);
        stdlib.simMapDupe(sim_r, 4, map4);
        stdlib.simMapDupe(sim_r, 5, map5);
        stdlib.simMapDupe(sim_r, 6, map6);
        stdlib.simMapDupe(sim_r, 7, map7);
        stdlib.simMapDupe(sim_r, 8, map8);
        stdlib.simMapDupe(sim_r, 9, map9);
        
        const {data: [v1537], secs: v1539, time: v1538, didSend: v145, from: v1536 } = txn4;
        
        const v1541 = stdlib.add(v746, v782);
        sim_r.txns.push({
          amt: v782,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 0, v780, null);
        const v1545 = stdlib.safeAdd(v1538, v747);
        const v1546 = v781.Model;
        const v1547 = v781.Year;
        const v1548 = v781.InsuredParty;
        const v1549 = v781.Licence_plate;
        const v1550 = v781.Vehicle_purpose;
        const v1551 = v781.Insurance_provided;
        const v1553 = v781.Kyc;
        const v1554 = [v1546, v1547, v1548, v1549, v1550, v1551, v785, v1553, v1538, v1545];
        const v1555 = stdlib.digest([ctc13], [v1554]);
        const v1564 = {
          Consensus_time: v1538,
          Expiry_date: v1545,
          Insurance_provided: v1551,
          InsuredParty: v1548,
          Kyc: v1553,
          Licence_plate: v1549,
          Model: v1546,
          Valuation: v785,
          Vehicle_purpose: v1550,
          Year: v1547,
          hash: v1555
          };
        await stdlib.simMapSet(sim_r, 1, v1536, v1564);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v1531],
      tys: [ctc20, ctc3, ctc2, ctc2, ctc7, ctc3, ctc11, ctc2, ctc2, ctc2, ctc12],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v731, v745, v746, v747, v758, v780, v781, v782, v785, v1531],
        evt_cnt: 0,
        funcNum: 14,
        lct: v783,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v2205, time: v2204, didSend: v558, from: v2203 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v745,
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
        tys: [ctc20, ctc3, ctc2, ctc2, ctc7, ctc3, ctc11, ctc2, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2205, time: v2204, didSend: v558, from: v2203 } = txn5;
      ;
      const v2206 = stdlib.addressEq(v780, v2203);
      const v2207 = stdlib.addressEq(v745, v2203);
      const v2208 = v2206 ? true : v2207;
      stdlib.assert(v2208, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      ;
      stdlib.protect(ctc0, await interact.InformTimeout(), {
        at: './index.rsh:143:63:application',
        fs: ['at ./index.rsh:143:9:application call to [unknown function] (defined at: ./index.rsh:143:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:142:17:function exp)', 'at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'InformTimeout',
        who: 'InsuredParty'
        });
      
      return;
      
      }
    else {
      const {data: [v1537], secs: v1539, time: v1538, didSend: v145, from: v1536 } = txn4;
      const v1541 = stdlib.add(v746, v782);
      ;
      const v1542 = stdlib.addressEq(v780, v1536);
      stdlib.assert(v1542, {
        at: './index.rsh:204:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      await stdlib.mapSet(map0, v780, null);
      const v1545 = stdlib.safeAdd(v1538, v747);
      const v1546 = v781.Model;
      const v1547 = v781.Year;
      const v1548 = v781.InsuredParty;
      const v1549 = v781.Licence_plate;
      const v1550 = v781.Vehicle_purpose;
      const v1551 = v781.Insurance_provided;
      const v1553 = v781.Kyc;
      const v1554 = [v1546, v1547, v1548, v1549, v1550, v1551, v785, v1553, v1538, v1545];
      const v1555 = stdlib.digest([ctc13], [v1554]);
      const v1564 = {
        Consensus_time: v1538,
        Expiry_date: v1545,
        Insurance_provided: v1551,
        InsuredParty: v1548,
        Kyc: v1553,
        Licence_plate: v1549,
        Model: v1546,
        Valuation: v785,
        Vehicle_purpose: v1550,
        Year: v1547,
        hash: v1555
        };
      await stdlib.mapSet(map1, v1536, v1564);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 15,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1570], secs: v1572, time: v1571, didSend: v183, from: v1569 } = txn5;
      ;
      const v1573 = stdlib.addressEq(v745, v1569);
      stdlib.assert(v1573, {
        at: './index.rsh:258:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      const txn6 = await (ctc.sendrecv({
        args: [v731, v745, v758, v780, v1541, v1546, v1549, v1553, v1570],
        evt_cnt: 0,
        funcNum: 16,
        lct: v1571,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:268:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v1579, time: v1578, didSend: v191, from: v1577 } = txn6;
          
          ;
          const v1581 = stdlib.simTokenNew(sim_r, v1546, v1549, v1553, v1570, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('./index.rsh:265:5:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
          const v1582 = await txn6.getOutput('internal', 'v1581', ctc14, v1581);
          const v1592 = v731[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
          const v1593 = stdlib.Array_set(v1592, '0', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
          const v1594 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1593);
          const v1596 = v1594[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
          const v1597 = stdlib.Array_set(v1596, '1', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
          const v1598 = stdlib.Array_set(v1594, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1597);
          const v1599 = v1598[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
          const v1600 = stdlib.Array_set(v1599, '2', false);
          const v1601 = stdlib.Array_set(v1598, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1600);
          const v1602 = v1601[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc20, ctc3, ctc7, ctc3, ctc2, ctc6, ctc5, ctc4, ctc6],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1579, time: v1578, didSend: v191, from: v1577 } = txn6;
      ;
      const v1580 = stdlib.addressEq(v780, v1577);
      stdlib.assert(v1580, {
        at: './index.rsh:268:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      const v1581 = undefined /* TokenNew */;
      const v1582 = await txn6.getOutput('internal', 'v1581', ctc14, v1581);
      const v1592 = v731[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
      const v1593 = stdlib.Array_set(v1592, '0', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
      const v1594 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1593);
      const v1596 = v1594[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
      const v1597 = stdlib.Array_set(v1596, '1', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
      const v1598 = stdlib.Array_set(v1594, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1597);
      const v1599 = v1598[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
      const v1600 = stdlib.Array_set(v1599, '2', false);
      const v1601 = stdlib.Array_set(v1598, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1600);
      const v1602 = v1601[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '0')];
      const v1603 = v1602[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '1')];
      const v1604 = stdlib.eq(v1603, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1604, {
        at: './index.rsh:270:10:application',
        fs: [],
        msg: null,
        who: 'InsuredParty'
        });
      stdlib.protect(ctc0, await interact.ShowPolicy(v1582), {
        at: './index.rsh:287:58:application',
        fs: ['at ./index.rsh:287:7:application call to [unknown function] (defined at: ./index.rsh:287:36:function exp)'],
        msg: 'ShowPolicy',
        who: 'InsuredParty'
        });
      
      const txn7 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 17,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1609, time: v1608, didSend: v218, from: v1607 } = txn7;
      ;
      const v1610 = stdlib.addressEq(v745, v1607);
      stdlib.assert(v1610, {
        at: './index.rsh:288:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'InsuredParty'
        });
      const v1612 = v1602[stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0')];
      const v1616 = stdlib.sub(v1612, stdlib.checkedBigNumberify('./index.rsh:289:12:decimal', stdlib.UInt_max, '1'));
      const v1618 = stdlib.Array_set(v1602, '0', v1616);
      const v1619 = stdlib.Array_set(v1601, stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0'), v1618);
      ;
      let v1621 = v1608;
      let v1627 = v1619;
      let v1628 = v1541;
      
      let txn8 = txn7;
      while (await (async () => {
        const v1637 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v1638 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v1640 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
        const v1641 = stdlib.lt(v1638, v1640);
        
        return v1641;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 19,
          out_tys: [ctc16],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1675], secs: v1677, time: v1676, didSend: v333, from: v1674 } = txn9;
        switch (v1675[0]) {
          case 'CheckExpiry_PlaceClaim0_238': {
            const v1678 = v1675[1];
            undefined /* setApiDetails */;
            ;
            const v1687 = v1678[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
            const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1674), null);
            const v1689 = {
              None: 0,
              Some: 1
              }[v1688[0]];
            const v1690 = stdlib.eq(v1689, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1690, {
              at: './index.rsh:356:16:application',
              fs: ['at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
              msg: 'You are not insured',
              who: 'InsuredParty'
              });
            const v1691 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1674), null);
            const v1692 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            const v1693 = '00000000';
            const v1694 = '00000000000000000000000000000000';
            const v1695 = {
              Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              InsuredParty: v745,
              Kyc: v1692,
              Licence_plate: v1693,
              Model: v1694,
              Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              hash: v758
              };
            const v1696 = stdlib.fromSome(v1691, v1695);
            const v1697 = v1696.InsuredParty;
            const v1698 = stdlib.addressEq(v1697, v1674);
            const v1700 = v1696.Expiry_date;
            const v1701 = stdlib.lt(v1700, v1676);
            const v1702 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v1703 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1674), null);
            const v1704 = {
              None: 0,
              Some: 1
              }[v1703[0]];
            const v1705 = stdlib.eq(v1704, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1706 = v1705 ? false : true;
            const v1707 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v1708 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1674), null);
            const v1709 = {
              None: 0,
              Some: 1
              }[v1708[0]];
            const v1710 = stdlib.eq(v1709, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1711 = v1710 ? false : true;
            const v1712 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v1713 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1674), null);
            const v1714 = {
              None: 0,
              Some: 1
              }[v1713[0]];
            const v1715 = stdlib.eq(v1714, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1716 = v1715 ? false : true;
            const v1717 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
            const v1718 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1674), null);
            const v1719 = {
              None: 0,
              Some: 1
              }[v1718[0]];
            const v1720 = stdlib.eq(v1719, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1721 = v1720 ? false : true;
            const v1722 = v1717 ? v1721 : false;
            const v1723 = v1712 ? v1716 : v1722;
            const v1724 = v1707 ? v1711 : v1723;
            const v1725 = v1702 ? v1706 : v1724;
            const v1726 = v1696.Valuation;
            let v1728;
            if (v1702) {
              const v1729 = stdlib.safeDiv(v1726, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
              v1728 = v1729;
              }
            else {
              let v1731;
              if (v1707) {
                const v1732 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1726, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
                v1731 = v1732;
                }
              else {
                let v1734;
                if (v1712) {
                  const v1735 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1726, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
                  v1734 = v1735;
                  }
                else {
                  let v1737;
                  if (v1717) {
                    const v1738 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1726, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
                    v1737 = v1738;
                    }
                  else {
                    v1737 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
                    }
                  v1734 = v1737;
                  }
                v1731 = v1734;
                }
              v1728 = v1731;
              }
            const v1739 = v1698 ? v1701 : false;
            const v1740 = v1739 ? v1725 : false;
            const v1742 = stdlib.gt(v1628, v1728);
            const v1743 = v1740 ? v1742 : false;
            if (v1743) {
              const v1749 = stdlib.sub(v1628, v1728);
              ;
              const v1750 = [true, v1728];
              await txn9.getOutput('CheckExpiry_PlaceClaim', 'v1750', ctc17, v1750);
              if (v1702) {
                await stdlib.mapSet(map2, v1674, null);
                await stdlib.mapSet(map6, v1674, v1728);
                const cv1621 = v1676;
                const cv1627 = v1627;
                const cv1628 = v1749;
                
                v1621 = cv1621;
                v1627 = cv1627;
                v1628 = cv1628;
                
                txn8 = txn9;
                continue;}
              else {
                if (v1707) {
                  await stdlib.mapSet(map3, v1674, null);
                  await stdlib.mapSet(map7, v1674, v1728);
                  const cv1621 = v1676;
                  const cv1627 = v1627;
                  const cv1628 = v1749;
                  
                  v1621 = cv1621;
                  v1627 = cv1627;
                  v1628 = cv1628;
                  
                  txn8 = txn9;
                  continue;}
                else {
                  if (v1712) {
                    await stdlib.mapSet(map4, v1674, null);
                    await stdlib.mapSet(map8, v1674, v1728);
                    const cv1621 = v1676;
                    const cv1627 = v1627;
                    const cv1628 = v1749;
                    
                    v1621 = cv1621;
                    v1627 = cv1627;
                    v1628 = cv1628;
                    
                    txn8 = txn9;
                    continue;}
                  else {
                    if (v1717) {
                      await stdlib.mapSet(map5, v1674, null);
                      await stdlib.mapSet(map9, v1674, v1728);
                      const cv1621 = v1676;
                      const cv1627 = v1627;
                      const cv1628 = v1749;
                      
                      v1621 = cv1621;
                      v1627 = cv1627;
                      v1628 = cv1628;
                      
                      txn8 = txn9;
                      continue;}
                    else {
                      const cv1621 = v1676;
                      const cv1627 = v1627;
                      const cv1628 = v1749;
                      
                      v1621 = cv1621;
                      v1627 = cv1627;
                      v1628 = cv1628;
                      
                      txn8 = txn9;
                      continue;}}}}}
            else {
              const v1831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn9.getOutput('CheckExpiry_PlaceClaim', 'v1831', ctc17, v1831);
              const cv1621 = v1676;
              const cv1627 = v1627;
              const cv1628 = v1628;
              
              v1621 = cv1621;
              v1627 = cv1627;
              v1628 = cv1628;
              
              txn8 = txn9;
              continue;}
            break;
            }
          case 'CheckExpiry_check0_238': {
            const v1891 = v1675[1];
            undefined /* setApiDetails */;
            ;
            const v2056 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1674), null);
            const v2057 = {
              None: 0,
              Some: 1
              }[v2056[0]];
            const v2058 = stdlib.eq(v2057, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v2058, {
              at: './index.rsh:335:16:application',
              fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
              msg: 'You are not insured',
              who: 'InsuredParty'
              });
            const v2059 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1674), null);
            const v2060 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            const v2061 = '00000000';
            const v2062 = '00000000000000000000000000000000';
            const v2063 = {
              Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              InsuredParty: v745,
              Kyc: v2060,
              Licence_plate: v2061,
              Model: v2062,
              Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              hash: v758
              };
            const v2064 = stdlib.fromSome(v2059, v2063);
            const v2065 = v2064.InsuredParty;
            const v2066 = stdlib.addressEq(v2065, v1674);
            const v2068 = v2064.Expiry_date;
            const v2069 = stdlib.lt(v2068, v1676);
            if (v2066) {
              const v2071 = [v2069, v2068, true];
              await txn9.getOutput('CheckExpiry_check', 'v2071', ctc18, v2071);
              if (v2069) {
                const txn10 = await (ctc.sendrecv({
                  args: [v745, v758, v780, v1582, v1627, v1628],
                  evt_cnt: 0,
                  funcNum: 20,
                  lct: v1676,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:343:31:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'), v1582]]],
                  sim_p: (async (txn10) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    stdlib.simMapDupe(sim_r, 0, map0);
                    stdlib.simMapDupe(sim_r, 1, map1);
                    stdlib.simMapDupe(sim_r, 2, map2);
                    stdlib.simMapDupe(sim_r, 3, map3);
                    stdlib.simMapDupe(sim_r, 4, map4);
                    stdlib.simMapDupe(sim_r, 5, map5);
                    stdlib.simMapDupe(sim_r, 6, map6);
                    stdlib.simMapDupe(sim_r, 7, map7);
                    stdlib.simMapDupe(sim_r, 8, map8);
                    stdlib.simMapDupe(sim_r, 9, map9);
                    
                    const {data: [], secs: v2083, time: v2082, didSend: v496, from: v2081 } = txn10;
                    
                    ;
                    const v2084 = v1627[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                    const v2085 = v2084[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                    const v2086 = stdlib.add(v2085, stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'));
                    const v2088 = stdlib.Array_set(v2084, '0', v2086);
                    const v2089 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0'), v2088);
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'),
                      kind: 'to',
                      tok: v1582
                      });
                    const cv1621 = v2082;
                    const cv1627 = v2089;
                    const cv1628 = v1628;
                    
                    await (async () => {
                      const v1621 = cv1621;
                      const v1627 = cv1627;
                      const v1628 = cv1628;
                      
                      if (await (async () => {
                        const v1637 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                        const v1638 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
                        const v1640 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
                        const v1641 = stdlib.lt(v1638, v1640);
                        
                        return v1641;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        const v2105 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
                        if (v2105) {
                          sim_r.txns.push({
                            kind: 'from',
                            to: v745,
                            tok: undefined /* Nothing */
                            });
                          const v2111 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                          const v2112 = v2111[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                          const v2118 = stdlib.sub(v2112, v2112);
                          const v2120 = stdlib.Array_set(v2111, '0', v2118);
                          const v2121 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2120);
                          const v2122 = v2121[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                          const v2123 = v2122[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                          const v2124 = stdlib.sub(v2123, v2112);
                          const v2126 = stdlib.Array_set(v2122, '1', v2124);
                          const v2127 = stdlib.Array_set(v2121, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2126);
                          stdlib.simTokenBurn(sim_r, v1582, v2112);
                          const v2128 = v2127[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                          const v2129 = v2128[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                          if (v2129) {
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }
                          else {
                            
                            stdlib.simTokenDestroy(sim_r, v1582);
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }}
                        else {
                          const v2157 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                          const v2158 = v2157[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                          const v2164 = stdlib.sub(v2158, v2158);
                          const v2166 = stdlib.Array_set(v2157, '0', v2164);
                          const v2167 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2166);
                          const v2168 = v2167[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                          const v2169 = v2168[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                          const v2170 = stdlib.sub(v2169, v2158);
                          const v2172 = stdlib.Array_set(v2168, '1', v2170);
                          const v2173 = stdlib.Array_set(v2167, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2172);
                          stdlib.simTokenBurn(sim_r, v1582, v2158);
                          const v2174 = v2173[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                          const v2175 = v2174[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                          if (v2175) {
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }
                          else {
                            
                            stdlib.simTokenDestroy(sim_r, v1582);
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
                  tys: [ctc3, ctc7, ctc3, ctc14, ctc20, ctc2],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v2083, time: v2082, didSend: v496, from: v2081 } = txn10;
                ;
                const v2084 = v1627[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                const v2085 = v2084[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                const v2086 = stdlib.add(v2085, stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'));
                const v2088 = stdlib.Array_set(v2084, '0', v2086);
                const v2089 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0'), v2088);
                ;
                const v2090 = stdlib.addressEq(v780, v2081);
                stdlib.assert(v2090, {
                  at: './index.rsh:343:26:dot',
                  fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
                  msg: 'sender correct',
                  who: 'InsuredParty'
                  });
                const cv1621 = v2082;
                const cv1627 = v2089;
                const cv1628 = v1628;
                
                v1621 = cv1621;
                v1627 = cv1627;
                v1628 = cv1628;
                
                txn8 = txn10;
                continue;
                
                }
              else {
                const cv1621 = v1676;
                const cv1627 = v1627;
                const cv1628 = v1628;
                
                v1621 = cv1621;
                v1627 = cv1627;
                v1628 = cv1628;
                
                txn8 = txn9;
                continue;}}
            else {
              const v2093 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
              await txn9.getOutput('CheckExpiry_check', 'v2093', ctc18, v2093);
              const cv1621 = v1676;
              const cv1627 = v1627;
              const cv1628 = v1628;
              
              v1621 = cv1621;
              v1627 = cv1627;
              v1628 = cv1628;
              
              txn8 = txn9;
              continue;}
            break;
            }
          }
        
        }
      const v2105 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
      if (v2105) {
        ;
        const v2111 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2112 = v2111[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2118 = stdlib.sub(v2112, v2112);
        const v2120 = stdlib.Array_set(v2111, '0', v2118);
        const v2121 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2120);
        const v2122 = v2121[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2123 = v2122[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
        const v2124 = stdlib.sub(v2123, v2112);
        const v2126 = stdlib.Array_set(v2122, '1', v2124);
        const v2127 = stdlib.Array_set(v2121, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2126);
        undefined /* TokenBurn */;
        const v2128 = v2127[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
        const v2129 = v2128[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
        if (v2129) {
          return;
          }
        else {
          stdlib.protect(ctc0, await interact.TokenDestroyed(), {
            at: './index.rsh:377:41:application',
            fs: ['at ./index.rsh:377:41:application call to [unknown function] (defined at: ./index.rsh:377:41:function exp)', 'at ./index.rsh:377:41:application call to "liftedInteract" (defined at: ./index.rsh:377:41:application)'],
            msg: 'TokenDestroyed',
            who: 'InsuredParty'
            });
          
          undefined /* TokenDestroy */;
          return;
          }}
      else {
        const v2157 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2158 = v2157[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2164 = stdlib.sub(v2158, v2158);
        const v2166 = stdlib.Array_set(v2157, '0', v2164);
        const v2167 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2166);
        const v2168 = v2167[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2169 = v2168[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
        const v2170 = stdlib.sub(v2169, v2158);
        const v2172 = stdlib.Array_set(v2168, '1', v2170);
        const v2173 = stdlib.Array_set(v2167, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2172);
        undefined /* TokenBurn */;
        const v2174 = v2173[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
        const v2175 = v2174[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
        if (v2175) {
          return;
          }
        else {
          stdlib.protect(ctc0, await interact.TokenDestroyed(), {
            at: './index.rsh:377:41:application',
            fs: ['at ./index.rsh:377:41:application call to [unknown function] (defined at: ./index.rsh:377:41:function exp)', 'at ./index.rsh:377:41:application call to "liftedInteract" (defined at: ./index.rsh:377:41:application)'],
            msg: 'TokenDestroyed',
            who: 'InsuredParty'
            });
          
          undefined /* TokenDestroy */;
          return;
          }}
      
      
      
      
      
      }
    
    }
  
  
  
  
  
  };
export async function Insurer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Insurer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Insurer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Object({
    Consensus_time: ctc2,
    Expiry_date: ctc2,
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2,
    hash: ctc7
    });
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc12 = stdlib.T_Object({
    Insurance_provided: ctc2,
    InsuredParty: ctc3,
    Kyc: ctc4,
    Licence_plate: ctc5,
    Model: ctc6,
    Valuation: ctc2,
    Vehicle_purpose: ctc2,
    Year: ctc2
    });
  const ctc13 = stdlib.T_Bool;
  const ctc14 = stdlib.T_Tuple([ctc6, ctc2, ctc3, ctc5, ctc2, ctc2, ctc2, ctc4, ctc2, ctc2]);
  const ctc15 = stdlib.T_Token;
  const ctc16 = stdlib.T_Tuple([ctc2]);
  const ctc17 = stdlib.T_Data({
    CheckExpiry_PlaceClaim0_238: ctc16,
    CheckExpiry_check0_238: ctc16
    });
  const ctc18 = stdlib.T_Tuple([ctc13, ctc2]);
  const ctc19 = stdlib.T_Tuple([ctc13, ctc2, ctc13]);
  const ctc20 = stdlib.T_Tuple([ctc2, ctc2, ctc13]);
  const ctc21 = stdlib.T_Array(ctc20, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc9;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc1;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc1;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc1;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  const map6_ctc = ctc10;
  const map6 = stdlib.newMap({
    ctc: ctc,
    idx: 6,
    isAPI: false,
    ty: map6_ctc
    });
  
  const map7_ctc = ctc10;
  const map7 = stdlib.newMap({
    ctc: ctc,
    idx: 7,
    isAPI: false,
    ty: map7_ctc
    });
  
  const map8_ctc = ctc10;
  const map8 = stdlib.newMap({
    ctc: ctc,
    idx: 8,
    isAPI: false,
    ty: map8_ctc
    });
  
  const map9_ctc = ctc10;
  const map9 = stdlib.newMap({
    ctc: ctc,
    idx: 9,
    isAPI: false,
    ty: map9_ctc
    });
  
  
  const v730 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v731 = [v730];
  const v737 = stdlib.protect(ctc11, await interact.StartingBalance(), {
    at: './index.rsh:150:66:application',
    fs: ['at ./index.rsh:149:15:application call to [unknown function] (defined at: ./index.rsh:149:19:function exp)'],
    msg: 'StartingBalance',
    who: 'Insurer'
    });
  const v738 = v737[stdlib.checkedBigNumberify('./index.rsh:150:66:application', stdlib.UInt_max, '0')];
  const v739 = v737[stdlib.checkedBigNumberify('./index.rsh:150:66:application', stdlib.UInt_max, '1')];
  const v742 = stdlib.gt(v738, stdlib.checkedBigNumberify('./index.rsh:151:20:decimal', stdlib.UInt_max, '0'));
  const v743 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:151:36:decimal', stdlib.UInt_max, '0'));
  const v744 = v742 ? v743 : false;
  stdlib.assert(v744, {
    at: './index.rsh:151:11:application',
    fs: ['at ./index.rsh:149:15:application call to [unknown function] (defined at: ./index.rsh:149:19:function exp)'],
    msg: 'Starting balance must be greater than 0',
    who: 'Insurer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v738, v739],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:153:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:153:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [v746, v747], secs: v749, time: v748, didSend: v35, from: v745 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v746, v747], secs: v749, time: v748, didSend: v35, from: v745 } = txn1;
  ;
  const v750 = stdlib.gt(v746, stdlib.checkedBigNumberify('./index.rsh:154:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v750, {
    at: './index.rsh:154:10:application',
    fs: [],
    msg: 'Starting balance must be greater than 0',
    who: 'Insurer'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v731, v745, v746, v747],
    evt_cnt: 0,
    funcNum: 1,
    lct: v748,
    onlyIf: true,
    out_tys: [],
    pay: [v746, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      stdlib.simMapDupe(sim_r, 6, map6);
      stdlib.simMapDupe(sim_r, 7, map7);
      stdlib.simMapDupe(sim_r, 8, map8);
      stdlib.simMapDupe(sim_r, 9, map9);
      
      const {data: [], secs: v753, time: v752, didSend: v43, from: v751 } = txn2;
      
      sim_r.txns.push({
        amt: v746,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v758 = stdlib.digest([ctc2], [v752]);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc21, ctc3, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v753, time: v752, didSend: v43, from: v751 } = txn2;
  ;
  const v756 = stdlib.addressEq(v745, v751);
  stdlib.assert(v756, {
    at: './index.rsh:156:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Insurer'
    });
  const v758 = stdlib.digest([ctc2], [v752]);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc12, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v781, v782], secs: v784, time: v783, didSend: v74, from: v780 } = txn3;
  ;
  const v785 = v781.Valuation;
  const v786 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v785, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
  const v787 = stdlib.safeMul(v786, stdlib.checkedBigNumberify('./index.rsh:180:31:decimal', stdlib.UInt_max, '3'));
  const v789 = stdlib.lt(v746, v787);
  if (v789) {
    const v796 = stdlib.safeAdd(v783, v747);
    const v802 = stdlib.safeSub(v787, v746);
    const v803 = stdlib.protect(ctc13, await interact.AddFunds(v746, v802), {
      at: './index.rsh:191:48:application',
      fs: ['at ./index.rsh:190:17:application call to [unknown function] (defined at: ./index.rsh:190:20:function exp)'],
      msg: 'AddFunds',
      who: 'Insurer'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v731, v745, v746, v747, v758, v780, v781, v782, v785, v787, v796, v803],
      evt_cnt: 1,
      funcNum: 3,
      lct: v783,
      onlyIf: v803,
      out_tys: [ctc13],
      pay: [v802, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        stdlib.simMapDupe(sim_r, 3, map3);
        stdlib.simMapDupe(sim_r, 4, map4);
        stdlib.simMapDupe(sim_r, 5, map5);
        stdlib.simMapDupe(sim_r, 6, map6);
        stdlib.simMapDupe(sim_r, 7, map7);
        stdlib.simMapDupe(sim_r, 8, map8);
        stdlib.simMapDupe(sim_r, 9, map9);
        
        const {data: [v807], secs: v809, time: v808, didSend: v99, from: v806 } = txn4;
        
        const v811 = stdlib.safeSub(v787, v746);
        const v813 = stdlib.add(v746, v811);
        sim_r.txns.push({
          amt: v811,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v821 = stdlib.safeAdd(v808, v747);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v796],
      tys: [ctc21, ctc3, ctc2, ctc2, ctc7, ctc3, ctc12, ctc2, ctc2, ctc2, ctc2, ctc13],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v731, v745, v746, v747, v758, v780, v781, v782, v785, v787, v796],
        evt_cnt: 0,
        funcNum: 4,
        lct: v783,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v1511, time: v1510, didSend: v119, from: v1509 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v745,
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
        tys: [ctc21, ctc3, ctc2, ctc2, ctc7, ctc3, ctc12, ctc2, ctc2, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1511, time: v1510, didSend: v119, from: v1509 } = txn5;
      ;
      const v1512 = stdlib.addressEq(v780, v1509);
      const v1513 = stdlib.addressEq(v745, v1509);
      const v1514 = v1512 ? true : v1513;
      stdlib.assert(v1514, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:196:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Insurer'
        });
      ;
      stdlib.protect(ctc0, await interact.NotEnoughFunds(), {
        at: './index.rsh:146:64:application',
        fs: ['at ./index.rsh:146:9:application call to [unknown function] (defined at: ./index.rsh:146:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:145:17:function exp)', 'at ./index.rsh:196:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'NotEnoughFunds',
        who: 'Insurer'
        });
      
      return;
      
      }
    else {
      const {data: [v807], secs: v809, time: v808, didSend: v99, from: v806 } = txn4;
      const v811 = stdlib.safeSub(v787, v746);
      const v813 = stdlib.add(v746, v811);
      ;
      const v814 = stdlib.addressEq(v745, v806);
      stdlib.assert(v814, {
        at: './index.rsh:193:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurer'
        });
      const v821 = stdlib.safeAdd(v808, v747);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc13],
        timeoutAt: ['time', v821],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v731, v745, v747, v758, v780, v781, v782, v785, v813, v821],
          evt_cnt: 0,
          funcNum: 6,
          lct: v808,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            stdlib.simMapDupe(sim_r, 3, map3);
            stdlib.simMapDupe(sim_r, 4, map4);
            stdlib.simMapDupe(sim_r, 5, map5);
            stdlib.simMapDupe(sim_r, 6, map6);
            stdlib.simMapDupe(sim_r, 7, map7);
            stdlib.simMapDupe(sim_r, 8, map8);
            stdlib.simMapDupe(sim_r, 9, map9);
            
            const {data: [], secs: v1495, time: v1494, didSend: v558, from: v1493 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v745,
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
          tys: [ctc21, ctc3, ctc2, ctc7, ctc3, ctc12, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1495, time: v1494, didSend: v558, from: v1493 } = txn6;
        ;
        const v1496 = stdlib.addressEq(v780, v1493);
        const v1497 = stdlib.addressEq(v745, v1493);
        const v1498 = v1496 ? true : v1497;
        stdlib.assert(v1498, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Insurer'
          });
        ;
        stdlib.protect(ctc0, await interact.InformTimeout(), {
          at: './index.rsh:143:63:application',
          fs: ['at ./index.rsh:143:9:application call to [unknown function] (defined at: ./index.rsh:143:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:142:17:function exp)', 'at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'InformTimeout',
          who: 'Insurer'
          });
        
        return;
        
        }
      else {
        const {data: [v827], secs: v829, time: v828, didSend: v145, from: v826 } = txn5;
        const v831 = stdlib.add(v813, v782);
        ;
        const v832 = stdlib.addressEq(v780, v826);
        stdlib.assert(v832, {
          at: './index.rsh:204:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Insurer'
          });
        await stdlib.mapSet(map0, v780, null);
        const v835 = stdlib.safeAdd(v828, v747);
        const v836 = v781.Model;
        const v837 = v781.Year;
        const v838 = v781.InsuredParty;
        const v839 = v781.Licence_plate;
        const v840 = v781.Vehicle_purpose;
        const v841 = v781.Insurance_provided;
        const v843 = v781.Kyc;
        const v844 = [v836, v837, v838, v839, v840, v841, v785, v843, v828, v835];
        const v845 = stdlib.digest([ctc14], [v844]);
        const v854 = {
          Consensus_time: v828,
          Expiry_date: v835,
          Insurance_provided: v841,
          InsuredParty: v838,
          Kyc: v843,
          Licence_plate: v839,
          Model: v836,
          Valuation: v785,
          Vehicle_purpose: v840,
          Year: v837,
          hash: v845
          };
        await stdlib.mapSet(map1, v826, v854);
        const v858 = stdlib.protect(ctc6, await interact.ShowMeta(v845, v854), {
          at: './index.rsh:256:46:application',
          fs: ['at ./index.rsh:254:15:application call to [unknown function] (defined at: ./index.rsh:254:19:function exp)'],
          msg: 'ShowMeta',
          who: 'Insurer'
          });
        
        const txn6 = await (ctc.sendrecv({
          args: [v731, v745, v758, v780, v831, v836, v839, v843, v858],
          evt_cnt: 1,
          funcNum: 7,
          lct: v828,
          onlyIf: true,
          out_tys: [ctc6],
          pay: [stdlib.checkedBigNumberify('./index.rsh:258:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            stdlib.simMapDupe(sim_r, 3, map3);
            stdlib.simMapDupe(sim_r, 4, map4);
            stdlib.simMapDupe(sim_r, 5, map5);
            stdlib.simMapDupe(sim_r, 6, map6);
            stdlib.simMapDupe(sim_r, 7, map7);
            stdlib.simMapDupe(sim_r, 8, map8);
            stdlib.simMapDupe(sim_r, 9, map9);
            
            const {data: [v860], secs: v862, time: v861, didSend: v183, from: v859 } = txn6;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc21, ctc3, ctc7, ctc3, ctc2, ctc6, ctc5, ctc4, ctc6],
          waitIfNotPresent: false
          }));
        const {data: [v860], secs: v862, time: v861, didSend: v183, from: v859 } = txn6;
        ;
        const v863 = stdlib.addressEq(v745, v859);
        stdlib.assert(v863, {
          at: './index.rsh:258:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Insurer'
          });
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 8,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v869, time: v868, didSend: v191, from: v867 } = txn7;
        ;
        const v870 = stdlib.addressEq(v780, v867);
        stdlib.assert(v870, {
          at: './index.rsh:268:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Insurer'
          });
        const v871 = undefined /* TokenNew */;
        const v872 = await txn7.getOutput('internal', 'v871', ctc15, v871);
        const v882 = v731[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
        const v883 = stdlib.Array_set(v882, '0', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
        const v884 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v883);
        const v886 = v884[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
        const v887 = stdlib.Array_set(v886, '1', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
        const v888 = stdlib.Array_set(v884, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v887);
        const v889 = v888[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
        const v890 = stdlib.Array_set(v889, '2', false);
        const v891 = stdlib.Array_set(v888, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v890);
        const v892 = v891[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '0')];
        const v893 = v892[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '1')];
        const v894 = stdlib.eq(v893, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
        stdlib.assert(v894, {
          at: './index.rsh:270:10:application',
          fs: [],
          msg: null,
          who: 'Insurer'
          });
        stdlib.protect(ctc0, await interact.ShowPolicy(v872), {
          at: './index.rsh:287:58:application',
          fs: ['at ./index.rsh:287:7:application call to [unknown function] (defined at: ./index.rsh:287:36:function exp)'],
          msg: 'ShowPolicy',
          who: 'Insurer'
          });
        
        const txn8 = await (ctc.sendrecv({
          args: [v745, v758, v780, v831, v872, v891, v892],
          evt_cnt: 0,
          funcNum: 9,
          lct: v868,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:288:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            stdlib.simMapDupe(sim_r, 3, map3);
            stdlib.simMapDupe(sim_r, 4, map4);
            stdlib.simMapDupe(sim_r, 5, map5);
            stdlib.simMapDupe(sim_r, 6, map6);
            stdlib.simMapDupe(sim_r, 7, map7);
            stdlib.simMapDupe(sim_r, 8, map8);
            stdlib.simMapDupe(sim_r, 9, map9);
            
            const {data: [], secs: v899, time: v898, didSend: v218, from: v897 } = txn8;
            
            ;
            const v902 = v892[stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0')];
            const v906 = stdlib.sub(v902, stdlib.checkedBigNumberify('./index.rsh:289:12:decimal', stdlib.UInt_max, '1'));
            const v908 = stdlib.Array_set(v892, '0', v906);
            const v909 = stdlib.Array_set(v891, stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0'), v908);
            sim_r.txns.push({
              kind: 'from',
              to: v780,
              tok: v872
              });
            const v911 = v898;
            const v917 = v909;
            const v918 = v831;
            
            if (await (async () => {
              const v927 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v928 = v927[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
              const v930 = v927[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
              const v931 = stdlib.lt(v928, v930);
              
              return v931;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v1395 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
              if (v1395) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v745,
                  tok: undefined /* Nothing */
                  });
                const v1401 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v1402 = v1401[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v1408 = stdlib.sub(v1402, v1402);
                const v1410 = stdlib.Array_set(v1401, '0', v1408);
                const v1411 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1410);
                const v1412 = v1411[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v1413 = v1412[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v1414 = stdlib.sub(v1413, v1402);
                const v1416 = stdlib.Array_set(v1412, '1', v1414);
                const v1417 = stdlib.Array_set(v1411, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1416);
                stdlib.simTokenBurn(sim_r, v872, v1402);
                const v1418 = v1417[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v1419 = v1418[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v1419) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v872);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v1447 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v1448 = v1447[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v1454 = stdlib.sub(v1448, v1448);
                const v1456 = stdlib.Array_set(v1447, '0', v1454);
                const v1457 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1456);
                const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
                const v1459 = v1458[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
                const v1460 = stdlib.sub(v1459, v1448);
                const v1462 = stdlib.Array_set(v1458, '1', v1460);
                const v1463 = stdlib.Array_set(v1457, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1462);
                stdlib.simTokenBurn(sim_r, v872, v1448);
                const v1464 = v1463[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
                const v1465 = v1464[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
                if (v1465) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v872);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc7, ctc3, ctc2, ctc15, ctc21, ctc20],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v899, time: v898, didSend: v218, from: v897 } = txn8;
        ;
        const v900 = stdlib.addressEq(v745, v897);
        stdlib.assert(v900, {
          at: './index.rsh:288:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Insurer'
          });
        const v902 = v892[stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0')];
        const v906 = stdlib.sub(v902, stdlib.checkedBigNumberify('./index.rsh:289:12:decimal', stdlib.UInt_max, '1'));
        const v908 = stdlib.Array_set(v892, '0', v906);
        const v909 = stdlib.Array_set(v891, stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0'), v908);
        ;
        let v911 = v898;
        let v917 = v909;
        let v918 = v831;
        
        let txn9 = txn8;
        while (await (async () => {
          const v927 = v917[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v928 = v927[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
          const v930 = v927[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
          const v931 = stdlib.lt(v928, v930);
          
          return v931;})()) {
          const txn10 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 11,
            out_tys: [ctc17],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v965], secs: v967, time: v966, didSend: v333, from: v964 } = txn10;
          switch (v965[0]) {
            case 'CheckExpiry_PlaceClaim0_238': {
              const v968 = v965[1];
              undefined /* setApiDetails */;
              ;
              const v977 = v968[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
              const v978 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
              const v979 = {
                None: 0,
                Some: 1
                }[v978[0]];
              const v980 = stdlib.eq(v979, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v980, {
                at: './index.rsh:356:16:application',
                fs: ['at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
                msg: 'You are not insured',
                who: 'Insurer'
                });
              const v981 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v964), null);
              const v982 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
              const v983 = '00000000';
              const v984 = '00000000000000000000000000000000';
              const v985 = {
                Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                InsuredParty: v745,
                Kyc: v982,
                Licence_plate: v983,
                Model: v984,
                Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                hash: v758
                };
              const v986 = stdlib.fromSome(v981, v985);
              const v987 = v986.InsuredParty;
              const v988 = stdlib.addressEq(v987, v964);
              const v990 = v986.Expiry_date;
              const v991 = stdlib.lt(v990, v966);
              const v992 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v993 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v964), null);
              const v994 = {
                None: 0,
                Some: 1
                }[v993[0]];
              const v995 = stdlib.eq(v994, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v996 = v995 ? false : true;
              const v997 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
              const v998 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v964), null);
              const v999 = {
                None: 0,
                Some: 1
                }[v998[0]];
              const v1000 = stdlib.eq(v999, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1001 = v1000 ? false : true;
              const v1002 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              const v1003 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v964), null);
              const v1004 = {
                None: 0,
                Some: 1
                }[v1003[0]];
              const v1005 = stdlib.eq(v1004, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1006 = v1005 ? false : true;
              const v1007 = stdlib.eq(v977, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
              const v1008 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v964), null);
              const v1009 = {
                None: 0,
                Some: 1
                }[v1008[0]];
              const v1010 = stdlib.eq(v1009, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1011 = v1010 ? false : true;
              const v1012 = v1007 ? v1011 : false;
              const v1013 = v1002 ? v1006 : v1012;
              const v1014 = v997 ? v1001 : v1013;
              const v1015 = v992 ? v996 : v1014;
              const v1016 = v986.Valuation;
              let v1018;
              if (v992) {
                const v1019 = stdlib.safeDiv(v1016, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
                v1018 = v1019;
                }
              else {
                let v1021;
                if (v997) {
                  const v1022 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1016, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
                  v1021 = v1022;
                  }
                else {
                  let v1024;
                  if (v1002) {
                    const v1025 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1016, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
                    v1024 = v1025;
                    }
                  else {
                    let v1027;
                    if (v1007) {
                      const v1028 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1016, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
                      v1027 = v1028;
                      }
                    else {
                      v1027 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
                      }
                    v1024 = v1027;
                    }
                  v1021 = v1024;
                  }
                v1018 = v1021;
                }
              const v1029 = v988 ? v991 : false;
              const v1030 = v1029 ? v1015 : false;
              const v1032 = stdlib.gt(v918, v1018);
              const v1033 = v1030 ? v1032 : false;
              if (v1033) {
                const v1039 = stdlib.sub(v918, v1018);
                ;
                const v1040 = [true, v1018];
                await txn10.getOutput('CheckExpiry_PlaceClaim', 'v1040', ctc18, v1040);
                if (v992) {
                  await stdlib.mapSet(map2, v964, null);
                  await stdlib.mapSet(map6, v964, v1018);
                  const cv911 = v966;
                  const cv917 = v917;
                  const cv918 = v1039;
                  
                  v911 = cv911;
                  v917 = cv917;
                  v918 = cv918;
                  
                  txn9 = txn10;
                  continue;}
                else {
                  if (v997) {
                    await stdlib.mapSet(map3, v964, null);
                    await stdlib.mapSet(map7, v964, v1018);
                    const cv911 = v966;
                    const cv917 = v917;
                    const cv918 = v1039;
                    
                    v911 = cv911;
                    v917 = cv917;
                    v918 = cv918;
                    
                    txn9 = txn10;
                    continue;}
                  else {
                    if (v1002) {
                      await stdlib.mapSet(map4, v964, null);
                      await stdlib.mapSet(map8, v964, v1018);
                      const cv911 = v966;
                      const cv917 = v917;
                      const cv918 = v1039;
                      
                      v911 = cv911;
                      v917 = cv917;
                      v918 = cv918;
                      
                      txn9 = txn10;
                      continue;}
                    else {
                      if (v1007) {
                        await stdlib.mapSet(map5, v964, null);
                        await stdlib.mapSet(map9, v964, v1018);
                        const cv911 = v966;
                        const cv917 = v917;
                        const cv918 = v1039;
                        
                        v911 = cv911;
                        v917 = cv917;
                        v918 = cv918;
                        
                        txn9 = txn10;
                        continue;}
                      else {
                        const cv911 = v966;
                        const cv917 = v917;
                        const cv918 = v1039;
                        
                        v911 = cv911;
                        v917 = cv917;
                        v918 = cv918;
                        
                        txn9 = txn10;
                        continue;}}}}}
              else {
                const v1121 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                await txn10.getOutput('CheckExpiry_PlaceClaim', 'v1121', ctc18, v1121);
                const cv911 = v966;
                const cv917 = v917;
                const cv918 = v918;
                
                v911 = cv911;
                v917 = cv917;
                v918 = cv918;
                
                txn9 = txn10;
                continue;}
              break;
              }
            case 'CheckExpiry_check0_238': {
              const v1181 = v965[1];
              undefined /* setApiDetails */;
              ;
              const v1346 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v964), null);
              const v1347 = {
                None: 0,
                Some: 1
                }[v1346[0]];
              const v1348 = stdlib.eq(v1347, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              stdlib.assert(v1348, {
                at: './index.rsh:335:16:application',
                fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
                msg: 'You are not insured',
                who: 'Insurer'
                });
              const v1349 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v964), null);
              const v1350 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
              const v1351 = '00000000';
              const v1352 = '00000000000000000000000000000000';
              const v1353 = {
                Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                InsuredParty: v745,
                Kyc: v1350,
                Licence_plate: v1351,
                Model: v1352,
                Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                hash: v758
                };
              const v1354 = stdlib.fromSome(v1349, v1353);
              const v1355 = v1354.InsuredParty;
              const v1356 = stdlib.addressEq(v1355, v964);
              const v1358 = v1354.Expiry_date;
              const v1359 = stdlib.lt(v1358, v966);
              if (v1356) {
                const v1361 = [v1359, v1358, true];
                await txn10.getOutput('CheckExpiry_check', 'v1361', ctc19, v1361);
                if (v1359) {
                  const txn11 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 0,
                    funcNum: 12,
                    out_tys: [],
                    timeoutAt: undefined /* mto */,
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v1373, time: v1372, didSend: v496, from: v1371 } = txn11;
                  ;
                  const v1374 = v917[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                  const v1375 = v1374[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                  const v1376 = stdlib.add(v1375, stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'));
                  const v1378 = stdlib.Array_set(v1374, '0', v1376);
                  const v1379 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0'), v1378);
                  ;
                  const v1380 = stdlib.addressEq(v780, v1371);
                  stdlib.assert(v1380, {
                    at: './index.rsh:343:26:dot',
                    fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
                    msg: 'sender correct',
                    who: 'Insurer'
                    });
                  const cv911 = v1372;
                  const cv917 = v1379;
                  const cv918 = v918;
                  
                  v911 = cv911;
                  v917 = cv917;
                  v918 = cv918;
                  
                  txn9 = txn11;
                  continue;
                  
                  }
                else {
                  const cv911 = v966;
                  const cv917 = v917;
                  const cv918 = v918;
                  
                  v911 = cv911;
                  v917 = cv917;
                  v918 = cv918;
                  
                  txn9 = txn10;
                  continue;}}
              else {
                const v1383 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
                await txn10.getOutput('CheckExpiry_check', 'v1383', ctc19, v1383);
                const cv911 = v966;
                const cv917 = v917;
                const cv918 = v918;
                
                v911 = cv911;
                v917 = cv917;
                v918 = cv918;
                
                txn9 = txn10;
                continue;}
              break;
              }
            }
          
          }
        const v1395 = stdlib.gt(v918, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
        if (v1395) {
          ;
          const v1401 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1402 = v1401[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1408 = stdlib.sub(v1402, v1402);
          const v1410 = stdlib.Array_set(v1401, '0', v1408);
          const v1411 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1410);
          const v1412 = v1411[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1413 = v1412[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
          const v1414 = stdlib.sub(v1413, v1402);
          const v1416 = stdlib.Array_set(v1412, '1', v1414);
          const v1417 = stdlib.Array_set(v1411, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1416);
          undefined /* TokenBurn */;
          const v1418 = v1417[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
          const v1419 = v1418[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
          if (v1419) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }}
        else {
          const v1447 = v917[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1448 = v1447[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1454 = stdlib.sub(v1448, v1448);
          const v1456 = stdlib.Array_set(v1447, '0', v1454);
          const v1457 = stdlib.Array_set(v917, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1456);
          const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
          const v1459 = v1458[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
          const v1460 = stdlib.sub(v1459, v1448);
          const v1462 = stdlib.Array_set(v1458, '1', v1460);
          const v1463 = stdlib.Array_set(v1457, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v1462);
          undefined /* TokenBurn */;
          const v1464 = v1463[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
          const v1465 = v1464[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
          if (v1465) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }}
        
        
        
        
        
        }
      
      }
    
    }
  else {
    const v1531 = stdlib.safeAdd(v783, v747);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 13,
      out_tys: [ctc13],
      timeoutAt: ['time', v1531],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v731, v745, v746, v747, v758, v780, v781, v782, v785, v1531],
        evt_cnt: 0,
        funcNum: 14,
        lct: v783,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v2205, time: v2204, didSend: v558, from: v2203 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v745,
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
        tys: [ctc21, ctc3, ctc2, ctc2, ctc7, ctc3, ctc12, ctc2, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v2205, time: v2204, didSend: v558, from: v2203 } = txn5;
      ;
      const v2206 = stdlib.addressEq(v780, v2203);
      const v2207 = stdlib.addressEq(v745, v2203);
      const v2208 = v2206 ? true : v2207;
      stdlib.assert(v2208, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Insurer'
        });
      ;
      stdlib.protect(ctc0, await interact.InformTimeout(), {
        at: './index.rsh:143:63:application',
        fs: ['at ./index.rsh:143:9:application call to [unknown function] (defined at: ./index.rsh:143:38:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:142:17:function exp)', 'at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'InformTimeout',
        who: 'Insurer'
        });
      
      return;
      
      }
    else {
      const {data: [v1537], secs: v1539, time: v1538, didSend: v145, from: v1536 } = txn4;
      const v1541 = stdlib.add(v746, v782);
      ;
      const v1542 = stdlib.addressEq(v780, v1536);
      stdlib.assert(v1542, {
        at: './index.rsh:204:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurer'
        });
      await stdlib.mapSet(map0, v780, null);
      const v1545 = stdlib.safeAdd(v1538, v747);
      const v1546 = v781.Model;
      const v1547 = v781.Year;
      const v1548 = v781.InsuredParty;
      const v1549 = v781.Licence_plate;
      const v1550 = v781.Vehicle_purpose;
      const v1551 = v781.Insurance_provided;
      const v1553 = v781.Kyc;
      const v1554 = [v1546, v1547, v1548, v1549, v1550, v1551, v785, v1553, v1538, v1545];
      const v1555 = stdlib.digest([ctc14], [v1554]);
      const v1564 = {
        Consensus_time: v1538,
        Expiry_date: v1545,
        Insurance_provided: v1551,
        InsuredParty: v1548,
        Kyc: v1553,
        Licence_plate: v1549,
        Model: v1546,
        Valuation: v785,
        Vehicle_purpose: v1550,
        Year: v1547,
        hash: v1555
        };
      await stdlib.mapSet(map1, v1536, v1564);
      const v1568 = stdlib.protect(ctc6, await interact.ShowMeta(v1555, v1564), {
        at: './index.rsh:256:46:application',
        fs: ['at ./index.rsh:254:15:application call to [unknown function] (defined at: ./index.rsh:254:19:function exp)'],
        msg: 'ShowMeta',
        who: 'Insurer'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v731, v745, v758, v780, v1541, v1546, v1549, v1553, v1568],
        evt_cnt: 1,
        funcNum: 15,
        lct: v1538,
        onlyIf: true,
        out_tys: [ctc6],
        pay: [stdlib.checkedBigNumberify('./index.rsh:258:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [v1570], secs: v1572, time: v1571, didSend: v183, from: v1569 } = txn5;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc21, ctc3, ctc7, ctc3, ctc2, ctc6, ctc5, ctc4, ctc6],
        waitIfNotPresent: false
        }));
      const {data: [v1570], secs: v1572, time: v1571, didSend: v183, from: v1569 } = txn5;
      ;
      const v1573 = stdlib.addressEq(v745, v1569);
      stdlib.assert(v1573, {
        at: './index.rsh:258:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurer'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 16,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1579, time: v1578, didSend: v191, from: v1577 } = txn6;
      ;
      const v1580 = stdlib.addressEq(v780, v1577);
      stdlib.assert(v1580, {
        at: './index.rsh:268:16:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurer'
        });
      const v1581 = undefined /* TokenNew */;
      const v1582 = await txn6.getOutput('internal', 'v1581', ctc15, v1581);
      const v1592 = v731[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
      const v1593 = stdlib.Array_set(v1592, '0', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
      const v1594 = stdlib.Array_set(v731, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1593);
      const v1596 = v1594[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
      const v1597 = stdlib.Array_set(v1596, '1', stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
      const v1598 = stdlib.Array_set(v1594, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1597);
      const v1599 = v1598[stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0')];
      const v1600 = stdlib.Array_set(v1599, '2', false);
      const v1601 = stdlib.Array_set(v1598, stdlib.checkedBigNumberify('./index.rsh:269:30:application', stdlib.UInt_max, '0'), v1600);
      const v1602 = v1601[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '0')];
      const v1603 = v1602[stdlib.checkedBigNumberify('./index.rsh:270:27:application', stdlib.UInt_max, '1')];
      const v1604 = stdlib.eq(v1603, stdlib.checkedBigNumberify('./index.rsh:74:23:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1604, {
        at: './index.rsh:270:10:application',
        fs: [],
        msg: null,
        who: 'Insurer'
        });
      stdlib.protect(ctc0, await interact.ShowPolicy(v1582), {
        at: './index.rsh:287:58:application',
        fs: ['at ./index.rsh:287:7:application call to [unknown function] (defined at: ./index.rsh:287:36:function exp)'],
        msg: 'ShowPolicy',
        who: 'Insurer'
        });
      
      const txn7 = await (ctc.sendrecv({
        args: [v745, v758, v780, v1541, v1582, v1601, v1602],
        evt_cnt: 0,
        funcNum: 17,
        lct: v1578,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:288:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          stdlib.simMapDupe(sim_r, 2, map2);
          stdlib.simMapDupe(sim_r, 3, map3);
          stdlib.simMapDupe(sim_r, 4, map4);
          stdlib.simMapDupe(sim_r, 5, map5);
          stdlib.simMapDupe(sim_r, 6, map6);
          stdlib.simMapDupe(sim_r, 7, map7);
          stdlib.simMapDupe(sim_r, 8, map8);
          stdlib.simMapDupe(sim_r, 9, map9);
          
          const {data: [], secs: v1609, time: v1608, didSend: v218, from: v1607 } = txn7;
          
          ;
          const v1612 = v1602[stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0')];
          const v1616 = stdlib.sub(v1612, stdlib.checkedBigNumberify('./index.rsh:289:12:decimal', stdlib.UInt_max, '1'));
          const v1618 = stdlib.Array_set(v1602, '0', v1616);
          const v1619 = stdlib.Array_set(v1601, stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0'), v1618);
          sim_r.txns.push({
            kind: 'from',
            to: v780,
            tok: v1582
            });
          const v1621 = v1608;
          const v1627 = v1619;
          const v1628 = v1541;
          
          if (await (async () => {
            const v1637 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v1638 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
            const v1640 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
            const v1641 = stdlib.lt(v1638, v1640);
            
            return v1641;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v2105 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
            if (v2105) {
              sim_r.txns.push({
                kind: 'from',
                to: v745,
                tok: undefined /* Nothing */
                });
              const v2111 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v2112 = v2111[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v2118 = stdlib.sub(v2112, v2112);
              const v2120 = stdlib.Array_set(v2111, '0', v2118);
              const v2121 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2120);
              const v2122 = v2121[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v2123 = v2122[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v2124 = stdlib.sub(v2123, v2112);
              const v2126 = stdlib.Array_set(v2122, '1', v2124);
              const v2127 = stdlib.Array_set(v2121, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2126);
              stdlib.simTokenBurn(sim_r, v1582, v2112);
              const v2128 = v2127[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v2129 = v2128[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v2129) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1582);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v2157 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v2158 = v2157[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v2164 = stdlib.sub(v2158, v2158);
              const v2166 = stdlib.Array_set(v2157, '0', v2164);
              const v2167 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2166);
              const v2168 = v2167[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
              const v2169 = v2168[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
              const v2170 = stdlib.sub(v2169, v2158);
              const v2172 = stdlib.Array_set(v2168, '1', v2170);
              const v2173 = stdlib.Array_set(v2167, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2172);
              stdlib.simTokenBurn(sim_r, v1582, v2158);
              const v2174 = v2173[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
              const v2175 = v2174[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
              if (v2175) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1582);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc7, ctc3, ctc2, ctc15, ctc21, ctc20],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1609, time: v1608, didSend: v218, from: v1607 } = txn7;
      ;
      const v1610 = stdlib.addressEq(v745, v1607);
      stdlib.assert(v1610, {
        at: './index.rsh:288:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Insurer'
        });
      const v1612 = v1602[stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0')];
      const v1616 = stdlib.sub(v1612, stdlib.checkedBigNumberify('./index.rsh:289:12:decimal', stdlib.UInt_max, '1'));
      const v1618 = stdlib.Array_set(v1602, '0', v1616);
      const v1619 = stdlib.Array_set(v1601, stdlib.checkedBigNumberify('./index.rsh:289:28:application', stdlib.UInt_max, '0'), v1618);
      ;
      let v1621 = v1608;
      let v1627 = v1619;
      let v1628 = v1541;
      
      let txn8 = txn7;
      while (await (async () => {
        const v1637 = v1627[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v1638 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:19:application', stdlib.UInt_max, '0')];
        const v1640 = v1637[stdlib.checkedBigNumberify('./index.rsh:328:49:application', stdlib.UInt_max, '1')];
        const v1641 = stdlib.lt(v1638, v1640);
        
        return v1641;})()) {
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 19,
          out_tys: [ctc17],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1675], secs: v1677, time: v1676, didSend: v333, from: v1674 } = txn9;
        switch (v1675[0]) {
          case 'CheckExpiry_PlaceClaim0_238': {
            const v1678 = v1675[1];
            undefined /* setApiDetails */;
            ;
            const v1687 = v1678[stdlib.checkedBigNumberify('./index.rsh:350:9:spread', stdlib.UInt_max, '0')];
            const v1688 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1674), null);
            const v1689 = {
              None: 0,
              Some: 1
              }[v1688[0]];
            const v1690 = stdlib.eq(v1689, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v1690, {
              at: './index.rsh:356:16:application',
              fs: ['at ./index.rsh:355:7:application call to [unknown function] (defined at: ./index.rsh:355:7:function exp)'],
              msg: 'You are not insured',
              who: 'Insurer'
              });
            const v1691 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1674), null);
            const v1692 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            const v1693 = '00000000';
            const v1694 = '00000000000000000000000000000000';
            const v1695 = {
              Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              InsuredParty: v745,
              Kyc: v1692,
              Licence_plate: v1693,
              Model: v1694,
              Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              hash: v758
              };
            const v1696 = stdlib.fromSome(v1691, v1695);
            const v1697 = v1696.InsuredParty;
            const v1698 = stdlib.addressEq(v1697, v1674);
            const v1700 = v1696.Expiry_date;
            const v1701 = stdlib.lt(v1700, v1676);
            const v1702 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v1703 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1674), null);
            const v1704 = {
              None: 0,
              Some: 1
              }[v1703[0]];
            const v1705 = stdlib.eq(v1704, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1706 = v1705 ? false : true;
            const v1707 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v1708 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1674), null);
            const v1709 = {
              None: 0,
              Some: 1
              }[v1708[0]];
            const v1710 = stdlib.eq(v1709, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1711 = v1710 ? false : true;
            const v1712 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v1713 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1674), null);
            const v1714 = {
              None: 0,
              Some: 1
              }[v1713[0]];
            const v1715 = stdlib.eq(v1714, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1716 = v1715 ? false : true;
            const v1717 = stdlib.eq(v1687, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
            const v1718 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1674), null);
            const v1719 = {
              None: 0,
              Some: 1
              }[v1718[0]];
            const v1720 = stdlib.eq(v1719, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            const v1721 = v1720 ? false : true;
            const v1722 = v1717 ? v1721 : false;
            const v1723 = v1712 ? v1716 : v1722;
            const v1724 = v1707 ? v1711 : v1723;
            const v1725 = v1702 ? v1706 : v1724;
            const v1726 = v1696.Valuation;
            let v1728;
            if (v1702) {
              const v1729 = stdlib.safeDiv(v1726, stdlib.checkedBigNumberify('./index.rsh:120:60:decimal', stdlib.UInt_max, '100'));
              v1728 = v1729;
              }
            else {
              let v1731;
              if (v1707) {
                const v1732 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5'), v1726, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '100'));
                v1731 = v1732;
                }
              else {
                let v1734;
                if (v1712) {
                  const v1735 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '3'), v1726, stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, '100'));
                  v1734 = v1735;
                  }
                else {
                  let v1737;
                  if (v1717) {
                    const v1738 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '6'), v1726, stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, '100'));
                    v1737 = v1738;
                    }
                  else {
                    v1737 = stdlib.checkedBigNumberify('./index.rsh:124:11:decimal', stdlib.UInt_max, '0');
                    }
                  v1734 = v1737;
                  }
                v1731 = v1734;
                }
              v1728 = v1731;
              }
            const v1739 = v1698 ? v1701 : false;
            const v1740 = v1739 ? v1725 : false;
            const v1742 = stdlib.gt(v1628, v1728);
            const v1743 = v1740 ? v1742 : false;
            if (v1743) {
              const v1749 = stdlib.sub(v1628, v1728);
              ;
              const v1750 = [true, v1728];
              await txn9.getOutput('CheckExpiry_PlaceClaim', 'v1750', ctc18, v1750);
              if (v1702) {
                await stdlib.mapSet(map2, v1674, null);
                await stdlib.mapSet(map6, v1674, v1728);
                const cv1621 = v1676;
                const cv1627 = v1627;
                const cv1628 = v1749;
                
                v1621 = cv1621;
                v1627 = cv1627;
                v1628 = cv1628;
                
                txn8 = txn9;
                continue;}
              else {
                if (v1707) {
                  await stdlib.mapSet(map3, v1674, null);
                  await stdlib.mapSet(map7, v1674, v1728);
                  const cv1621 = v1676;
                  const cv1627 = v1627;
                  const cv1628 = v1749;
                  
                  v1621 = cv1621;
                  v1627 = cv1627;
                  v1628 = cv1628;
                  
                  txn8 = txn9;
                  continue;}
                else {
                  if (v1712) {
                    await stdlib.mapSet(map4, v1674, null);
                    await stdlib.mapSet(map8, v1674, v1728);
                    const cv1621 = v1676;
                    const cv1627 = v1627;
                    const cv1628 = v1749;
                    
                    v1621 = cv1621;
                    v1627 = cv1627;
                    v1628 = cv1628;
                    
                    txn8 = txn9;
                    continue;}
                  else {
                    if (v1717) {
                      await stdlib.mapSet(map5, v1674, null);
                      await stdlib.mapSet(map9, v1674, v1728);
                      const cv1621 = v1676;
                      const cv1627 = v1627;
                      const cv1628 = v1749;
                      
                      v1621 = cv1621;
                      v1627 = cv1627;
                      v1628 = cv1628;
                      
                      txn8 = txn9;
                      continue;}
                    else {
                      const cv1621 = v1676;
                      const cv1627 = v1627;
                      const cv1628 = v1749;
                      
                      v1621 = cv1621;
                      v1627 = cv1627;
                      v1628 = cv1628;
                      
                      txn8 = txn9;
                      continue;}}}}}
            else {
              const v1831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn9.getOutput('CheckExpiry_PlaceClaim', 'v1831', ctc18, v1831);
              const cv1621 = v1676;
              const cv1627 = v1627;
              const cv1628 = v1628;
              
              v1621 = cv1621;
              v1627 = cv1627;
              v1628 = cv1628;
              
              txn8 = txn9;
              continue;}
            break;
            }
          case 'CheckExpiry_check0_238': {
            const v1891 = v1675[1];
            undefined /* setApiDetails */;
            ;
            const v2056 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1674), null);
            const v2057 = {
              None: 0,
              Some: 1
              }[v2056[0]];
            const v2058 = stdlib.eq(v2057, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            stdlib.assert(v2058, {
              at: './index.rsh:335:16:application',
              fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
              msg: 'You are not insured',
              who: 'Insurer'
              });
            const v2059 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1674), null);
            const v2060 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            const v2061 = '00000000';
            const v2062 = '00000000000000000000000000000000';
            const v2063 = {
              Consensus_time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Expiry_date: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Insurance_provided: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              InsuredParty: v745,
              Kyc: v2060,
              Licence_plate: v2061,
              Model: v2062,
              Valuation: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Vehicle_purpose: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              Year: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              hash: v758
              };
            const v2064 = stdlib.fromSome(v2059, v2063);
            const v2065 = v2064.InsuredParty;
            const v2066 = stdlib.addressEq(v2065, v1674);
            const v2068 = v2064.Expiry_date;
            const v2069 = stdlib.lt(v2068, v1676);
            if (v2066) {
              const v2071 = [v2069, v2068, true];
              await txn9.getOutput('CheckExpiry_check', 'v2071', ctc19, v2071);
              if (v2069) {
                const txn10 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 0,
                  funcNum: 20,
                  out_tys: [],
                  timeoutAt: undefined /* mto */,
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v2083, time: v2082, didSend: v496, from: v2081 } = txn10;
                ;
                const v2084 = v1627[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                const v2085 = v2084[stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0')];
                const v2086 = stdlib.add(v2085, stdlib.checkedBigNumberify('./index.rsh:343:35:decimal', stdlib.UInt_max, '1'));
                const v2088 = stdlib.Array_set(v2084, '0', v2086);
                const v2089 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:343:26:dot', stdlib.UInt_max, '0'), v2088);
                ;
                const v2090 = stdlib.addressEq(v780, v2081);
                stdlib.assert(v2090, {
                  at: './index.rsh:343:26:dot',
                  fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
                  msg: 'sender correct',
                  who: 'Insurer'
                  });
                const cv1621 = v2082;
                const cv1627 = v2089;
                const cv1628 = v1628;
                
                v1621 = cv1621;
                v1627 = cv1627;
                v1628 = cv1628;
                
                txn8 = txn10;
                continue;
                
                }
              else {
                const cv1621 = v1676;
                const cv1627 = v1627;
                const cv1628 = v1628;
                
                v1621 = cv1621;
                v1627 = cv1627;
                v1628 = cv1628;
                
                txn8 = txn9;
                continue;}}
            else {
              const v2093 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
              await txn9.getOutput('CheckExpiry_check', 'v2093', ctc19, v2093);
              const cv1621 = v1676;
              const cv1627 = v1627;
              const cv1628 = v1628;
              
              v1621 = cv1621;
              v1627 = cv1627;
              v1628 = cv1628;
              
              txn8 = txn9;
              continue;}
            break;
            }
          }
        
        }
      const v2105 = stdlib.gt(v1628, stdlib.checkedBigNumberify('./index.rsh:372:19:decimal', stdlib.UInt_max, '0'));
      if (v2105) {
        ;
        const v2111 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2112 = v2111[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2118 = stdlib.sub(v2112, v2112);
        const v2120 = stdlib.Array_set(v2111, '0', v2118);
        const v2121 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2120);
        const v2122 = v2121[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2123 = v2122[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
        const v2124 = stdlib.sub(v2123, v2112);
        const v2126 = stdlib.Array_set(v2122, '1', v2124);
        const v2127 = stdlib.Array_set(v2121, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2126);
        undefined /* TokenBurn */;
        const v2128 = v2127[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
        const v2129 = v2128[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
        if (v2129) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }}
      else {
        const v2157 = v1627[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2158 = v2157[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2164 = stdlib.sub(v2158, v2158);
        const v2166 = stdlib.Array_set(v2157, '0', v2164);
        const v2167 = stdlib.Array_set(v1627, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2166);
        const v2168 = v2167[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0')];
        const v2169 = v2168[stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '1')];
        const v2170 = stdlib.sub(v2169, v2158);
        const v2172 = stdlib.Array_set(v2168, '1', v2170);
        const v2173 = stdlib.Array_set(v2167, stdlib.checkedBigNumberify('./index.rsh:375:17:application', stdlib.UInt_max, '0'), v2172);
        undefined /* TokenBurn */;
        const v2174 = v2173[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '0')];
        const v2175 = v2174[stdlib.checkedBigNumberify('./index.rsh:376:26:application', stdlib.UInt_max, '2')];
        if (v2175) {
          return;
          }
        else {
          undefined /* TokenDestroy */;
          return;
          }}
      
      
      
      
      
      }
    
    }
  
  
  
  
  
  };
export async function CheckExpiry_PlaceClaim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CheckExpiry_PlaceClaim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CheckExpiry_PlaceClaim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 15) {return _CheckExpiry_PlaceClaim15(ctcTop, interact);}
  if (step == 27) {return _CheckExpiry_PlaceClaim27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function CheckExpiry_check(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for CheckExpiry_check expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for CheckExpiry_check expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 15) {return _CheckExpiry_check15(ctcTop, interact);}
  if (step == 27) {return _CheckExpiry_check27(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '27')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`CheckExpiry_PlaceClaim(uint64)(byte,uint64)`, `CheckExpiry_check(uint64)(byte,uint64,byte)`, `_CheckExpiry_PlaceClaim11(uint64)(byte,uint64)`, `_CheckExpiry_PlaceClaim19(uint64)(byte,uint64)`, `_CheckExpiry_check11(uint64)(byte,uint64,byte)`, `_CheckExpiry_check19(uint64)(byte,uint64,byte)`],
    pure: [],
    sigs: [`CheckExpiry_PlaceClaim(uint64)(byte,uint64)`, `CheckExpiry_check(uint64)(byte,uint64,byte)`, `_CheckExpiry_PlaceClaim11(uint64)(byte,uint64)`, `_CheckExpiry_PlaceClaim19(uint64)(byte,uint64)`, `_CheckExpiry_check11(uint64)(byte,uint64,byte)`, `_CheckExpiry_check19(uint64)(byte,uint64,byte)`]
    },
  appApproval: `BiAzAAEIAwJkCRMFMRFgBBDZAhR5GxjAAQaHApACmQJx0QI5Cw+gjQbJAgeiAq7l+sgL3NraywuFl83CDrunpsAFgObEvQcc+gH7ARL8Af0BChVogQIguAHhAiYIAQEBAAECYDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAgwMDAwMDAwMCAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAgAAAAAAAAAAgAiNQAxGEEYiScHZEkiWzUBJFs1AjEZIxJBACUxACEgr0sBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhIQhg6NhoAF0lBAKMiNQQjNQZJISEMQABUSSEiDEAAPUkhIwxAABshIxJENAFJIQcMQAAHIQcSREIARCEbEkRCAB8hIhJENAFJIQcMQAAHIQcSREIAOSEbEkRCAEYhIRJENhoBNf8oNP9QQgn8SSEkDEAAJ0khJQxAABAhJRJENhoBNf8oNP9QQgDGISQSRDYaATX/KTT/UEIAtoGD0ZL7ARJENhoBNf8pNP9QQgm6NhoCFzUENhoDNhoBF0khBgxADqxJIRwMQAcxSSEKDEAFhkkhBwxABQVJIQ8MQABxIQ8SRCEmNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSVdAIDX/IQtbNf5XaBE1/YAEqNiBZLA0/VcAETX8IzT+iBeGNP8xABJENANXACA0A1cgIDT/NP4yBjT8SSJbIwgWNftXCAk0+0xQNAMhEFtCFblIIRE0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSlcAIDX/VyAgNf5XQCA1/SELWzX8V2gRNfshEFs1+kk1BTX5gASIoMWuNPlQsDT5IlVAA1Y0+VcBCDX1NPUXNfQxAIgWwVcAASJVIxJEIRKvNP9QK1AnBFAnBVAkr1Akr1Akr1A0/lAxAIgWmlcB+Uk18lcB+DTyIlVNNfM09CISNfI09CMSNfE09CEEEjXwNPQlEjXvNPMhE1s17jTyQQAKNO4hBQo17UIARDTxQQANIQg07h0hBZc17EIALjTwQQAMJTTuHSEFlzXrQgAZNO9BAA0hFDTuHSEFlzXqQgADIjXqNOo16zTrNew07DXtNPNXGCAxABI08yRbMgYMEDTvMQCIFgBX/QEiVSMTEDEAiBXzV/wBIlUjEzTwTTEAiBXkV/sBIlUjEzTxTTEAiBXVV/oBIlUjEzTyTRA0+jTtDRBBAhs0+jTtCTXssSKyATTtsggjshAxALIHs4AIAAAAAAAABtYoNO0WUFCwKDTtFlA1BzTyQQBzMQAxAIgVhiMhJ0xWSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEgxADEAiBVdKDTtFlA160lXAP4061BMIRUhEVhQSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEg0/zT+NP00/DIGNPs07EITsDTxQQB0MQAxAIgVDiMhKExWSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEgxADEAiBTlKDTtFlA160kiIRVYNOtQTCEWISlYUEsBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhINP80/jT9NPwyBjT7NOxCEzc08EEAdDEAMQCIFJUjISpMVksBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhIMQAxAIgUbCg07RZQNetJIiEWWDTrUEwhFyEGWFBLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+JGZISDT/NP40/TT8MgY0+zTsQhK+NO9BAGwxADEAiBQcIyErTFZLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+JGZISDEAMQCIE/MoNO0WUDXrIiEXWDTrUEsBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhINP80/jT9NPwyBjT7NOxCEk00/zT+NP00/DIGNPs07EISPIARAAAAAAAABycAAAAAAAAAAACwIQavNQc0/zT+NP00/DIGNPs0+kISEjEAiBN3VwABIlUjEkQhEq80/1ArUCcEUCcFUCSvUCSvUCSvUDT+UDEAiBNQVwH5STX0VwH4NPQiVU1JNfUkW0k19DIGDDXzNPVXGCAxABJBAGmACAAAAAAAAAgXNPMWUQcINPQWUChQULA08xZRBwg09BZQKFA1BzTzQQAtNP80/lA0/VA0/BZQNPtQNPoWUClLAVcAf2coSwFXfwJnSCEmNQEyBjUCQhJ/NP80/jT9NPwyBjT7NPpCEVeAEgAAAAAAAAgtAAAAAAAAAAAAALAhLK81BzT/NP40/TT8MgY0+zT6QhEsIQoSRCEtNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSlcAIDX/V0AgNf4hLls1/VeBETX8gAQAgdKOsDT/MQASRLEisgEjshIhDLIQNP6yFDT9shGzNP80A1cgIDT+NP0yBjT8SSJbIwkWNftXCAk0+0xQNAMhC1tCELJJIQ0MQAEDSCEPNAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNJSklXABE1/1cRIDX+VzEgNf1XUSA1/CEYWzX7gAQARWqOsDT8MQASRCEdiBHmsSKyASWyECEEsiIisiM0A1eZCLIlNANXeSCyJjQDV6Fgsic0AyEvITBYsigyCrIps7Q8NfqACAAAAAAAAAYtNPoWULA0+jX5NP9XABEnBjX3VwgJNPdMUEk1+FcAEScGNfZJVwAINPZQTFcQAVBJNfdXABEiIQ1MVkk19lcAEUk19SRbIQQSRDT+NP1QNPxQNPsWUDT5FlA09lA09VApSwFXAH9nKEsBV38TZ0ghLTUBMgY1AkIQv0ghBzQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDSUpKSlcAETX/VxEgNf5XMSA1/VdRIDX8IRhbNftXeSA1+leZCDX5V6FgNfhJNQU194AE97i/bjT3ULA0/jEAEkQ0/zT+UDT9UDT8UDT7FlA0+lA0+VA0+FA091ApSwFXAH9nKEsBV39/ZypLAVf+I2dIIQ81ATIGNQJCECVJgQwMQAJfSYENDEAB6kmBDgxAAFdIIQo0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A1cRIDX/gATPiQIgsDIGNAMhDlsPRDQDV2EgMQASNP8xABIRRLEisgE0AyEJW7III7IQNP+yB7NCD51IIQo0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lKSklXABE1/1cRIDX+V0EgNf1XYSA1/FeByDX7IR5bNfohGVs1+Uk1BRc1+IAEXst6zjT4FlEHCFCwMgY0AyEOWwxENAMhCVs0+gg19zT6iA+4NPwxABJENPxJiA+QIyJMVksBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhIMgY0AyEaWwg19jT7V5AgNfU0+yETWzX0NPtXCCA18zT7V4gINfI0+yExWzXxNPsiWzXwNPtXKGA17zEAMQCIDy4oMgYWNPYWUDTwFlA081A071A08lA09VA0+RZQNPEWUDT0FlA09TT0FlA081A08lA08RZQNPAWUDT5FlA071AyBhZQNPYWUAFQUDXuSVcAATTuUExX+ihQSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEg0/zT+UDT9UDT8UDT3FlA09VA08lA071ApSwFXAH9nKEsBV39/ZypLAVf+A2dIIQc1ATIGNQJCDi1IIQ00ARJENARJIhJMNAISEUQpZChkUEk1A0lJV0AgNf8hC1s1/ldoETX9gATKq843sDT9VwARNfwjNP6IDnU0/zEAEkQ0A1cAIDQDVyAgNP80/jIGNPxJIlsjCBY1+1cICTT7TFA0AyEQW0ILrUkhGwxABI1IIRw0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSlcAIDX/VyAgNf5XQCA1/SELWzX8V2gRNfshEFs1+kk1BTX5gAR4SXpONPlQsDT5IlVAA1Y0+VcBCDX1NPUXNfQxAIgNqVcAASJVIxJEIRKvNP9QK1AnBFAnBVAkr1Akr1Akr1A0/lAxAIgNglcB+Uk18lcB+DTyIlVNNfM09CISNfI09CMSNfE09CEEEjXwNPQlEjXvNPMhE1s17jTyQQAKNO4hBQo17UIARDTxQQANIQg07h0hBZc17EIALjTwQQAMJTTuHSEFlzXrQgAZNO9BAA0hFDTuHSEFlzXqQgADIjXqNOo16zTrNew07DXtNPNXGCAxABI08yRbMgYMEDTvMQCIDOhX/QEiVSMTEDEAiAzbV/wBIlUjEzTwTTEAiAzMV/sBIlUjEzTxTTEAiAy9V/oBIlUjEzTyTRA0+jTtDRBBAhs0+jTtCTXssSKyATTtsggjshAxALIHs4AIAAAAAAAABBAoNO0WUFCwKDTtFlA1BzTyQQBzMQAxAIgMbiMhJ0xWSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEgxADEAiAxFKDTtFlA160lXAP4061BMIRUhEVhQSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEg0/zT+NP00/DIGNPs07EIJnTTxQQB0MQAxAIgL9iMhKExWSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEgxADEAiAvNKDTtFlA160kiIRVYNOtQTCEWISlYUEsBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhINP80/jT9NPwyBjT7NOxCCSQ08EEAdDEAMQCIC30jISpMVksBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhIMQAxAIgLVCg07RZQNetJIiEWWDTrUEwhFyEGWFBLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+JGZISDT/NP40/TT8MgY0+zTsQgirNO9BAGwxADEAiAsEIyErTFZLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+JGZISDEAMQCICtsoNO0WUDXrIiEXWDTrUEsBKUsCVwB/ZksBKEsCV39/ZksBKksCV/4kZkhINP80/jT9NPwyBjT7NOxCCDo0/zT+NP00/DIGNPs07EIIKYARAAAAAAAABGEAAAAAAAAAAACwIQavNQc0/zT+NP00/DIGNPs0+kIH/zEAiApfVwABIlUjEkQhEq80/1ArUCcEUCcFUCSvUCSvUCSvUDT+UDEAiAo4VwH5STX0VwH4NPQiVU1JNfUkW0k19DIGDDXzNPVXGCAxABJBAGmACAAAAAAAAAVRNPMWUQcINPQWUChQULA08xZRBwg09BZQKFA1BzTzQQAtNP80/lA0/VA0/BZQNPtQNPoWUClLAVcAf2coSwFXfwJnSCENNQEyBjUCQglnNP80/jT9NPwyBjT7NPpCB0SAEgAAAAAAAAVnAAAAAAAAAAAAALAhLK81BzT/NP40/TT8MgY0+zT6QgcZIQYSRCEGNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSlcAIDX/V0AgNf4hLls1/VeBETX8gASiBWaOsDT/MQASRLEisgEjshIhDLIQNP6yFDT9shGzNP80A1cgIDT+NP0yBjT8SSJbIwkWNftXCAk0+0xQNAMhC1tCBp9JIQwMQAPwSSEUDEAB/0khHwxAAaFJJAxAAQJIJDQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQSTUDSUpJVwARNf9XESA1/lcxIDX9V1EgNfwhGFs1+4AEF/zbLrA0/DEAEkQhHYgIu7EisgElshAhBLIiIrIjNANXmQiyJTQDV3kgsiY0A1ehYLInNAMhLyEwWLIoMgqyKbO0PDX6gAgAAAAAAAADZzT6FlCwNPo1+TT/VwARJwY191cICTT3TFBJNfhXABEnBjX2SVcACDT2UExXEAFQSTX3VwARIiENTFZJNfZXABFJNfUkWyEEEkQ0/jT9UDT8UDT7FlA0+RZQNPZQNPVQKUsBVwB/ZyhLAVd/E2dIIQY1ATIGNQJCB5RIIR80ARJENARJIhJMNAISEUQpZChkUCpkUEk1A0lKSkpXABE1/1cRIDX+VzEgNf1XUSA1/CEYWzX7V3kgNfpXmQg1+VehYDX4STUFNfeABEENyBg091CwNP4xABJENP80/lA0/VA0/FA0+xZQNPpQNPlQNPhQNPdQKUsBVwB/ZyhLAVd/f2cqSwFX/iNnSCQ1ATIGNQJCBvtIIQg0ARJENARJIhJMNAISEUQpZChkUCpkUEk1A1cRIDX/gARhtKwMsDIGNAMhDlsPRDQDV1kgMQASNP8xABIRRLEisgE0AyEZW7III7IQNP+yB7NCBohJIQgMQAGNSCEINAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNJSkpJVwARNf9XESA1/lc5IDX9V1kgNfxXecg1+4HBAls1+iEeWzX5STUFFzX4gASwpYhQNPgWUQcIULAyBjQDIQ5bDEQ0AyEZWzT6CDX3NPqIBps0/DEAEkQ0/EmIBnMjIkxWSwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/iRmSEgyBjQDIQlbCDX2NPtXkCA19TT7IRNbNfQ0+1cIIDXzNPtXiAg18jT7ITFbNfE0+yJbNfA0+1coYDXvMQAxAIgGESgyBhY09hZQNPAWUDTzUDTvUDTyUDT1UDT5FlA08RZQNPQWUDT1NPQWUDTzUDTyUDTxFlA08BZQNPkWUDTvUDIGFlA09hZQAVBQNe5JVwABNO5QTFf6KFBLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+JGZISDT/NP5QNP1QNPxQNPcWUDT1UDTyUDTvUClLAVcAf2coSwFXf39nKksBV/4DZ0ghHzUBMgY1AkIFEEglNAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNXESA1/4AEkSc087AyBjQDITJbD0Q0A1dhIDEAEjT/MQASEUSxIrIBNAMhCVuyCCOyEDT/sgezQgSeSSEEDEAB2kklDEAA0UglNAESRDQESSISTDQCEhFEKWQoZFAqZFBJNQNJSkpKSVcAETX/VxEgNf4hCVs1/SEaWzX8V0EgNftXYSA1+leByDX5IR5bNfghGVs190k1BRc19oAEZbEDXTT2FlEHCFCwMgY0AyEyWwxENAMhDls0/Qk19TT9NPUINfQ09YgEmzT+MQASRDIGNPwINfM0/zT+UDT8FlA0+1A0+lA0+VA0+BZQNPcWUDT0FlA08xZQKUsBVwB/ZyhLAVd/f2cqSwFX/mNnSCEINQEyBjUCQgPcSCEENAESRDQESSISTDQCEhFEKWRJNQNJSklXABE1/1cRIDX+IQlbNf0hGls1/FdBIDX7STUFSVcAyDX6gcgBWzX5gAT8w0a1NPpQNPkWULA0+oGwAVs1+CEUNPgdIQWXJQs19zT9NPcMQQBNMgY0/Ag19jT/NP5QNP0WUDT8FlA0+1AxAFA0+lA0+RZQNPgWUDT3FlA09hZQKUsBVwB/ZyhLAVd/f2cqSwFX/mtnSCU1ATIGNQJCAyMyBjT8CDX2NP80/lA0/RZQNPwWUDT7UDEAUDT6UDT5FlA0+BZQNPYWUClLAVcAf2coSwFXf39nKksBV/5jZ0ghCjUBMgY1AkIC2UkjDEAAZ0gjNAESRDQESSISTDQCEhFEKWRJNQNJSlcAETX/VxEgNf4hCVs1/SEaWzX8gASai5F0sDT9iAMKNP4xABJEMgYWATX7NP80/lA0/RZQNPwWUDT7UClLAVcAYWdIIQQ1ATIGNQJCAmxIIR2IAtUiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwIQqvNf00/yINRDT9MQBQNP8WUDT+FlApSwFXAEFnSCM1ATIGNQJCAhI1/zX+Nf01/DX7Nfo1+TT+VwARSTX4IltJNfc0+CRbDEEALTT5NPpQNPtQNPwWUDT+UDT/FlApSwFXAH9nKEsBV38CZ0ghHDUBMgY1AkIBwjT/Ig1BAFqxIrIBNP+yCCOyEDT5sgezNPg090kJFjX1VwgJNPVMUEk19lcAEUk19UkkWzT3CRY19ElXAAg09FBMVxABUFcAEVcQARdBAANCAVSxIrIBJbIQNPyyIbNCAUU0+DT3SQkWNfVXCAk09UxQSTX2VwARSTX1SSRbNPcJFjX0SVcACDT0UExXEAFQVwARVxABF0EAA0IBCrEisgElshA0/LIhs0IA+zX/Nf41/TX8Nfs1+jX5NP5XABFJNfgiW0k19zT4JFsMQQAtNPk0+lA0+1A0/BZQNP5QNP8WUClLAVcAf2coSwFXfwJnSCERNQEyBjUCQgDHNP8iDUEAWrEisgE0/7III7IQNPmyB7M0+DT3SQkWNfVXCAk09UxQSTX2VwARSTX1SSRbNPcJFjX0SVcACDT0UExXEAFQVwARVxABF0EAA0IAWbEisgElshA0/LIhs0IASjT4NPdJCRY19VcICTT1TFBJNfZXABFJNfVJJFs09wkWNfRJVwAINPRQTFcQAVBXABFXEAEXQQADQgAPsSKyASWyEDT8siGzQgAAMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwc0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDDE1EkQiMTYSRCUxNxJEIjUBIjUCQv+tSTEYYUAABUghIK+JSSliSwEoYlBLASpiUExIiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQwSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 3,
  mapDataKeys: 3,
  mapDataSize: 290,
  stateKeys: 3,
  stateSize: 361,
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
                "name": "v746",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v747",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                "name": "v746",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v747",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
        "internalType": "struct T12",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T34",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_PlaceClaim0_238",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_check0_238",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T34",
                "name": "v965",
                "type": "tuple"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
                "internalType": "bool",
                "name": "v1537",
                "type": "bool"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T41",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
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
                "internalType": "bytes32",
                "name": "v1570",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T43",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T44",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
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
                "components": [
                  {
                    "internalType": "enum _enum_T34",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_PlaceClaim0_238",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_check0_238",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T34",
                "name": "v1675",
                "type": "tuple"
              }
            ],
            "internalType": "struct T50",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T51",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_Insurance_provided",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_InsuredParty",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_Kyc",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bytes8",
                    "name": "_Licence_plate",
                    "type": "bytes8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "_Model",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Valuation",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Vehicle_purpose",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Year",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v781",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v782",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e20",
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
                "internalType": "bool",
                "name": "v807",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T12",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v827",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
            "components": [
              {
                "internalType": "bytes32",
                "name": "v860",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1040",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1121",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1361",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1383",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1581",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1750",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1831",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2071",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2093",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v871",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "CheckExpiry_PlaceClaim",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T35",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "CheckExpiry_check",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "internalType": "struct T36",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_CheckExpiry_PlaceClaim11",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T35",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_CheckExpiry_PlaceClaim19",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T35",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_CheckExpiry_check11",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "internalType": "struct T36",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "_CheckExpiry_check19",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem2",
            "type": "bool"
          }
        ],
        "internalType": "struct T36",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_Consensus_time",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_Expiry_date",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_Insurance_provided",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "_InsuredParty",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "_Kyc",
                "type": "tuple"
              },
              {
                "internalType": "bytes8",
                "name": "_Licence_plate",
                "type": "bytes8"
              },
              {
                "internalType": "bytes32",
                "name": "_Model",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "_Valuation",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_Vehicle_purpose",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_Year",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_hash",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
    "name": "_reachMap2Ref",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
    "name": "_reachMap3Ref",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
    "name": "_reachMap4Ref",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
    "name": "_reachMap5Ref",
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
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
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
    "name": "_reachMap6Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
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
        "internalType": "struct T4",
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
    "name": "_reachMap7Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
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
        "internalType": "struct T4",
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
    "name": "_reachMap8Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
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
        "internalType": "struct T4",
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
    "name": "_reachMap9Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
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
        "internalType": "struct T4",
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
        "internalType": "struct T12",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T34",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_PlaceClaim0_238",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_check0_238",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T34",
                "name": "v965",
                "type": "tuple"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
                "internalType": "bool",
                "name": "v1537",
                "type": "bool"
              }
            ],
            "internalType": "struct T40",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T41",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
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
                "internalType": "bytes32",
                "name": "v1570",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T43",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T44",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
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
                "components": [
                  {
                    "internalType": "enum _enum_T34",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_PlaceClaim0_238",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T33",
                    "name": "_CheckExpiry_check0_238",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T34",
                "name": "v1675",
                "type": "tuple"
              }
            ],
            "internalType": "struct T50",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T51",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_Insurance_provided",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_InsuredParty",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_Kyc",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bytes8",
                    "name": "_Licence_plate",
                    "type": "bytes8"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "_Model",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Valuation",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Vehicle_purpose",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Year",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v781",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v782",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m20",
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
                "internalType": "bool",
                "name": "v807",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T12",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v827",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
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
            "components": [
              {
                "internalType": "bytes32",
                "name": "v860",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
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
        "internalType": "struct T12",
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
  Bytecode: `0x6080604052604051620097c0380380620097c0833981016040819052620000269162000309565b6000805543600355620000386200016f565b604080513381528351602080830191909152808501518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a180516000908190528151602090810182905282516040019190915281519082015152620000b73415600762000145565b602082015151620000cc901515600862000145565b620000d6620001a6565b60208083015182523382820152838101805151604080850191909152905182015160608401526001600081905543905551620001159183910162000369565b604051602081830303815290604052600290805190602001906200013b929190620001df565b505050506200041e565b816200016b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620001a16200026e565b905290565b6040518060800160405280620001bb6200026e565b815260200160006001600160a01b0316815260200160008152602001600081525090565b828054620001ed90620003e1565b90600052602060002090601f0160209004810192826200021157600085556200025c565b82601f106200022c57805160ff19168380011785556200025c565b828001600101855582156200025c579182015b828111156200025c5782518255916020019190600101906200023f565b506200026a929150620002bb565b5090565b60405180602001604052806001905b620002a4604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200027d5790505090565b5b808211156200026a5760008155600101620002bc565b604080519081016001600160401b03811182821017156200030357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200031d57600080fd5b62000327620002d2565b835181526040601f19830112156200033e57600080fd5b62000348620002d2565b60208581015182526040909501518582015293810193909352509092915050565b815160c08201908260005b6001811015620003b057825180518352602080820151818501526040918201511515918401919091529092019160609091019060010162000374565b50505060208301516001600160a01b0381166060840152506040830151608083015260609092015160a09091015290565b600181811c90821680620003f657607f821691505b602082108114156200041857634e487b7160e01b600052602260045260246000fd5b50919050565b619392806200042e6000396000f3fe608060405260043610620002335760003560e01c8063a7661d54116200012f578063d9dcd84d11620000b3578063e2186a081162000075578063e2186a08146200063f578063e533a29d1462000656578063ed2ac309146200066d578063f19b43521462000684578063f923fd3a146200069b57005b8063d9dcd84d14620005b0578063da5c082614620005d5578063dbefdfe214620005ec578063dc01fb9d1462000603578063de736998146200062857005b8063ad9fa3d811620000fd578063ad9fa3d81462000512578063c79800371462000529578063cadc2e7a1462000540578063d376ac621462000574578063d8e21e54146200059957005b8063a7661d541462000497578063a9b9855c14620004ae578063ab53f2c614620004c5578063acf0cc2214620004ed57005b80634241475411620001b75780638323075711620001855780638323075714620003fd57806384b49ef214620004145780639a83beb5146200042b5780639f2518101462000469578063a035b2e0146200048057005b80634241475414620003935780635e3f0c1814620003aa57806365c9b32714620003c1578063817d57f314620003d857005b80632080ea1c11620002015780632080ea1c14620002e75780632c10a159146200031b5780633892dc1c14620003325780633bc5b7bf14620003495780633c9febe8146200036e57005b806306dc92ff146200023d5780630bc78dc0146200027a57806311faee8c14620002af5780631e93b0f114620002c657005b366200023b57005b005b3480156200024a57600080fd5b50620002626200025c36600462006a20565b620006b2565b60405162000271919062006a75565b60405180910390f35b620002916200028b36600462006aa9565b620006e0565b60408051825115158152602092830151928101929092520162000271565b6200023b620002c036600462006adc565b62000732565b348015620002d357600080fd5b506003545b60405190815260200162000271565b348015620002f457600080fd5b506200030c6200030636600462006a20565b6200075c565b60405162000271919062006afb565b6200023b6200032c36600462006adc565b62000784565b6200023b6200034336600462006adc565b620007aa565b3480156200035657600080fd5b50620002626200036836600462006a20565b620007d0565b3480156200037b57600080fd5b506200030c6200038d36600462006a20565b620007f8565b6200023b620003a436600462006adc565b62000820565b6200023b620003bb36600462006adc565b62000846565b6200023b620003d236600462006b40565b6200086c565b348015620003e557600080fd5b5062000262620003f736600462006a20565b62000892565b3480156200040a57600080fd5b50600154620002d8565b620002916200042536600462006aa9565b620008ba565b620004426200043c36600462006aa9565b62000992565b60408051825115158152602080840151908201529181015115159082015260600162000271565b6200023b6200047a36600462006adc565b620009ee565b6200023b6200049136600462006adc565b62000a14565b6200023b620004a836600462006adc565b62000a3a565b6200023b620004bf36600462006adc565b62000a60565b348015620004d257600080fd5b50620004dd62000a86565b6040516200027192919062006bbc565b348015620004fa57600080fd5b50620002626200050c36600462006a20565b62000b2b565b6200023b6200052336600462006adc565b62000b53565b6200023b6200053a36600462006adc565b62000b79565b3480156200054d57600080fd5b50620005656200055f36600462006a20565b62000b9f565b60405162000271919062006bd7565b3480156200058157600080fd5b506200030c6200059336600462006a20565b62000bb4565b62000291620005aa36600462006aa9565b62000bdc565b348015620005bd57600080fd5b506200030c620005cf36600462006a20565b62000c2e565b62000442620005e636600462006aa9565b62000c56565b6200023b620005fd36600462006b40565b62000cb2565b3480156200061057600080fd5b50620002626200062236600462006a20565b62000cd8565b6200023b6200063936600462006adc565b62000d00565b6200023b6200065036600462006adc565b62000d26565b6200023b6200066736600462006adc565b62000d4c565b620004426200067e36600462006aa9565b62000d72565b6200023b6200069536600462006adc565b62000e4e565b6200023b620006ac36600462006cba565b62000e74565b6040805160608101825260008082526020820181905291810191909152620006da8262000e9a565b92915050565b6040805180820190915260008082526020820152620006fe620060f5565b602081810180515160009052515101518390526200071b62006116565b62000727828262000f7c565b604001519392505050565b6200073c62006116565b62000758620007513684900384018462006e00565b8262001af0565b5050565b6040805160608101825260008082526020820181905291810191909152620006da8262001d4a565b6200078e62006116565b62000758620007a33684900384018462006e00565b8262001e17565b620007b462006116565b62000758620007c93684900384018462006e93565b826200201f565b6040805160608101825260008082526020820181905291810191909152620006da8262002223565b6040805160608101825260008082526020820181905291810191909152620006da82620022b7565b6200082a62006116565b620007586200083f3684900384018462006e00565b826200234b565b6200085062006116565b62000758620008653684900384018462006e93565b8262002544565b6200087662006116565b620007586200088b3684900384018462006f6f565b8262000f7c565b6040805160608101825260008082526020820181905291810191909152620006da826200271b565b6040805180820190915260008082526020820152600054600b1480620008e257506000546013145b620008ec57600080fd5b600054600b14156200095d57604051633638879560e21b815260048101839052309063d8e21e54906024015b60408051808303816000875af115801562000937573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006da919062006f8e565b600054601314156200098d57604051622f1e3760e61b8152600481018390523090630bc78dc09060240162000918565b919050565b6040805160608101825260008082526020820181905291810191909152620009b9620060f5565b6020810180515160019052515160400151839052620009d762006116565b620009e38282620027af565b608001519392505050565b620009f862006116565b6200075862000a0d3684900384018462006e00565b82620032e8565b62000a1e62006116565b6200075862000a333684900384018462006e00565b82620034f8565b62000a4462006116565b6200075862000a593684900384018462006e00565b82620036d0565b62000a6a62006116565b6200075862000a7f368490038401846200702c565b8262003848565b60006060600054600280805462000a9d906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462000acb906200704b565b801562000b1c5780601f1062000af05761010080835404028352916020019162000b1c565b820191906000526020600020905b81548152906001019060200180831162000afe57829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152620006da8262003db4565b62000b5d62006116565b6200075862000b72368490038401846200702c565b8262003e48565b62000b8362006116565b6200075862000b983684900384018462006e00565b82620043ac565b62000ba9620061bd565b620006da8262004567565b6040805160608101825260008082526020820181905291810191909152620006da82620046d2565b604080518082019091526000808252602082015262000bfa620060f5565b6020818101805151600090525151015183905262000c1762006116565b62000c238282620027af565b602001519392505050565b6040805160608101825260008082526020820181905291810191909152620006da8262004766565b604080516060810182526000808252602082018190529181019190915262000c7d620060f5565b602081018051516001905251516040015183905262000c9b62006116565b62000ca7828262000f7c565b60a001519392505050565b62000cbc62006116565b6200075862000cd13684900384018462006f6f565b82620027af565b6040805160608101825260008082526020820181905291810191909152620006da82620047fa565b62000d0a62006116565b6200075862000d1f3684900384018462006e00565b826200488e565b62000d3062006116565b6200075862000d45368490038401846200702c565b8262004a7c565b62000d5662006116565b6200075862000d6b3684900384018462006e00565b8262004cd8565b604080516060810182526000808252602082018190529181018290529054600b148062000da157506000546013145b62000dab57600080fd5b600054600b141562000e1d57604051639a83beb560e01b8152600481018390523090639a83beb5906024015b6060604051808303816000875af115801562000df7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006da919062007082565b600054601314156200098d57604051636d2e041360e11b815260048101839052309063da5c08269060240162000dd7565b62000e5862006116565b6200075862000e6d3684900384018462006e00565b82620050dd565b62000e7e62006116565b6200075862000e933684900384018462007160565b8262005457565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111562000ee95762000ee962006a40565b141562000f6d576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111562000f2e5762000f2e62006a40565b600181111562000f425762000f4262006a40565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b62000f8e601b6000541460576200572c565b815162000fac90158062000fa457508251600154145b60586200572c565b60008080556002805462000fc0906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462000fee906200704b565b80156200103f5780601f1062001013576101008083540402835291602001916200103f565b820191906000526020600020905b8154815290600101906020018083116200102157829003601f168201915b5050505050806020019051810190620010599190620073c4565b905062001065620061de565b7fb5db48727469a5bc5fffe909b2524bffc972b9a43db6625e1b46092ad0bfc8e73385604051620010989291906200741d565b60405180910390a16000602085015151516001811115620010bd57620010bd62006a40565b1415620017a2576020808501515101518152620010dd341560536200572c565b6200110c6001620010ee3362002223565b51600181111562001103576200110362006a40565b1460546200572c565b602081810180516000805160206200933d83398151915290819052815183018190528151604090810182905267030303030303030360c41b818601908152606080870193845260808088018051600090819052815189018190528151909501859052895181516001600160a01b0390911693019290925294518151909501949094525183516001600160c01b031990911660a0909101529051825160c00152815160e0018190528151610100018190528151610120015290830151905161014001526001620011db3362004567565b516001811115620011f057620011f062006a40565b146200120157806080015162001211565b6200120c3362004567565b604001515b60a0820152805180511560c08301819052815160011460e0840152815160021461010084015290516003146101208301521562001269576200125d8160a0015160e00151606462005753565b61014082015262001349565b8060e0015115620012a35760646200128b60058360a0015160e00151620057a5565b62001297919062007452565b6101608201526200133c565b80610100015115620012de576064620012c660038360a0015160e00151620057a5565b620012d2919062007452565b6101808201526200132f565b80610120015115620013195760646200130160068360a0015160e00151620057a5565b6200130d919062007452565b6101a082015262001322565b60006101a08201525b6101a08101516101808201525b6101808101516101608201525b6101608101516101408201525b60a0810151606001516001600160a01b031633146200136a57600062001376565b438160a0015160200151105b620013835760006200143a565b8060c0015162001407578060e00151620013fa57806101000151620013ed57806101200151620013b55760006200143a565b6001620013c233620047fa565b516001811115620013d757620013d762006a40565b14620013e55760016200143a565b60006200143a565b6001620013c23362003db4565b6001620013c23362000e9a565b600162001414336200271b565b51600181111562001429576200142962006a40565b14620014375760016200143a565b60005b6200144757600062001454565b8061014001518260a00151115b15620016ca5760a0820151610140820151908190036101c083015260405133916108fc811502916000818181858888f193505050501580156200149b573d6000803e3d6000fd5b506101e08101805160019052610140820151815160200152516040517f68d88a5da263323cb690611a0fe17a43f240012fde243b8802d3f9cab6dbdf8191620014f7918151151581526020918201519181019190915260400190565b60405180910390a16101e0810151835260c081015115620015c857336000908152600660209081526040808320805462ff00ff19166001908117909155600a909252909120805460ff191682178155610140830151910155620015596200634f565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169082015260608087015185519416930192909252808301805143905260808601518151909201919091526101c0840151905190910152620015c1816200580b565b5062001aea565b8060e00151156200161a57336000908152600760209081526040808320805462ff00ff19166001908117909155600b909252909120805460ff191682178155610140830151910155620015596200634f565b806101000151156200166d57336000908152600860209081526040808320805462ff00ff19166001908117909155600c909252909120805460ff191682178155610140830151910155620015596200634f565b80610120015115620016c057336000908152600960209081526040808320805462ff00ff19166001908117909155600d909252909120805460ff191682178155610140830151910155620015596200634f565b620015596200634f565b61020081018051600090819052815160200152516040517fe7de438b3748105117ba2d7332fa72a07844055ffa1378c5dee39821e5a0dc7e9162001721918151151581526020918201519181019190915260400190565b60405180910390a161020081015183526200173b6200634f565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855194169301929092528083018051439052608086015181519092019190915260a0850151905190910152620015c1816200580b565b6001602085015151516001811115620017bf57620017bf62006a40565b141562001aea57620017d4341560556200572c565b620018036001620017e53362002223565b516001811115620017fa57620017fa62006a40565b1460566200572c565b610220810180516000805160206200933d83398151915290819052815160209081018290528251604090810183905267030303030303030360c41b6102408601908152610260860193845261028086018051600090819052815185018190528151909301839052875181516001600160a01b0390911660609091015294518551608001525184516001600160c01b031990911660a0909101529151835160c00152825160e00182905282516101000182905282516101200191909152830151905161014001526001620018d63362004567565b516001811115620018eb57620018eb62006a40565b14620018fd578061028001516200190d565b620019083362004567565b604001515b6102a08201819052602081015143116102c0830152606001516001600160a01b031633141562001a6a576102c08101516102e0820180519115159091526102a082015160209081015182518201528151600160409182015291518251815115158152818301519281019290925282015115158183015290517f1bd059f7e409419fcbdef1d4bb8b0ccb640f78dae85954f982aeea238d7d8c849181900360600190a16102e081015160608401526102c08101511562001a6057620019d062006388565b82516001600160a01b03908116825260208085015181840152604080860151831681850152606080870151909316928401929092526080808601519084015260a08086015190840152601c60005543600155905162001a32918391016200750e565b6040516020818303038152906040526002908051906020019062001a58929190620063e1565b505062001aea565b6200173b6200634f565b61030081018051600090819052815160209081018290528251604090810192909252915181518151151581528184015193810193909352810151151582820152517f335fb274f340f46c4554cf35c6201dcaf620fe72e5d241c76da10ca7cb9f83339181900360600190a161030081015160608401526200173b6200634f565b50505050565b62001b02601060005414603a6200572c565b815162001b2090158062001b1857508251600154145b603b6200572c565b60008080556002805462001b34906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462001b62906200704b565b801562001bb35780601f1062001b875761010080835404028352916020019162001bb3565b820191906000526020600020905b81548152906001019060200180831162001b9557829003601f168201915b505050505080602001905181019062001bcd9190620073c4565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338460405162001c029291906200751f565b60405180910390a162001c18341560376200572c565b62001c3662001c2e338360600151600162005b52565b60386200572c565b604081015162001c53906001600160a01b0316331460396200572c565b62001c5d6200634f565b815181516001600160a01b039182169052602080840151835182015260408085015184519084169082015260608086015185519416938101939093529083015143905260808401805182519384019092525162001d2692600091819062001ccc90845b60200201515160010190565b8152602001866080015160006001811062001ceb5762001ceb62007547565b6020020151602001518152602001866080015160006001811062001d135762001d1362007547565b6020020151604001511515905262005b6a565b602080830180519091019190915260a083015190516040015262001aea8162005bed565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600a602052604090205460ff16600181111562001d995762001d9962006a40565b141562000f6d576001600160a01b0382166000908152600a6020526040908190208151606081019092528054829060ff16600181111562001dde5762001dde62006a40565b600181111562001df25762001df262006a40565b81528154610100900460ff161515602082015260019091015460409091015292915050565b62001e29600160005414600b6200572c565b815162001e4790158062001e3f57508251600154145b600c6200572c565b60008080556002805462001e5b906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462001e89906200704b565b801562001eda5780601f1062001eae5761010080835404028352916020019162001eda565b820191906000526020600020905b81548152906001019060200180831162001ebc57829003601f168201915b505050505080602001905181019062001ef491906200755d565b905062001f0d6040518060200160405280600081525090565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338560405162001f409291906200751f565b60405180910390a162001f5b8260400151341460096200572c565b602082015162001f78906001600160a01b03163314600a6200572c565b604080514360208201520160408051601f198184030181529190528051602090910120815262001fa762006470565b825181526020808401516001600160a01b0316818301526040808501518184015260608086015190840152835160808401526002600055436001555162001ff191839101620075d6565b6040516020818303038152906040526002908051906020019062002017929190620063e1565b505050505050565b6200203160076000541460266200572c565b81516200204f9015806200204757508251600154145b60276200572c565b60008080556002805462002063906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462002091906200704b565b8015620020e25780601f10620020b657610100808354040283529160200191620020e2565b820191906000526020600020905b815481529060010190602001808311620020c457829003601f168201915b5050505050806020019051810190620020fc91906200770c565b90507f6b27e9802d19acae537dcab2d52f1d663124cbbbb2fd129702555906b09745dd3384604051620021319291906200772c565b60405180910390a162002147341560246200572c565b602081015162002164906001600160a01b0316331460256200572c565b6200216e620064b0565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501519084015260a0808501519084015260c0808501516001600160c01b0319169084015260e08085015190840152858201515161010084015260086000554360015551620021f69183910162007802565b604051602081830303815290604052600290805190602001906200221c929190620063e1565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111562002272576200227262006a40565b141562000f6d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111562000f2e5762000f2e62006a40565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600c602052604090205460ff16600181111562002306576200230662006a40565b141562000f6d576001600160a01b0382166000908152600c6020526040908190208151606081019092528054829060ff16600181111562001dde5762001dde62006a40565b6200235d601c60005414605c6200572c565b81516200237b9015806200237357508251600154145b605d6200572c565b6000808055600280546200238f906200704b565b80601f0160208091040260200160405190810160405280929190818152602001828054620023bd906200704b565b80156200240e5780601f10620023e2576101008083540402835291602001916200240e565b820191906000526020600020905b815481529060010190602001808311620023f057829003601f168201915b5050505050806020019051810190620024289190620073c4565b90507f8e29e181297ffc5dd7c8e58e47aa3961b18298687be481f5f3ea6ea9d11883fd33846040516200245d9291906200751f565b60405180910390a162002473341560596200572c565b6200249162002489338360600151600162005b52565b605a6200572c565b6040810151620024ae906001600160a01b03163314605b6200572c565b620024b86200634f565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551941693810193909352908301514390526080840180518251938401909252516200252092600091819062001ccc908462001cc0565b602080830180519091019190915260a083015190516040015262001aea816200580b565b6200255660136000541460486200572c565b8151620025749015806200256c57508251600154145b60496200572c565b60008080556002805462002588906200704b565b80601f0160208091040260200160405190810160405280929190818152602001828054620025b6906200704b565b8015620026075780601f10620025db5761010080835404028352916020019162002607565b820191906000526020600020905b815481529060010190602001808311620025e957829003601f168201915b50505050508060200190518101906200262191906200770c565b90507f14f9ca0d8d29a90c9f058711df6db486dd5223d2c86f4a8745960dc9769c3e253384604051620026569291906200772c565b60405180910390a16200266c341560466200572c565b602081015162002689906001600160a01b0316331460476200572c565b62002693620064b0565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501519084015260a0808501519084015260c0808501516001600160c01b0319169084015260e08085015190840152858201515161010084015260146000554360015551620021f69183910162007802565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156200276a576200276a62006a40565b141562000f6d576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111562000f2e5762000f2e62006a40565b620027c1600f6000541460356200572c565b8151620027df901580620027d757508251600154145b60366200572c565b600080805560028054620027f3906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462002821906200704b565b8015620028725780601f10620028465761010080835404028352916020019162002872565b820191906000526020600020905b8154815290600101906020018083116200285457829003601f168201915b50505050508060200190518101906200288c9190620073c4565b905062002898620061de565b7f66b05110c029f9b11e8ef2a0155d103b033313fb9fa5d5d9312c95fea6d37c7f3385604051620028cb9291906200741d565b60405180910390a16000602085015151516001811115620028f057620028f062006a40565b141562002fce57602080850151510151815262002910341560316200572c565b6200293f6001620029213362002223565b51600181111562002936576200293662006a40565b1460326200572c565b602081810180516000805160206200933d83398151915290819052815183018190528151604090810182905267030303030303030360c41b818601908152606080870193845260808088018051600090819052815189018190528151909501859052895181516001600160a01b0390911693019290925294518151909501949094525183516001600160c01b031990911660a0909101529051825160c00152815160e001819052815161010001819052815161012001529083015190516101400152600162002a0e3362004567565b51600181111562002a235762002a2362006a40565b1462002a3457806080015162002a44565b62002a3f3362004567565b604001515b60a0820152805180511560c08301819052815160011460e0840152815160021461010084015290516003146101208301521562002a9c5762002a908160a0015160e00151606462005753565b61014082015262002b7c565b8060e001511562002ad657606462002abe60058360a0015160e00151620057a5565b62002aca919062007452565b61016082015262002b6f565b8061010001511562002b1157606462002af960038360a0015160e00151620057a5565b62002b05919062007452565b61018082015262002b62565b8061012001511562002b4c57606462002b3460068360a0015160e00151620057a5565b62002b40919062007452565b6101a082015262002b55565b60006101a08201525b6101a08101516101808201525b6101808101516101608201525b6101608101516101408201525b60a0810151606001516001600160a01b0316331462002b9d57600062002ba9565b438160a0015160200151105b62002bb657600062002c6d565b8060c0015162002c3a578060e0015162002c2d5780610100015162002c205780610120015162002be857600062002c6d565b600162002bf533620047fa565b51600181111562002c0a5762002c0a62006a40565b1462002c1857600162002c6d565b600062002c6d565b600162002bf53362003db4565b600162002bf53362000e9a565b600162002c47336200271b565b51600181111562002c5c5762002c5c62006a40565b1462002c6a57600162002c6d565b60005b62002c7a57600062002c87565b8061014001518260a00151115b1562002ef65760a0820151610140820151908190036101c083015260405133916108fc811502916000818181858888f1935050505015801562002cce573d6000803e3d6000fd5b506101e08101805160019052610140820151815160200152516040517fa3d38b13e6540b99be047467e44b69faf59222876db450e6a3e25381042919349162002d2a918151151581526020918201519181019190915260400190565b60405180910390a16101e0810151835260c08101511562002df457336000908152600660209081526040808320805462ff00ff19166001908117909155600a909252909120805460ff19168217815561014083015191015562002d8c6200634f565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169082015260608087015185519416930192909252808301805143905260808601518151909201919091526101c0840151905190910152620015c18162005bed565b8060e001511562002e4657336000908152600760209081526040808320805462ff00ff19166001908117909155600b909252909120805460ff19168217815561014083015191015562002d8c6200634f565b8061010001511562002e9957336000908152600860209081526040808320805462ff00ff19166001908117909155600c909252909120805460ff19168217815561014083015191015562002d8c6200634f565b8061012001511562002eec57336000908152600960209081526040808320805462ff00ff19166001908117909155600d909252909120805460ff19168217815561014083015191015562002d8c6200634f565b62002d8c6200634f565b61020081018051600090819052815160200152516040517f51c806a37fab4c18b3eabfae5160a03f0f2e275628d7d67815f274c511ed83149162002f4d918151151581526020918201519181019190915260400190565b60405180910390a1610200810151835262002f676200634f565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841690820152606080870151855194169301929092528083018051439052608086015181519092019190915260a0850151905190910152620015c18162005bed565b600160208501515151600181111562002feb5762002feb62006a40565b141562001aea5762003000341560336200572c565b6200302f6001620030113362002223565b51600181111562003026576200302662006a40565b1460346200572c565b610220810180516000805160206200933d83398151915290819052815160209081018290528251604090810183905267030303030303030360c41b6102408601908152610260860193845261028086018051600090819052815185018190528151909301839052875181516001600160a01b0390911660609091015294518551608001525184516001600160c01b031990911660a0909101529151835160c00152825160e00182905282516101000182905282516101200191909152830151905161014001526001620031023362004567565b51600181111562003117576200311762006a40565b14620031295780610280015162003139565b620031343362004567565b604001515b6102a08201819052602081015143116102c0830152606001516001600160a01b031633141562003268576102c08101516102e0820180519115159091526102a082015160209081015182518201528151600160409182015291518251815115158152818301519281019290925282015115158183015290517f912f22cfbfcc6c4a1c603fb7cd27176be8c07ca0e94e587bc85fedd67f5bda249181900360600190a16102e081015160608401526102c0810151156200325e57620031fc62006388565b82516001600160a01b03908116825260208085015181840152604080860151831681850152606080870151909316928401929092526080808601519084015260a08086015190840152601060005543600155905162001a32918391016200750e565b62002f676200634f565b61030081018051600090819052815160209081018290528251604090810192909252915181518151151581528184015193810193909352810151151582820152517fc5811e85c913d914c0e4b58ad8dc5ce4a0601c69a5353b9b8a0f8b1429ea185a9181900360600190a1610300810151606084015262002f676200634f565b620032fa60156000541460516200572c565b8151620033189015806200331057508251600154145b60526200572c565b6000808055600280546200332c906200704b565b80601f01602080910402602001604051908101604052809291908181526020018280546200335a906200704b565b8015620033ab5780601f106200337f57610100808354040283529160200191620033ab565b820191906000526020600020905b8154815290600101906020018083116200338d57829003601f168201915b5050505050806020019051810190620033c59190620078d1565b90507f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed2353384604051620033fa9291906200751f565b60405180910390a1620034103415604f6200572c565b80516200342a906001600160a01b0316331460506200572c565b6200344081608001518260400151600162005c83565b6200344a6200634f565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526080850151845193166060938401529083015143905260a0840151815192830190915260c084015151620034d4926000918190600019015b81526020018660c001516020015181526020018660c0015160400151151581525062005b6a565b6020808301805190910191909152606083015190516040015262001aea816200580b565b6200350a60116000541460436200572c565b8151620035289015806200352057508251600154145b60446200572c565b6000808055600280546200353c906200704b565b80601f01602080910402602001604051908101604052809291908181526020018280546200356a906200704b565b8015620035bb5780601f106200358f57610100808354040283529160200191620035bb565b820191906000526020600020905b8154815290600101906020018083116200359d57829003601f168201915b5050505050806020019051810190620035d591906200797f565b9050620035ec81610120015143101560456200572c565b7fbceae83a94d4d1f9424beafb2b187ba867236f6cf452b6b01322429f6474900433846040516200361f9291906200751f565b60405180910390a162003635341560416200572c565b60a081015162003670906001600160a01b03163314620036655760208201516001600160a01b0316331462003668565b60015b60426200572c565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015620036b2573d6000803e3d6000fd5b5060008080556001819055620036cb9060029062006526565b505050565b620036e260036000541460176200572c565b815162003700901580620036f857508251600154145b60186200572c565b60008080556002805462003714906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462003742906200704b565b8015620037935780601f10620037675761010080835404028352916020019162003793565b820191906000526020600020905b8154815290600101906020018083116200377557829003601f168201915b5050505050806020019051810190620037ad919062007a2d565b9050620037c481610140015143101560196200572c565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051620037f79291906200751f565b60405180910390a16200380d341560156200572c565b60a081015162003670906001600160a01b031633146200383d5760208201516001600160a01b0316331462003840565b60015b60166200572c565b6200385a601160005414603e6200572c565b8151620038789015806200387057508251600154145b603f6200572c565b6000808055600280546200388c906200704b565b80601f0160208091040260200160405190810160405280929190818152602001828054620038ba906200704b565b80156200390b5780601f10620038df576101008083540402835291602001916200390b565b820191906000526020600020905b815481529060010190602001808311620038ed57829003601f168201915b50505050508060200190518101906200392591906200797f565b90506200393162006565565b62003945826101200151431060406200572c565b7fc299decf3d819192b45fbfa5962d20828e9997091c154d6e4234231c271ca3a333856040516200397892919062007ae7565b60405180910390a1604082015160e083015101815260e0820151620039a1903414603c6200572c565b60a0820151620039be906001600160a01b03163314603d6200572c565b60a0820180516001600160a01b03908116600090815260046020526040808220805460ff191660011790559251909116815220805462ff000019169055606082015162003a0d90439062005c9a565b8160200181815250508160c0015160800151816040015160000181815250508160c0015160e00151816040015160200181815250508160c00151602001518160400151604001906001600160a01b031690816001600160a01b0316815250508160c00151606001518160400151606001906001600160c01b03191690816001600160c01b031916815250508160c0015160c00151816040015160800181815250508160c0015160000151816040015160a0018181525050816101000151816040015160c00181815250508160c0015160400151816040015160e001819052504381604001516101000181815250508060200151816040015161012001818152505043816060015160000181815250508060200151816060015160200181815250508160c0015160000151816060015160400181815250508160c00151602001518160600151606001906001600160a01b031690816001600160a01b0316815250508160c00151604001518160600151608001819052508160c0015160600151816060015160a001906001600160c01b03191690816001600160c01b031916815250508160c0015160800151816060015160c0018181525050816101000151816060015160e00181815250508160c0015160c0015181606001516101000181815250508160c0015160e001518160600151610120018181525050806040015160405160200162003c1d919062007b12565b60408051601f198184030181529181528151602092830120606084015161014001523360009081526005909252902080546001919060ff1916828002179055506060818101513360009081526005602081815260409283902084516001820155818501516002820155838501516003820155948401516004860180546001600160a01b0319166001600160a01b03909216919091179055608084015180519286019290925581015160068501550151600783015560a081015160088301805467ffffffffffffffff191660c092831c179055810151600983015560e0810151600a830155610100810151600b830155610120810151600c8301556101400151600d9091015562003d2c620065fa565b825181526020808401516001600160a01b039081168284015260808086015160408086019190915260a08088015190931660608087019190915286518387015260c080890180519094015194870194909452825101516001600160c01b031916928501929092525181015160e08401526013600055436001555162001ff19183910162007c51565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111562003e035762003e0362006a40565b141562000f6d576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111562000f2e5762000f2e62006a40565b62003e5a600560005414601c6200572c565b815162003e7890158062003e7057508251600154145b601d6200572c565b60008080556002805462003e8c906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462003eba906200704b565b801562003f0b5780601f1062003edf5761010080835404028352916020019162003f0b565b820191906000526020600020905b81548152906001019060200180831162003eed57829003601f168201915b505050505080602001905181019062003f25919062007c62565b905062003f3162006565565b62003f458261012001514310601e6200572c565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365338560405162003f7892919062007ae7565b60405180910390a161010082015160c083015101815260c082015162003fa2903414601a6200572c565b608082015162003fbf906001600160a01b03163314601b6200572c565b6080820180516001600160a01b03908116600090815260046020526040808220805460ff1916600117905592519091168152819020805462ff0000191690558201516200400e90439062005c9a565b8160200181815250508160a0015160800151816040015160000181815250508160a0015160e00151816040015160200181815250508160a00151602001518160400151604001906001600160a01b031690816001600160a01b0316815250508160a00151606001518160400151606001906001600160c01b03191690816001600160c01b031916815250508160a0015160c00151816040015160800181815250508160a0015160000151816040015160a00181815250508160e00151816040015160c00181815250508160a0015160400151816040015160e001819052504381604001516101000181815250508060200151816040015161012001818152505043816060015160000181815250508060200151816060015160200181815250508160a0015160000151816060015160400181815250508160a00151602001518160600151606001906001600160a01b031690816001600160a01b0316815250508160a00151604001518160600151608001819052508160a0015160600151816060015160a001906001600160c01b03191690816001600160c01b031916815250508160a0015160800151816060015160c00181815250508160e00151816060015160e00181815250508160a0015160c0015181606001516101000181815250508160a0015160e00151816060015161012001818152505080604001516040516020016200421c919062007b12565b60408051601f198184030181529181528151602092830120606084015161014001523360009081526005909252902080546001919060ff1916828002179055506060818101513360009081526005602081815260409283902084516001820155818501516002820155838501516003820155948401516004860180546001600160a01b0319166001600160a01b03909216919091179055608084015180519286019290925581015160068501550151600783015560a081015160088301805467ffffffffffffffff191660c092831c179055810151600983015560e0810151600a830155610100810151600b830155610120810151600c8301556101400151600d909101556200432b620065fa565b825181526020808401516001600160a01b03908116828401526060808601516040808601919091526080808801519093168286015285518386015260a0808801805190940151908601528251909101516001600160c01b03191660c0850152905181015160e08401526007600055436001555162001ff19183910162007c51565b620043be60056000541460216200572c565b8151620043dc901580620043d457508251600154145b60226200572c565b600080805560028054620043f0906200704b565b80601f01602080910402602001604051908101604052809291908181526020018280546200441e906200704b565b80156200446f5780601f1062004443576101008083540402835291602001916200446f565b820191906000526020600020905b8154815290600101906020018083116200445157829003601f168201915b505050505080602001905181019062004489919062007c62565b9050620044a081610120015143101560236200572c565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051620044d39291906200751f565b60405180910390a1620044e93415601f6200572c565b608081015162004524906001600160a01b03163314620045195760208201516001600160a01b031633146200451c565b60015b60206200572c565b80602001516001600160a01b03166108fc8261010001519081150290604051600060405180830381858888f19350505050158015620036b2573d6000803e3d6000fd5b62004571620061bd565b60016001600160a01b03831660009081526005602052604090205460ff166001811115620045a357620045a362006a40565b141562000f6d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115620045e857620045e862006a40565b6001811115620045fc57620045fc62006a40565b815281546101009081900460ff16151560208084019190915260408051610160810182526001860154815260028601548184015260038601548183015260048601546001600160a01b031660608083019190915282519081018352600587015481526006870154938101939093526007860154838301526080810192909252600885015460c090811b6001600160c01b03191660a0840152600986015490830152600a85015460e0830152600b85015492820192909252600c840154610120820152600d90930154610140840152015292915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600d602052604090205460ff16600181111562004721576200472162006a40565b141562000f6d576001600160a01b0382166000908152600d6020526040908190208151606081019092528054829060ff16600181111562001dde5762001dde62006a40565b604080516060810182526000808252602082018190529181019190915260016001600160a01b0383166000908152600b602052604090205460ff166001811115620047b557620047b562006a40565b141562000f6d576001600160a01b0382166000908152600b6020526040908190208151606081019092528054829060ff16600181111562001dde5762001dde62006a40565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111562004849576200484962006a40565b141562000f6d576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111562000f2e5762000f2e62006a40565b620048a0600960005414602f6200572c565b8151620048be901580620048b657508251600154145b60306200572c565b600080805560028054620048d2906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462004900906200704b565b8015620049515780601f10620049255761010080835404028352916020019162004951565b820191906000526020600020905b8154815290600101906020018083116200493357829003601f168201915b50505050508060200190518101906200496b9190620078d1565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3384604051620049a09291906200751f565b60405180910390a1620049b63415602d6200572c565b8051620049d0906001600160a01b03163314602e6200572c565b620049e681608001518260400151600162005c83565b620049f06200634f565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526080850151845193166060938401529083015143905260a0840151815192830190915260c08401515162004a5892600091819060001901620034ad565b6020808301805190910191909152606083015190516040015262001aea8162005bed565b62004a8e60036000541460126200572c565b815162004aac90158062004aa457508251600154145b60136200572c565b60008080556002805462004ac0906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462004aee906200704b565b801562004b3f5780601f1062004b135761010080835404028352916020019162004b3f565b820191906000526020600020905b81548152906001019060200180831162004b2157829003601f168201915b505050505080602001905181019062004b59919062007a2d565b905062004b8060405180606001604052806000815260200160008152602001600081525090565b62004b94826101400151431060146200572c565b7fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e35338560405162004bc792919062007ae7565b60405180910390a162004be4826101200151836040015162005ceb565b80825260408301518101602083015262004c0290341460106200572c565b602082015162004c1f906001600160a01b0316331460116200572c565b62004c2f43836060015162005c9a565b604082015262004c3e62006663565b825181526020808401516001600160a01b03908116828401526060808601516040808601919091526080808801519286019290925260a0808801519093169185019190915260c0808701519285019290925260e0808701519285019290925261010080870151928501929092528483015191840191909152838101516101208401526005600055436001555162001ff19183910162007d8a565b62004cea600860005414602b6200572c565b815162004d0890158062004d0057508251600154145b602c6200572c565b60008080556002805462004d1c906200704b565b80601f016020809104026020016040519081016040528092919081815260200182805462004d4a906200704b565b801562004d9b5780601f1062004d6f5761010080835404028352916020019162004d9b565b820191906000526020600020905b81548152906001019060200180831162004d7d57829003601f168201915b505050505080602001905181019062004db5919062007eda565b905062004dc1620066c6565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338560405162004df49291906200751f565b60405180910390a162004e0a341560286200572c565b606082015162004e27906001600160a01b0316331460296200572c565b8160a0015160405160200162004e3f91815260200190565b60408051601f198184030181529082905260c08401516001600160c01b03191660208301529060280160408051808303601f1901815282825260e0860151805160208083015192850151908601919091529284015260608301919091529060800160408051601f19818403018152828252610100870151602084015291016040516020818303038152906040526002600060405162004ede9062006705565b62004eef9695949392919062007efa565b604051809103906000f08015801562004f0c573d6000803e3d6000fd5b506001600160a01b031680825260208083018290526040519182527f70fdb5b6faf17b444c258a0af3c69c18d51ad399cc4ba19d8d617288133d7c86910160405180910390a18151604080516060810190915260028152835162004f9d92916000916020820190835b6020020151602001518152602001866000015160006001811062001d135762001d1362007547565b60408083018281528151606081019092525162004feb92916000918190835b602002015160000151815260200160028152602001856040015160006001811062001d135762001d1362007547565b6060808301828152604080519283019052516200504d92916000918190835b6020020151600001518152602001856060015160006001811062005032576200503262007547565b60200201516020015181526020016000151581525062005b6a565b6080820181905251602001516200506990600214602a6200572c565b6200507362006713565b6020838101516001600160a01b03908116835260408086015184840152606080870151831682860152608080880151918601919091528584015190921682850152908401805160a0850152515160c08401526009600055436001555162001ff19183910162007fda565b620050ef601460005414604d6200572c565b81516200510d9015806200510557508251600154145b604e6200572c565b60008080556002805462005121906200704b565b80601f01602080910402602001604051908101604052809291908181526020018280546200514f906200704b565b8015620051a05780601f106200517457610100808354040283529160200191620051a0565b820191906000526020600020905b8154815290600101906020018083116200518257829003601f168201915b5050505050806020019051810190620051ba919062007eda565b9050620051c6620066c6565b7fda00a95c1dcc12171d6effb435667fe1e6639deaf742996695658fb05741b8d73385604051620051f99291906200751f565b60405180910390a16200520f3415604a6200572c565b60608201516200522c906001600160a01b03163314604b6200572c565b8160a001516040516020016200524491815260200190565b60408051601f198184030181529082905260c08401516001600160c01b03191660208301529060280160408051808303601f1901815282825260e0860151805160208083015192850151908601919091529284015260608301919091529060800160408051601f198184030181528282526101008701516020840152910160405160208183030381529060405260026000604051620052e39062006705565b620052f49695949392919062007efa565b604051809103906000f08015801562005311573d6000803e3d6000fd5b506001600160a01b031680825260208083018290526040519182527f959d3e5d117bb0c525cdf1168f4aa0f0cab16eee645d43f8915369b0be8b21ed910160405180910390a1815160408051606081019091526002815283516200537f929160009160208201908362004f75565b604080830182815281516060810190925251620053a3929160009181908362004fbc565b606080830182815260408051928301905251620053c792916000918190836200500a565b608082018190525160200151620053e390600214604c6200572c565b620053ed62006713565b6020838101516001600160a01b03908116835260408086015184840152606080870151831682860152608080880151918601919091528584015190921682850152908401805160a0850152515160c08401526015600055436001555162001ff19183910162007fda565b62005469600260005414600e6200572c565b8151620054879015806200547f57508251600154145b600f6200572c565b6000808055600280546200549b906200704b565b80601f0160208091040260200160405190810160405280929190818152602001828054620054c9906200704b565b80156200551a5780601f10620054ee576101008083540402835291602001916200551a565b820191906000526020600020905b815481529060010190602001808311620054fc57829003601f168201915b505050505080602001905181019062005534919062007feb565b90506200555b60405180606001604052806000815260200160008152602001600081525090565b7f76992a79e5b051c449386d40cb1f20d6f9a8494660fea367a52a198202744b8833856040516200558e92919062008071565b60405180910390a1620055a43415600d6200572c565b620055d76064620055c3600687602001516000015160a00151620057a5565b620055cf919062007452565b6003620057a5565b808252604083015110156200568d57620055f643836060015162005c9a565b60208201526200560562006766565b825181526020808401516001600160a01b0316818301526040808501518184015260608086015190840152608080860151908401523360a08085019190915287830180515160c0860152805184015160e0860152515101516101008401528351610120840152838201516101408401526003600055436001555162001a3291839101620080b4565b6200569d43836060015162005c9a565b6040820152620056ac620067c0565b825181526020808401516001600160a01b0316818301526040808501518184015260608086015190840152608080860151908401523360a08085019190915287830180515160c0860152805184015160e086015251510151610100840152838101516101208401526011600055436001555162001ff19183910162008161565b81620007585760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600081620057925760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016200574a565b6200579e828462007452565b9392505050565b6000811580620057ce57508282620057be818362008202565b9250620057cc908362007452565b145b620006da5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016200574a565b6200581562006835565b602082810151810151519081015190511015620058c7576200583662006388565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931692840192909252808501805182015160808501525182015160a0840152601b600055436001559051620058a1918391016200750e565b6040516020818303038152906040526002908051906020019062001aea929190620063e1565b6020820151604001511562005a8257815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200591a573d6000803e3d6000fd5b50620059ae826020015160200151600060405180606001604052806200598987602001516020015160006001811062005957576200595762007547565b6020020151600001518860200151602001516000600181106200597e576200597e62007547565b602002015151900390565b8152602087810180518201515182015182840152510151604090910190600062001d13565b81528151606001516020808401510151620059d3919060005b60200201515162005d3e565b80516040805160608101909152825151518152825162005a369291600091602082019062005a2490845b6020020151602001518860200151602001516000600181106200597e576200597e62007547565b81528551602090910190600062001d13565b51604001511562005a595760008080556001819055620007589060029062006526565b81516060015162005a6a9062005d54565b60008080556001819055620007589060029062006526565b62005abe826020015160200151600060405180606001604052806200598987602001516020015160006001811062005957576200595762007547565b602080830191909152825160600151838201519091015162005ae391906000620059c7565b62005a36816020015160006040518060600160405280856020015160006001811062005b135762005b1362007547565b602002015160000151815260200162005b3f8660200151600060018110620059fd57620059fd62007547565b8152602086810151910190600062001d13565b600062005b628385308562005d6c565b949350505050565b62005b7462006845565b60005b600181101562005bca5784816001811062005b965762005b9662007547565b602002015182826001811062005bb05762005bb062007547565b60200201528062005bc18162008224565b91505062005b77565b508181846001811062005be15762005be162007547565b60200201529392505050565b62005bf762006835565b602082810151810151519081015190511015620058c75762005c1862006388565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931692840192909252808501805182015160808501525182015160a0840152600f600055436001559051620058a1918391016200750e565b62005c9083838362005e4e565b620036cb57600080fd5b60008262005ca9838262008242565b9150811015620006da5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016200574a565b60008262005cfa83826200825d565b9150811115620006da5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016200574a565b62005d4a828262005f27565b6200075857600080fd5b62005d5f816200600b565b62005d6957600080fd5b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839162005dd59162008277565b60006040518083038185875af1925050503d806000811462005e14576040519150601f19603f3d011682016040523d82523d6000602084013e62005e19565b606091505b509150915062005e2c82826001620060b6565b508080602001905181019062005e43919062008295565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839162005eaf9162008277565b60006040518083038185875af1925050503d806000811462005eee576040519150601f19603f3d011682016040523d82523d6000602084013e62005ef3565b606091505b509150915062005f0682826002620060b6565b508080602001905181019062005f1d919062008295565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b8660405160240162005f5491815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905162005f94919062008277565b60006040518083038185875af1925050503d806000811462005fd3576040519150601f19603f3d011682016040523d82523d6000602084013e62005fd8565b606091505b509150915062005feb82826003620060b6565b508080602001905181019062006002919062008295565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391620060549162008277565b60006040518083038185875af1925050503d806000811462006093576040519150601f19603f3d011682016040523d82523d6000602084013e62006098565b606091505b5091509150620060ab82826004620060b6565b506001949350505050565b60608315620060c75750816200579e565b825115620060d85782518084602001fd5b60405163100960cb60e01b8152600481018390526024016200574a565b6040518060400160405280600081526020016200611162006892565b905290565b6040805161010081018252600060c0820181815260e0830182905282528251808401845281815260208082018390528084019190915283518085018552828152808201839052838501528351606080820186528382528183018490528186018490528085019190915284519081018552828152908101829052928301529060808201905b815260408051606081018252600080825260208281018290529282015291015290565b604080516060810182526000808252602082015290810162006111620068a7565b60408051610340810190915260006103208201908152819081526040805160608101825260008082526020828101829052928201529101908152600060208201819052604082015260600162006233620068a7565b815260200162006242620068a7565b81526020016000151581526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001620062ae6040518060400160405280600015158152602001600081525090565b8152602001620062d36040518060400160405280600015158152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152600060208201819052604082015260600162006310620068a7565b81526020016200631f620068a7565b8152600060208201526040016200619a604080516060810182526000808252602082018190529181019190915290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101620061116200692c565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001620063d462006845565b8152602001600081525090565b828054620063ef906200704b565b90600052602060002090601f0160209004810192826200641357600085556200645e565b82601f106200642e57805160ff19168380011785556200645e565b828001600101855582156200645e579182015b828111156200645e57825182559160200191906001019062006441565b506200646c92915062006948565b5090565b6040518060a001604052806200648562006845565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b604051806101200160405280620064c662006845565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e00162006519604080516060810182526000808252602082018190529181019190915290565b8152600060209091015290565b50805462006534906200704b565b6000825580601f1062006545575050565b601f01602090049060005260206000209081019062005d69919062006948565b60405180608001604052806000815260200160008152602001620065eb60408051610140810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905284519081018552828152908101829052928301529060e0820190815260200160008152602001600081525090565b815260200162006111620068a7565b6040518061010001604052806200661062006845565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e00162006111604080516060810182526000808252602082018190529181019190915290565b6040518061014001604052806200667962006845565b81526000602082018190526040820181905260608201819052608082015260a001620066a46200695f565b8152602001600081526020016000815260200160008152602001600081525090565b6040805160a08101825260008082526020820152908101620066e762006845565b8152602001620066f662006845565b81526020016200611162006845565b61108780620082b683390190565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016200619a62006845565b6040518061016001604052806200677c62006845565b815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001620066a46200695f565b604051806101400160405280620067d662006845565b815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016200681a6200695f565b81526020016000815260200160008152602001600081525090565b6040518060400160405280620066f65b60405180602001604052806001905b6200687b604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620068545790505090565b604051806020016040528062006111620069c4565b60405180610160016040528060008152602001600081526020016000815260200160006001600160a01b03168152602001620068fc604080516060810182526000808252602082018190529181019190915290565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c09091015290565b604051806060016040528060008152602001620063d462006845565b5b808211156200646c576000815560010162006949565b6040805161010081018252600080825260208201529081016200699b604080516060810182526000808252602082018190529181019190915290565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b60408051606081019091528060008152602001620069ee6040518060200160405280600081525090565b8152602001620061116040518060200160405280600081525090565b6001600160a01b038116811462005d6957600080fd5b60006020828403121562006a3357600080fd5b81356200579e8162006a0a565b634e487b7160e01b600052602160045260246000fd5b6002811062005d6957634e487b7160e01b600052602160045260246000fd5b8151606082019062006a878162006a56565b8083525060208301511515602083015260408301511515604083015292915050565b60006020828403121562006abc57600080fd5b5035919050565b60006040828403121562006ad657600080fd5b50919050565b60006040828403121562006aef57600080fd5b6200579e838362006ac3565b8151606082019062006b0d8162006a56565b808352506020830151151560208301526040830151604083015292915050565b60006080828403121562006ad657600080fd5b60006080828403121562006b5357600080fd5b6200579e838362006b2d565b60005b8381101562006b7c57818101518382015260200162006b62565b8381111562001aea5750506000910152565b6000815180845262006ba881602086016020860162006b5f565b601f01601f19169290920160200192915050565b82815260406020820152600062005b62604083018462006b8e565b81516101e082019062006bea8162006a56565b808352506020830151151560208301526040830151805160408401526020810151606084015260408101516080840152606081015162006c3560a08501826001600160a01b03169052565b506080810151805160c0850152602081015160e085015260408101516101008501525060a081015161012062006c76818601836001600160c01b0319169052565b60c08301519150610140828187015260e0840151610160870152610100840151610180870152818401516101a0870152808401516101c08701525050505092915050565b6000610180828403121562006ad657600080fd5b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562006d095762006d0962006cce565b60405290565b604051602081016001600160401b038111828210171562006d095762006d0962006cce565b604051606081016001600160401b038111828210171562006d095762006d0962006cce565b60405161010081016001600160401b038111828210171562006d095762006d0962006cce565b60405161014081016001600160401b038111828210171562006d095762006d0962006cce565b60405161016081016001600160401b038111828210171562006d095762006d0962006cce565b60405161012081016001600160401b038111828210171562006d095762006d0962006cce565b801515811462005d6957600080fd5b60006040828403121562006e1357600080fd5b62006e1d62006ce4565b82358152602083013562006e318162006df1565b60208201529392505050565b6000818303604081121562006e5157600080fd5b62006e5b62006ce4565b8335815291506020601f198201121562006e7457600080fd5b5062006e7f62006d0f565b602083013581528060208301525092915050565b60006040828403121562006ea657600080fd5b6200579e838362006e3d565b60006020828403121562006ec557600080fd5b62006ecf62006d0f565b9135825250919050565b6000818303608081121562006eed57600080fd5b62006ef762006ce4565b8335815291506060601f198201121562006f1057600080fd5b5062006f1b62006d0f565b62006f2562006d34565b60208401356002811062006f3857600080fd5b815262006f49856040860162006eb2565b602082015262006f5d856060860162006eb2565b60408201528152602082015292915050565b60006080828403121562006f8257600080fd5b6200579e838362006ed9565b60006040828403121562006fa157600080fd5b62006fab62006ce4565b825162006fb88162006df1565b81526020928301519281019290925250919050565b6000818303604081121562006fe157600080fd5b62006feb62006ce4565b8335815291506020601f19820112156200700457600080fd5b506200700f62006d0f565b60208301356200701f8162006df1565b8152602082015292915050565b6000604082840312156200703f57600080fd5b6200579e838362006fcd565b600181811c908216806200706057607f821691505b6020821081141562006ad657634e487b7160e01b600052602260045260246000fd5b6000606082840312156200709557600080fd5b604051606081018181106001600160401b0382111715620070ba57620070ba62006cce565b6040528251620070ca8162006df1565b8152602083810151908201526040830151620070e68162006df1565b60408201529392505050565b80356200098d8162006a0a565b6000606082840312156200711257600080fd5b6200711c62006d34565b905081358152602082013560208201526040820135604082015292915050565b6001600160c01b03198116811462005d6957600080fd5b80356200098d816200713c565b60008183036101808112156200717557600080fd5b6200717f62006ce4565b83358152601f1982019150610160808312156200719b57600080fd5b620071a562006ce4565b61014080851215620071b657600080fd5b620071c062006d59565b945060208701358552620071d760408801620070f2565b6020860152620071eb8860608901620070ff565b6040860152620071fe60c0880162007153565b606086015260e087810135608087015261010088013560a087015261012088013560c087015290870135908501529283529093013560208083019190915283015250919050565b80516200098d8162006a0a565b6000606082840312156200726557600080fd5b6200726f62006d34565b9050815181526020820151602082015260408201516200728f8162006df1565b604082015292915050565b600082601f830112620072ac57600080fd5b60405160208082018281106001600160401b0382111715620072d257620072d262006cce565b60405281606085810187811115620072e957600080fd5b865b818110156200730e5762007300898262007252565b8452928401928201620072eb565b5093979650505050505050565b600061010082840312156200732f57600080fd5b60405160c081018181106001600160401b038211171562007354576200735462006cce565b80604052508091508251620073698162006a0a565b8152602083810151908201526040830151620073858162006a0a565b604082015260608301516200739a8162006a0a565b6060820152620073ae84608085016200729a565b608082015260e083015160a08201525092915050565b60006101008284031215620073d857600080fd5b6200579e83836200731b565b805182526020810151518051620073fb8162006a56565b8060208501525060208101515160408401526040810151516060840152505050565b6001600160a01b038316815260a081016200579e6020830184620073e4565b634e487b7160e01b600052601160045260246000fd5b6000826200747057634e487b7160e01b600052601260045260246000fd5b500490565b8060005b600181101562001aea57620074a584835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162007479565b60018060a01b038082511683526020820151602084015280604083015116604084015280606083015116606084015250608081015162007500608084018262007475565b5060a0015160e09190910152565b6101008101620006da8284620074bc565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060c082840312156200757057600080fd5b604051608081018181106001600160401b038211171562007595576200759562006cce565b604052620075a484846200729a565b81526060830151620075b68162006a0a565b60208201526080830151604082015260a090920151606083015250919050565b600060e082019050620075eb82845162007475565b60018060a01b03602084015116606083015260408301516080830152606083015160a0830152608083015160c083015292915050565b80516200098d816200713c565b6000606082840312156200764157600080fd5b6200764b62006d34565b905081518152602082015160208201526040820151604082015292915050565b600061018082840312156200767f57600080fd5b6200768962006d59565b90506200769783836200729a565b8152620076a76060830162007245565b602082015260808201516040820152620076c460a0830162007245565b606082015260c0820151608082015260e082015160a0820152620076ec610100830162007621565b60c0820152620077018361012084016200762e565b60e082015292915050565b600061018082840312156200772057600080fd5b6200579e83836200766b565b6001600160a01b0383168152606081016200579e60208301848051825260209081015151910152565b6200776282825162007475565b60208101516001600160a01b0316606083810191909152604082015160808401528101516200779c60a08401826001600160a01b03169052565b50608081015160c083015260a081015160e083015260c0810151610100620077cf818501836001600160c01b0319169052565b60e08301518051610120860152602081015161014086015260400151610160850152909101516101809092019190915250565b6101a08101620006da828462007755565b600061016082840312156200782757600080fd5b60405160e081018181106001600160401b03821117156200784c576200784c62006cce565b80604052508091508251620078618162006a0a565b81526020838101519082015260408301516200787d8162006a0a565b60408201526060838101519082015260808301516200789c8162006a0a565b6080820152620078b08460a085016200729a565b60a0820152620078c584610100850162007252565b60c08201525092915050565b60006101608284031215620078e557600080fd5b6200579e838362007813565b600061014082840312156200790557600080fd5b6200790f62006d59565b905081518152620079236020830162007245565b60208201526200793783604084016200762e565b60408201526200794a60a0830162007621565b606082015260c0820151608082015260e082015160a082015261010082015160c082015261012082015160e082015292915050565b60006102a082840312156200799357600080fd5b6200799d62006d7f565b620079a984846200729a565b8152620079b96060840162007245565b60208201526080830151604082015260a0830151606082015260c08301516080820152620079ea60e0840162007245565b60a082015261010062007a0085828601620078f1565b60c083015261024084015160e0830152610260840151908201526102809092015161012083015250919050565b60006102c0828403121562007a4157600080fd5b62007a4b62006da5565b62007a5784846200729a565b815262007a676060840162007245565b60208201526080830151604082015260a0830151606082015260c0830151608082015262007a9860e0840162007245565b60a082015261010062007aae85828601620078f1565b60c083015261024084015160e0830152610260840151908201526102808301516101208201526102a09092015161014083015250919050565b6001600160a01b0383168152606081016200579e602083018480518252602090810151511515910152565b6000610180820190508251825260208301516020830152604083015162007b4460408401826001600160a01b03169052565b50606083015162007b6160608401826001600160c01b0319169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015162007ba760e08401828051825260208082015190830152604090810151910152565b50610100830151610140830152610120909201516101609091015290565b62007bd282825162007475565b602081015160018060a01b038082166060850152604083015160808501528060608401511660a08501525050608081015160c083015260a081015160e08301526001600160401b0360c01b60c08201511661010083015260e0810151620036cb6101208401828051825260208082015190830152604090810151910152565b6101808101620006da828462007bc5565b60006102a0828403121562007c7657600080fd5b62007c8062006d7f565b62007c8c84846200729a565b815262007c9c6060840162007245565b60208201526080830151604082015260a0830151606082015262007cc360c0840162007245565b608082015262007cd78460e08501620078f1565b60a082015261022083015160c082015261024083015160e08201526102608301516101008201526102809092015161012083015250919050565b805182526020808201516001600160a01b0316818401526040808301518051828601529182015160608501528101516080840152506001600160401b0360c01b60608201511660a0830152608081015160c083015260a081015160e083015260c081015161010083015260e08101516101208301525050565b60006102a08201905062007da082845162007475565b60208301516001600160a01b03811660608401525060408301516080830152606083015160a0830152608083015162007de460c08401826001600160a01b03169052565b5060a083015162007df960e084018262007d11565b5060c083015161022083015260e0830151610240830152610100830151610260830152610120909201516102809091015290565b60006101a0828403121562007e4157600080fd5b62007e4b62006dcb565b905062007e5983836200729a565b815262007e696060830162007245565b60208201526080820151604082015262007e8660a0830162007245565b606082015260c0820151608082015260e082015160a082015261010062007eaf81840162007621565b60c083015262007ec48461012085016200762e565b60e0830152610180830151818301525092915050565b60006101a0828403121562007eee57600080fd5b6200579e838362007e2d565b60c08152600062007f0f60c083018962006b8e565b828103602084015262007f23818962006b8e565b9050828103604084015262007f39818862006b8e565b9050828103606084015262007f4f818762006b8e565b6080840195909552505060a00152949350505050565b60018060a01b0380825116835260208201516020840152806040830151166040840152606082015160608401528060808301511660808401525060a081015162007fb360a084018262007475565b5060c001518051610100830152602081015161012083015260400151151561014090910152565b6101608101620006da828462007f65565b600060e0828403121562007ffe57600080fd5b60405160a081018181106001600160401b038211171562008023576200802362006cce565b6040526200803284846200729a565b81526060830151620080448162006a0a565b6020820152608083810151604083015260a0840151606083015260c0909301519281019290925250919050565b60006101a08201905060018060a01b0384168252825160208301526020830151620080a160408401825162007d11565b6020810151610180840152509392505050565b60006102c082019050620080ca82845162007475565b60208301516001600160a01b03811660608401525060408301516080830152606083015160a0830152608083015160c083015260a08301516200811860e08401826001600160a01b03169052565b5060c08301516101006200812f8185018362007d11565b60e085015161024085015284015161026084015250610120830151610280830152610140909201516102a09091015290565b60006102a0820190506200817782845162007475565b60208301516001600160a01b03811660608401525060408301516080830152606083015160a0830152608083015160c083015260a0830151620081c560e08401826001600160a01b03169052565b5060c0830151610100620081dc8185018362007d11565b60e085015161024085015284015161026084015250610120909201516102809091015290565b60008160001904831182151516156200821f576200821f6200743c565b500290565b60006000198214156200823b576200823b6200743c565b5060010190565b600082198211156200825857620082586200743c565b500190565b6000828210156200827257620082726200743c565b500390565b600082516200828b81846020870162006b5f565b9190910192915050565b600060208284031215620082a857600080fd5b81516200579e8162006df156fe60806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea26469706673582212206c16f5720a37564ea27236599debec45db69b30a4dedf56238994874f045be2464736f6c634300080c00333030303030303030303030303030303030303030303030303030303030303030a2646970667358221220e2d99887a24e995000fb8210d6089435dcde3ed700cb79a43fc2a10606e4171c64736f6c634300080c0033`,
  BytecodeLen: 38848,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:155:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:173:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:189:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:196:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:199:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:253:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:267:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:285:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:291:35:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:342:13:after expr stmt',
    fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:199:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:207:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:253:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:267:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:285:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  23: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  24: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  25: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  26: {
    at: './index.rsh:380:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  27: {
    at: './index.rsh:291:35:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  28: {
    at: './index.rsh:342:13:after expr stmt',
    fs: ['at ./index.rsh:334:7:application call to [unknown function] (defined at: ./index.rsh:334:7:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "CheckExpiry_PlaceClaim": CheckExpiry_PlaceClaim,
  "CheckExpiry_check": CheckExpiry_check,
  "InsuredParty": InsuredParty,
  "Insurer": Insurer
  };
export const _APIs = {
  CheckExpiry: {
    PlaceClaim: CheckExpiry_PlaceClaim,
    check: CheckExpiry_check
    }
  };
