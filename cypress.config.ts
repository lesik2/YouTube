/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        supportFile: false,
        baseUrl: 'http://localhost:9000',
        defaultCommandTimeout: 20000,
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {},
    },
});
