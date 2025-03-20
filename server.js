const express = require('express');
const fetch = require('node-fetch'); // Если используется Node.js <18, для Node 18+ можно использовать встроенный fetch
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Эндпоинт для регистрации
app.post('/register', async (req, res) => {
    const { surname, firstname, patronymic, email, phone, role } = req.body;
    
    // Проверка обязательных полей
    if (!surname || !firstname || !email || !phone || !role) {
        return res.status(400).json({ success: false, message: 'Не заполнены обязательные поля' });
    }
    
    try {
        // Формирование запроса к Metabot API
        // Пример: использование метода создания персоны через Metabot (в зависимости от документации)
        // Здесь предполагается, что у вас настроен соответствующий endpoint и авторизация
        const metabotResponse = await fetch('https://api.metabot24.ru/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Добавьте заголовки авторизации, если требуется
            },
            body: JSON.stringify({
                surname,
                firstname,
                patronymic,
                email,
                phone,
                role
            })
        });
        
        const result = await metabotResponse.json();
        
        // Возвращаем результат на клиент
        res.json(result);
    } catch (error) {
        console.error("Ошибка при регистрации:", error);
        res.status(500).json({ success: false, message: 'Ошибка сервера' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));