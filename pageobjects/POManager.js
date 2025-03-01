import DashboardPage from './DashboardPage.js'
import LoginPage from './LoginPage.js'
import OrdersHistoryPage from './OrderHistoryPage.js'
import OrdersReviewPage from './OrdersReviewPage.js'
import CartPage from './CartPage.js'


class POManager
{
 

    constructor(page){

        this.page = page;
        this.loginPage= new LoginPage(this.page)
        this.dashboardPage= new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    getLoginPage(){

        return this.loginPage;
    }

    getdashboardPage(){

        return this.dashboardPage;
    }
    getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
getCartPage()
{
    return this.cartPage;
}







}
export default POManager;
//module.exports= {POManager}