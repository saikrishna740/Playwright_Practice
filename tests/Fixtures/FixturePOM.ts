import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { Login } from '../../pages/Login';
import { Dashboard } from '../../pages/Dashboard';


type FixturePOM = {
  Login: Login;
  Dashboard: Dashboard;
};

export const test = baseTest.extend<FixturePOM>({
  Login: async ({ page }, use) => {
    await use(new Login(page));
  },

  Dashboard: async ({ page }, use) => {
    await use(new Dashboard(page));
  }
});

export const expect = baseExpect;
