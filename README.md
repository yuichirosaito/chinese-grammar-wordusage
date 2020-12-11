# アプリケーション名: 中国語文法・語法

# アプリケーション概要: 中国語中級者に向けた文法・語法学習アプリ

# 目指した課題解決: 中国語学習における自身や友人の経験から、英語などと比べ文法や語法に関する教材が欠如していると考えている。中国語への更なる理解に必要不可欠な文法・語法力を獲得する足掛かりとなるツールとして本アプリを開発した。

# 利用方法: 中国語検定を参考に作成した選択式の文法・語法問題で文法・語法についての知識を高める。また全体ランキングでは順位と偏差値、個人ランキングでは順位と点数を獲得した日時を示すことによって、全体での位置及び自身の成長を確認できるように設計した。

# 実装予定の機能	

# テスト用アカウント: メールアドレス→l.0821.enjoy@icloud.com、パスワード→a19940821

# URL: https://chinese-grammer-wordusage.herokuapp.com

# GIFと説明: 

# ER図:	

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



	


