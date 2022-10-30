fetch(
    `https://analytic.aliif.space/counter/${location.pathname.slice(
        0,
        -1
    )}.json`
)
    .then((res) => res.json())
    .then((data) => {
        if (parseInt(data.count) > 1) {
            document.getElementById(
                "stats"
            ).innerText = ` · ${data.count} views`;
        } else {
            document.getElementById(
                "stats"
            ).innerText = ` · ${data.count} view`;
        }
    })
    .catch((e) => {
        console.log(e);
    });
