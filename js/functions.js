// variables 

let nameSearch        = document.querySelector('.name-search');
let firstLetterSearch = document.querySelector('.firstletter-search');
let searchInputs      = document.querySelector('.search-inputs');
let loadingScreen     = document.querySelector('.loading-screen');

// api vars



// start Putting Data to Html
function showSearchInput() {
  searchInputs.classList.contains('d-none') ? searchInputs.classList.remove('d-none')  : searchInputs.classList.add('d-none')
}

function hideLoader() {
  $('.loading-screen').fadeOut(600);
}

function showSearch(data) {
  let output = ``;
  // console.log(data);
  for (let i = 0; i < data.meals.length; i++) {
    output += `
      <div class="col-md-4 col-lg-3 my-3">
        <div class="simple-card rounded-3 position-relative">
          <img class="img-fluid rounded-3" src="${data.meals[i].strMealThumb}" alt="">
          <div class="meal-layer rounded-3">
            <h3>${data.meals[i].strMeal}</h3>
          </div>
        </div>
      </div>
    `;    
  }
  hideLoader();
  $('.show-card').html(output);
}

function showCategories(data) {
  let output = ``;
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    output += `
      <div class="col-md-4 col-lg-3 my-3">
        <div class="simple-card rounded-3 position-relative">
          <img class="img-fluid rounded-3" src="${data[i].strCategoryThumb}" alt="">
          <div class="meal-layer rounded-3">
            <h3>${data[i].strCategory}</h3>
            <p>${data[i].strCategoryDescription}</p>
          </div>
        </div>
      </div>
    `;    
  }

  $('.show-card').html(output);

}

function showArea(data) {
  let output = ``;
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    output += `
      <div class="col-md-4 col-lg-3 mb-3">
        <div class="simple-card rounded-3 position-relative">
          <h3 class="text-light"><i class="fas fa-house-laptop fa-fw"></i> ${data[i].strArea}</h3>
        </div>
      </div>
    `;    
  }

  $('.show-card').html(output);

}

function showIngredients(data) {
  let output = ``;
  // console.log(data);
  for (let i = 0; i < 20; i++) {
    console.log(data[i]);

    output += `
      <div class="col-md-4 col-lg-3 my-3">
        <div class="simple-card rounded-3 position-relative">
          <h3 class="text-light text-center"><i class="fas fa-house-laptop fa-fw"></i> ${data[i].strIngredient}</h3>
        </div>
      </div>
    `;    
  }

  $('.show-card').html(output);

}

function showContactForm() {

  let output = `
    <form action="" class="form-control py-4 bg-black border-black d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="row w-100">
        <div class="col-md-12 col-lg-6">
          <div class="form-group mb-3">
            <input class="form-control " type="text" name="name" placeholder="Enter Your Name">
          </div>
          <div class="form-group mb-3">
            <input class="form-control" type="text" name="phone" placeholder="Enter Your Phone">
          </div>
          <div class="form-group mb-3">
            <input class="form-control" type="password" name="password" placeholder="Enter Your Password">
          </div> 
        </div>
        <div class="col-md-12 col-lg-6 mb-3">
          <div class="form-group mb-3">
            <input class="form-control" type="email" name="email" placeholder="Enter Your Email">
          </div>
          <div class="form-group mb-3">
            <input class="form-control" type="text" name="age" placeholder="Enter Your Age">
          </div>
          <div class="form-group mb-3">
            <input class="form-control" type="password" name="repasword" placeholder="Confirm Password">
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-center align-items-center">
          <button class="btn btn-primary" type="submit">Send</button>
        </div>
      </div>
    </form>
  `;

  $('.show-card').html(output);

}

// End Putting Data to Html

// start Api Fetching

async function getMealsByName(name) {
  try {
    let apiSearchByName = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + name;
    const request = await fetch(apiSearchByName);
    if (!request.ok) { throw new Error(`HTTP error! Status: ${request.status}`); }
    const response = await request.json();
    showSearch(response);
    console.log(response);
    // showCategories(response.categories);
  } catch (error) {
    console.error('Error:', error);
  }
}

// first thing should happen when the page loads
getMealsByName('a');

async function getCategory() {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    if (!request.ok) { throw new Error(`HTTP error! Status: ${request.status}`); }
    const response = await request.json();

    showCategories(response.categories);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getArea() {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    if (!request.ok) { throw new Error(`HTTP error! Status: ${request.status}`); }
    const response = await request.json();

    showArea(response.meals);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getIngredients() {
  try {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    if (!request.ok) { throw new Error(`HTTP error! Status: ${request.status}`); }
    const response = await request.json();

    showIngredients(response.meals);
  } catch (error) {
    console.error('Error:', error);
  }
}

// EndApi Fetching 


