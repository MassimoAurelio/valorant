export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
}

export interface Agent {
  displayName: string
  bustPortrait: string
  description: string
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
