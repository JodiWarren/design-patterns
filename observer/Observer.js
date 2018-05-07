export class Observer {
    constructor(callback) {
        this.callback = callback;
    }

    notify(value) {
        return this.callback(value);
    }
}