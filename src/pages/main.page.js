import {test} from '../helpers/fixture/index';
import {URL} from '../helpers/fixture'
export class MainPage {

    constructor(page){
        this.page = page;
        this.deleteCart = page.locator('#ec_cartitem_delete_1997978');
        this.returnStoreButton = page.getByRole('link', { name: 'RETURN TO STOR      E' });
        this.productSortPerpage = page.getByRole('link', { name: '10' });
        this.yellowShoesProduct = page.locator('#ec_product_image_effect_4481370').getByRole('link');
        this.addToCartButton = page.locator('#ec_add_to_cart_5');
        this.checkoutNowButton = page.getByRole('link', { name: 'CHECKOUT NOW' });
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
        this.bugReportQuestion = page.getByRole('heading', { name: 'What did you find out?' });
        this.bugReportQuestionV2 = page.getByRole('heading', { name: '#1 Awesome! You found a bug. Pretty easy right?' });
        this.bugReportPopup = page.getByRole('heading', { name: 'You found a crash bug, examine the page by clicking on any button for 5 seconds.' });
    };

    async clickOnSortPerpage(){
    return test.step('Кликаем по кнопке количества элементов на странице', async()=> {
        await this.productSortPerpage.click();
    })
   };

   async clickOnAddToCart(){
    return test.step('Добавляем товар в корзину', async()=> {
        await this.addToCartButton.click();
    })
   };

   async clickOnViewCart(){
    return test.step('Кликаем по кнопке перехода в корзину', async()=> {
        await this.addToCartButton.click();
        await this.viewCartButton.click();
    })
   };

   async deleteShoes() {
    return test.step('Возврат к покупкам после очистки корзины', async () => {
        await this.page.waitForResponse(`${URL}my-cart/`);
        await this.deleteCart.click();
        await this.returnStoreButton.click();
    })
   };


}


