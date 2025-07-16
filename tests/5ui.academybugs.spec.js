import {test} from '../src/helpers/fixture/index';
import { expect } from '@playwright/test';

test.describe('5 UI тестов на поиск ошибок', async () => {

    test('Отображение определенного количества товаров на странице', async ({appMain}) =>{
        await appMain.main.clickOnSortPerpage(appMain);
        await expect (appMain.main.bugReportPopup).toBeVisible()
        
    });

    test('Кнопка Sing In /account/', async ({appAccount}) => {
        await appAccount.account.clickSingInBug(appAccount);
        await expect (appAccount.account.bugReportQuestionV2).toBeVisible();

    });

    test('Расположение кнопки Sing In на странице продукта', async ({appProduct}) => {
        await appProduct.product.clickOnSingInBug(appProduct)
        await expect (appProduct.product.bugReportQuestion).toBeVisible();

    });

    test('Возврат к покупкам после очистки корзины', async ({appMain}) => {
        await appMain.main.clickOnViewCart(appMain);
        await appMain.main.deleteShoes(appMain);
        await expect (appMain.main.bugReportQuestion).toBeVisible()

    });

    test('Расположение названия поля Password', async ({appAccount}) => {
        await appAccount.account.clickPasswordBug(appAccount);
        await expect (appAccount.account.bugReportQuestion).toBeVisible()

    });

});
