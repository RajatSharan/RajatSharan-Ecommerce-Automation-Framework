class APIUtils {
    constructor(apiContext, loginPayload) {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
        this.cachedToken = null; // Cache for the token
    }

    async getToken() {
        if (this.cachedToken) {
            return this.cachedToken; // Return cached token if available
        }

        try {
            const loginResponse = await this.apiContext.post(
                "https://rahulshettyacademy.com/api/ecom/auth/login",
                {
                    data: this.loginPayload,
                }
            );

            if (!loginResponse.ok()) {
                throw new Error(
                    `Login failed: ${loginResponse.status()} ${await loginResponse.text()}`
                );
            }

            const loginResponseJson = await loginResponse.json();
            const token = loginResponseJson.token;
            console.log(token);

            this.cachedToken = token; // Cache the token
            return token;
        } catch (error) {
            console.error("Error in getToken:", error);
            throw error;
        }
    }

    async createOrder(orderPayload) {
        let response = {};
        response.token = await this.getToken();

        const orderResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    Authorization: response.token,
                    "Content-Type": "application/json",
                },
            }
        );

        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);

        if (!orderResponse.ok()) {
            throw new Error(
                `Order creation failed: ${orderResponse.status()} ${JSON.stringify(orderResponseJson)}`
            );
        }

        if (!orderResponseJson.orders || orderResponseJson.orders.length === 0) {
            throw new Error(
                `Order creation failed: No orders returned. Response: ${JSON.stringify(orderResponseJson)}`
            );
        }

        const orderID = orderResponseJson.orders[0];
        response.orderID = orderID;
        return response;
    }
}

export default APIUtils;