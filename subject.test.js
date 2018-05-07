import { Subject } from "./subject";
import {Observer} from "./Observer";

const hello = new Observer(() => {
    return 'hello';
});

const reverseString = new Observer((string) => {
    return string.split("").reverse().join("")
});

describe('subject', () => {
    it('has a registerObserver method', ()=>{
        const subject = new Subject;

        expect(subject).toBeInstanceOf(Subject);
        expect(subject).toHaveProperty('registerObserver');
        expect(subject.registerObserver).toBeInstanceOf(Function);
    });
    it('can register observerCollection', ()=>{
        const subject = new Subject;
        subject.registerObserver(hello);
        expect(subject.getObservers()).toHaveLength(1);
        expect(subject.getObservers()[0].notify()).toEqual('hello');
    });
    it('has an unregisterObserver method', () => {
        const subject = new Subject;
        expect(subject).toHaveProperty('unregisterObserver');
        expect(subject.unregisterObserver).toBeInstanceOf(Function);
    });
    it('can unregister observers', () => {
        const subject = new Subject;
        subject.registerObserver(hello);
        subject.registerObserver(reverseString);
        expect(subject.observerCollection).toHaveLength(2);
        subject.unregisterObserver(hello);
        expect(subject.observerCollection).toHaveLength(1);
    });

    // it('has an setValue method', () => {
    //     const subject = new Subject;
    //     expect(subject).toHaveProperty('setValue');
    //     expect(subject.setValue).toBeInstanceOf(Function);
    // });
});