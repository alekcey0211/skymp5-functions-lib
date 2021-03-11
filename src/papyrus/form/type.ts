export enum FormType {
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

export const formType: Record<string, number> = {
  NONE: FormType.kFormType_None,
  TES4: FormType.kFormType_TES4,
  GRUP: FormType.kFormType_Group,
  GMST: FormType.kFormType_GMST,
  KYWD: FormType.kFormType_Keyword,
  LCRT: FormType.kFormType_LocationRef,
  AACT: FormType.kFormType_Action,
  TXST: FormType.kFormType_TextureSet,
  MICN: FormType.kFormType_MenuIcon,
  GLOB: FormType.kFormType_Global,
  CLAS: FormType.kFormType_Class,
  FACT: FormType.kFormType_Faction,
  HDPT: FormType.kFormType_HeadPart,
  EYES: FormType.kFormType_Eyes,
  RACE: FormType.kFormType_Race,
  SOUN: FormType.kFormType_Sound,
  ASPC: FormType.kFormType_AcousticSpace,
  SKIL: FormType.kFormType_Skill,
  MGEF: FormType.kFormType_EffectSetting,
  SCPT: FormType.kFormType_Script,
  LTEX: FormType.kFormType_LandTexture,
  ENCH: FormType.kFormType_Enchantment,
  SPEL: FormType.kFormType_Spell,
  SCRL: FormType.kFormType_ScrollItem,
  ACTI: FormType.kFormType_Activator,
  TACT: FormType.kFormType_TalkingActivator,
  ARMO: FormType.kFormType_Armor,
  BOOK: FormType.kFormType_Book,
  CONT: FormType.kFormType_Container,
  DOOR: FormType.kFormType_Door,
  INGR: FormType.kFormType_Ingredient,
  LIGH: FormType.kFormType_Light,
  MISC: FormType.kFormType_Misc,
  APPA: FormType.kFormType_Apparatus,
  STAT: FormType.kFormType_Static,
  SCOL: FormType.kFormType_StaticCollection,
  MSTT: FormType.kFormType_MovableStatic,
  GRAS: FormType.kFormType_Grass,
  TREE: FormType.kFormType_Tree,
  FLOR: FormType.kFormType_Flora,
  FURN: FormType.kFormType_Furniture,
  WEAP: FormType.kFormType_Weapon,
  AMMO: FormType.kFormType_Ammo,
  NPC_: FormType.kFormType_NPC,
  LVLN: FormType.kFormType_LeveledCharacter,
  KEYM: FormType.kFormType_Key,
  ALCH: FormType.kFormType_Potion,
  IDLM: FormType.kFormType_IdleMarker,
  NOTE: FormType.kFormType_Note,
  COBJ: FormType.kFormType_ConstructibleObject,
  PROJ: FormType.kFormType_Projectile,
  HAZD: FormType.kFormType_Hazard,
  SLGM: FormType.kFormType_SoulGem,
  LVLI: FormType.kFormType_LeveledItem,
  WTHR: FormType.kFormType_Weather,
  CLMT: FormType.kFormType_Climate,
  SPGD: FormType.kFormType_SPGD,
  RFCT: FormType.kFormType_ReferenceEffect,
  REGN: FormType.kFormType_Region,
  NAVI: FormType.kFormType_NAVI,
  CELL: FormType.kFormType_Cell,
  REFR: FormType.kFormType_Reference,
  ACHR: FormType.kFormType_Character,
  PMIS: FormType.kFormType_Missile,
  PARW: FormType.kFormType_Arrow,
  PGRE: FormType.kFormType_Grenade,
  PBEA: FormType.kFormType_BeamProj,
  PFLA: FormType.kFormType_FlameProj,
  PCON: FormType.kFormType_ConeProj,
  PBAR: FormType.kFormType_BarrierProj,
  PHZD: FormType.kFormType_PHZD,
  WRLD: FormType.kFormType_WorldSpace,
  LAND: FormType.kFormType_Land,
  NAVM: FormType.kFormType_NAVM,
  TLOD: FormType.kFormType_TLOD,
  DIAL: FormType.kFormType_Topic,
  INFO: FormType.kFormType_TopicInfo,
  QUST: FormType.kFormType_Quest,
  IDLE: FormType.kFormType_Idle,
  PACK: FormType.kFormType_Package,
  CSTY: FormType.kFormType_CombatStyle,
  LSCR: FormType.kFormType_LoadScreen,
  LVSP: FormType.kFormType_LeveledSpell,
  ANIO: FormType.kFormType_ANIO,
  WATR: FormType.kFormType_Water,
  EFSH: FormType.kFormType_EffectShader,
  TOFT: FormType.kFormType_TOFT,
  EXPL: FormType.kFormType_Explosion,
  DEBR: FormType.kFormType_Debris,
  IMGS: FormType.kFormType_ImageSpace,
  IMAD: FormType.kFormType_ImageSpaceMod,
  FLST: FormType.kFormType_List,
  PERK: FormType.kFormType_Perk,
  BPTD: FormType.kFormType_BodyPartData,
  ADDN: FormType.kFormType_AddonNode,
  AVIF: FormType.kFormType_ActorValueInfo,
  CAMS: FormType.kFormType_CameraShot,
  CPTH: FormType.kFormType_CameraPath,
  VTYP: FormType.kFormType_VoiceType,
  MATT: FormType.kFormType_MaterialType,
  IPCT: FormType.kFormType_ImpactData,
  IPDS: FormType.kFormType_ImpactDataSet,
  ARMA: FormType.kFormType_ARMA,
  ECZN: FormType.kFormType_EncounterZone,
  LCTN: FormType.kFormType_Location,
  MESH: FormType.kFormType_Message,
  RGDL: FormType.kFormType_Ragdoll,
  DOBJ: FormType.kFormType_DOBJ,
  LGTM: FormType.kFormType_LightingTemplate,
  MUSC: FormType.kFormType_MusicType,
  FSTP: FormType.kFormType_Footstep,
  FSTS: FormType.kFormType_FootstepSet,
  SMBN: FormType.kFormType_StoryBranchNode,
  SMQN: FormType.kFormType_StoryQuestNode,
  SMEN: FormType.kFormType_StoryEventNode,
  DLBR: FormType.kFormType_DialogueBranch,
  MUST: FormType.kFormType_MusicTrack,
  DLVW: FormType.kFormType_DLVW,
  WOOP: FormType.kFormType_WordOfPower,
  SHOU: FormType.kFormType_Shout,
  EQUP: FormType.kFormType_EquipSlot,
  RELA: FormType.kFormType_Relationship,
  SCEN: FormType.kFormType_Scene,
  ASTP: FormType.kFormType_AssociationType,
  OTFT: FormType.kFormType_Outfit,
  ARTO: FormType.kFormType_Art,
  MATO: FormType.kFormType_Material,
  MOVT: FormType.kFormType_MovementType,
  SNDR: FormType.kFormType_SoundDescriptor,
  DUAL: FormType.kFormType_DualCastData,
  SNCT: FormType.kFormType_SoundCategory,
  SOPM: FormType.kFormType_SoundOutput,
  COLL: FormType.kFormType_CollisionLayer,
  CLFM: FormType.kFormType_ColorForm,
  REVB: FormType.kFormType_ReverbParam,
  BGSBaseAlias: FormType.kFormType_Alias,
  BGSRefAlias: FormType.kFormType_ReferenceAlias,
  BGSLocAlias: FormType.kFormType_LocationAlias,
  ActiveMagicEffect: FormType.kFormType_ActiveMagicEffect,
};