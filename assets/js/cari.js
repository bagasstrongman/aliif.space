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
