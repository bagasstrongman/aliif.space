fetch(
    `https://analytic.aliif.space/counter/${location.pathname.slice(
        0,
        -1
    )}.json`
)
    .then((res) => res.json())
    .then((data) => {
        if (parseInt(data.count) > 1) {
            document.getElementById("stats").innerText = data.count + " Views";
        } else {
            document.getElementById("stats").innerText =
                data.count_unique + " View";
        }
    })
    .catch((e) => {
        console.log("error");
    });
