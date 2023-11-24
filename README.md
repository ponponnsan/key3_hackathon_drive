# Pigeon

## About
「**Pigeon**」
は、平和の象徴と伝書鳩の意味を込めて名付けられました。

相手とコミュニケーションが取れないと感謝を伝えることもできません。

そこで私たちは、道を譲ってくれたなどの「感謝」を伝えたい時に利用するプロダクトを開発しました。
その感謝は、運転中でも音声で起動でき、リアルタイムで伝えることができます。

また、位置情報とブロックチェーンを掛け合わせ、自分の周りの人たちに一斉に「感謝」を送ることができます。

感謝は、トークンとして送られるため、アイデンティティとして残るだけでなく、実際の店舗やETCの支払いポイントなどに利用することができます。
感謝されるような良い行いにはインセンティブをつけることで、良い行いを増やすという、ビットコインのような思想も含まれています。

## Product

| Environment | Link | Description |
| :---------: | :--: | :---------: |
| Development | https://key3-hackathon-drive.vercel.app/ | 開発環境 |
| Production | www.drive-pigeon.com | 本番（公開予定） |

## Product 紹介動画

https://github.com/ponponnsan/key3_hackathon_drive/assets/61935109/40001dc3-9093-40e0-974f-60a91aa0a079

## DEMO動画

## 課題
車社会は「社会」と名付けられているけれど、お互いにコミュニケーションをとることが難しく、
相手が見えなかったり、乗り物に乗っているということもあり、イライラすることが多いです。

その中で、ブロックチェーンを利用した、コミュニケーションツールとして、「Pigeon」は開発されました。

ブロックチェーンを利用した理由は、道を譲ったりした人＝車社会として良いことをした人
に対して、トークンを付与することができます。
そのトークンは、永続的にブロックチェーンに保存され、「良いことをした履歴」をブロックチェーンに残すことができます。


## 機能一覧
開発段階の画面での機能紹介です。

### Sign Up

| 登録ボタン | 免許証登録 |
| :------: | :-------: |
| ![signup-3](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/ca239a82-088a-438e-9324-9174205f1d73) | ![signup](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/dfcb9bcb-ad23-41a9-8560-66ef1be0c773) |
| Sign Upスタート画面。 | 免許証を入力する画面。 |

| 登録成功モーダル |
| :-----------: |
| ![signup-1](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/f20216a4-699d-43f2-b44f-b5f2357cc04e) |
| AA Walletが作成されたのち表示されるモーダル。 |

### Account

| アカウント |
| :-------: |
| ![Account](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/be08d220-9367-4283-8476-beaea0a7b12b) |
| ユーザー情報を表示する画面。 |

### Notice

| 通知 | Google Map |
| :-: | :--------: |
| ![notice](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/23fe74df-d5c5-4b58-b7c7-449299471b35) | ![Record details](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/a1014148-3f85-4342-84ef-e16a4c9e791e) |
| 「ありがとう」を受け取った履歴を表示する画面。 | 「ありがとう」を受け取った場所を表示する画面。 |

### History

| 履歴 |
| :-------: |
| ![Records](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/291b5934-57c9-4d92-8e37-404045f864e8) |
| 「ありがとう」の送受信の履歴画面。 |

### Token

| 送付画面 | 音声認識 |
| :------: | :-------: |
| ![send token](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/6df2f0a0-fba8-4904-9a51-65f496a61b9a) | ![send token-1](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/387d291c-b919-4ed3-9df2-72ff0ca961c5) |
| トークン送付スタート画面。 | 音声認識スタート画面。 |

| 送付指示 | トークン送付 |
| :------: | :-------: |
| ![send token-3](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/3a38ae1d-0961-4fd3-b6ad-3d7d00e9db3c) | ![send token-4](https://github.com/ponponnsan/key3_hackathon_drive/assets/61857866/ebb7360f-af9c-4cab-a2e5-eb414a503234) |
| 音声認識でトークン送付指示。 | トークン送付成功モーダル。 |

## 使用技術

| Category | Technology |
| :------: | :--------: |
| Frontend | Next.js |
| Frontend | TailwindCSS |
| Contract | Hardhat |
| Account Abstraction | Gelato |
| Account Abstraction | Safe |
| CI/CD | Github |
| Infura | Vercel |
| etc. | googlemap, webspeechapi |

## ディレクトリ構成

- [Doc](./docs/)
- [Frontend](./src/app/)
- [Contract](./src/app/contract)

## シーケンス図

```mermaid
sequenceDiagram
    autonumber

    actor user
    participant frontend as Frontend
    participant wallet as Wallet
    participant backend as Backend
    participant db as DB
    participant contract as Contract

    Note over user,contract: 初アクセス
    user ->> frontend: ユーザーアクセス
    frontend ->> frontend: Wallet作成(AA)
    frontend ->> backend: ユーザー情報登録
    Note left of backend: POST /register
    backend ->> db: ユーザー情報登録
    Note left of db: Wallet Address & GPS情報(今回は運転免許証番号)
    db -->> backend: ユーザー情報登録
    backend -->> frontend: ユーザー情報登録

    Note over user,contract: お礼
    user ->> frontend: 音声で機能呼び出し
    frontend ->> frontend: 自身のGPS情報取得(サンプルデータ)
    frontend ->> backend: ユーザーのWallet Address取得
    Note left of backend: GET /user
    backend ->> db: ユーザーのWallet Address取得
    Note left of db: GPS情報(今回は運転免許証番号)をもとに検索
    Note left of db: 必要であれば、このタイミングで他の情報を取得
    db -->> backend: ユーザーのWallet Address取得
    backend -->> frontend: ユーザーのWallet Address取得
    frontend ->> frontend: 周囲のGPS情報取得(サンプルデータ)
    frontend ->> backend: 配布対象Wallet Address複数取得
    Note left of backend: GET /users
    backend ->> db:  配布対象Wallet Address複数取得
    Note left of db: 複数のGPS情報(今回は運転免許証番号)をもとに検索
    Note left of db: 必要であれば、このタイミングで他の情報を取得
    db -->> backend:  配布対象Wallet Address複数取得
    backend -->> frontend:  配布対象Wallet Address複数取得
    frontend ->> backend: お礼情報を記録
    Note left of backend: POST /thank
    backend ->> db: お礼情報を記録
    db -->> backend: お礼情報を記録
    backend ->> frontend: お礼情報を記録

    frontend ->> wallet: トークン配布実行
    Note left of wallet: ユーザーと周囲のWallet Address & 配布トークン数
    wallet ->> wallet: 色々検証 & 実行
    wallet ->> contract: トランザクション実行
```
