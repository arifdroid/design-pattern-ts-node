import { RecordHandler, loader } from './loader'
//https://github.com/jherr/ts-patterns/blob/master/src/loader.ts
//https://www.typescriptlang.org/docs/handbook/2/generics.html

interface Pokemon {
    id: string,
    attack: number,
    defense: number
}

interface BaseRecord {
    id: string
}

interface Database<T extends BaseRecord> { // atleast must have id
    set(newValue: T): void
    get(id: string): T | undefined
}

class InMemoryDatabase implements Database<Type>{
    private db: Record<string, T> = {};

    public set(newValue: T): void {
        this.db[newValue?.id] = newValue
    }

    public get(id: string): T | undefined {
        return this.db[id]
    }

}
