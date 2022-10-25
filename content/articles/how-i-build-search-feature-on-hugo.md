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

---
Halo semua,

Kali ini saya saya akan menjelaskan bagaimana saya membangun fitur pencarian di website statis yang dibuat dengan menggunakan Hugo SSG, bila anda belum tahu apa itu Hugo dan apa itu Static Site Generator anda dapat membaca pada dokumentasi [Hugo](https://gohugo.io/ "website hugo").

Baiklah jadi untuk membangun fitur pencarian di Hugo sebenarnya ada beberapa metode yang dapat dilakukan metode yang paling mudah adalah dengan mengintegrasikan tools tambahan seperti google search, algolia, bonsai, dll. metode yang lumayan agak rumit adalah dengan menggunakan lunr.js atau fuse.js yang caranya ada pada [dokumentasi Hugo](https://gohugo.io/tools/search/).

Saya tidak menggunakan tools tambahan karena fitur gratisnya ada batasan penggunaan dan saya juga tidak menggunakan library JavaScript lunr.js, fuse.js, dll. karena menurut saya library tersebut akan membuat website menjadi lebih berat dan saya juga harus membaca kodenya yang panjang untuk memahami cara kerja dan integrasi untuk melakukan kustomisasi fitur yang saya inginkan.

```javascript
document.getElementById("search-input").oninput = function searchPost() {
    // Declare variables
    var input, filter, li, tampung, a, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("list");
    tampung = [];

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
            tampung.push(i);
        }
    }

    if (tampung.length === li.length) {
        if (!document.getElementById("nofound")) {
            var hm = document.getElementsByClassName("search-article");
            hm[0].insertAdjacentHTML(
                "afterend",
                `<div style="font-size: large;font-weight: 600;" id="nofound"><p id="nfmsg"></p></div>`
            );
        }
        if (document.getElementById("nofound")) {
            document.getElementById(
                "nfmsg"
            ).innerText = `Sorry, nothing matched with "${input.value}"`;
        }
    } else {
        if (document.getElementById("nofound")) {
            document.getElementById("nofound").remove();
        }
    }
};
```

Karena itu saya membuat fitur pencarian sendiri seperti kode diatas dengan menggunakan Vanilla JavaScript dan menipulasi DOM sederhana, namun dalam praktiknya saya memiliki kendala bila blognya memiliki pagination maka fitur search tidak akan bekerja dengan semestinya karena cara kerja pencariannya adalah dengan melakukan looping title tiap artikel di halaman yang sama dengan menggunakan DOM dan bila menggunakan pagination maka searching tidak akan mengecek semua judul artikel karena tidak semua judul artikel tampil dihalaman yang sama.

Saya pun beripikir begaimana untuk menyelesaikan permasalahan tersebut karena saya ingin memiliki fitur pagination dan memiliki fitur live search juga di tiap halaman paginationnya sehingga pembaca dapat mencari artikel dengan lebih mudah, pada suatu saat saya menemukan artikel [ini](https://nurofsun.com/search-feature-on-hugo/) yang lumayan membantu dan mencerahkan.

Jadi cara yang sekarang saya gunakan adalah dengan menggenerate file JSON yang berisi semua judul artikel yang sudah di post lalu bila ingin pembaca melakukan event onfocus pada form pencarian maka web akan melakukan fetching data json lalu bila user melakukan input query maka akan terjadi looping untuk logika live search, berikut breakdown detail prosesnya.

## Generate JSON Data

Untuk menggenerate data json maka buat file `layout/index.json` lalu isi dengan kode berikut:

```golang
[
  {{- with $.Site.GetPage "/articles" }}
    {{- range $index, $data := .Pages }}
    {{- if $index }},{{ end }}
    {
        "title": "{{ $data.Title  }}",
        "url": "{{ $data.RelPermalink }}",
        "date": "{{ $data.Date.Format "January 2, 2006" }}",
    }
    {{- end }}
  {{- end }}
]
```

sesuaikan path `/articles` sessuai dengan content type yang anda inginkan untuk di index oleh file JSON nantinya.

Lalu pada file `config.yaml` atau `config.toml` tambahkan konfigurasi berikut ini:

```yaml
outputs:
    home:
        - HTML
        - JSON
```

## Fetch and Search Logic

Setelah data JSON berhasil digenerate maka buat logic untuk searching data dan menampilkan datanya secara realtime, berikut kode JavaScriptnya:

```javascript
var list = document.getElementById("list");
var awal = list.innerHTML;
var query = document.getElementById("search-input");

var allpost;
query.onfocus = function fetchpost() {
    fetch("/index.json")
        .then((res) => res.json())
        .then((data) => {
            allpost = data;
        });
};

query.oninput = function searchpost() {
    list.innerHTML = "";
    for (const artikel of allpost) {
        if (
            artikel.title
                .toLowerCase()
                .includes(query.value.toLowerCase().trim())
        ) {
            list.innerHTML += `
            <article class="list">
                <a href="${artikel.url}">${artikel.title}</a>
                <time>${artikel.date}</time>
            </article>`;
        }
    }
    if (!list.innerHTML) {
        list.innerHTML = `<p style="font-size: large;font-weight: 600;">Sorry nothing article matched with "${query.value}"</p>`;
    }
};

query.onblur = function gatau() {
    if (!query.value.trim()) {
        list.innerHTML = awal;
    }
};
```

## Kesimpulan

Setelah itu voila maka website statis kita akan memiliki fitur pencarian layaknya website yang dinamis dan ini jauh lebih ringan dan realtime.

Kelebihan dengan menggunakan fitur searching yang dicustom seperti ini adalah melatih logika untuk problem solving dan tentunya jauh lebih ringan websstenya karena kodenya hanya sesuai dengan kebutuhan website kita.

Kekurangannya adalah kita jadi repot karena harus mikir logicnya jujur kalau saya lebih bingung ketika berpikir manipulasi dom kapan harus ditampilkan kapan tidak dan event apa yang cocok untuk diimplementasikan tiap fungsinya, namun dengan mencoba maka menjadi bisa dan pengetahuan bertambah, selain itu kekurangan dari fitur yang dibuat sendiri ini adalah fitur pencarian belum dapat menangani pencarian yang lebih kompleks misal sampai ke unordered substring, typo tolerance, dan synonym.

Sekian tulisan ssaya semoga bermanfaat dan terimakasih sudah membacanya.