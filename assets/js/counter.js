fetch(
    `https://analytic.aliif.space/counter/${location.pathname.slice(
        0,
        -1
    )}.json`
)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("stats").innerText = data.count_unique;
    });
