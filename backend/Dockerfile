FROM node:20.18

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

# 依存関係をインストールするコマンド
RUN npm install express pg

#アプリケーションコードをコピー
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
