const GLOBAL_NINJA = "Yoshi";

function reportActivity() {
    const functionActivity = "jumping";

    for(let i = 1; i < 3; i++) {
        let forMessage = GLOBAL_NINJA + " " + functionActivity;
        assert (forMessage === "Yoshi jumping", "Yoshi прыгает в течение блока");
        assert (i, "Счетчик цикла: " + i);
    }

    assert (    
        typeof i === "undefined"  && 
        typeof forMessage === "undefined", "Переменные недоступны вне цикла"
    );
}
reportActivity();
assert(
    typeof functionActivity === "undefined" && 
    typeof i === "undefined" && 
    typeof forMessage === "undefined", "Мы не можем видеть переменные функции вне функции"
);
