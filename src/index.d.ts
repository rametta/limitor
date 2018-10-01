/// <reference types="fluture" />

declare module 'limitor' {
  type Limitor = (futures: FutureInstance[]) => (limit: number) => FutureInstance[]

  const limitor: Limitor

  export = limitor
}
