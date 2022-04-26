import { injectable } from "inversify";
import LoggerInterface from "./logger.interface";

@injectable()
export default class ConsoleLogger implements LoggerInterface {
    error(data: any): void {
        console.error(data);
    }

    info(data: any): void {
        console.info(data);
    }

    log(data: any): void {
        console.log(data);
    }

    warn(data: any): void {
        console.warn(data);
    }

}