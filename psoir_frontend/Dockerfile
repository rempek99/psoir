FROM node:latest
WORKDIR /app

ENV PATH /app/node_modules_.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["npm", "start"]