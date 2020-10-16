declare namespace KnitServer {
    const Version: string;

    const Services: { [name: string]: Service };
    const Util: Util;

    function IsService(object: any): boolean;
    function CreateService(service: Service): Service;

    function BindRemoteEvent(service: Service, eventName: string, remoteEvent: unknown): void; //TODO What is remoteEvent
    function BindRemoteFunction(
        service: Service,
        funcName: string,
        func: (Client: ServiceClient, ...args: any[]) => any
    ): void;
    function BindRemoteProperty(service: Service, propName: string, prop: unknown): void; //TODO what is type of prop

    function Start(): Promise<void>;
    function OnStart(): Promise<void>;

    interface Util {
        'Maid': ModuleScript;
        // TODO
    }

    interface Service {
        Name: string;

        Client?: ServiceClient;

        KnitInit?: () => void;
        KnitStart?: () => void;
    }

    interface ServiceClient {}
}

export = KnitServer;
