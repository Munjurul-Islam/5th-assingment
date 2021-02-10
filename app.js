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
    const ingredientDetails = document.getElementById('ingredient-details');
    // for refresh details 
    ingredientDetails.innerHTML='';

    const containerDiv = document.getElementById('foods');
    // for refresh details
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
            <p>${meal.strIngredient1}</p>
            <p>${meal.strIngredient2}</p>
            <p>${meal.strIngredient3}</p>
            <p>${meal.strIngredient4}</p>
            <p>${meal.strIngredient5}</p>
            <p>${meal.strIngredient6}</p>
            <p>${meal.strIngredient7}</p>
            <p>${meal.strIngredient8}</p>
            <p>${meal.strIngredient9}</p>
            <p>${meal.strIngredient10}</p>
    `;
}