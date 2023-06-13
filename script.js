document.addEventListener("DOMContentLoaded", getMeal);

function getMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
      const meal = data.meals[0];
      displayMeal(meal);
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

function displayMeal(meal) {
  const mealInfoDiv = document.getElementById("mealInfo");
  const mealImageDiv = document.getElementById("mealImage");

  // Display meal information
  mealInfoDiv.innerHTML = `
    <h3>${meal.strMeal}</h3>
    <p>Category: ${meal.strCategory}</p>
    <p>Area: ${meal.strArea}</p>
    <p>Instructions: ${meal.strInstructions}</p>
  `;

  // Display meal image
  mealImageDiv.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">`;
}
