import {test as base} from '@playwright/test';
import {App} from '../../pages/app.page';

export const test = base.extend ({

    appMain: async ({page}, use) => {
        const app = new App(page);
        await page.goto(`${process.env.URL}find-bugs/`);
        await use(app);
    },
    appAccount: async ({page}, use) => {
        const app = new App(page);
        await page.goto(`${process.env.URL}account/`);
        await use(app);
    },

    appMyCart: async ({page}, use) => {
        const app = new App(page);
        await page.goto(`${process.env.URL}my-cart/`);
        await use(app);
    },

    appProduct: async ({page}, use) => {
        const app = new App(page);
        await page.goto(`${process.env.URL}store/dnk-yellow-shoes/`);
        await use(app);
    },
})