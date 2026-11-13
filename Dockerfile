# Базовий образ
FROM node:lts

# Робоча директорія
WORKDIR /app

# Копіюємо package.json та package-lock.json (для кешування)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту коду проєкту
COPY . .

# Відкриваємо порт
EXPOSE 3000

# Запускаємо застосунок
CMD ["node", "index.js"]