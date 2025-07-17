function calculateBMI() {
    let h = parseFloat(document.getElementById("height").value);
    let w = parseFloat(document.getElementById("weight").value);

    if (isNaN(h) || h <= 0) {
        alert("Please enter a valid height in cm.");
        return;
    }

    if (isNaN(w) || w <= 0) {
        alert("Please enter a valid weight in kg.");
        return;
    }

    h = h / 100; // convert cm to meters
    const bmi = w / (h * h);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML = 
        "Your BMI is <strong>" + bmi.toFixed(2) + "</strong> (" + category + ")";
}
