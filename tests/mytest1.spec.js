import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://dhakathai.publicdemo.xyz/');
  await page.goto('http://dhakathai.publicdemo.xyz/login');
  await page.getByLabel('Enter Mobile No').click();
  await page.getByLabel('Enter Mobile No').fill('8801711000001');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('.ps__thumb-y').first().click();
  await page.locator('.ps__thumb-y').first().click();
  await page.locator('.ps__rail-y').first().click();
  await page.locator('.ps__rail-y').first().click();
  await page.locator('.ps__rail-y').first().dblclick();
  await page.getByRole('link', { name: ' Gift Management' }).click();
  await page.getByRole('link', { name: '󰉹 Gift Slab List' }).click();
  await page.locator('#userDropdown').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
});