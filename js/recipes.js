//DISHES
let main = ["Spicy Salmon Onigiri", "Shakshuka", "Pondu, Rice, and Pili Pili", "TLT", "Vegan American Breakfast", "Gnocchi in Red Sauce", "Japanese Style Macro Bowl", "Teriyaki Bao", "Mediterranean Style Salad", "Kale Salad", "Ginger Tofu", "Curry Salad", "Tacos", "Tex Mex Bowl", "Fried Rice", "Veggie Stir Fry", "Vegan Ramen", "2 Sushi Rolls", "Avocado Toast and Eqqs", "Orange Tofu, Cucumber and Edamame", "Guac, Eqqs, Salsa and Chips", "Black Bean Burger", "Plant Meat Burger"];

let side = ["French Fries", "Burmese Mango Salad", "Cheesy Popcorn", "Plantains with Ginger Dip", "Guac and Chips", "Steamed Broccoli", "Seaweed Salad", "Baked Chickpeas", "Kabocha Squash", "Grilled Veggies", "Pickled Beets"];

let sweets = ["Lemon Poppy Seed Balls", "Black Bean Brownies", "Boba Ice Cream Bar", "Honey Dew", "Asian Pears", "Apple and Peanut Butter", "Oatmeal and Bananas", "Plumcots", "Red Bean Mochi", "Batida de Coco", "Cinnamon Sweet Potatoes", "Granola and Greek Yogurt", "Bananas", "Sunflower Butter Ice Cream", "Kiwis"];



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

//------------/

//GROCERIES

document.querySelector(".entree").addEventListener("click", addToGroceryList);

document.querySelector(".side").addEventListener("click", addToGroceryList);

document.querySelector(".sweets").addEventListener("click", addToGroceryList);


function addToGroceryList(){
    alert("added to the list");
    
    // create line items with each item from the recipe list
}


//RECIPES


    



//ingredients per dish array


//recipes per dish array



function showRecipe(){
    
//    identify which dishes are being shown
    
    
//    create a card for each recipe
    
    
    console.log("show recipes")
}