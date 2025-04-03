const { createApp } = Vue;

createApp({
    data() {
        return {
            surname: '',
            firstname: '',
            patronymic: '',
            email: '',
            phone: '',
            role: '',
            successMessage: ''
        };
    },
    methods: {
        async submitForm() {
            // Извлекаем telegramId из Telegram Web App
            const telegramId = window.Telegram.WebApp.initDataUnsafe?.user?.id || 'unknown';

            // Формируем данные для отправки
            const userData = {
                telegramId: telegramId.toString(),
                surname: this.surname,
                firstname: this.firstname,
                patronymic: this.patronymic,
                email: this.email,
                phone: this.phone,
                role: this.role
            };

            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                const result = await response.json();
                if (response.ok) {
                    this.successMessage = result.message;
                    // Закрываем Telegram Web App через 2 секунды после успешной регистрации
                    setTimeout(() => {
                        window.Telegram.WebApp.close();
                    }, 2000);
                } else {
                    this.successMessage = result.error || 'Ошибка при регистрации';
                }
            } catch (error) {
                this.successMessage = 'Ошибка при отправке данных: ' + error.message;
            }
        }
    }
}).mount('#app');
