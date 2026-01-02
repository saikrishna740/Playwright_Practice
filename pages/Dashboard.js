class Dashboard {
    constructor(page) {
        this.product = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
    }

    async Searchproduct(productName) {
        const title = await this.productText.allTextContents();
        console.log(title);

        const counts = await this.product.count();
        for (let i = 0; i < counts; ++i) {
            if (await this.product.nth(i).locator("b").textContent() === productName) {
                await this.product.nth(i).locator("text=  Add To Cart").click();
                break;
            }
        }
    }

    async NavigateToCart() {
        await this.cart.click();
    }
}

// CommonJS export
module.exports = { Dashboard };
