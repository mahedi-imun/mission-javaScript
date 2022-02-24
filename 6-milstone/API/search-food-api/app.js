const searchFood = () => {
    const input = document.getElementById('search-input');
    const searchInput = input.value;
    input.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult=(meals)=>{
    const resultDiv = document.getElementById('result-div')
    meals.forEach(meal => {
        console.log(meal)
        const col = document.createElement('col');
        col.innerHTML = `
        <div class="card h-100 ">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="" />
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text"> country: ${meal.strArea}</p>
            <p class="card-text"> category: ${meal.strCategory}</p>
            </div>
         </div>
        
        `
        resultDiv.appendChild(col)

    })
}