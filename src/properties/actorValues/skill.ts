import { Ctx } from '../../types/ctx';
import { Mp } from '../../types/mp';
import { FunctionInfo } from '../../utils/functionInfo';
import { skillList } from './skillList';

function avUpdate(ctx: Ctx<{ lastValue: number | undefined }, number | undefined>, avName: string) {
  if (ctx.value && ctx.state.lastValue !== ctx.value) {
    const ac = ctx.sp.Actor.from(ctx.refr as any);
    if (!ac) return;

    ac.setActorValue(avName, ctx.value);

    ctx.state.lastValue = ctx.value;
  }
}

function avUpdateExp(ctx: Ctx<{ lastValue: number | undefined }, number | undefined>, avName: string) {
  if (ctx.value !== undefined && ctx.state.lastValue !== ctx.value) {
    const ac = ctx.sp.Actor.from(ctx.refr as any);
    if (!ac) return;

    const avInfo = ctx.sp.ActorValueInfo.getActorValueInfoByName(avName);
    if (!avInfo) return;

    const multiply = avInfo.getExperienceForLevel(ac.getActorValue(avName) + 1) / 100;
    avInfo.setSkillExperience(ctx.value * multiply);

    ctx.state.lastValue = ctx.value;
  }
}

export const register = (mp: Mp): void => {
  Object.keys(skillList).forEach((avName) => {
    mp.makeProperty(`av${avName}`, {
      isVisibleByOwner: true,
      isVisibleByNeighbors: false,
      updateOwner: new FunctionInfo(avUpdate).getText({ avName }),
      updateNeighbor: '',
    });
    mp.makeProperty(`av${avName}Exp`, {
      isVisibleByOwner: true,
      isVisibleByNeighbors: false,
      updateOwner: new FunctionInfo(avUpdateExp).getText({ avName }),
      updateNeighbor: '',
    });
  });
};
