document.body.addEventListener("mousemove", function() {
    var second = document.getElementById("second");
    addMessage(second, "Event: mousemove");
});

document.body.addEventListener("click", function() {
    document.getElementById("second");
    addMessage(second, "Event: click");
});