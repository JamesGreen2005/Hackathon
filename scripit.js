function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  
  const recipes = [
    "taco"
   
  ];
  
  
  function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  }
  
  
  document.getElementById("myBtn").addEventListener("click", topFunction);
  
  
  document.getElementById("randomRecipeButton").addEventListener("click", function() {
    const recipeDisplay = document.getElementById("recipeDisplay");
    recipeDisplay.textContent = getRandomRecipe();
  });
  