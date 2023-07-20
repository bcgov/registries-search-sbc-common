module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  testEnvironment: "jsdom",
  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(ts|js|mjs)x?$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":"<rootDir>/tests/jest_setup_css",
    "^vuetify/components$": "<rootDir>/node_modules/vuetify/lib/components/index.mjs",
    "^vuetify/directives$": "<rootDir>/node_modules/vuetify/lib/directives/index.mjs",
    "^vuetify/styles$": "<rootDir>/node_modules/vuetify/lib/styles/main.css"
  },
  transformIgnorePatterns: ['/node_modules/(?!(vuetify)/)'],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  setupFiles: ['jest-localstorage-mock', './tests/unit/setup.ts'],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true
    },
    'vue-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('v-'),
      },
    }
  }
}
