function searchFunction() {
    // Declare variables
    var input, filter, li, tampung, a, i, nf, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName('list');
    nf = document.getElementById("nofound");
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
        nf.style.display = "block";
    } else {
        nf.style.display = "none";
    }
}