/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    roots: [
        "<rootDir>/test"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageThreshold: {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }
    },
    testTimeout: 15000
};