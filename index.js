document.onreadystatechange = function() {

    document.querySelector(
        "#loading").style.visibility = "visible";
    document.querySelector(
        "#loading").style.display = "none";
};

window.addEventListener('beforeunload', function(event) {
    document.querySelector(
        "body").style.visibility = "hidden";
    document.querySelector(
    "#loading").style.display = "block";
});