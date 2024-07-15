// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var cardNumberInput = document.getElementById('card-number');
        var expiryInput = document.getElementById('expiry');
        var cvvInput = document.getElementById('cvv');
        var cardNumber = cardNumberInput.value.trim();
        var expiry = expiryInput.value.trim();
        var cvv = cvvInput.value.trim();
        if (!cardNumber || !expiry || !cvv) {
            showMessage('Lütfen tüm alanları doldurun.');
            return;
        }
        // Basit bir doğrulama yapabilirsiniz, gerçek bir uygulamada daha kapsamlı bir doğrulama yapılmalıdır.
        if (cardNumber.length !== 16 || expiry.length !== 5 || cvv.length !== 3) {
            showMessage('Lütfen geçerli bilgiler girin.');
            return;
        }
        // Simüle edilmiş bir ödeme başarılı mesajı gösterelim.
        simulatePaymentSuccess();
    });
    function showMessage(msg) {
        alert(msg); // Tarayıcı bildirimi yerine basit bir JavaScript alert kullanıyoruz.
    }
    function simulatePaymentSuccess() {
        window.location.href = 'success.html';
    }
});
