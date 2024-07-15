// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('payment-form') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const cardNumberInput = document.getElementById('card-number') as HTMLInputElement;
        const expiryInput = document.getElementById('expiry') as HTMLInputElement;
        const cvvInput = document.getElementById('cvv') as HTMLInputElement;

        const cardNumber = cardNumberInput.value.trim();
        const expiry = expiryInput.value.trim();
        const cvv = cvvInput.value.trim();

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

    function showMessage(msg: string) {
        alert(msg); // Tarayıcı bildirimi yerine basit bir JavaScript alert kullanıyoruz.
    }

    function simulatePaymentSuccess() {
        // Ödeme başarılı olduğunda, kullanıcıyı success.html sayfasına yönlendir
        window.location.href = 'success.html';
    }
});
