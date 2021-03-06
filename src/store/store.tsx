 import { injectable } from 'inversify';
 import "reflect-metadata";
@injectable()
export class Store<T> {
    get(key: string): Array<T> {
        return JSON.parse(localStorage.getItem(key));
    }
    set(key: string, value: Array<T>): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
    subscribeOnChangeStorage (): void {
        window.addEventListener('storage', ()=>this.get("TODO"));
    }
}