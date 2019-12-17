function addMessage(element, message) {
    var messageElement = document.createElement("li");
    messageElement.textContent = message;
    element.appendChild(messageElement);
}
var first = document.getElementById("first");
addMessage(first, "Page loading");