import { Mp, PapyrusObject, PapyrusValue } from '../types/mp';
import { getNumber } from '../utils/papyrusArgs';

const getFormID = (mp: Mp, self: PapyrusObject) => mp.getIdFromDesc(self.desc);
const getType = (mp: Mp, self: PapyrusObject) => {
  const selfId = mp.getIdFromDesc(self.desc);
  const data = mp.lookupEspmRecordById(selfId);
  switch (data.record?.type) {
    case 'NONE':
      return FormType.kFormType_None;

    case 'TES4':
      return FormType.kFormType_TES4;

    case 'GRUP':
      return FormType.kFormType_Group;

    case 'GMST':
      return FormType.kFormType_GMST;

    case 'KYWD':
      return FormType.kFormType_Keyword;

    case 'LCRT':
      return FormType.kFormType_LocationRef;

    case 'AACT':
      return FormType.kFormType_Action;

    case 'TXST':
      return FormType.kFormType_TextureSet;

    case 'MICN':
      return FormType.kFormType_MenuIcon;

    case 'GLOB':
      return FormType.kFormType_Global;

    case 'CLAS':
      return FormType.kFormType_Class;

    case 'FACT':
      return FormType.kFormType_Faction;

    case 'HDPT':
      return FormType.kFormType_HeadPart;

    case 'EYES':
      return FormType.kFormType_Eyes;

    case 'RACE':
      return FormType.kFormType_Race;

    case 'SOUN':
      return FormType.kFormType_Sound;

    case 'ASPC':
      return FormType.kFormType_AcousticSpace;

    case 'SKIL':
      return FormType.kFormType_Skill;

    case 'MGEF':
      return FormType.kFormType_EffectSetting;

    case 'SCPT':
      return FormType.kFormType_Script;

    case 'LTEX':
      return FormType.kFormType_LandTexture;

    case 'ENCH':
      return FormType.kFormType_Enchantment;

    case 'SPEL':
      return FormType.kFormType_Spell;

    case 'SCRL':
      return FormType.kFormType_ScrollItem;

    case 'ACTI':
      return FormType.kFormType_Activator;

    case 'TACT':
      return FormType.kFormType_TalkingActivator;

    case 'ARMO':
      return FormType.kFormType_Armor;

    case 'BOOK':
      return FormType.kFormType_Book;

    case 'CONT':
      return FormType.kFormType_Container;

    case 'DOOR':
      return FormType.kFormType_Door;

    case 'INGR':
      return FormType.kFormType_Ingredient;

    case 'LIGH':
      return FormType.kFormType_Light;

    case 'MISC':
      return FormType.kFormType_Misc;

    case 'APPA':
      return FormType.kFormType_Apparatus;

    case 'STAT':
      return FormType.kFormType_Static;

    case 'SCOL':
      return FormType.kFormType_StaticCollection;

    case 'MSTT':
      return FormType.kFormType_MovableStatic;

    case 'GRAS':
      return FormType.kFormType_Grass;

    case 'TREE':
      return FormType.kFormType_Tree;

    case 'FLOR':
      return FormType.kFormType_Flora;

    case 'FURN':
      return FormType.kFormType_Furniture;

    case 'WEAP':
      return FormType.kFormType_Weapon;

    case 'AMMO':
      return FormType.kFormType_Ammo;

    case 'NPC_':
      return FormType.kFormType_NPC;

    case 'LVLN':
      return FormType.kFormType_LeveledCharacter;

    case 'KEYM':
      return FormType.kFormType_Key;

    case 'ALCH':
      return FormType.kFormType_Potion;

    case 'IDLM':
      return FormType.kFormType_IdleMarker;

    case 'NOTE':
      return FormType.kFormType_Note;

    case 'COBJ':
      return FormType.kFormType_ConstructibleObject;

    case 'PROJ':
      return FormType.kFormType_Projectile;

    case 'HAZD':
      return FormType.kFormType_Hazard;

    case 'SLGM':
      return FormType.kFormType_SoulGem;

    case 'LVLI':
      return FormType.kFormType_LeveledItem;

    case 'WTHR':
      return FormType.kFormType_Weather;

    case 'CLMT':
      return FormType.kFormType_Climate;

    case 'SPGD':
      return FormType.kFormType_SPGD;

    case 'RFCT':
      return FormType.kFormType_ReferenceEffect;

    case 'REGN':
      return FormType.kFormType_Region;

    case 'NAVI':
      return FormType.kFormType_NAVI;

    case 'CELL':
      return FormType.kFormType_Cell;

    case 'REFR':
      return FormType.kFormType_Reference;

    case 'ACHR':
      return FormType.kFormType_Character;

    case 'PMIS':
      return FormType.kFormType_Missile;

    case 'PARW':
      return FormType.kFormType_Arrow;

    case 'PGRE':
      return FormType.kFormType_Grenade;

    case 'PBEA':
      return FormType.kFormType_BeamProj;

    case 'PFLA':
      return FormType.kFormType_FlameProj;

    case 'PCON':
      return FormType.kFormType_ConeProj;

    case 'PBAR':
      return FormType.kFormType_BarrierProj;

    case 'PHZD':
      return FormType.kFormType_PHZD;

    case 'WRLD':
      return FormType.kFormType_WorldSpace;

    case 'LAND':
      return FormType.kFormType_Land;

    case 'NAVM':
      return FormType.kFormType_NAVM;

    case 'TLOD':
      return FormType.kFormType_TLOD;

    case 'DIAL':
      return FormType.kFormType_Topic;

    case 'INFO':
      return FormType.kFormType_TopicInfo;

    case 'QUST':
      return FormType.kFormType_Quest;

    case 'IDLE':
      return FormType.kFormType_Idle;

    case 'PACK':
      return FormType.kFormType_Package;

    case 'CSTY':
      return FormType.kFormType_CombatStyle;

    case 'LSCR':
      return FormType.kFormType_LoadScreen;

    case 'LVSP':
      return FormType.kFormType_LeveledSpell;

    case 'ANIO':
      return FormType.kFormType_ANIO;

    case 'WATR':
      return FormType.kFormType_Water;

    case 'EFSH':
      return FormType.kFormType_EffectShader;

    case 'TOFT':
      return FormType.kFormType_TOFT;

    case 'EXPL':
      return FormType.kFormType_Explosion;

    case 'DEBR':
      return FormType.kFormType_Debris;

    case 'IMGS':
      return FormType.kFormType_ImageSpace;

    case 'IMAD':
      return FormType.kFormType_ImageSpaceMod;

    case 'FLST':
      return FormType.kFormType_List;

    case 'PERK':
      return FormType.kFormType_Perk;

    case 'BPTD':
      return FormType.kFormType_BodyPartData;

    case 'ADDN':
      return FormType.kFormType_AddonNode;

    case 'AVIF':
      return FormType.kFormType_ActorValueInfo;

    case 'CAMS':
      return FormType.kFormType_CameraShot;

    case 'CPTH':
      return FormType.kFormType_CameraPath;

    case 'VTYP':
      return FormType.kFormType_VoiceType;

    case 'MATT':
      return FormType.kFormType_MaterialType;

    case 'IPCT':
      return FormType.kFormType_ImpactData;

    case 'IPDS':
      return FormType.kFormType_ImpactDataSet;

    case 'ARMA':
      return FormType.kFormType_ARMA;

    case 'ECZN':
      return FormType.kFormType_EncounterZone;

    case 'LCTN':
      return FormType.kFormType_Location;

    case 'MESH':
      return FormType.kFormType_Message;

    case 'RGDL':
      return FormType.kFormType_Ragdoll;

    case 'DOBJ':
      return FormType.kFormType_DOBJ;

    case 'LGTM':
      return FormType.kFormType_LightingTemplate;

    case 'MUSC':
      return FormType.kFormType_MusicType;

    case 'FSTP':
      return FormType.kFormType_Footstep;

    case 'FSTS':
      return FormType.kFormType_FootstepSet;

    case 'SMBN':
      return FormType.kFormType_StoryBranchNode;

    case 'SMQN':
      return FormType.kFormType_StoryQuestNode;

    case 'SMEN':
      return FormType.kFormType_StoryEventNode;

    case 'DLBR':
      return FormType.kFormType_DialogueBranch;

    case 'MUST':
      return FormType.kFormType_MusicTrack;

    case 'DLVW':
      return FormType.kFormType_DLVW;

    case 'WOOP':
      return FormType.kFormType_WordOfPower;

    case 'SHOU':
      return FormType.kFormType_Shout;

    case 'EQUP':
      return FormType.kFormType_EquipSlot;

    case 'RELA':
      return FormType.kFormType_Relationship;

    case 'SCEN':
      return FormType.kFormType_Scene;

    case 'ASTP':
      return FormType.kFormType_AssociationType;

    case 'OTFT':
      return FormType.kFormType_Outfit;

    case 'ARTO':
      return FormType.kFormType_Art;

    case 'MATO':
      return FormType.kFormType_Material;

    case 'MOVT':
      return FormType.kFormType_MovementType;

    case 'SNDR':
      return FormType.kFormType_SoundDescriptor;

    case 'DUAL':
      return FormType.kFormType_DualCastData;

    case 'SNCT':
      return FormType.kFormType_SoundCategory;

    case 'SOPM':
      return FormType.kFormType_SoundOutput;

    case 'COLL':
      return FormType.kFormType_CollisionLayer;

    case 'CLFM':
      return FormType.kFormType_ColorForm;

    case 'REVB':
      return FormType.kFormType_ReverbParam;

    case 'BGSBaseAlias':
      return FormType.kFormType_Alias;

    case 'BGSRefAlias':
      return FormType.kFormType_ReferenceAlias;

    case 'BGSLocAlias':
      return FormType.kFormType_LocationAlias;

    case 'ActiveMagicEffect':
      return FormType.kFormType_ActiveMagicEffect;

    default:
      return 0;
  }
};

