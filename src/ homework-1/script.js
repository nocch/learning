    //first hw
    function add(a, b) {
        return a + b
    };

    function sub(a, b) {
        return a - b
    };

    function mul(a, b) {
        return a * b
    };

    function div(a, b) {
        return a / b
    };
    var myFirstFunction = add(100, 50);
    var mySecondFunction = sub(100, 50);
    var myThirdFunction = mul(100, 50);
    var myFourthFunction = div(100, 50);
    document.getElementById("result1").innerHTML = myFirstFunction;
    document.getElementById("result2").innerHTML = mySecondFunction;
    document.getElementById("result3").innerHTML = myThirdFunction;
    document.getElementById("result4").innerHTML = myFourthFunction;
