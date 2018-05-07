import {Observer} from './Observer';

const hello = () => 'hello';

const double = (number) => number * 2;

describe('Observer', () => {

    it('should have a notify method', () => {
        const observer = new Observer;
        expect(observer).toHaveProperty('notify');
        expect(observer.notify).toBeInstanceOf(Function);
    });

    it('should assign notify to a callback function', () => {
        const observer = new Observer(hello);
        expect(observer.notify()).toEqual('hello');
    })

    it('should pass notified values to the callback function', () => {
        const observer = new Observer(double);
        expect(observer.notify(2)).toEqual(4);
    })
});