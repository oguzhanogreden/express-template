FROM node

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY tsconfig.json .
COPY tsconfig.json ./1asd
COPY src ./src

RUN npx tsc

CMD npm start