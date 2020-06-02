FROM node:alpine

RUN mkdir /app

COPY  . /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

RUN npm run build


FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html