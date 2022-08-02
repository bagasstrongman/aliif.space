---
tags:
- javascript
show_comment: true
title: JavaScript Detructuring Object
description: Mengupas tuntas Detructuring Object dalam JavaScript
date: 2022-08-02T00:00:00+07:00
lastmod: 
slug: javaScript-detructuring-object
images:
- https://og.tailgraph.com/og?fontFamily=Inter&title=JavaScript%20Detructuring%20Object&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=Mengupas%20tuntas%20Detructuring%20Object%20dalam%20JavaScript&textTailwind=text-gray-700%20text-2xl%20mt-4&logoTailwind=h-8&bgTailwind=bg-white&footer=aliif.space&footerTailwind=text-gray-600
draft: true

---
Halo semua,

Kali ini saya akan membahas tuntas fitur ES6 dalam Javacript yaitu **Destructuring Object** yang akan membuat codingan kita semakin clean dan efektif.

Saya akan memberikan contoh sederhana bila kita memiliki sebuah object person yang memiliki property name, email, dan age:

```javascript
const person = {
  name: "Aliif Arief",
  email: "me@aliif.space",
  age: 18
}
```

maka untuk mengakses value property dalam object kita biasanya melakukannya dengan membuat variabel baru eperti ini:

mmfmmf