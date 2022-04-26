export default interface LoggerInterface {
    log(data: any): void;
    info(data: any): void;
    warn(data: any): void;
    error(data: any): void;
}