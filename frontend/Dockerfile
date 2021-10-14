FROM node:16.3.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force

COPY . .

CMD npm run dev