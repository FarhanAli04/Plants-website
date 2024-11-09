document.addEventListener('DOMContentLoaded', function() {
    const confirmPaymentButton = document.getElementById('confirmPayment');
    confirmPaymentButton.addEventListener('click', function() {
        saveOrderDetails(); // Ensure this is called before redirection
        alert('Payment confirmed! Thank you for your purchase.');
        window.location.href = '../order complete/order.html';
    });
});

function saveOrderDetails() {
    const cart = getCart();
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; 
    const taxes = 0; 
    const discount = cart.couponDiscount;
    const total = subtotal + shipping + taxes - discount;

    const orderDetails = {
        items: cart.items,
        subtotal: subtotal,
        shipping: shipping,
        taxes: taxes,
        discount: discount,
        total: total
    };

    console.log('Order details to save:', orderDetails); // Log order details
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
}
