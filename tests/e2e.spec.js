const { test, expect } = require('@playwright/test');

test('add and toggle todo', async ({ page }) => {
  await page.goto('/');
  await page.fill('#todoInput', 'Buy milk');
  await page.click('#addBtn');
  const todo = page.locator('.todo-text').first();
  await expect(todo).toHaveText('Buy milk');
  await page.click('.todo-checkbox');
  await expect(todo).toHaveClass(/completed/);
});
