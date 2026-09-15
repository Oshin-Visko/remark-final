import { test, expect } from "@playwright/test";



test('New Screening', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/airesumeselector');

  await expect(page.getByRole('textbox', { name: 'e.g., Senior Software Engineer' })).toBeVisible();

  await page.getByRole('textbox', { name: 'e.g., Senior Software Engineer' })
    .fill(`Sales Executive`);


  await expect(page.getByRole('textbox', { name: 'e.g., 3-5 years' })).toBeVisible();
  await page.getByRole('textbox', { name: 'e.g., 3-5 years' })
    .fill('1–20 Years');



  await expect(page.getByRole('textbox', { name: 'Describe the role,' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Describe the role,' })
    .fill(`We are looking for a motivated and target-oriented Sales Executive to join our team. The candidate will be responsible for generating leads, communicating with potential customers, understanding their requirements, and converting leads into successful sales.

Key Responsibilities:

Generate and qualify new leads through calls, emails, social media, and other channels.
Contact potential customers and understand their requirements.
Explain products/services and communicate their benefits clearly.
Follow up with leads and maintain regular communication with customers.
Schedule and conduct product/service demonstrations when required.
Maintain customer and sales information in CRM systems.
Achieve monthly and quarterly sales targets.
Build and maintain strong relationships with existing and potential customers.
Coordinate with internal teams for smooth customer onboarding and service delivery.
Prepare regular sales reports and provide updates to management.
Research competitors, market trends, and new business opportunities.`);



  await page.getByRole('textbox', { name: 'Enter a skill (e.g.,' }).click();
  await page.getByRole('textbox', { name: 'Enter a skill (e.g.,' }).fill('Good verbal and written communication skills.');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('textbox', { name: 'Enter a skill (e.g.,' }).click();
  await page.getByRole('textbox', { name: 'Enter a skill (e.g.,' }).fill('Strong convincing and negotiation skills.');
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByRole('textbox', { name: 'Enter a skill (e.g.,' }).click();
  await page.getByRole('textbox', { name: 'Enter a skill (e.g.,' }).fill('Customer-focused and target-oriented approach.');
  await page.getByRole('button', { name: 'Add' }).click();

  await expect(page.getByRole('checkbox', { name: 'I agree to the Terms and' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'I agree to the Terms and' }).check();

  await expect(page.getByRole('button', { name: 'Create A Job' })).toBeVisible();

  await page.waitForTimeout(1000);

  await page.getByRole('button', { name: 'Create A Job' }).click({ force: true });

  await page.getByRole('slider').fill('50');
  await expect(page.getByText('Auto-Send Threshold: 50%')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Browse Files' })).toBeVisible();

  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.getByRole('button', { name: 'Browse Files' }).click();

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles('./Resume/Salesexecutiveresume_edit.pdf')

  await expect(page.getByRole('button', { name: 'Start AI Screening' })).toBeVisible();
  await page.getByRole('button', { name: 'Start AI Screening' }).click();
  await expect(page.getByRole('heading', { name: 'AI is Analyzing Resumes' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Got it, I\'ll wait' })).toBeVisible();
  await page.getByRole('button', { name: 'Got it, I\'ll wait' }).click();

  await page.reload();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(2000);
  //   await page.waitForLoadState('networkidle');

  await expect(page.getByRole('button', { name: 'Screening History' })).toBeVisible();
  await page.getByRole('button', { name: 'Screening History' }).click();
  await expect(page.getByRole('heading', { name: 'Sales Executive' }).first()).toBeVisible();

  await page.getByRole('heading', { name: 'Sales Executive' }).first().click();

  await expect(page.getByRole('heading', { name: 'Matched Resumes' })).toBeVisible();
  await expect(page.getByRole('table').getByText('Zoe Thompson')).toBeVisible();
  await expect(page.getByRole('table').getByText('Matched')).toBeVisible();
});

test('Screening History', async ({ page }) => {
  await page.goto('https://remarkhr.com/profile/employer/airesumeselector');
  await page.getByRole('button', { name: 'Screening History' }).click();

  const noScreenings = page.locator('div.text-center.py-12');
  await expect(noScreenings).toBeVisible();

  // Failure annotation
  test.info().annotations.push({
    type: 'Why it failed ? ',
    description: 'Test failed because "No screenings found" is displayed even though resume screening entries exist. After reloading the page, all recent screening entries are displayed.'
  });

  // Add rectangle around the complete message
  await noScreenings.evaluate((element) => {
    element.style.border = '3px solid red';
    element.style.padding = '15px';
    element.style.borderRadius = '5px';
  });

  // Slightly scroll down
  await page.evaluate(() => {
    window.scrollBy(0, 250);
  });

  // Take screenshot
  const screenshot = await page.screenshot({
    fullPage: false
  });

  // Attach screenshot to report
  await test.info().attach('Screening History Screenshot', {
    body: screenshot,
    contentType: 'image/png'
  })

  await expect(page.getByRole('heading', { name: 'No screenings found' })).not.toBeVisible();
})

test('Check that all previous screenings are visible after "Reload" of webpage', async ({ page }) => {
  let screenshot;
  await page.goto('https://remarkhr.com/profile/employer/airesumeselector');
  await page.reload();
  await page.getByRole('button', { name: 'Screening History' }).click();
  await page.waitForTimeout(2000);

  await page.mouse.wheel(0,500);
  await page.waitForTimeout(1000);


  screenshot = await page.screenshot();
  test.info().attach('All Screenings' , {
    body:screenshot,
    contentType: 'image/png',
    fullPage:false,
    
  })



});