import test, { expect } from "@playwright/test";
import UserRegistration from "../AxatePages/Axate_Article_Page";

test.describe('Axate', () => {
    let userRegistration;
    test.beforeEach(async ({ page }) => {
        userRegistration = new UserRegistration(page);
    })
    
test('The Test', async ({ page }) => {
    await userRegistration.navigte();
    await userRegistration.getAPasss();
})


    
})
