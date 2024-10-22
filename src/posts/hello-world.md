---
title: 'Hello world'
summary: 'This is my first post!'
---

# Heading1

これはh1です

## Heading2

これはサブタイトルです。

### heading3

小見出しも作れます。

#### heading4

##### heading5

###### heading6

---

## リスト

### 番号付きリスト

1. 最初の項目
2. 次の項目
3. 最後の項目

### 番号なしリスト

- アイテム1
- アイテム2
- アイテム3

---

## リンクと画像

### リンク

[Markdownのチュートリアル](https://www.markdownguide.org/)

---

## 引用とコードブロック

### 引用

> これは引用です。  
> 複数行に渡る引用文も可能です。

### コードブロック

```js title="example.js"
function helloWorld() {
	console.log('Hello, World!');
}
```

## テーブル

Markdownでテーブルを作成する方法は以下の通りです。

| 名前 | 年齢 |           趣味 |
| ---- | :--- | -------------: |
| 太郎 | 25   |       サッカー |
| 花子 | 30   |           読書 |
| 次郎 | 22   | プログラミング |

表の列の間にスペースやパイプ(`|`)を使用して表を構築します。

---

## テキストの装飾

Markdownを使ってテキストを装飾する方法を以下に示します。

- **太字**はテキストの両端に`**`を使用します。
- *斜体*はテキストの両端に`*`を使用します。
- ~~取り消し線~~はテキストの両端に`~~`を使用します。

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"
```

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
	console.log('this line is marked as deleted');
	// This line and the next one are marked as inserted
	console.log('this is the second inserted line');

	return 'this line uses the neutral default marker type';
}
```

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
	role="button"
	{...props}
	value={value}
	className={buttonClassName}
	disabled={disabled}
	active={active}
>
	{children && !active && (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

```diff
+this line will be marked as inserted
-this line will be marked as deleted
this is a regular line
```

```js "given text"
function demo() {
	// Mark any given text inside lines
	return 'Multiple matches of the given text are supported';
}
```
