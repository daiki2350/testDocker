FROM node:20.18

WORKDIR /usr/src/app

# package.jsonをコピーして依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# 追加のライブラリをインストール
RUN npm install pinia vue-router@4 --save

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]