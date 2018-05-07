export class Subject {
    constructor() {
        this.value = undefined;
        this.observerCollection = [];
    }

    registerObserver(observer) {
        this.observerCollection.push(observer);
    };

    unregisterObserver(observerToUnregister) {
        this.observerCollection = this.observerCollection.filter(observer => observer !== observerToUnregister);
    };

    getObservers() {
        return this.observerCollection;
    }

    setValue(value) {
       this.value = value;
       this.notifyObservers();
    }

    notifyObservers() {
        this.observerCollection.forEach(observer => {
            observer.notify(this.value);
        })
    }
}