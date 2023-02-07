const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  testEnvironment: 'jest-environment-jsdom',
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
    'rehype-raw',
    'hast-util-raw',
    'hast-util-to-parse5',
    'hast-util-from-parse5',
    'hast-util-parse-selector',
    'hastscript',
    'space-separated-tokens',
    'comma-separated-tokens',
    'unist-util-visit',
    'unist-util-visit-parents',
    'unist-util-is',
    'unist-util-position',
    'micromark-extension-directive',
    'micromark-factory-space',
    'micromark-util-character',
    'micromark-factory-whitespace',
    'parse-entities',
    'property-information',
    'character-entities-legacy',
    'character-reference-invalid',
    'is-decimal',
    'is-hexadecimal',
    'is-alphanumerical',
    'is-alphabetical',
    'html-void-elements',
    'decode-named-character-reference',
    'mdast-util-directive',
    'stringify-entities',
    'vfile-location',
    'web-namespaces',
    'character-entities-html4',
    'mdast-util-to-markdown',
    'zwitch',
  ];

  nextJestConfig.transformIgnorePatterns[0] = `/node_modules/(?!(${transformModules.join(
    '|'
  )})/)`;
  return nextJestConfig;
};
