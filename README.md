# アプリケーション名
中国語文法・語法

# アプリケーション概要
中国語中級者に向けた文法・語法学習アプリ

# 目指した課題解決
中国語学習における自身や友人の経験から、英語などと比べ文法や語法に関する教材が少ないと考え、中国語への更なる理解に必要不可欠な文法・語法力を獲得する足掛かりとなるツールとして本アプリを開発した。

# 利用方法
中国語検定を参考に作成した選択式の文法・語法問題及び問題終了後の解説で文法・語法についての知識を獲得する。また全体ランキングでは順位と偏差値、個人ランキングでは順位と点数を獲得した日時を示すことによって、全体での位置及び自身の成長を確認できるように設計した。

# テスト用アカウント
メールアドレス→l.0821.enjoy@icloud.com、パスワード→a19940821

# URL
https://chinese-grammer-wordusage.herokuapp.com

# 各機能説明と画面キャプチャ: 

## トップページ: 
パパラックスを活用しシンプルさと全体の見やすさを意識した。　
![スクリーンショット 2021-01-04 13 52 10](https://user-images.githubusercontent.com/74515647/103502295-23579200-4e94-11eb-81ab-7e4c5601c902.png)

## 質問・得点機能
Javascriptを活用し問題の表示・回答の流れをスムーズに行えるよう実装した。　
![スクリーンショット 2021-01-04 17 11 48](https://user-images.githubusercontent.com/74515647/103515595-5c9efa80-4eb2-11eb-9b47-7b3bf0b0e624.png)
![スクリーンショット 2021-01-04 17 11 15](https://user-images.githubusercontent.com/74515647/103515611-645e9f00-4eb2-11eb-9e92-44373cb8b56d.png)
![スクリーンショット 2021-01-04 17 12 00](https://user-images.githubusercontent.com/74515647/103515616-66286280-4eb2-11eb-8dda-8d207f0fcc32.png)

## ランキング機能
他のユーザーを含めた全体のランキングと個人のランキングを用意し、全体におけるユーザーの位置や成長を数値で把握できるような実装を行なった。　
![スクリーンショット 2021-01-04 17 30 41](https://user-images.githubusercontent.com/74515647/103515779-af78b200-4eb2-11eb-8b54-820243f5f0f5.png)
![スクリーンショット 2021-01-04 17 30 54](https://user-images.githubusercontent.com/74515647/103515781-b0a9df00-4eb2-11eb-8ab7-ced9035356f1.png)

## 匿名チャット機能
ニックネームなどよりも更に質問がしやすくなるよう完全匿名でのチャット機能を実装した。　
![スクリーンショット 2021-01-04 17 31 12](https://user-images.githubusercontent.com/74515647/103515783-b1db0c00-4eb2-11eb-88b2-445760134976.png)


## ユーザー登録・ログイン画面
入力情報を最小限に止めることでユーザー登録やログインの際に煩わしさを感じさせないよう実装した。　
![スクリーンショット 2021-01-04 17 32 29](https://user-images.githubusercontent.com/74515647/103515888-e353d780-4eb2-11eb-8046-8a8979350b6d.png)

## 文法カテゴリー検索機能
入力情報を最小限に止めることでユーザー登録やログインの際に煩わしさを感じさせないよう実装した。　
![スクリーンショット 2021-01-04 17 32 29](https://user-images.githubusercontent.com/74515647/103515888-e353d780-4eb2-11eb-8046-8a8979350b6d.png)

# ER図
![スクリーンショット 2021-01-04 17 45 27](https://user-images.githubusercontent.com/74515647/103516984-be606400-4eb4-11eb-86cb-6123f7ecccb1.png)


# table
## users テーブル

| Column            | Type   | Options                  |
| --------          | ------ | -----------              |
| email             | string | null: false, unique: true|
| encrypted_password| string | null: false              |
| nickname          | string | null: false              |      

### Association

- has_many :scores
- has_many :posts

## scores テーブル

| Column          | Type    | Options     |
| --------        | ------  | ----------- |
| score           | integer | null: false |
| user            |reference| null: false, foreign_key: true|


### Association

- belongs_to :user

## posts テーブル

| Column         | Type    | Options     |
| --------       | ------  | ----------- |
| post           | text    | null: false |

## sentences テーブル

| Column         | Type    | Options     |
| --------       | ------  | ----------- |
| sentence       | text    | null: false |
| explaination   | text    | null: false |
| tag            |reference| null: false, foreign_key: true|

### Association

- belong_to :tag

## tags テーブル

| Column         | Type    | Options     |
| --------       | ------  | ----------- |
| tag            | text    | null: false |

### Association

- has_many :sentences
