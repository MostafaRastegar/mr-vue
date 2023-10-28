# stage deps
FROM hub.hamdocker.ir/node:alpine as deps
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY .. /app/
ENV NODE_ENV "production"
RUN yarn build


# stage serve
FROM hub.hamdocker.ir/node:alpine as serve
RUN npm install --global serve
WORKDIR /app
COPY --from=deps /app/dist /app/dist
COPY --from=deps /app/package.json /app/package.json
COPY .. /app/
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "serve:prod" ]
