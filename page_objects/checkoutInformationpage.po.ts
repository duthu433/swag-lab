import { Locator, Page } from "@playwright/test";

export class CheckoutInformationScreen{
    readonly page:Page
    readonly fnameTxtBox:string="#first-name"
    readonly lnameTxtBox:string="#last-name"
    readonly zipcodetxtbox:string="#postal-code"
    readonly continuebtn:string="#continue"
    readonly cancelbtn:string="#cancel"

    constructor(page:Page){
        this.page=page
    }

    getFnameTxtBox():Locator{
        return this.page.locator(this.fnameTxtBox)
    }
    getLnameTxtBox():Locator{
        return this.page.locator(this.lnameTxtBox)
    }
    getZipCode():Locator{
        return this.page.locator(this.zipcodetxtbox)
    }
    getContinueBtn():Locator{
        return this.page.locator(this.continuebtn)
    }

    async checkoutInfoScreen(fname:string,lname:string,zipcode:string){
        await this.getFnameTxtBox().fill(fname)
        await this.getLnameTxtBox().fill(lname)
        await this.getZipCode().fill(zipcode)
        await this.getContinueBtn().click()
    }

}