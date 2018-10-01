// TODO: Reference the correct Fluture types

declare module 'limitor' {
  type Limitor = (flutures: any[]) => (limit: number) => void

  const limitor: Limitor

  export = limitor
}