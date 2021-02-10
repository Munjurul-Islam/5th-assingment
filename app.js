const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {

    let inputValue = document.getElementById('input-value').value;
    if(inputValue < ' ' ){
        alert('plz,,write any text for searching')
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.meals[0])
            displayMeals(data.meals)
        })
        .catch(error => console.log(error))
    }
})


const displayMeals = meals => {
    const containerDiv = document.getElementById('foods');
    containerDiv.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.className = 'meal';
        const mealInfo = `
                <img onclick="display('${meal.strMeal}')" src='${meal.strMealThumb}' >
                <h3>${meal.strMeal}</h3>
                
        `;
        div.innerHTML = mealInfo;
        containerDiv.appendChild(div)
    });
}

const display = ingredientDetails => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientDetails} `
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealIngredient(data.meals[0]))
        .catch(error => console.log(error))
}

const displayMealIngredient = meal => {
    // console.log(meal)

    const ingredientDetails = document.getElementById('ingredient-details');
    
    ingredientDetails.innerHTML = `
        <img src='${meal.strMealThumb}'>
        <h1>${meal.strMeal}</h1>
        <h3>Ingredients:</h3>
        <ul>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            <li>${meal.strIngredient6}</li>
            <li>${meal.strIngredient7}</li>
            <li>${meal.strIngredient8}</li>
            <li>${meal.strIngredient9}</li>
            <li>${meal.strIngredient10}</li>
        </ul>
    `;
}