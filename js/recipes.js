//DISHES
let main = ["Spicy Salmon Onigiri", "Shakshuka", "Pondu, Rice, and Pili Pili", "TLT", "Vegan American Breakfast", "Gnocchi in Red Sauce", "Japanese Style Macro Bowl", "Teriyaki Bao", "Mediterranean Style Salad", "Kale Salad", "Ginger Tofu", "Curry Salad", "Tacos", "Tex Mex Bowl", "Fried Rice", "Veggie Stir Fry", "Vegan Ramen", "2 Sushi Rolls", "Avocado Toast and Eqqs", "Orange Tofu, Cucumber and Edamame", "Guac, Eqqs, Salsa and Chips", "Black Bean Burger", "Plant Meat Burger"];

let side = ["French Fries", "Burmese Mango Salad", "Cheesy Popcorn", "Plantains with Ginger Dip", "Guac and Chips", "Steamed Broccoli", "Seaweed Salad", "Baked Chickpeas", "Kabocha Squash", "Grilled Veggies", "Pickled Beets", "Tater Tots"];

let sweets = ["Lemon Poppy Seed Balls", "Black Bean Brownies", "Boba Ice Cream Bar", "Honey Dew", "Asian Pears", "Apple and Peanut Butter", "Oatmeal and Bananas", "Plumcots", "Red Bean Mochi", "Batida de Coco", "Cinnamon Sweet Potatoes", "Granola and Greek Yogurt", "Bananas", "Sunflower Butter Ice Cream", "Kiwis", "Cashew Caramel Ice Cream"];

//RECIPES

var recipeDict = {
    "Spicy Salmon Onigiri": "Cook 2 cups of sushi rice in a rice cooker. Add avocado oil to the pan. Cook Salmon on medium fire. Add vegeta, black pepper, and green onion. Add a splash of soy sauce. Cook for approx. 15 minutes or to desired cookedness. Add the cooked salmon to a container. Squeeze in mayo and sriracha to desired spicyness and salmon wetness. Put salmon salad in the fridge to cool for 30 minutes. To serve, layer warm sushi rice, cool spicy salmon, and sushi rice in the onigiri shaper. Serving size is 2 onigiri.",
    "Shakshuka": "", 
    "Pondu, Rice, and Pili Pili": "",
    "TLT": "", 
    "Vegan American Breakfast": "",
    "Gnocchi in Red Sauce": "", 
    "Japanese Style Macro Bowl": "", 
    "Teriyaki Bao": "", 
    "Mediterranean Style Salad": "", 
    "Kale Salad": "", 
    "Ginger Tofu": "", 
    "Curry Salad": "", 
    "Tacos": "", 
    "Tex Mex Bowl": "", 
    "Fried Rice": "", 
    "Veggie Stir Fry": "", 
    "Vegan Ramen": "", 
    "2 Sushi Rolls": "", 
    "Avocado Toast and Eqqs": "", 
    "Orange Tofu, Cucumber and Edamame": "", 
    "Guac, Eqqs, Salsa and Chips": "", 
    "Black Bean Burger": "", 
    "Plant Meat Burger": "",
    "French Fries": "", 
    "Burmese Mango Salad": "", 
    "Cheesy Popcorn": "", 
    "Plantains with Ginger Dip": "", 
    "Guac and Chips": "", 
    "Steamed Broccoli": "", 
    "Seaweed Salad": "", 
    "Baked Chickpeas": "After rinsing, add ", 
    "Kabocha Squash": "", 
    "Grilled Veggies": "", 
    "Pickled Beets": "", 
    "Tater Tots": "",
    "Lemon Poppy Seed Balls": "", 
    "Black Bean Brownies": "", 
    "Boba Ice Cream Bar": "", 
    "Honey Dew": "", 
    "Asian Pears": "", 
    "Apple and Peanut Butter": "4 apples", 
    "Oatmeal and Bananas": "", 
    "Plumcots": "One case from Trader Joe's", 
    "Red Bean Mochi": "", 
    "Batida de Coco": "", 
    "Cinnamon Sweet Potatoes": "", 
    "Granola and Greek Yogurt": "", 
    "Bananas" : "4 bananas", 
    "Sunflower Butter Ice Cream" : "1 pint", 
    "Kiwis" : "3 kiwis", 
    "Cashew Caramel Ice Cream": "1 pint"
    
};

