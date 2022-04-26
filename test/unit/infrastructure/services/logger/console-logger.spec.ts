import 'reflect-metadata';
import LoggerInterface from '../../../../../src/infrastructure/services/logger/logger.interface';
import ConsoleLogger from '../../../../../src/infrastructure/services/logger/console-logger';

describe('Console logger', () => {
    let logger: LoggerInterface;

    beforeAll(() => {
        logger = new ConsoleLogger();

        jest.spyOn(console, 'info').mockImplementation(jest.fn());
        jest.spyOn(console, 'warn').mockImplementation(jest.fn());
        jest.spyOn(console, 'error').mockImplementation(jest.fn());
        jest.spyOn(console, 'log').mockImplementation(jest.fn());
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('Testing info function', () => {
        logger.info('Testing info function');
        expect(console.info).toHaveBeenCalled();
    });

    it('Testing warn function', () => {
        logger.warn('Testing warn function');
        expect(console.warn).toHaveBeenCalled();
    });

    it('Testing log function', () => {
        logger.log('Testing log function');
        expect(console.log).toHaveBeenCalled();
    });

    it('Testing error function', () => {
        logger.error('Testing error function');
        expect(console.error).toHaveBeenCalled();
    });
});