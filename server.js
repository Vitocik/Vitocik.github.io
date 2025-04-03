const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Оставляем, если версия Node.js < 18

const app = express();
app.use(bodyParser.json());

const METABOT_API = 'https://stage.metabot.dev/api/v1/bots/2274/call/register_lead';
const SCRIPT_RUN_URL = 'https://api.metabot24.ru/api/v2/scripts/run';
const METABOT_AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2OCIsImp0aSI6IjQ2YTk0ODlmNmIwYzBjZDA1MDVmZDYzZDE2ZWNmOTY4YjY1MjIxYjlkMWIzNDRiOGM0ZGQ0ZjNmZjk2Yzg0ZjFlZGI2YTIwODk5ZGFiZTViIiwiaWF0IjoxNzQxMzY1MDQ0LjcyNzcxNiwibmJmIjoxNzQxMzY1MDQ0LjcyNzcxOCwiZXhwIjoyMDU2NzI1MDQ0LjcyNjE1LCJzdWIiOiIiLCJzY29wZXMiOlsiKiJdfQ.fr3TSBRmWWJAMeDRu74N73XBYNdawhEhHugaPaVg4u0R5cPfACRXr-GlzdnwXRFHM3ECWOL0Al4DG1x5GwXv6Jookds4HVyK45vUryCSWDYX1v6R2yuNHuIH5IcB-No51CQBeFiMHEtawjPwu7bZSIoFxQBJErBmugmEF-ogiR4MkhgOmk5-KZAk_-zpqWH5N7krZHBAUj75LTcWDYHDwLI7TB1RiDs9XhPogokfgiVgFH2r0Xjiv1GJPzmPpp9TeoIKnSeIJHUMj5gxAvkY5C_N3vsgPU8znVeV1ke9wVcfhpVBWv3wU-E7jpR1iq6fFwCggYx99hRTcIwXU8knDDzOFLJHJeqOg9SmQTzt0r6R8RI1VnZAdI_9jwnFue9JYfB2EBDsgsEAUPaPl-_aGhTZvhiW-0m_KPHmAgzKVZgzXKmZH2RW4hrRt7JugM3o4XOuuP_lrV4uujEOT4WLYlNo0RZN5ZYky7oH7o7V12DExmGeIyibDad6TNhtTk7m0aL68ULDNImkrHBwMeFRILgCBc0iPVT0M7YDGOL5-jvuMvqZDXkHf7kax6od21_r27RuHX1E7OqjxnUH3VLczViu6fXjRflgE7YsYwyDj94gDiyJhAUMayMRRTrHY3JSg0nGbaiBPgDQvceP8v1ASy_7IwV_Tvj94ePPIT-Jk9Q'; // Токен лучше хранить в .env

// Эндпоинт регистрации
app.post('/register', async (req, res) => {
    const { surname, firstname, patronymic, email, phone, role, telegram_id } = req.body;

    // Проверка обязательных полей
    if (!surname || !firstname || !email || !phone || !role || !telegram_id) {
        return res.status(400).json({ success: false, message: 'Не заполнены обязательные поля' });
    }

    try {
        // Отправка данных в Metabot API для создания персоны
        const metabotResponse = await fetch(METABOT_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${METABOT_AUTH_TOKEN}`
            },
            body: JSON.stringify({
                is_external: 1,
                person_role_id: 1312, // Проверь актуальность ID
                firstname,
                lastname: surname,
                middlename: patronymic || '', // Если отчество не указано
                email,
                phone,
                comment: `Роль: ${role}`,
                telegram_id // Добавляем Telegram ID
            })
        });

        const result = await metabotResponse.json();

        if (!metabotResponse.ok || !result.id) {
            throw new Error(result.message || 'Ошибка создания персоны');
        }

        const personId = result.id;

        // Запуск скрипта web_registration в Metabot
        const scriptResponse = await fetch(SCRIPT_RUN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${METABOT_AUTH_TOKEN}`
            },
            body: JSON.stringify({
                script_code: 'web_registration',
                person_id: personId,
                script_request_params: { role }
            })
        });

        const scriptResult = await scriptResponse.json();
        if (!scriptResponse.ok) {
            throw new Error(scriptResult.message || 'Ошибка запуска скрипта');
        }

        // Успешный ответ
        res.json({
            success: true,
            message: 'Данные успешно отправлены в Metabot',
            moderationStatus: 'Ожидает модерации',
            personId
        });

    } catch (error) {
        console.error('Ошибка при регистрации:', error.message);
        res.status(500).json({ success: false, message: 'Ошибка сервера: ' + error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
