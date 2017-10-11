$("#convert").on("click", function () {
    var number = document.getElementById("decimal").value;
    var afterDiv = number;
    var remainder = [];
    for (i = 0; i < 8; i++) {
        remainder[i] = Math.floor(afterDiv % 2);
        afterDiv = afterDiv / 2;
    };
    document.getElementById("binary").value = remainder.reverse().join("");
});