const getKeywords = (mp: Mp, self: PapyrusObject): PapyrusObject[] => {
  const selfId = mp.getIdFromDesc(self.desc);
  const data = mp.lookupEspmRecordById(selfId);
  const kwda = data.record?.fields.find((x) => x.type === 'KWDA')?.data;
  const keywords: PapyrusObject[] = [];
  if (kwda) {
    const dataView = new DataView(kwda.buffer);
    for (let i = 0; i < dataView.byteLength; i += 4) {
      keywords.push({
        desc: mp.getDescFromId(dataView.getUint32(i, true)),
        type: 'espm',
      });
    }
  }
  return keywords;
};

const getNumKeywords = (mp: Mp, self: PapyrusObject): number | undefined => {
  const selfId = mp.getIdFromDesc(self.desc);
  const data = mp.lookupEspmRecordById(selfId);
  const ksiz = data.record?.fields.find((x) => x.type === 'KSIZ')?.data;
  if (ksiz) {
    const dataView = new DataView(ksiz.buffer);
    return dataView.getUint32(0, true);
  }
  return;
};

const getNthKeyword = (mp: Mp, self: PapyrusObject, args: PapyrusValue[]): PapyrusObject | undefined => {
  const selfId = mp.getIdFromDesc(self.desc);
  const data = mp.lookupEspmRecordById(selfId);
  const index = getNumber(args, 0) - 1;
  const kwda = data.record?.fields.find((x) => x.type === 'KWDA')?.data;
  if (kwda) {
    let dataView = new DataView(kwda.buffer);
    return {
      desc: mp.getDescFromId(dataView.getUint32(index * 4, true)),
      type: 'espm',
    };
  }
  return;
};

