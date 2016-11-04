# nodemail

# 導入手順
 ①ソースをダウンロードする。

 ②プロジェクトにコピーをする。

 ③コマンドプロンプトでプロジェクトまで移動をする。

 ④【npm install】　というコマンドをうつ
 
 **※エラーが出たらエラー文を読んで見て分からなかったら聞いてください。**

 ⑤【bower install】　というコマンドをうつ 
 
 **※エラーが出たらエラー文を読んで見て分からなかったら聞いてください。**

 ⑥【gulp typescript】 というコマンドをうつ
 
 **※エラーが出たらエラー文を読んで見て分からなかったら聞いてください。**


# 起動方法

* パターン１ visulacodeをインストール(かなりおすすめ)
  *インストール場所を下記に記載致します。
  <https://code.visualstudio.com/?utm_expid=101350005-31.YsqwCVJESWmc4UCMDLsNRw.0&utm_referrer=https%3A%2F%2Fwww.google.co.jp%2F>

  1. デバックというボタンを押下
  
  2. 上の方にある緑の三角をクリックすると起動します。
  
  ※下記は参考画像です。
  
  ![デバッグ方法の画像](http://cdn.dev.classmethod.jp/wp-content/uploads/2016/03/0113-640x286.png)


* パターン2 gulp build とコマンドをうつ。
    1. URLでlocalhost:3000と押下すると起動します。

# 項目の追加方法

 ** 1.htmlで(input type)を追加してください。**
 
 テキストボックス,テキストエリア,チェックボックス,ラジオボタンで追加方法
 
 public/javascripts/contact/contact.html
 
 このファイルに<input type>を追加もしくは変更してください。
 
 ng-modelの命名は項目にあった命名にしてください。

 
 **2.確認画面で表示する際**
 
 public/javascripts/contact/contact_confirmation.html
 
 この内容にng-modelと同じ命名にして記載しましょう。


 **3.メールで追加する方法**
 
 public/javascripts/contact/contact_controllers.ts
 
 ソースの34行目から45行目までで記載する。
 
 サンプルで説明
 
 item.text = $scope.text
 
 textと記載してる部分はng-modelと同じ命名にしてください。
 
 itemと$scopeは絶対に変えないでください。
 
 
 **4.メールの送信部分**
 
 routs/contact/controllers/contact_controllers.ts
 
 ソースの29行目から35行目までで記載する。

 サンプルで説明
 
 textbox: request.body.text,
 
 textと記載してる部分はng-modelと同じ名前にしてください。
 
 textboxと記載してる部分はメールで受け取る名前になります。
 
 それ以外は書き方を変えないでください。
 
 
 **5.htmlメールで変更内容**
 
 views/mails/contact.pug
 
 サンプルで説明
 
 #{textbox}
 
 は上記でつけた命名のtextboxで表示されます。
 
 #{}は消さないでください。
 
 
 views/mails/contactBroad.pug
 
 こちらは自社に届くメールになっております。
 
 同じように変更をしてください。
 
 
 サンプルで説明
 
 textbox: request.body.text,
 
 textと記載してる部分はng-modelと同じ名前にしてください。
 
 textboxと記載してる部分はメールで受け取る名前になります。
 
 それ以外は書き方を変えないでください。


 
 public/javascripts/contact/contact.html

 public/javascripts/contact/contact_controllers.ts



 # メールアドレスや件名の変更方法
 
 ファイルのconfig/config.jsonの中身を変更してください。
 
 .件名（fromContent）
 
 .from(mailAddress):
 
 ・bcc(bcc):
 
 **ダブルクォーテーションは消さないでください。**

# メール本文の変更方法
 * お客様に届く部分
 
 views/contact

 **htmlメールとして届きますので画像などcssなど記入できます。**
 **outlockができない部分が多いので、基準はoutlockを使ってください**

 * 自社に届くメール
 views/contactBroad 
  
