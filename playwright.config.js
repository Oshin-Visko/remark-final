// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 120000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [['html', { open: 'never' }]],

  projects: [

    {
      name: 'Candidate',

      testDir: './tests/Candidates',

      use: {
        storageState: './candidateauth.json',

        trace: 'on-first-retry',

        permissions: [],

        viewport: {
          width: 1920,
          height: 1080,
        },

        launchOptions: {
          executablePath:
            'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',

          args: [
            '--start-maximized',
            '--window-position=0,0',
            '--window-size=1920,1080',
          ],
        },
      },
    },

    {
      name: 'Employer',

      testDir: './tests/Employer',

      use: {
        storageState: './employerauth.json',

        trace: 'on-first-retry',

        permissions: [],

        viewport: {
          width: 1920,
          height: 1080,
        },

        launchOptions: {
          executablePath:
            'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',

          args: [
            '--start-maximized',
            '--window-position=0,0',
            '--window-size=1920,1080',
          ],
        },
      },
    },

  ],

});