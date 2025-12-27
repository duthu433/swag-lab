import { Locator, Page } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly usernametxtbox: string = "[name='user-name']"
    readonly passwordtxtbox: string = "[name='password']"
    readonly loginbtn: string = '#login-button'

    constructor(page: Page) {
        this.page = page
    }
    getUserNameTxtBox(): Locator {
        return this.page.locator(this.usernametxtbox)
    }
    getPasswordTxtBox(): Locator {
        return this.page.locator(this.passwordtxtbox)
    }
    getClickBtn(): Locator {
        return this.page.locator(this.loginbtn)
    }

    async loginToApplication(username:string,password:string) {
        await this.getUserNameTxtBox().fill(username)
        await this.getPasswordTxtBox().fill(password)
        this.page.on('dialog', async (dialog) => {
            await dialog.accept()
            console.log(dialog.type())
        })
        await this.getClickBtn().click({ force: true })
    }
}