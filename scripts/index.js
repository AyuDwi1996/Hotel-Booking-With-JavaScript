
function view() {
    if (document.getElementById("city-cards1").style.display === "inherit") {
        document.getElementById("city-cards1").style.display = "none";
        document.getElementById("viewButton").innerText = "View More";
    } else {
        document.getElementById("city-cards1").style.display = "inherit";
        document.getElementById("viewButton").innerText = "View Less";
    }

}
document.getElementById("view-more").addEventListener("click", view);


