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
}

export interface Map {
  listViewIcon: string
  displayName: string
  narrativeDescription: string
  splash: string
}
