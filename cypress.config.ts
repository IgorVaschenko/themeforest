import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1200,
    viewportHeight: 1000,
  },
});

// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },

//   component: {
//     devServer: {
//       framework: "create-react-app",
//       bundler: "webpack",
//     },
//   },
// });
