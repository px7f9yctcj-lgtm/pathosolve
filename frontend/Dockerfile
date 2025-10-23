FROM node:22-bookworm

WORKDIR /app

COPY package*.json ./
RUN npm install --force --production=false

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]