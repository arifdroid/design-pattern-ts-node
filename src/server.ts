import { RecordHandler, loader } from './loader'

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

class InMemoryDatabase implements Database<T>{
    private db: Record<string, T> = {};

    public set(newValue: T): void {
        this.db[newValue?.id] = newValue
    }

    public get(id: string): T | undefined {
        return this.db[id]
    }

}
