export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/*.steps.ts'],
    coveragePathIgnorePatterns: [
        '../src/service/MongoService',
        '../src/service/MysqlService',
        '../common/db/MongoDB'
    ]
};