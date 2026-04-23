---
title: "マークダウン記事を書いて表示させてみる"
date: "2026-03-25"
category: "column"
tags: ["study"]
summary: "マークダウン記事の作成と表示までの流れをまとめた記録"
---

## マークダウン記事を書いてブログに表示させてみる

自己紹介記事を試しに書いたあと、それをブログに表示させたいと思いました。  
そこで、ChatGPTに相談しながら、簡単なブログレイアウトの作成と、Markdownを表示する方法を調べて実装してみました。

私は現在、Linux環境（Ubuntu）でReactを使ってホームページやブログを制作しています。  
（LinuxやUbuntu、Reactについてはまた別の記事でまとめる予定です）

---

## 使用したライブラリ

まずは、Markdownを表示するためのライブラリを導入しました。

```bash
npm install react-markdown gray-matter
````

* `react-markdown`：Markdown本文を表示するためのライブラリ
* `gray-matter`：タイトルや日付などのメタ情報を取り出すためのライブラリ

WordPressでいうプラグインのような役割です。

---

## ディレクトリ構成

記事は以下のように管理することにしました。

```text
src/content/blog/
```

* Markdownファイル（`.md`）をここに格納
* 記事一覧データは `src/content/blogPosts.js` で管理

---

## Markdownを表示するコード

以下のようにして、Markdown記事をReactで表示できるようにしました。

```jsx
import Header from "./components/Header";
import "./App.css";
import ReactMarkdown from "react-markdown";

// Markdownファイルを読み込む
import post from "./content/blog/self-introduction.md?raw";

export default function Blog() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="section about">
          <div className="aboutText">
            <h1>BLOG</h1>

            <div className="blogContent">
              <ReactMarkdown>{post}</ReactMarkdown>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
```

---

## ポイント

```js
import post from "./content/blog/self-introduction.md?raw";
```

この `?raw` をつけるのが重要です。

これによって、Markdownファイルを「文字列」として読み込むことができ、React内で表示できるようになります。

---

## 今日やったことまとめ

### ① ブログ用の構成を作成

* `src/content/` フォルダを作成
* `blog/` ディレクトリを追加

👉 記事を管理する場所を用意した

---

### ② Markdown記事を作成

* `self-introduction.md` を作成
* 自己紹介の文章を記事形式に整理

👉 文章をブログ記事として扱えるようにした

---

### ③ MarkdownをReactで表示

* `react-markdown` を導入
* `.md` ファイルを `?raw` で読み込み

```js
import post from "./content/blog/self-introduction.md?raw";
```

👉 Markdownをそのまま表示できるようになった

---

### ④ Blogページに表示

```jsx
<ReactMarkdown>{post}</ReactMarkdown>
```

👉 実際にブログ記事として表示できる状態になった

---

## 今の状態

* Markdown記事がページに表示される
* 記事を増やせる構成になった
* ブログの土台ができた

---

## 今後やりたいこと

* 記事を複数追加する
* 記事一覧ページを作る
* デザインを整える

---

今回は、Markdown記事を作成して表示するところまで実装しました。
今後は、記事数を増やしながら、よりブログらしい構成にしていきたいと思います。

```

---

