function animateIt(elementId) {
    var elem = document.getElementById(elementId);
    var tick = 0;
    var timer = setInterval (
        function () {
            if(tick < 700) {
                var position  = tick + "px";
                elem.style.left = position;
                elem.style.top = position;
                tick++;
            } else {
                clearInterval(timer);
                assert(tick === 700, "Tick доступ через закрытие");
                assert(elem, "Элемент также доступ через закрытие");
                assert(timer, "Ссылка на таймер также получена при закрытии")
            }
        }, 10
    );
}

animateIt("box1");
// animateIt("box2");