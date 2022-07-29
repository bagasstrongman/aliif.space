---
tags:
- ubuntu
- linux
- php
show_comment: true
title: Normalisasi htdocs XAMPP di Ubuntu
description: Normalisasi permission folder htdocs Xampp di Linux Ubuntu
date: 2022-07-30T00:00:00+07:00
lastmod: 
slug: normalisasi-hdocs-xampp-ubuntu
images:
- https://og.tailgraph.com/og?fontFamily=Inter&title=Normalisasi%20Htdocs%20Xampp%20di%20Ubuntu&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=Normalisasi%20permission%20folder%20htdocs%20Xampp%20di%20Linux%20Ubuntu&textTailwind=text-gray-700%20text-2xl%20mt-4&logoTailwind=h-8&bgTailwind=bg-white&footer=aliif.space&footerTailwind=text-blueGray-500

---
Halo semua,

kembali lagi bersama saya Aliif, jadi ceritanya sudah hampir seminggu saya pindah Operating System dari yang biasanya menggunakan Windows akhirnya saya memberanikan diri untuk menggunakan Linux, sebenarnya ini bukan pertama kali saya pakai linux sih, sebelumnya pada tahun 2020 saya sempat mencicipi distro deepin OS yang basisnya debian namun saat itu saya kurang merasa produktif saat menggunakannya dan sering mengalami beberapa kendala terutama juga karena masalah file permission pada sistem unix yang ketika itu saya masih sangat gaptek :D maklum waktu itu baru lulus pesantren dan belum kuliah IT.

BTW., Distro linux yang saya gunakan sekarang adalah Elementary OS 6.1 Jolnir yang basisnya adalah ubuntu 20.04 sehingga core os nya masih sama, saya memilih elementary os karena tampilannya yang bagus seperti macos dan juga resource used os nya yang rendah bahkan kabarnya elementary os ini juga lebih ringan dari ubuntu sendiri.

Maaf tadi cuma cerita aja ya, jadi intinya saat menggunakan windows biasanya kita akan menggunakan xampp atau Laragon sebagai tools untuk membuat website berbasis PHP, namun kalau di Ubuntu kita hanya dapat menggunakan XAMPP atau yang disebut juga LAMPP, bila menggunakan XAMPP umumnya kita akan meletakkan folder project kita pada folder htdocs namun ketika menginstall xampp di ubuntu saat ingin mempaste folder project kita ke dalam htdocs lah kok gak ada tombol pastenya 🤔.

Umumnya ketika menginstall XAMPP di ubuntu maka folder htdocs akan berada di directory `/opt/lampp/htdocs` dan saat itu permission masih digembok karena itu kita perlu membuka permission tersebut agar kita dapat melakukan read and write dengan bebas ya intinya agar behaviour dari folder htdocs tersebut sama dengan ketika menggunakan windows.

Caranya dengan membuka terminal lalu ketikan perintah dibawah ini :

```bash
sudo chmod 777 -R /opt/lampp/htdocs
```

tinggal masukkan password sudo nya saja lalu enter maka boom, htdocs kita sudah seperti ketika menggunakan windows.

Maksud dari perintah diatas adalah:

* `sudo` adalah perintah untuk melakukan berbagai operasi yang membutuhkan password agar sistem tetap aman.
* `chmod` adalah perintah untuk mengubah permission sebuah folder ataupun file.
* `777` adalah kode dari permission yang kita berikan sehingga hak akses menjadi everyone.
* `-R` adalah rekursif yang berarti perintah tersebut juga berlaku untuk semua folder dan file yang ada pada folder induk nya.
* `/opt/lampp/htdocs` adalah path dari folder yang akan kita ubah permissionnya.

FYI aja nih sebelumnya saya mensetting kode permissionnya dengan kode `755` namun ketika saya melakukan instalasi dan konfigurasi cms wordpress di htdocs sering terjadi error ketika mengupload plugin atau tema sehingga saya menemukan solusi ini dan ketika saya terapkan kode `777` semua error di wordpress seketika hilang dan menjadi lancar jaya.

Sekian tulisan dari saya semoga bermanfaat, terimakasih sudah membaca.