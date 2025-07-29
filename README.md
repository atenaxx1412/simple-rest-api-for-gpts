# Simple REST API

GPTsのアクション用のシンプルなREST APIです。

## 利用可能なエンドポイント

- `GET /` - ウェルカムメッセージ
- `GET /api/greeting?name=YourName` - 挨拶メッセージ
- `GET /api/random` - ランダム数値生成
- `POST /api/echo` - メッセージのエコー

## ローカルテスト方法

```bash
# 依存関係をインストール
npm install

# サーバー起動
npm start

# テストコマンド例
curl http://localhost:3000/
curl http://localhost:3000/api/greeting?name=Claude
curl http://localhost:3000/api/random
curl -X POST http://localhost:3000/api/echo -H "Content-Type: application/json" -d '{"message":"Hello World"}'
```

## デプロイ方法

### 1. Vercel（推奨）
1. [Vercel](https://vercel.com)にサインアップ
2. プロジェクトをGitHubにプッシュ
3. Vercelで「New Project」→GitHubリポジトリを選択
4. 自動デプロイされ、URLが提供される

### 2. Heroku
1. [Heroku](https://heroku.com)にサインアップ
2. Heroku CLIをインストール
3. `heroku create your-app-name`
4. `git push heroku main`

### 3. Railway
1. [Railway](https://railway.app)にサインアップ
2. GitHubリポジトリを接続
3. 自動デプロイ

## GPTsアクション設定

デプロイ後のURLを使用してGPTsのアクションに追加:

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Simple REST API",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://your-deployed-url.vercel.app"
    }
  ],
  "paths": {
    "/api/greeting": {
      "get": {
        "summary": "Get greeting message",
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ]
      }
    }
  }
}
```