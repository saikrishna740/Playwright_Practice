export class Dashboard {
    constructor(page) {
        this.product = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
    }

    async Searchproduct(productName) {
        const titles = await this.productText.allTextContents();

        for (let i = 0; i < titles.length; i++) {
            if (titles[i].trim() === productName) {
                await this.product.nth(i).locator("text=Add To Cart").click();
                break;
            }
        }
    }

    async NavigateToCart() {
        await this.cart.click();
    }
}
