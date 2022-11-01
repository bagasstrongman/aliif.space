document.addEventListener("rasaspa:load", function () {
    if (document.getElementById("stats")) {
        fetch(
            `https://api.countapi.xyz/hit/${location.hostname}${location.pathname}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (parseInt(data.value) > 1) {
                    document.getElementById(
                        "stats"
                    ).innerText = ` · ${data.value} views`;
                } else {
                    document.getElementById(
                        "stats"
                    ).innerText = ` · ${data.value} view`;
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
});
