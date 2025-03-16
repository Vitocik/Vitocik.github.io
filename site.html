<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация СКФУ</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-300 p-6">
    <div id="app" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div class="text-center mb-4">
            <img src="Logo_SCFU_1.png" alt="СКФУ" class="mx-auto w-24 h-24">
        </div>
        
        <h2 class="text-2xl font-bold mb-4 text-center">Регистрация в СКФУ</h2>
        
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label class="block text-sm font-medium">Фамилия</label>
                <input v-model="surname" type="text" class="w-full p-2 border rounded">
            </div>

            <div class="mb-3">
                <label class="block text-sm font-medium">Имя</label>
                <input v-model="firstname" type="text" class="w-full p-2 border rounded">
            </div>

            <div class="mb-3">
                <label class="block text-sm font-medium">Отчество</label>
                <input v-model="patronymic" type="text" class="w-full p-2 border rounded">
            </div>
            
            <div class="mb-3">
                <label class="block text-sm font-medium">Email</label>
                <input v-model="email" type="email" class="w-full p-2 border rounded">
            </div>

            <div class="mb-3">
                <label class="block text-sm font-medium">Телефон</label>
                <input v-model="phone" type="tel" class="w-full p-2 border rounded">
            </div>

            <div class="mb-3">
                <label class="block text-sm font-medium">Роль в ВУЗе</label>
                <select v-model="role" class="w-full p-2 border rounded">
                    <option value="student">Студент - уже учусь</option>
                    <option value="applicant">Абитуриент - планирую поступать</option>
                    <option value="staff">Сотрудник - я здесь работаю</option>
                </select>
            </div>

            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">
                Отправить
            </button>
        </form>

        <div v-if="successMessage" class="mt-4 text-green-600">
            {{ successMessage }}
        </div>
    </div>

    <script>
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    surname: '',
                    firstname: '',
                    patronymic: '',
                    email: '',
                    phone: '',
                    role: 'student',
                    successMessage: '',

                    // Добавлены botId и botToken
                    botId: '2274',
                    botToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2OCIsImp0aSI6IjQ2YTk0ODlmNmIwYzBjZDA1MDVmZDYzZDE2ZWNmOTY4YjY1MjIxYjlkMWIzNDRiOGM0ZGQ0ZjNmZjk2Yzg0ZjFlZGI2YTIwODk5ZGFiZTViIiwiaWF0IjoxNzQxMzY1MDQ0LjcyNzcxNiwibmJmIjoxNzQxMzY1MDQ0LjcyNzcxOCwiZXhwIjoyMDU2NzI1MDQ0LjcyNjE1LCJzdWIiOiIiLCJzY29wZXMiOlsiKiJdfQ.fr3TSBRmWWJAMeDRu74N73XBYNdawhEhHugaPaVg4u0R5cPfACRXr-GlzdnwXRFHM3ECWOL0Al4DG1x5GwXv6Jookds4HVyK45vUryCSWDYX1v6R2yuNHuIH5IcB-No51CQBeFiMHEtawjPwu7bZSIoFxQBJErBmugmEF-ogiR4MkhgOmk5-KZAk_-zpqWH5N7krZHBAUj75LTcWDYHDwLI7TB1RiDs9XhPogokfgiVgFH2r0Xjiv1GJPzmPpp9TeoIKnSeIJHUMj5gxAvkY5C_N3vsgPU8znVeV1ke9wVcfhpVBWv3wU-E7jpR1iq6fFwCggYx99hRTcIwXU8knDDzOFLJHJeqOg9SmQTzt0r6R8RI1VnZAdI_9jwnFue9JYfB2EBDsgsEAUPaPl-_aGhTZvhiW-0m_KPHmAgzKVZgzXKmZH2RW4hrRt7JugM3o4XOuuP_lrV4uujEOT4WLYlNo0RZN5ZYky7oH7o7V12DExmGeIyibDad6TNhtTk7m0aL68ULDNImkrHBwMeFRILgCBc0iPVT0M7YDGOL5-jvuMvqZDXkHf7kax6od21_r27RuHX1E7OqjxnUH3VLczViu6fXjRflgE7YsYwyDj94gDiyJhAUMayMRRTrHY3JSg0nGbaiBPgDQvceP8v1ASy_7IwV_Tvj94ePPIT-Jk9Q'
                };
            },
            methods: {
                async submitForm() {
                    const formData = {
                        surname: this.surname,
                        firstname: this.firstname,
                        patronymic: this.patronymic,
                        email: this.email,
                        phone: this.phone,
                        role: this.role
                    };

                    try {
                        const response = await fetch(`https://api.telegram.org/bot${this.botToken}/sendMessage`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                chat_id: this.botId,
                                text: `Новая регистрация:\nФамилия: ${formData.surname}\nИмя: ${formData.firstname}\nОтчество: ${formData.patronymic}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nРоль: ${formData.role}`
                            })
                        });

                        if (response.ok) {
                            this.successMessage = "Форма успешно отправлена!";
                        } else {
                            this.successMessage = "Ошибка отправки данных.";
                        }
                    } catch (error) {
                        this.successMessage = "Ошибка соединения с сервером.";
                    }
                }
            }
        }).mount('#app');
    </script>
</body>
</html>
