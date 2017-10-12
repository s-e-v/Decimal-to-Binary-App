$("#convert").on("click", function () {
    var number = document.getElementById("decimal").value;
    document.getElementById("binary").value = convBin(number);
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
