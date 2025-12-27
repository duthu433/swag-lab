import { test as base } from '@playwright/test';
import { LoginPage } from '../page_objects/loginpage.po';
import { ProductPage } from '../page_objects/productscreen.po';
import { CheckoutScreen } from '../page_objects/checkoutpage.po';
import { CheckoutInformationScreen } from '../page_objects/checkoutInformationpage.po';

type PageFixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  checkoutPage: CheckoutScreen;
  checkoutInfoPage: CheckoutInformationScreen;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutScreen(page));
  },

  checkoutInfoPage: async ({ page }, use) => {
    await use(new CheckoutInformationScreen(page));
  }
});

export { expect } from '@playwright/test';
