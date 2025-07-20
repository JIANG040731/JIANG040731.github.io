function calculateAverage() {
  const s1 = parseFloat(document.getElementById("score1").value);
  const s2 = parseFloat(document.getElementById("score2").value);
  const s3 = parseFloat(document.getElementById("score3").value);

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    alert("Please enter all three scores.");
    return;
  }

  const avg = (s1 + s2 + s3) / 3;
  let evaluation = "";

  if (avg >= 90) {
    evaluation = "Excellent";
  } else if (avg >= 75) {
    evaluation = "Good";
  } else if (avg >= 60) {
    evaluation = "Average";
  } else {
    evaluation = "Poor";
  }

  document.getElementById("result").innerHTML =
    "Your average score is <strong>" + avg.toFixed(2) + "</strong> (" + evaluation + ")";
}
