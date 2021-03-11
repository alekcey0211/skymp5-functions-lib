import { Mp, PapyrusObject, PapyrusValue } from '../../types/mp';
import { getString, getNumber } from '../../utils/papyrusArgs';

export const setActorValue = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const avName = getString(args, 0);
  const avValue = getNumber(args, 1);

  mp.set(selfId, `av${avName}`, avValue);
};

export const getActorValue = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) =>
  mp.get(mp.getIdFromDesc(self.desc), `av${getString(args, 0)}`);

export const damageActorValue = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const avName = getString(args, 0);
  const avValue = getNumber(args, 1);

  mp.set(selfId, `av${avName}Damage`, avValue);
};

export const restoreActorValue = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const avName = getString(args, 0);
  const avValue = getNumber(args, 1);

  mp.set(selfId, `av${avName}Restore`, avValue);
};

export const addSkillExperience = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) => {
  // TODO: don`t use 0xff000000, should be the current actor
  const acId = 0xff000000;
  // TODO: get name from self ActorValueInfo
  const avName = getString(args, 0);
  const exp = getNumber(args, 1);

  const currentExp = mp.get(acId, `av${avName}Exp`);
  mp.set(acId, `av${avName}Exp`, currentExp + exp);

  if (currentExp + exp >= 100) {
    const currentAvValue = mp.get(acId, `av${avName}`);
    mp.set(acId, `av${avName}`, currentAvValue + 1);
    mp.set(acId, `av${avName}Exp`, 0);
  }
};
