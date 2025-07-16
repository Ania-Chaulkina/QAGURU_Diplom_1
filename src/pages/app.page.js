import { MainPage, MyCartPage, AccountPage } from './index'
import { ProductPage } from './product.page';

export class App {

    constructor(page){
        this.page = page;
        this.main = new MainPage(page)
        this.myCart = new MyCartPage(page);
        this.account = new AccountPage(page);
        this.product = new ProductPage(page);
    };
}
