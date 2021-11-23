FROM node:16.13.0

EXPOSE 3000

WORKDIR /workdir

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
