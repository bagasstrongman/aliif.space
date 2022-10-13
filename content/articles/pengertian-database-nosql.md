---
tags:
- database
- sql
- nosql
- mongodb
- influxdb
- cassandra
- elasticsearch
- redis
show_comment: true
title: Pengertian Database NoSQL
description: Ternyata pemahaman saya dan kebanyakan orang khususnya pemula salah tentang
  apa itu Database NoSQL
date: 2022-10-09T00:00:00+07:00
lastmod: 2022-10-13T00:00:00+07:00
slug: ''
images:
- https://og.tailgraph.com/og?fontFamily=Inter&title=Pengertian%20Database%20NoSQL&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=ternyata%20Bukan%20NOt%20SQL%20tetapi%20Not%20Only%20SQL&textTailwind=text-gray-700%20text-2xl%20mt-4&logoTailwind=h-8&bgTailwind=bg-white&footer=aliif.space&footerTailwind=text-black&t=1665303744480&refresh=1

---
Halo semua,

Apa yang kalian pikirikan ketika mendengar istilah database NoSQL?

Beberapa waktu yang lalu saya belajar tentang microservices dari channel youtube programmer zaman now, dan saya menemukan suatu pengetahuan baru yang akhirnya mengoreksi pemahaman lama saya yang salah.

Ketika pertama kali mendengar jenis database NoSQL saya dan mungkin sebagian kalian para pembaca menyimpulkan maksudnya adalah database yang bukan berbentuk table karena no itu tidak dan SQL itu Structured Query Language, intinya databasenya bukan berbasis tabel, kolom, dan baris.

Namun ternyata pemahaman tersebut kurang tepat, jadi sebenarnya maksud dari NoSQL itu kepanjangannya adalah **not only SQL** sehingga database yang basisnya tabel juga bisa masuk kedalam database NoSQL seperti contohnya Apache Cassandra.

Kali ini saya akan membahas 6 jenis database NoSQL yang  cukup populer digunakan di industri teknologi zaman sekarang yaitu:

1. Document Oriented Database
2. Key Value Database
3. Column Family Database
4. Graph Database
5. Search Database
6. Time Series Database

## Document Oriented Database

Document Oriented Database yang sedang ngetrend sekarang ini adalah MongoDB, Database jenis ini sangat cocok untuk database yang memiliki value yang flexible seperti data detail produk pada suatu e-commerce, bisanya disimpan dalam bentuk JSON

## Key Value Database

Key Value Database yang sedang ngetrend sekarang ini adalah Redis, sistem basis data ini sangat sederhana karena hanya terdiri dari key yang bersifat sebagai identifier,  dan value, biasanya jenis database ini bersifat in memory database, seringnya dilakukan untuk melakukan caching agar kinerja aplikasi meningkat.

## Column Family Database

Column Family Database yang sedang ngetrend saat ini adalah apache cassandra, untuk representasi cara kerjanya jujur saya masih kurang memahaminya namun kalau menurut wikipedia begini:

"A column family is a database object containing related data columns. It is a [tuple](https://en.wikipedia.org/wiki/Tuple "Tuple") (pair) that consists of a [key-value pair](https://en.wikipedia.org/wiki/Attribute%E2%80%93value_pair "Attribute–value pair"), where the key is mapped to a value that is a set of columns. In analogy with relational databases, a column family is a "table," each key-value pair being a "row." Each column is a [tuple](https://en.wikipedia.org/wiki/Tuple "Tuple") ([triplet](https://en.wikipedia.org/wiki/Triplet_(disambiguation) "Triplet (disambiguation)")) consisting of a column name, a value, and a [timestamp](https://en.wikipedia.org/wiki/Timestamp "Timestamp"). In a [relational](https://en.wikipedia.org/wiki/Relational_database "Relational database") [database table](https://en.wikipedia.org/wiki/Database_table "Database table"), this data would be grouped together within a table with other non-related data."

## Graph Database

Graph Database yang sedang ngetrend saat ini adalah Neo4j, database jenis ini cocok digunakan untuk membuat aplikasi social networking seperti LinkedIn, Facebook, Instagram, dll. representasi dalam database ini adalah seperti node dan edge yang saling terhubung sehingga dpat dilakukan perhitungan matrix yang lebih kompleks misal untuk sistem rekomendasi, dll.

## Search Database

Dari namanya sudah jelas ya search database digunakan untuk melakukan pencarian, dengan menggunakan search database kinerja pencarian akan menjadi jauh lebih baik dengan berbagai fiturnya yang memang dikhususkan untuk melakukan pencarian dari mulai indexing sampai pencarian dengan synonim dapat dilakukan, search database yang sedang ngetren sekarang ini adalah ElasticSearch.

## Time Series Database

Time Series database ini biasa digunakan untuk menyimpan log aktivitas, misal saja untuk memonitoring aktifitas user pada suatu website atau aplikasi, InfluxDB adalah salah satu Time Series Database yang ngetrend saat ini.

## Kesimpulan

Dengan mengetahui jenis - jenis database, bila suatu saat kita membuat sistem microservices maka kita dapat memilih jenis database sesuai dengan fungsionalitas service yang akan kita bangun, sehingga kinerja service menjadi maksimal dan proses development akan menjadi lebih efisien.