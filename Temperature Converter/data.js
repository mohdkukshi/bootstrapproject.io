
let fahrenheit = 105;

let celcius = (fahrenheit - 32) * 5/9;

celcius = celcius.toFixed(2);

console.log(celcius);




<script>
document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("fahrenheitInput");
    input.addEventListener("input", function () {
        let fahrenheit = input.value;
        let celcius = (fahrenheit - 32) * 5 / 9;
        celcius = celcius.toFixed(2);
        document.getElementById("result").innerText = "Temperature in Celsius: " + celcius;
    });
});
</script>
