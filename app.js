$(window).on("load", function () {
    $("#error").hide(10);
});

$("#convert").on("click", function () {
    var number = document.getElementById("decimal").value;
    if (isNaN(number)) {
        $("h4").text("Please enter a number!")
        $("#error").show(10);
    } else if (number == "") {
        $("h4").text("Please enter a value!")
        $("#error").show(10);
    } else if (number == 0) {
        $("h4").text("Please do not enter 0!")
        $("#error").show(10);
    } else {
        $("#error").hide(10);
        document.getElementById("binary").value = convBin(number);
    }
});

function convBin (number) {
    var afterDiv = number;
    var remainder = [];
    for (i = 0; Math.floor(afterDiv) != 0; i++) {
        remainder[i] = Math.floor(afterDiv % 2);
        afterDiv = afterDiv / 2;
        console.log(afterDiv);
    };
    return remainder.reverse().join("");
};
