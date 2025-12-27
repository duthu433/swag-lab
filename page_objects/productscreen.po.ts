import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page:Page;
    readonly sortbtn:string='.product_sort_container'
    readonly producttab:string="div[@class='inventory_item_description']"
    readonly productprice:string="div[@class='inventory_item_price']"
    readonly addtocartbtn:string="button[text()='Add to cart']"
    readonly cartbtn=".shopping_cart_container"
    constructor(page:Page){
        this.page=page
    }
    
    getSortDropDown():Locator{
        return this.page.locator(this.sortbtn)
    }

    getAddToCartBtn():Locator{
        return this.page.locator(this.addtocartbtn)
    }

    getClickOnCart():Locator{
        return this.page.locator(this.cartbtn)
    }
    getproductByName(productname:string):Locator{
        return this.page.locator(`//div[text()='${productname}']/ancestor::div[@class='inventory_item_description']`)
    }
    getproductByPrice(productname:string){
        return this.getproductByName(productname).locator("//div[@class='inventory_item_price']")
    }
    getAddToCartByname(productname:string):Locator{
        return this.getproductByName(productname).locator("//button[text()='Add to cart']")
    }
    async addProductToCart(productname:string){
    await this.getSortDropDown().selectOption({value:'za'})
    console.log(await this.getproductByPrice(productname).innerText())
    await this.getAddToCartByname(productname).click()
    //await this.page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']").click()
    await this.getClickOnCart().click()
    }
}