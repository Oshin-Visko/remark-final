import { test, expect } from '@playwright/test';


import {profileinstaupdate} from '../../AA OPEN THIS FIRST';




test('Verify profile information is displayed correctly', async ({ page }) => {
    // await login(page);

    await page.goto('https://remarkhr.com/profile/employee/profile')

      // await page.getByRole('link', { name: 'Jho Doe New Full Stack' }).click();


    // await page.goto('https://remarkhr.com/profile/employee/profile')


  await expect(page.getByRole('img', { name: 'Profile' })).toBeVisible();
  await expect(page.locator('.flex.flex-col > .flex.items-center.gap-4')).toBeVisible();
  await expect(page.getByText('BioRequired')).toBeVisible();
  await expect(page.getByText('EmailRequired')).toBeVisible();
  await expect(page.getByText('Mobile number Required')).toBeVisible();
  await expect(page.getByText('Date of Birth Required')).toBeVisible();
  await expect(page.getByText('GenderRequired')).toBeVisible();
  await expect(page.getByText('Current Location Required')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
  await expect(page.getByText('Preferred Job Location Required')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Qualification' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Profile Status' })).toBeVisible();
  await expect(page.getByText('Skills Required')).toBeVisible();
  await expect(page.getByText('Languages Required')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Tools' })).toBeVisible();
});

test('Verify profile information is editable', async ({ page }) => {

      await page.goto('https://remarkhr.com/profile/employee/profile')


    // await login(page);
    
// const changes = 'www.manager.com'

await expect(page.getByRole('button', { name: ' Notifications' })).toBeVisible();
await expect(page.getByRole('link', { name: ' Edit Profile' })).toBeVisible();
await page.getByRole('link', { name: ' Edit Profile' }).click();
await page.getByRole('textbox', { name: 'Instagram' }).click();

 await test.info().attach('Before Changes', {
  body: await page.screenshot(),
  contentType: 'image/png',
    });

await page.getByRole('textbox', { name: 'Instagram' }).fill(profileinstaupdate);

 await test.info().attach('After Changes', {
    body: await page.screenshot(),
    contentType: 'image0.1/png',
  });

await expect(page.getByRole('button', { name: 'Update Profile' })).toBeVisible();
await page.getByRole('button', { name: 'Update Profile' }).click();
await expect(page.getByText('Profile updated successfully!')).toBeVisible();

await test.info().attach('Profile Updated Successfully', {
    body: await page.screenshot(),
    contentType: 'image0.2/png',
  });

});


test(`Verify that "Set Password" functionality remains available after the page loads`, async ({ page }) => {

  test.info().annotations.push({
    type: "Note",
    description:
      'The "Set Password" banner is only rendered briefly during page load, ' +
      "before the profile data API (/user/get-data) resolves. Once the API " +
      "responds, the app re-renders and the banner disappears — leaving users " +
      "with no persistent way to set a password from this profile page. " +
      "This test intentionally fails to flag that as a bug.",
  });

  await page.route("**/user/get-data**", async (route) => {
    await new Promise((r) => setTimeout(r, 6000));
    await route.continue();
  });

  await page.goto("https://remarkhr.com/profile/employee/profile", {
    waitUntil: "commit",
  });

  const message = page.getByText(
    "Secure your profile. Set a strong password now!"
  );

  // ---- STEP 1: Confirm it exists right after load (proves it's real) ----
  await expect(message).toBeVisible({ timeout: 20000 });

  // Get the whole card/box that wraps the message + button, not just the text.
  // xpath="ancestor::div[3]" walks up 3 parent <div> levels from the text node —
  // adjust the number based on how deep the text sits inside the card container.
  const card = message.locator("xpath=ancestor::div[3]");

  // Highlight the whole card with a red outline
  await card.evaluate((el) => {
    el.style.outline = "4px solid red";
    el.style.outlineOffset = "4px";
    el.style.boxShadow = "0 0 15px rgba(255,0,0,0.6)";
  });

  const visibleScreenshot = await page.screenshot({ animations: "disabled" });
  await test.info().attach("1 - Password Message VISIBLE (on load)", {
    body: visibleScreenshot,
    contentType: "image/png",
  });

  // ---- STEP 2: Wait for the page to fully settle (profile data loaded) ----
  await expect(message).toBeHidden({ timeout: 20000 });

  const hiddenScreenshot = await page.screenshot({ animations: "disabled" });
  await test.info().attach("2 - Password Message HIDDEN (after load)", {
    body: hiddenScreenshot,
    contentType: "image/png",
  });

  await test.info().attach("Bug - Set Password option disappears after load", {
    body:
      'The "Set Password" prompt is visible for only a fraction of a second ' +
      "during initial page load, then disappears permanently once profile data " +
      "finishes loading. There is no persistent Set Password affordance " +
      "elsewhere on the profile page for a user who missed that window. " +
      "Expected: the option should remain accessible after load (e.g. as a " +
      "persistent banner, menu item, or section) until the user actually sets a password.",
    contentType: "text/plain",
  });

  // ---- STEP 3: Intentionally FAIL — this is the actual bug assertion ----
  await expect(
    message,
    'BUG: "Set Password" functionality is not available after the page finishes ' +
    "loading. It only appears for a brief window during load and then disappears, " +
    "leaving users no way to set a password from this page once loaded."
  ).toBeVisible({ timeout: 1000 });
});