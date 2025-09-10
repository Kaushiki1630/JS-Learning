const form = document.querySelector('form');

// // agar height ya weight ko bhaar le lenge toh woh empty value le lega pr hame calculate pr click hone k baad values chahiye... isiliye addEventListener m add krna hoga
// // const height = parseInt(document.querySelector('#height').value);


// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `⚠️ Please enter a valid height.`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `⚠️ Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
    results.innerHTML = `Your BMI is <b>${bmi}</b> → Underweight`;
    results.style.color = "#e67e22"; // orange
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML = `Your BMI is <b>${bmi}</b> → Normal`;
    results.style.color = "green";
  } else {
    results.innerHTML = `Your BMI is <b>${bmi}</b> → Overweight`;
    results.style.color = "red";
  }
  }
});

