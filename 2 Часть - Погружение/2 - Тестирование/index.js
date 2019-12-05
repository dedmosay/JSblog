
function sayHi(man) {       // Функция которую нужно протестировать
    return "Hi " + man;
}

QUnit.test("Simple text hello", function(assert){
    assert.ok(sayHi("Hatory") == "Hi Hatory", "Passed");
    // assert.ok( false, "Failed!")
})
