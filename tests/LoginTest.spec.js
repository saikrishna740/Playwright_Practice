import { test } from '@playwright/test'

test('Login Test', async ({ page, Login, Dashboard }) => {
  await Login.goto();
  await Login.ValidLogin('test@email.com', 'Test@123');
  await Dashboard.Searchproduct('ADIDAS ORIGINAL');
  await Dashboard.NavigateToCart();
});
