import {test} from '../helpers/fixture/index';
export class ProductPage {
    constructor(page){
        this.page = page; 
        this.singInButton = page.getByRole('button', { name: 'SIGN IN' });
        this.bugReportPopup = page.getByRole('heading', { name: 'You found a crash bug,' });
        this.cookie = page.getByRole('button', { name: 'Functional only' });
        this.bugReportQuestion = page.getByRole('heading', { name: 'What did you find out?' });
    };

   async clickOnSingInBug() {
    return test.step('Кликаем на кнопку Sing In', async () => {
        await this.cookie.click();
        await this.singInButton.click();
    })
   };

}