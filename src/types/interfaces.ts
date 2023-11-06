export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  fullPortrait: string
}

export interface Agent {
  displayName: string
  bustPortrait: string
  description: string
  fullPortrait: string
  displayIconSmall: string
  uuid: any
  role: Role
  displayIcon: string
  abilities: Umeniya[]
}

export interface Umeniya {
  abilities: string
  displayIcon: string
  displayName: string
  slot: string
  description: string
}
export interface Skins {
  displayIcon: string
  displayName: string
  uuid: string
}

export interface Description {
  category: string
}

export interface Stats {
  fireRate: Number
  firstBulletAccuracy: Number
  magazineSize: Number
  reloadTimeSeconds: Number
  runSpeedMultiplier: Number
  shotgunPelletCount: Number
}

export interface Bundle {
  displayName: string
  displayIcon: string
  uuid: string
}

export interface Map {
  listViewIcon: string
  displayName: string
  narrativeDescription: string
  splash: string
}

export interface Guns {
  displayIcon: string
  displayName: string
  categoryText: string
  uuid: string
  category: string
  shopData: Description
  weaponStats: Stats
  skins: Skins[]
}
