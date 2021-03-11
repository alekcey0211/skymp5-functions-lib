import { Mp, PapyrusValue } from '../types/mp';
import { getObject, getBoolean } from '../utils/papyrusArgs';

const setVisible = (mp: Mp, self: null, args: PapyrusValue[]) => {
  const ac = getObject(args, 0);
  const visible = getBoolean(args, 1);
  mp.set(mp.getIdFromDesc(ac.desc), 'browserVisible', visible);
};

const setFocused = (mp: Mp, self: null, args: PapyrusValue[]) => {
  const ac = getObject(args, 0);
  const focused = getBoolean(args, 1);
  mp.set(mp.getIdFromDesc(ac.desc), 'browserFocused', focused);
};

export const register = (mp: Mp): void => {
  mp.registerPapyrusFunction('global', 'Browser', 'SetVisible', (self, args) => setVisible(mp, self, args));
  mp.registerPapyrusFunction('global', 'Browser', 'setFocused', (self, args) => setFocused(mp, self, args));
};
