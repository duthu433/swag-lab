import { test, expect } from '../fixture-file/fixturefile';
import { sauceDemoTestData } from '../test-data/qa-test-data.ts';

test.beforeEach('has title', async ({ page}) => {
  await page.goto(sauceDemoTestData.url);
});

  test('Test1: Successful login',async({loginPage,productPage,checkoutPage,checkoutInfoPage})=>{
    await loginPage.loginToApplication(sauceDemoTestData.user.username,sauceDemoTestData.user.password)
    await productPage.addProductToCart(sauceDemoTestData.product.productname)
    await checkoutPage.checkoutPage()
    await checkoutInfoPage.checkoutInfoScreen(sauceDemoTestData.checkout.firstName,sauceDemoTestData.checkout.lastName,sauceDemoTestData.checkout.zipCode)
});





 
 

