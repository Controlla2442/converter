const celciusCheck = document.querySelector("#celciusCheck");
const fahrenheitCheck = document.querySelector("#fahrenheitCheck");
const inputTemp = document.querySelector("#inputTemp");
const tempValue = document.querySelector("#tempValue");
const convertBtn = document.querySelector("#convertBtn");
const checkText = document.querySelector("#checkText");

convertBtn.addEventListener("click", () => {
    const value = inputTemp.value.trim();

    // Input validation
    if (value === "" || isNaN(value)) {
        tempValue.textContent = "Invalid input. Please enter a valid number.";
        return;
    }

    const numberValue = Number(value);

    // Conversion logic
    if (celciusCheck.checked) {
        const fahrenheit = Math.floor((numberValue * 9 / 5) + 32);
        tempValue.textContent = `${numberValue} Celsius equals ${fahrenheit} Fahrenheit!`;
    } else if (fahrenheitCheck.checked) {
        const celsius = Math.floor((numberValue - 32) * 5 / 9);
        tempValue.textContent = `${numberValue} Fahrenheit equals ${celsius} Celsius!`;
    } else {
        checkText.textContent = "Please select a conversion option.";
    }
});
