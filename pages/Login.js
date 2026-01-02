class Login{



    constructor(page)
    {
        this.page=page;
        this.signInbtn= page.locator("[id='login']");
        this.userName= page.locator("[id='userEmail']");
        this.password=page.locator("[id='userPassword']");
        this.page.waitForLoadState('networkidle');
    }

    async goto(){

        await this.page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    }

    async VolidLogin(username,password)
    {
 
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbtn.click();
    }
}
module.exports={Login};