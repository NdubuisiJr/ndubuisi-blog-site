FROM node:12

COPY dist/ /src/dist/
COPY build/ /src/build/
COPY package.json /src

WORKDIR /src

RUN npm install --production

EXPOSE 3000 

CMD npm start