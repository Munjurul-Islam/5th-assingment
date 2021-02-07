const searchBtn =  document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    
    let  inputValue = document.getElementById('input-value').value.trim();
    
    
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.meals[0])
            displayMeals(data.meals)
            
        })
        .catch(error => console.log(error)) 
})


const displayMeals = meals => {
    const containerDiv = document.getElementById('foods');
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.className = 'meal';
        // console.log(meal)
        const mealInfo =`
                <img src='${meal.strMealThumb}' >
                <h3>${meal.strMeal}</h3>
                
        `;
        div.innerHTML = mealInfo;
        containerDiv.appendChild(div)
    });  
}

// const details = ingredient => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient} `
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealIngredient(data))
    
// }

const ingredientDetails = document.getElementById('foods');
ingredientDetails.addEventListener('click', () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientDetails} `
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealIngredient(data))
})

const displayMealIngredient = meal => {
    console.log(meal)
    
    const ingredientDetails = document.getElementById('ingredient-details');
    ingredientDetails.innerHTML = `
        <img src='${meal.strMealThumb}'>
        <h1>${meal.strMeal}</h1>
        <h3>Ingredients</h3>
        
        <p>${meal.strIngredient2}</p>
        <p>${meal.strIngredient3}</p>
        <p>${meal.strIngredient4}</p>
        <p>${meal.strIngredient5}</p>
        
    `;      
}

    
    






