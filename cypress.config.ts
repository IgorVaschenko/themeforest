import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1200,
    viewportHeight: 1000,
  },
});
