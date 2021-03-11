import { Mp, PapyrusObject } from '../../types/mp';
import { uint8arrayToStringMethod } from '../../utils/helper';
import { getKeywords, getNthKeyword, getNumKeywords } from './keywords';
import { formType } from './type';

const getFormID = (mp: Mp, self: PapyrusObject) => mp.getIdFromDesc(self.desc);

const getName = (mp: Mp, self: PapyrusObject) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const data = mp.lookupEspmRecordById(selfId);
  const full = data.record?.fields.find((x) => x.type === 'FULL')?.data;
  const edid = data.record?.fields.find((x) => x.type === 'EDID')?.data;
  if (full) {
    const dataView = new DataView(full.buffer);
    // TODO: use localization table
    // console.log(dataView.getUint32(0, true));
  }
  if (edid) {
    return uint8arrayToStringMethod(edid);
  }
};

const getGoldValue = (mp: Mp, self: PapyrusObject) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const recordData = mp.lookupEspmRecordById(selfId);
  const data = recordData.record?.fields.find((x) => x.type === 'DATA')?.data;
  if (data) {
    const dataView = new DataView(data.buffer);
    return dataView.getUint32(0, true);
  }
  return -1;
};

const getWeight = (mp: Mp, self: PapyrusObject) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const recordData = mp.lookupEspmRecordById(selfId);
  const data = recordData.record?.fields.find((x) => x.type === 'DATA')?.data;
  if (data) {
    const dataView = new DataView(data.buffer);
    return dataView.getFloat32(4, true);
  }
  return -1;
};

const getType = (mp: Mp, self: PapyrusObject) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const data = mp.lookupEspmRecordById(selfId);
  return data.record?.type && formType[data.record?.type] ? formType[data.record?.type] : 0;
};

// const setWorldModelPath = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) => {
//   const selfId = mp.getIdFromDesc(self.desc);
//   const path = getString(args, 0);

//   // TODO: check exists ctx.refr in func
//   const func = (ctx: Ctx, path: string, selfId: number) => {
//     ctx.sp.once('update', () => {
//       ctx.sp.printConsole(selfId);
//       ctx.sp.printConsole(path);
//       const form = ctx.sp.Game.getFormEx(selfId);
//       const ref = ctx.sp.ObjectReference.from(form);
//       if (ref) {
//         ctx.sp.printConsole(ref.getFormID());
//         ctx.sp.printConsole(ctx.getFormIdInClientFormat(ref.getFormID()));
//         ctx.sp.printConsole(ctx.getFormIdInServerFormat(ref.getFormID()));
//         ref.disable(true);
//         ref.setWorldModelPath(path);
//         ref.enable(true);
//         ctx.sp.printConsole(ref.hasWorldModel());
//       }
//     });
//   };
//   evalClient(mp, 0xff000000, new FunctionInfo(func).getText({ selfId, path }));
// };

export const register = (mp: Mp): void => {
  mp.registerPapyrusFunction('method', 'Form', 'GetFormID', (self) => getFormID(mp, self));

  mp.registerPapyrusFunction('method', 'Form', 'GetName', (self) => getName(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetType', (self) => getType(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetGoldValue', (self) => getGoldValue(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetWeight', (self) => getWeight(mp, self));
  // mp.registerPapyrusFunction('method', 'Form', 'SetWorldModelPath', (self, args) => setWorldModelPath(mp, self, args));

  mp.registerPapyrusFunction('method', 'Form', 'GetKeywords', (self) => getKeywords(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetNumKeywords', (self) => getNumKeywords(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetNthKeyword', (self, args) => getNthKeyword(mp, self, args));
};
