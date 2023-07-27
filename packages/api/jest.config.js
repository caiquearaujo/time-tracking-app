module.exports = {
	verbose: true,
	rootDir: '.',
	roots: ['<rootDir>/src', '<rootDir>/test'],
	testMatch: ['**/test/*spec.+(ts)', '**/test/**/*spec.+(ts)'],
	collectCoverage: true,
	coverageThreshold: {
		global: {
			branches: 30,
			functions: 50,
			lines: 60,
			statements: 60,
		},
	},
	coveragePathIgnorePatterns: [
		'./node_modules/',
		'./test/',
		'./debug',
		'./build',
		'./src/server',
	],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	transform: {
		'^.+\\.ts?$': [
			'ts-jest',
			{
				diagnostics: false,
				tsconfig: 'tsconfig.json',
			},
		],
	},
	preset: 'ts-jest',
	moduleFileExtensions: ['ts', 'js'],
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		'#/(.*)': '<rootDir>/test/$1',
	},
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	extensionsToTreatAsEsm: ['.ts'],
	setupFiles: ['<rootDir>/src/config/env.ts'],
	setupFilesAfterEnv: ['<rootDir>/test/globals.ts'],
};
