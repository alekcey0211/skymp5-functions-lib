import { Mp, PapyrusObject } from '../../types/mp';
import {
  getAngleX,
  getAngleY,
  getAngleZ,
  getPositionX,
  getPositionY,
  getPositionZ,
  setAngle,
  setPosition,
} from './position';
import { setActorValue, getActorValue, damageActorValue, restoreActorValue, addSkillExperience } from './value';
import { addPerk, removePerk, hasPerk } from './perk';
import { isEquipped, equipItem, equipItemEx, unequipItem, unequipItemEx, unequipAll, unequipItemSlot } from './equip';

const getDisplayName = (mp: Mp, self: PapyrusObject): string => {
  const formId = mp.getIdFromDesc(self.desc);

  const appearance = mp.get(formId, 'appearance');
  if (typeof appearance['name'] === 'string') {
    return appearance['name'];
  }
  return '';
};

// TODO: this code crash skyrim
// const playIdle = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]) => {
//   const selfId = mp.getIdFromDesc(self.desc);
//   const idle = getObject(args, 0);
//   const idleId = mp.getIdFromDesc(idle.desc);

//   console.log(idleId);
//   const playIdleFunction = (ctx: Ctx, idleId: number) => {
//     ctx.sp.once('update', () => {
//       const form = ctx.sp.Game.getFormEx(idleId);
//       ctx.sp.Game.getPlayer()?.playIdle(ctx.sp.Idle.from(form));
//     });
//   };
//   evalClient(mp, selfId, new FunctionInfo(playIdleFunction).getText({ idleId }));
// };

// TODO: Convert As Perk don't work, user M.AsPerk in papyrus scripts
export const register = (mp: Mp): void => {
  mp.registerPapyrusFunction('method', 'Actor', 'GetDisplayName', (self) => getDisplayName(mp, self));

  mp.registerPapyrusFunction('method', 'Actor', 'AddPerk', (self, args) => addPerk(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'RemovePerk', (self, args) => removePerk(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'HasPerk', (self, args) => hasPerk(mp, self, args));

  mp.registerPapyrusFunction('method', 'Actor', 'IsEquipped', (self, args) => isEquipped(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'EquipItem', (self, args) => equipItem(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'EquipItemEx', (self, args) => equipItemEx(mp, self, args));
  // mp.registerPapyrusFunction('method', 'Actor', 'EquipItemById', (self, args) => equipItemById(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'UnequipItem', (self, args) => unequipItem(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'UnequipItemEx', (self, args) => unequipItemEx(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'UnequipAll', (self, args) => unequipAll(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'UnequipItemSlot', (self, args) => unequipItemSlot(mp, self, args));

  mp.registerPapyrusFunction('method', 'Actor', 'SetPosition', (self, args) => setPosition(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'GetPositionX', (self) => getPositionX(mp, self));
  mp.registerPapyrusFunction('method', 'Actor', 'GetPositionY', (self) => getPositionY(mp, self));
  mp.registerPapyrusFunction('method', 'Actor', 'GetPositionZ', (self) => getPositionZ(mp, self));

  mp.registerPapyrusFunction('method', 'Actor', 'SetAngle', (self, args) => setAngle(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'GetAngleX', (self) => getAngleX(mp, self));
  mp.registerPapyrusFunction('method', 'Actor', 'GetAngleY', (self) => getAngleY(mp, self));
  mp.registerPapyrusFunction('method', 'Actor', 'GetAngleZ', (self) => getAngleZ(mp, self));

  mp.registerPapyrusFunction('method', 'Actor', 'SetActorValue', (self, args) => setActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'SetAV', (self, args) => setActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'GetActorValue', (self, args) => getActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'GetAV', (self, args) => getActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'DamageActorValue', (self, args) => damageActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'DamageAV', (self, args) => damageActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'RestoreActorValue', (self, args) => restoreActorValue(mp, self, args));
  mp.registerPapyrusFunction('method', 'Actor', 'RestoreAV', (self, args) => restoreActorValue(mp, self, args));
  // mp.registerPapyrusFunction('method', 'Actor', 'PlayIdle', (self, args) => playIdle(mp, self, args));

  // TODO: temp solve, try to use ActorValueInfo
  mp.registerPapyrusFunction('method', 'Actor', 'AddSkillExperience', (self, args) =>
    addSkillExperience(mp, self, args)
  );
};
