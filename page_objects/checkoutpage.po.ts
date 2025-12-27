import { Locator, Page } from "@playwright/test"

export class CheckoutScreen{
    readonly page:Page
    readonly ctnshpngbtn:string="#continue-shopping"
    readonly checkoutbtn:string="#checkout"
    readonly removebtn:string="//button[text()='Remove']"

    constructor(page:Page){
        this.page=page
    }

    getcontshpng():Locator{
        return this.page.locator(this.ctnshpngbtn)
    }
    getcheckoutbtn():Locator{
        return this.page.locator(this.checkoutbtn)
    }
    getRemovebtn():Locator{
        return this.page.locator(this.removebtn)
    }

    async checkoutPage(){
     await this.getcheckoutbtn().click()
  //await this.getcontshpng().click()
  //await this.getRemovebtn().click()
}
}