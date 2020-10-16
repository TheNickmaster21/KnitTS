import { Service, Util } from './KnitServer';

declare namespace KnitClient {
    const Version: string;

    const Player: Player;
    const Controllers: { [name: string]: Controller };
    const Util: Util;

    function CreateController(controller: Controller): Controller;
    function GetService(serviceName: string): Service;

    function Start(): Promise<void>;
}

interface Controller {
    Name: string;
}

export = KnitClient;
