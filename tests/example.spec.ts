import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/loginpage.po';
import { ProductPage } from '../page_objects/productscreen.po';
import { CheckoutScreen } from '../page_objects/checkoutpage.po';
import { CheckoutInformationScreen } from '../page_objects/checkoutInformationpage.po';
let loginpage:LoginPage
let productscreen:ProductPage;
let checkoutinfoscreen:CheckoutInformationScreen;
let checkoutscreen:CheckoutScreen;
test.beforeEach('has title', async ({ page }) => {
  loginpage=new LoginPage(page)
  productscreen=new ProductPage(page)
  checkoutinfoscreen=new CheckoutInformationScreen(page)
  checkoutscreen=new CheckoutScreen(page)
  await page.goto('https://www.saucedemo.com/.');
});

  test('Test1: Successful login',async({page})=>{
    await loginpage.loginToApplication('standard_user','secret_sauce')
    await productscreen.addProductToCart('Sauce Labs Bike Light')
    await checkoutscreen.checkoutPage()
    await checkoutinfoscreen.checkoutInfoScreen('duthu','r','465')
});


 
 