//INGREDIENTS

//var ingredientDict = {
//    "Spicy Salmon Onigiri": ["Kewpie Mayo", "Premium Dark Soy Sauce", "Sriracha", "Kokuho Rose Sushi Rice", "Black Pepper", "Vegeta", "Nori Komi Furikake Rice Seasoning", "Salmon", "Green Onion", "Avocado oil", "Water", "Seaweed"],
//    "Shakshuka": ["1 large onion", "1 red bell pepper", "3 garlic cloves", "cumin", "paprika", "cayenne", "1 28-ounce can of whole plum tomatoes", "salt" "black pepper", "olive oil"], 
//    "Pondu, Rice, and Pili Pili": ["2 cases of frozen cassava leaves", ""],
//    "TLT": ["tempeh", "1 tomato", "1 avocado", "sandwich bread", "lettuce"], 
//    "Vegan American Breakfast": ["Just Egg", "Veggie Breakfast Sausage", "tater tots"],
//    "Gnocchi in Red Sauce": ["gnocchi", "pesto", "veggie sausage", "sun dried tomatoes", "spinach"], 
//    "Japanese Style Macro Bowl": [""], 
//    "Teriyaki Bao": [""], 
//    "Mediterranean Style Salad": [""], 
//    "Kale Salad": [""], 
//    "Ginger Tofu": ["Firm Tofu", "Corn starch", "Black pepper", "Salt", "Soy Sauce", "Poultry Seasoning", "Garlic"], 
//    "Curry Salad": ["Just egg", "West Indian Curry", "1 Sweet potato", "1/2 a bag of Spinach", "1 can of Chickpeas", "Black Pepper", "Salt", "Avocado Oil"], 
//    "Tacos": [""], 
//    "Tex Mex Bowl": [""], 
//    "Fried Rice": [""], 
//    "Veggie Stir Fry": [""], 
//    "Vegan Ramen": [""], 
//    "2 Sushi Rolls": ["sushi rice"], 
//    "Avocado Toast and Eqqs": ["bread", "1 avocado", "just egg"], 
//    "Orange Tofu, Cucumber and Edamame": ["1 orange", "firm tofu", "black pepper", "soy sauce"], 
//    "Guac, Eqqs, Salsa and Chips": ["Chipotle salsa"], 
//    "Black Bean Burger": ["1 avocado", "pickles jalapenos", ""], 
//    "Plant Meat Burger": ["Beyond burger", "lettuce", "mushrooms", "1/2 an onion", "black pepper", "soy sauce", "gouda cheez", "pickles"],
//    "French Fries": ["french fries"], 
//    "Burmese Mango Salad": [""], 
//    "Cheesy Popcorn": ["cheesey smart popcorn"], 
//    "Plantains with Ginger Dip": ["2 plantains"], 
//    "Guac and Chips": ["avocado", "1 lime", "1/2 a red onion", "1 tomato"], 
//    "Steamed Broccoli": ["1 head of broccoli"], 
//    "Seaweed Salad": [""], 
//    "Baked Chickpeas": ["1 can of chickpeas", "smoked paprika", "salt", "black pepper", "cumin"], 
//    "Kabocha Squash": ["1 kabocha squash"], 
//    "Grilled Veggies": [""], 
//    "Pickled Beets": ["1/2 a lemon", "2 beets"], 
//    "Tater Tots": ["1 pack of tater tots"],
//    "Lemon Poppy Seed Balls": [""], 
//    "Black Bean Brownies": ["1 can of black beans"], 
//    "Boba Ice Cream Bar": ["1 box of Brown Sugar Boba Ice Cream Bars"], 
//    "Honey Dew": ["1 honey dew melon"], 
//    "Asian Pears": ["2 asian pears"], 
//    "Apple and Peanut Butter": ["3 apples", "peanut butter"], 
//    "Oatmeal and Bananas": ["1/2 a banana", "Honey", "Oats", "Plant milk", "Peanut butter"], 
//    "Plumcots": ["1 case of plumcots from Trader Joe's"], 
//    "Red Bean Mochi": [""], 
//    "Batida de Coco": ["Coconut milk", "Ice", "Cachaça (rum)", "Sweetened condensed milk", "Lime juice"], 
//    "Cinnamon Sweet Potatoes": ["2 sweet potatoes", "cinnamon", "nutmeg", "honey", "salt", "black pepper"], 
//    "Granola and Greek Yogurt": [""], 
//    "Bananas" : ["4 bananas"], 
//    "Sunflower Butter Ice Cream" : ["1 pint of Sunflower Butter Ice Cream"], 
//    "Kiwis" : ["3 kiwis"], 
//    "Cashew Caramel Ice Cream": ["1 pint of So Delicious Cashew Caramel Ice Cream"]
//    
//};



