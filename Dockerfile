FROM node:25-alpine AS base
WORKDIR /app

FROM base AS production
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci
COPY dist ./dist
COPY .env.example ./.env
EXPOSE 3000
CMD ["node", "dist/main"]

FROM base AS development
ENV NODE_ENV=development
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]