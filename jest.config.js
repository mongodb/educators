const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  moduleNameMapper: {
    lib$: '<rootDir>/src/lib/$1',
    'pages/(.*)$': '<rootDir>/src/pages/$1',
    'styles/(.*)$': '<rootDir>/src/styles/$1',
    'components/(.*)$': '<rootDir>/src/components/$1',
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
  },
};

module.exports = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  const transformModules = [
    'remark-directive',
    'unist-util-visit',
    'unist-util-visit-parents',
    'unist-util-is',
    'micromark-extension-directive',
    'micromark-factory-space',
    'micromark-util-character',
    'micromark-factory-whitespace',
    'parse-entities',
    'character-entities-legacy',
    'character-reference-invalid',
    'is-decimal',
    'is-hexadecimal',
    'is-alphanumerical',
    'is-alphabetical',
    'decode-named-character-reference',
    'mdast-util-directive',
    'stringify-entities',
    'character-entities-html4',
    'mdast-util-to-markdown',
  ];

  nextJestConfig.transformIgnorePatterns[0] = `/node_modules/(?!(${transformModules.join(
    '|'
  )})/)`;
  return nextJestConfig;
};