//FUNCTIONS -------------------------------------
//ENTREES
function randomEntree(main){
    
    var mainLength = main.length;
    var randomNumber = Math.floor(Math.random() * mainLength);
    var chosenMain = main[randomNumber];
    
//    return chosenMain;
    document.querySelector(".entree").innerHTML = chosenMain;
    
    //show image for recipe card
    var recipeImgMain = "img/" + chosenMain + ".jpg";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", recipeImgMain);
    
    //show recipe directions
    var recipeDirectionsMain = document.querySelector(".recipe-directions-main");
    
    
    //show ingredients in grocery list on click
    
};

randomEntree(main);

//refresh entree
document.querySelector(".redoEntree").addEventListener("click", randomEntree(main));

//------------/

//SIDES
function randomSide(side){
    
    //show random dish
    var sideLength = side.length;
    var randomNumberTwo = Math.floor(Math.random() * sideLength);
    var chosenSide = side[randomNumberTwo];
    
    document.querySelector(".side").innerHTML = chosenSide;
    
    //show image for recipe card
    var recipeImgSide = "img/" + chosenSide + ".jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", recipeImgSide);
        
    //show recipe directions
    var recipeDirectionsSide = document.querySelector(".recipe-directions-side");
    
    
    
    //show ingredients in grocery list on click
        //maybe I need to push items into an array that places each item as a li
    
};

randomSide(side);

//refresh side
document.querySelector(".redoEntree").addEventListener("click", randomSide(side));

//------------/


//DESSERT
function randomDessert(sweets){
    
    var sweetsLength = sweets.length;
    var randomNumberThree = Math.floor(Math.random() * sweetsLength);
    var chosenDessert = sweets[randomNumberThree];
    
    document.querySelector(".sweets").innerHTML = chosenDessert;
    
    //show image for recipe card
    var recipeImgSweet = "img/" + chosenDessert + ".jpg"; 
    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", recipeImgSweet);
    
    // show ingredients in the grocery list
    var recipeDirectionsSweet = document.querySelector(".recipe-directions-sweet");
    
    //show recipe directions in card
    
};

randomDessert(sweets);

//refresh sweet
document.querySelector(".redoEntree").addEventListener("click", randomDessert(sweets));

//-------------------------------------------------



//GROCERIES

document.querySelector(".entree").addEventListener("click", addToGroceryList);

document.querySelector(".side").addEventListener("click", addToGroceryList);

document.querySelector(".sweets").addEventListener("click", addToGroceryList);


function addToGroceryList(){
    alert("added to the list");
    
    // create line items with each item from the recipe list
}


//GROCERY LIST
    //push items into list

    //allow for item removal

    //allow the items to be sent to notes/email/messages or something to generate the list

    



function showIngredients(){
    
//    identify which dishes are being shown
    
    
//    create a card for each recipe
    
    
    console.log("show list items of ingredients")
}