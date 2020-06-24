module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'js'],
    setupFilesAfterEnv: ['./test/setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/test/**/*.test.(ts|js)'],
    testEnvironment: 'node',
    verbose: true,
};
