export class Login {
  constructor(page) {
    this.page = page;
    this.userName = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.signInbtn = page.locator('#login');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async ValidLogin(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInbtn.click();
  }
}
