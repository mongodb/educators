const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'pages/(.*)$': '<rootDir>/src/pages/$1',
		'styles/(.*)$': '<rootDir>/src/styles/$1',
		'components/(.*)$': '<rootDir>/src/components/$1',
	},
};

module.exports = createJestConfig(customJestConfig);
