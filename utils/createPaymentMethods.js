export function createPaymentMethods (paymentContainer, paymentMethods) {
    for (let i = 0; i < paymentMethods.length; i++) {
        const element = paymentMethods[i];
    
        var div = document.createElement("div");
        div.className = "payment-single-item";

        var img = document.createElement("img");
        img.src = element;
        img.setAttribute("loading", "lazy");

        div.appendChild(img);

        paymentContainer.appendChild(div);
    }
}
