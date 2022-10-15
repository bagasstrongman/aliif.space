---
title: "Github Activity Generator"
description: "Github Activity Generator build using python"
date: "2021-11-21"
lastmod: "2022-06-01"
slug: "github-activity-generator"
show_comment: false
images:
- https://og.tailgraph.com/og?fontFamily=Roboto&title=Github%20Activity%20Generator&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=Github%20Activity%20Generator%20build%20using%20python&textTailwind=text-gray-700%20text-2xl%20mt-4&logoTailwind=h-8&bgTailwind=bg-white&footer=aliif.space&footerTailwind=text-teal-600&t=1653399583383&refresh=1
---

Pernah gak sih anda meihhat timeline aktifitas akun GitHub seseorang kok bisa yang hijau banget seakan - akan dia ngoding terus tiap hari.

> Jangan nilai Programmer hanya dari profil GitHubnya saja <br> *- Aliif Arief 2021* 

Kira - kira Quotes diatas sangat cocok untuk Proyek yang saya buat kali ini, jadi perkenalkan lah Github Activity Generator yaitu sebuah script yang saya buat dengan menggunakan bahasa Python untuk melakukan manipulasi dengan mengotomatisasi commit git.

Cara Kerja dari script ini sebenarnya sangat amat sederhana yaitu hanya dengan memanfaatkan fungsi `os.system` dan module time bawaan Python yang di loop berkali - kali.

Berikut main script dari aplikasi sederhana yang saya buat.

```python {hl_lines=["5-7"]}
import os
from datetime import date, time, datetime
import datetime

total_day = 366 #total days back
commit_frequency = 10 #commit time per day
repo_link = "https://github.com/aliifam/github-activity-generator.git"

tl = total_day #time day
ctr = 1

now = datetime.datetime.now()

f = open("commit.txt", "w")
os.system("git config user.name")
os.system("git config user.email")
os.system("git init")

pointer = 0

while tl > 0:
    ct = commit_frequency
    while ct > 0:
        f = open("commit.txt", "a+")
        l_date = now + datetime.timedelta(days=-pointer)
        formatdate = l_date.strftime("%Y-%m-%d")
        f.write(f"commit ke {ctr}: {formatdate}\n")
        f.close()
        os.system("git add .")
        os.system(f"git commit --date=\"{formatdate} 12:15:10\" -m \"commit ke {ctr}\"")
        print(f"commit ke {ctr}: {formatdate}")
        ct-=1
        ctr+=1
    pointer+=1
    tl-=1

os.system(f"git remote add origin {repo_link}")
os.system("git branch -M main")
os.system("git push -u origin main -f")
```

berikut link repository Github nya : [Github Activity Generator](https://github.com/aliifam/github-activity-generator)

Alur dari program ini berjalan adalah pertama kita tentukan kapan awal tanggal komit di masa lampau yang kita inginkan jadi hijau lalu tentukan frekuensi komit per hari nya lalu tentukan link repository GitHub kosong untuk dummy nya saja lalu jalankan programnya pastikan komputer sudah terpasang aplikasi Git dan sudah terkonfigurasi dengan GitHub, maka program akan membuat file `commit.txt` dan akan melakukan komit berulang - ulang sampai target terpenuhi saat commit tanggal commit juga dimanipulasi agar hijaunya merata setelah looping selesai maka program otomatis langsung push repo ke GitHub dan voila timeline GitHub anda akan menjadi seperti Hutan di Kalimantan saat sebelum di Tebangin.

Saya membuat proyek ini karena gabut aja dan ingin mengamalkan ilmu dasar pemrograman di semester 1 perkuliahan.

Mohon digunakan dengan bijak, terimakasih sudah membaca.