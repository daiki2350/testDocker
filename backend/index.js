// 必要なライブラリを読み込む
const express = require('express');

// Expressアプリを初期化
const app = express();

// ポート番号（デフォルト3000番、環境変数で指定も可）
const PORT = process.env.PORT || 3000;

// ルートエンドポイント（/）にアクセスしたときのレスポンス
app.get('/', (req, res) => {
  res.send('Hello from the Backend Server!');
});

// サンプルAPIエンドポイント（/api）
app.get('/api', (req, res) => {
  res.json({ message: 'This is a sample API response!' });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
