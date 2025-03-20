const { createApp } = Vue;

createApp({
    data() {
        return {
            surname: "",
            firstname: "",
            patronymic: "",
            email: "",
            phone: "",
            role: "",
            successMessage: ""
        };
    },
    methods: {
        async submitForm() {
            if (!this.surname || !this.firstname || !this.email || !this.phone || !this.role) {
                alert("Заполните все обязательные поля!");
                return;
            }
            
            let userData = {
                surname: this.surname,
                firstname: this.firstname,
                patronymic: this.patronymic,
                email: this.email,
                phone: this.phone,
                role: this.role
            };
            
            try {
                // Отправляем данные на наш backend, который затем передаст их в Metabot
                let response = await fetch("https://your-backend-domain.com/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData)
                });
                
                let result = await response.json();
                if (result.success) {
                    this.successMessage = "✅ Регистрация успешна!";
                    // Очистка полей формы
                    this.surname = this.firstname = this.patronymic = this.email = this.phone = "";
                } else {
                    alert("Ошибка: " + result.message);
                }
            } catch (error) {
                alert("Ошибка соединения с сервером.");
                console.error(error);
            }
        }
    }
}).mount("#app");