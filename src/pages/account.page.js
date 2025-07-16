import {test} from '../helpers/fixture/index';

export class AccountPage {
    constructor(page){
        this.page = page;
        this.password = page.getByText('Password*');
        this.singInButton = page.getByRole('button', { name: 'SIGN IN' });
        this.bugReportQuestionV2 = page.getByRole('heading', { name: '#1 Awesome! You found a bug. Pretty easy right?' });
        this.bugReportQuestion = page.getByRole('heading', { name: 'What did you find out?' });
        this.bugReportPopup = page.getByRole('heading', { name: 'You found a crash bug, examine the page by clicking on any button for 5 seconds.' });
    };

    async clickPasswordBug() {
    return test.step('Находим неверное расположение названия поля password', async () => {
        await this.password.click();
    })
   };

   async clickSingInBug() {
    return test.step('Находим расположенное не по центру название кнопки Sing In', async () => {
        await this.singInButton.click();
    })
   };
};