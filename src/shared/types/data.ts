export type ID = string

interface SpaceValues {
  kb: string
  percentage: string
}

export interface SpaceInfo {
  used: SpaceValues
  left: SpaceValues
}

export interface Label {
  id: ID
  name: string
}
