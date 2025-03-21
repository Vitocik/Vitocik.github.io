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
            let userData = {
                fields: {
                    surname: this.surname,
                    firstname: this.firstname,
                    patronymic: this.patronymic,
                    email: this.email,
                    phone: this.phone,
                    role: this.role
                }
            };

            try {
                let response = await fetch("https://stage.metabot.dev/api/leads/update", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData)
                });

                let result = await response.json();
                if (result.success) {
                    this.successMessage = "✅ Регистрация успешна!";
                    setTimeout(() => {
                        if (window.Telegram && window.Telegram.WebApp) {
                            window.Telegram.WebApp.close();
                        }
                    }, 1500);
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
