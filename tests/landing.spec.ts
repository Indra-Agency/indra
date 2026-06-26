import { test, expect } from '@playwright/test';

test.describe('Landing Page E2E', () => {
  test('should load the homepage and render hero section', async ({ page }) => {
    // 1. Load the homepage (assuming dev server runs on 3000)
    await page.goto('http://localhost:3000/');

    // Verify it renders without crashing by looking for the Hero heading
    await expect(page.locator('h1.ar-heading')).toContainText('حين تُدار أنظمتك بذكاء');
  });

  test('should catch empty form submission via client validation', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // 2. Navigate/Scroll to the Contact form
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();

    // Verify the submit button exists
    const submitButton = page.locator('form button[type="submit"]');
    await expect(submitButton).toBeVisible();

    // 3. Attempt to submit an empty form
    await submitButton.click();

    // 4. Mathematically prove that validation catches it.
    // Since the form uses HTML5 'required' attributes, we verify the browser's validity state.
    const nameInput = page.locator('input[name="name"]');
    const isNameMissing = await nameInput.evaluate((el: HTMLInputElement) => el.validity.valueMissing);
    
    // Expect the required validation to be true (error caught)
    expect(isNameMissing).toBe(true);

    // Also ensure the form did not submit and change button text to success
    await expect(submitButton).not.toContainText('تم الإرسال بنجاح');
  });
});
