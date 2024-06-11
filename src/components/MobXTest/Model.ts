import { action, makeObservable, observable } from "mobx";

export class Model {
    constructor() {
        makeObservable(this);
    }
    @observable
    count = 0;

    @action
    incriment() {
        this.count++;
    }
}