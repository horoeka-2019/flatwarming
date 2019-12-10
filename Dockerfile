FROM node:10-alpine AS builder 

WORKDIR /build
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 


FROM node:10-alpine

WORKDIR /app

COPY --from=builder /build/server  ./server
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json .
COPY --from=builder /build/knexfile.js .
COPY --from=builder /build/migrations ./migrations
COPY --from=builder /build/seeds ./seeds



RUN npm run db:migrate 

CMD ["npm", "start"]