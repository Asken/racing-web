// export interface IPubSub {
// }

/*interface ITopic {
    token: string;
    func: (...args: any[]) => void;
}*/

class PubSub {
    topics = {}; // Record<string, ITopic[]> = {};
    subUid = -1; // number = -1;

    // constructor(
    //     config: IPubSub = {}
    // ) {
    // }

    // public subscribe = (topic: string, func: (...args: any[]) => void): string => {
    subscribe = (topic, func, scope=null) => {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        const token = (++this.subUid).toString();
        this.topics[topic].push({
            func,
            token,
            scope
        });
        return token;
    }

    // public publish = async (topic: string, ...args: any[]): Promise<boolean> => {
    publish = async (topic, ...args) => {
        if (!this.topics[topic]) {
            return false;
        }

        const funcs = this.topics[topic].map((obj/*: ITopic*/) => {
            return obj.func.call(obj.scope || this, ...args);
        });

        await Promise.all(funcs);
        return true;
    }

    // public unsubscribe = (topic: string, token: string): boolean => {
    unsubscribe = (topic, token) => {
        if (!this.topics[topic]) {
            return false;
        }

        if (!token) {
            delete this.topics[topic];
            return true;
        }

        const tokenIdx/*: number*/ = this.topics[topic].findIndex((value/*: ITopic*/) => {
            return value.token === token;
        });
        if (tokenIdx !== -1 ) {
            delete this.topics[topic][tokenIdx];
            return true;
        }
        return false;
    }
}

const pubsub = new PubSub();
