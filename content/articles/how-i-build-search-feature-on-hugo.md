---
tags:
- hugo
- javascript
- dom
- json
date: 2022-10-25T08:34:03+07:00
lastmod: 
show_comment: true
title: How I build search feature on Hugo
description: How I build search feature on Hugo with no library and other tools.
slug: ''
images:
- https://cdn.statically.io/og/How%20I%20build%20search%20feature%20on%20Hugo.jpg
draft: true

---
Halo semua,

Kali ini saya saya akan menjelaskan bagaimana saya membangun fitur pencarian di website statis yang dibuat dengan menggunakan Hugo SSG, bila anda belum tahu apa itu Hugo dan apa itu Static Site Generator anda dapat membaca pada dokumentasi [Hugo](https://gohugo.io/ "website hugo").

Baiklah jadi untuk membangun fitur pencarian di Hugo sebenarnya ada beberapa metode yang dapat dilakukan metode yang paling mudah adalah dengan mengintegrasikan tools tambahan seperti google search, algolia, bonsai, dll. metode yang lumayan agak rumit adalah dengan menggunakan lunr.js atau fuse.js yang caranya ada pada [dokumentasi Hugo](https://gohugo.io/tools/search/).

Saya tidak menggunakan tools tambahan karena fitur gratisnya ada batasan penggunaan dan saya juga tidak menggunakan library JavaScript lunr.js, fuse.js, dll. karena menurut saya library tersebut akan membuat website menjadi lebih berat dan saya juga harus membaca kodenya yang panjang untuk memahami cara kerja dan integrasi untuk melakukan kustomisasi fitur yang saya inginkan.

Karena itu saya membuat fitur pencarian sendiri dengan meenggunakan Vanilla JavaScript dan menipulasi DOM sederhana, namun dalam praktiknya saya memiliki kendala bila blognya memiliki pagination maka fitur search tidak akan bekerja dengan semestinya