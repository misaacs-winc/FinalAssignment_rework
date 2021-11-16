/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggler() {
    var x = document.getElementById("menuItems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const prefix = "#set-color-";

document.querySelector("#menuItems").addEventListener("click", function (event) {

    const anchor = event.target.closest(`a[href^="${prefix}"]`);

    if (anchor && this.contains(anchor)) {

        const color = anchor.getAttribute("href").substring(prefix.length);

        document.body.style.backgroundColor = color;

        document.querySelector(".color").textContent = color;

        //event.preventDefault();

    }
});


document.getElementById("menuItems").addEventListener("onselect", function (event) {
    closeNav()
});


