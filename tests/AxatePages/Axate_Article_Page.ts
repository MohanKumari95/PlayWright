import { Page, expect } from "@playwright/test";
import { title } from "process";


class UserRegistration{
 page: any;
    clickGetApass: any;
    clickContinue: any;
    emailIDText: any;
    selectPostCode: any;
    regularNewsRadiobtn: any;
    exclusiveContentRadiobtn: any;
    newsOffersUpdatesbtn: any;
    clickContinueTandC: any;
    selectPaymentAmt: any;
    selectVoucher: any;
    clickVoucherTextBox: any;
    clickOnRedeem: any;
   toastMessage: any;
   countryDropdown: any;

 constructor(page:Page){
    this.page=page;
    this.clickGetApass= page.locator('//*[text()="Get a day pass"]')
    this.clickContinue= page.locator('//*[text()="Continue"]')
    this.emailIDText= page.locator('//*[@id="email"]')
    this.countryDropdown=page.locator('select#country')
    this.selectPostCode=page.locator('//*[@id="postcode"]')
    this.regularNewsRadiobtn=page.locator('(//*[@id="publisher_marketing_news"])[1]')
    this.exclusiveContentRadiobtn=page.locator('(//*[@id="publisher_marketing_offers"])[1]')
    this.newsOffersUpdatesbtn=page.locator('(//*[@id="axate_marketing"])[1]')
    this.clickContinueTandC=page.locator('//*[text()="Continue"]')
    this.selectPaymentAmt=page.locator('//*[text()="£5.00"]')
    this.selectVoucher=page.locator('(//*[text()="Voucher"])[1]')
    this.clickVoucherTextBox=page.locator('//*[@id="voucher"]')
    this.clickOnRedeem=page.locator('//*[@value="Redeem"]')
    this.toastMessage=page.locator('//*[text()="You are ready to read your first article."]').textContent()
 }

 async navigte(){
    await this.page.goto('https://yrk.branch-master.axate.io/articles/1')
 }

 async getAPasss(){
    await this.clickGetApass.click()
    await this.clickContinue.click()
    await this.emailIDText.fill("abcd1234@gmail.com")
    await this.page.selectOption(this.countryDropdown,{ value: 'GB' })
    await this.selectPostCode.fill("IP3 0BW")
    await this.regularNewsRadiobtn.click()
    await this.exclusiveContentRadiobtn.click()
    await this.newsOffersUpdatesbtn.click()
    await this.clickContinueTandC.click()
    await this.selectPaymentAmt.click()
    await this.selectVoucher.click()
    await this.clickVoucherTextBox.fill("QA2024")
    await this.clickOnRedeem.click()
    expect(this.toastMessage).toEqual("You are ready to read your first article.")
    console.log(this.toastMessage);
 }

 }
export default UserRegistration;