export const register = (mp: Mp): void => {
  mp.registerPapyrusFunction('method', 'Form', 'GetFormID', (self) => getFormID(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetType', (self) => getType(mp, self));

  mp.registerPapyrusFunction('method', 'Form', 'GetKeywords', (self) => getKeywords(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetNumKeywords', (self) => getNumKeywords(mp, self));
  mp.registerPapyrusFunction('method', 'Form', 'GetNthKeyword', (self, args) => getNthKeyword(mp, self, args));
};

enum FormType {
  kFormType_None, //	NONE
  kFormType_TES4, //	TES4
  kFormType_Group, //	GRUP
  kFormType_GMST, //	GMST
  kFormType_Keyword, //	KYWD	BGSKeyword
  kFormType_LocationRef, //	LCRT	BGSLocationRefType
  kFormType_Action, //	AACT	BGSAction
  kFormType_TextureSet, //	TXST	BGSTextureSet
  kFormType_MenuIcon, //	MICN	BGSMenuIcon
  kFormType_Global, //	GLOB	TESGlobal
  kFormType_Class, //	CLAS	TESClass
  kFormType_Faction, //	FACT	TESFaction
  kFormType_HeadPart, //	HDPT	BGSHeadPart
  kFormType_Eyes, //	EYES	TESEyes
  kFormType_Race, //	RACE	TESRace
  kFormType_Sound, //	SOUN	TESSound
  kFormType_AcousticSpace, //	ASPC	BGSAcousticSpace
  kFormType_Skill, //	SKIL	<missing>
  kFormType_EffectSetting, //	MGEF	EffectSetting
  kFormType_Script, //	SCPT	Script
  kFormType_LandTexture, //	LTEX	TESLandTexture
  kFormType_Enchantment, //	ENCH	EnchantmentItem
  kFormType_Spell, //	SPEL	SpellItem
  kFormType_ScrollItem, //	SCRL	ScrollItem
  kFormType_Activator, //	ACTI	TESObjectACTI
  kFormType_TalkingActivator, //	TACT	BGSTalkingActivator
  kFormType_Armor, //	ARMO	TESObjectARMO
  kFormType_Book, //	BOOK	TESObjectBOOK
  kFormType_Container, //	CONT	TESObjectCONT
  kFormType_Door, //	DOOR	TESObjectDOOR
  kFormType_Ingredient, //	INGR	IngredientItem
  kFormType_Light, //	LIGH	TESObjectLIGH
  kFormType_Misc, //	MISC	TESObjectMISC
  kFormType_Apparatus, //	APPA	BGSApparatus
  kFormType_Static, //	STAT	TESObjectSTAT
  kFormType_StaticCollection, //	SCOL	BGSStaticCollection
  kFormType_MovableStatic, //	MSTT	BGSMovableStatic
  kFormType_Grass, //	GRAS	TESGrass
  kFormType_Tree, //	TREE	TESObjectTREE
  kFormType_Flora, //	FLOR	TESFlora
  kFormType_Furniture, //	FURN	TESFurniture
  kFormType_Weapon, //	WEAP	TESObjectWEAP
  kFormType_Ammo, //	AMMO	TESAmmo
  kFormType_NPC, //	NPC_	TESNPC
  kFormType_LeveledCharacter, //	LVLN	TESLevCharacter
  kFormType_Key, //	KEYM	TESKey
  kFormType_Potion, //	ALCH	AlchemyItem
  kFormType_IdleMarker, //	IDLM	BGSIdleMarker / BGSDefaultObjectManager? strange
  kFormType_Note, //	NOTE	BGSNote
  kFormType_ConstructibleObject, //	COBJ	BGSConstructibleObject
  kFormType_Projectile, //	PROJ	BGSProjectile
  kFormType_Hazard, //	HAZD	BGSHazard
  kFormType_SoulGem, //	SLGM	TESSoulGem
  kFormType_LeveledItem, //	LVLI	TESLevItem
  kFormType_Weather, //	WTHR	TESWeather
  kFormType_Climate, //	CLMT	TESClimate
  kFormType_SPGD, //	SPGD	BGSShaderParticleGeometryData
  kFormType_ReferenceEffect, //	RFCT	BGSReferenceEffect
  kFormType_Region, //	REGN	TESRegion
  kFormType_NAVI, //	NAVI	NavMeshInfoMap
  kFormType_Cell, //	CELL	TESObjectCELL
  kFormType_Reference, //	REFR	TESObjectREFR / Actor
  kFormType_Character, //	ACHR	Character / PlayerCharacter
  kFormType_Missile, //	PMIS	MissileProjectile
  kFormType_Arrow, //	PARW	ArrowProjectile
  kFormType_Grenade, //	PGRE	GrenadeProjectile
  kFormType_BeamProj, //	PBEA	BeamProjectile
  kFormType_FlameProj, //	PFLA	FlameProjectile
  kFormType_ConeProj, //	PCON	ConeProjectile
  kFormType_BarrierProj, //	PBAR	BarrierProjectile
  kFormType_PHZD, //	PHZD	Hazard
  kFormType_WorldSpace, //	WRLD	TESWorldSpace
  kFormType_Land, //	LAND	TESObjectLAND
  kFormType_NAVM, //	NAVM	NavMesh
  kFormType_TLOD, //	TLOD	?
  kFormType_Topic, //	DIAL	TESTopic
  kFormType_TopicInfo, //	INFO	TESTopicInfo
  kFormType_Quest, //	QUST	TESQuest
  kFormType_Idle, //	IDLE	TESIdleForm
  kFormType_Package, //	PACK	TESPackage
  kFormType_CombatStyle, //	CSTY	TESCombatStyle
  kFormType_LoadScreen, //	LSCR	TESLoadScreen
  kFormType_LeveledSpell, //	LVSP	TESLevSpell
  kFormType_ANIO, //	ANIO	TESObjectANIO
  kFormType_Water, //	WATR	TESWaterForm
  kFormType_EffectShader, //	EFSH	TESEffectShader
  kFormType_TOFT, //	TOFT	?
  kFormType_Explosion, //	EXPL	BGSExplosion
  kFormType_Debris, //	DEBR	BGSDebris
  kFormType_ImageSpace, //	IMGS	TESImageSpace
  kFormType_ImageSpaceMod, //	IMAD	TESImageSpaceModifier
  kFormType_List, //	FLST	BGSListForm
  kFormType_Perk, //	PERK	BGSPerk
  kFormType_BodyPartData, //	BPTD	BGSBodyPartData
  kFormType_AddonNode, //	ADDN	BGSAddonNode
  kFormType_ActorValueInfo, //	AVIF	ActorValueInfo
  kFormType_CameraShot, //	CAMS	BGSCameraShot
  kFormType_CameraPath, //	CPTH	BGSCameraPath
  kFormType_VoiceType, //	VTYP	BGSVoiceType
  kFormType_MaterialType, //	MATT	BGSMaterialType
  kFormType_ImpactData, //	IPCT	BGSImpactData
  kFormType_ImpactDataSet, //	IPDS	BGSImpactDataSet
  kFormType_ARMA, //	ARMA	TESObjectARMA
  kFormType_EncounterZone, //	ECZN	BGSEncounterZone
  kFormType_Location, //	LCTN	BGSLocation
  kFormType_Message, //	MESH	BGSMessage
  kFormType_Ragdoll, //	RGDL	BGSRagdoll
  kFormType_DOBJ, //	DOBJ	? (used for default objects, custom loader)
  kFormType_LightingTemplate, //	LGTM	BGSLightingTemplate
  kFormType_MusicType, //	MUSC	BGSMusicType
  kFormType_Footstep, //	FSTP	BGSFootstep
  kFormType_FootstepSet, //	FSTS	BGSFootstepSet
  kFormType_StoryBranchNode, //	SMBN	BGSStoryManagerBranchNode
  kFormType_StoryQuestNode, //	SMQN	BGSStoryManagerQuestNode
  kFormType_StoryEventNode, //	SMEN	BGSStoryManagerEventNode
  kFormType_DialogueBranch, //	DLBR	BGSDialogueBranch
  kFormType_MusicTrack, //	MUST	BGSMusicTrackFormWrapper
  kFormType_DLVW, //	DLVW	?
  kFormType_WordOfPower, //	WOOP	TESWordOfPower
  kFormType_Shout, //	SHOU	TESShout
  kFormType_EquipSlot, //	EQUP	BGSEquipSlot
  kFormType_Relationship, //	RELA	BGSRelationship
  kFormType_Scene, //	SCEN	BGSScene
  kFormType_AssociationType, //	ASTP	BGSAssociationType
  kFormType_Outfit, //	OTFT	BGSOutfit
  kFormType_Art, //	ARTO	BGSArtObject
  kFormType_Material, //	MATO	BGSMaterialObject
  kFormType_MovementType, //	MOVT	BGSMovementType
  kFormType_SoundDescriptor, //	SNDR	BGSSoundDescriptorForm
  kFormType_DualCastData, //	DUAL	BGSDualCastData
  kFormType_SoundCategory, //	SNCT	BGSSoundCategory
  kFormType_SoundOutput, //	SOPM	BGSSoundOutput
  kFormType_CollisionLayer, //	COLL	BGSCollisionLayer
  kFormType_ColorForm, //	CLFM	BGSColorForm
  kFormType_ReverbParam, //	REVB	BGSReverbParameters
  kFormType_LensFlare, //
  kFormType_Unk88,
  kFormType_VolumetricLighting, //
  kFormType_Unk8A,
  kFormType_Alias, //			BGSBaseAlias
  kFormType_ReferenceAlias, //			BGSRefAlias
  kFormType_LocationAlias, //			BGSLocAlias
  kFormType_ActiveMagicEffect, //			ActiveMagicEffect

  kFormType_Max = kFormType_VolumetricLighting, // max of standard types
}
