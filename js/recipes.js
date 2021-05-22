//DISHES
var main = ["Spicy Salmon Onigiri", "Shakshuka", "Pondu and Rice", "TLT", "Vegan American Breakfast", "Gnocchi in red sauce", "Japanese Style Bento", "Teriyaki Bao", "Mediterranean Style Salad", "Kale Salad", "Curry Salad", "Tacos de Alambre", "Tex Mex Salad Bowl", "Fried Rice", "Vegan Ramen", "Avocado Toast and Eqqs", "Crispy Tofu, Cucumber and Edamame", "Guac, Eqqs, Salsa and Chips", "Black Bean Burger", "Plant Meat Burger", "Pesto Rotini", "Sweet Potato Hash", "Palak Paneer", "Noodle Stir Fry", "Sushi Bake", "Nachos", "Burmese Tea Leaf Salad", "Gyros", "Congolese Shrimp", "Oyster Mushroom Nuggets", "Oyster Mushroom Dragon Roll", "Crispy Rice Spicy Chickpea Crab", "With Ponzu Caviar"];

var sauce = ["Congolese Tomato Sauce", "Pili Pili", "Hummus", "Tahini Herb Sauce", "Congolese Ginger Sauce", "Sesame Orange Sauce", "Chipotle Salsa", "Avocado Poppy Seed Dressing",  "Japanese Curry", "White Bean Dip", "Cashew Nacho Cheez", "Walnut Pesto", "Spicy Mayo", "Miso Tahini Butter", "Guacamole"];

var side = ["French Fries", "Burmese Mango Salad", "Plantains", "Tortilla Chips", "Steamed Broccoli", "Seaweed Salad", "Baked Chickpeas", "Kabocha Squash", "Grilled Veggies", "Pickled Beets", "Tater Tots", "Roasted Veggies", "Congolese Spinach", "Basmati Rice", "Pinapple Fried Rice", "Cheezy Kale Chips", "West Indian Curry"];

var sweets = ["Lemon Poppy Seed Balls", "Brownies", "Boba Ice Cream Bar", "Apple and Peanut Butter", "Apple Pie Oatmeal", "Red Bean Mochi", "Batida de Coco", "Cinnamon Sweet Potatoes", "Granola, Strawberries and Greek Yogurt", "Bananas", "Sunflower Butter Ice Cream", "Honey Dew, Kiwis, Asian Pears, Plumcots", "Cashew Caramel Ice Cream", "Galettes", "Peach Cobbler", "Peanut Butter Protein Waffles", "Green Tea Ice Cream", "Avocado Smoothie Bowl"];

//RECIPES

var recipeDict = {
    "Spicy Salmon Onigiri": "Cook 2 cups of sushi rice in a rice cooker. Add avocado oil to the pan. Cook Salmon on medium fire. Add vegeta, black pepper, and green onion. Add a splash of soy sauce. Cook for approx. 15 minutes or to desired cookedness. Add the cooked salmon to a container. Squeeze in mayo and sriracha to desired spicyness and salmon wetness. Put salmon salad in the fridge to cool for 30 minutes. To serve, layer warm sushi rice, cool spicy salmon, and sushi rice in the onigiri shaper. Serving size is 2 onigiri.",
    "Shakshuka": "Heat oven to 375 degrees. Cook onion, oil, and bell pepper over medium-low fire for 20 minutes. Add garlic and cook for 2 minutes. Add in spices and cook 1 minute. Pour in tomatoes and cook for 10 minutes or until thickened. Transfer to baking pan, crack eggs and bake for 7-10 minutes. Add basil and cilantro and serve over bread.", 
    "Pondu and Rice": "Chop all veggies. Boil 2 packs of pondu in water for 10 minutes then strain.",
    "TLT": "Pan fry the chopped tempeh in soy sauce and black pepper. Toast the bread adn layer into a beautiful sandwich.", 
    "Vegan American Breakfast": "Cook the eqqs, vegan meat and potatoes.",
    "Gnocchi in Red Sauce": "Pan fry the chopped and prepared veggies. Add in red sauce and pesto. Cook gnocchi until chewy, not squishy.", 
    "Japanese Style Bento": "garlicky cucmbers, ginger grilled tofu, curried butternut squash, sauteed kale, pickled daikon, oyster mushroom avocado mango maki roll", 
    "Teriyaki Bao": "Chop veggies. Prepare the yeast. Stir fry veggies while the yeast rises. Wrap veggies in dough balls and steam on medium heat for 8 minutes.", 
    "Mediterranean Style Salad": "",
    "Cashew Nacho Cheez": "",
    "Crispy Rice Spicy Chickpea Crab": "1.Rinse the rice in a strainer until the water runs clear. Combine with water in a medium saucepan. Bring to a boil, then reduce the heat to low, cover and cook for 20 minutes. Rice should be tender and water should be absorbed. Let sit for 10 minutes then dump into a large bowl and mix so the heat releases.  2.In a separate small bowl, combine the rice vinegar, sugar and salt, mix then stir into the cooked rice. Let it cool COMPLETELY! The rice nuggets will fall apart if its warm. (you can put into fridge for a little too) 3.* Prepare the “chickpea imitation crab”* In a bowl combine drained chickpeas and all ingredients. Mash with a fork until all is well combined  and garbanzo beans are all broken up. Taste and adjust seasonings! 4.*Prepare the spicy mayo*: Combine all ingredients in a bowl. Mix well to combine. Taste and adjust seasonings to your liking!  5.*Making the crispy rice nuggets* make sure the rice is cooled COMPLETELY, then tightly form into squares, rounds or rectangles. In a bowl add in 1/3 cup of soy sauce. 6.In a large skillet over medium heat add 1-2 tbsp avocado oil or sesame oil. Cook them for 2 minutes on each side just until slightly golden then remove from the skillet and quickly dip the rice nuggets into the soy sauce. 7.Return the rice nuggets to the pan for an additional 2-3 minutes on each side * add in an extra 1 tbsp oil to the pan if needed. 8.Remove from the skillet and top with the spicy chickpea “crab”, then garnish with sliced avocado, a dollop of spicy mayo, fresh cilantro, and chili flakes",
    "Oyster Mushroom Nuggets": "",
    "Kale Salad": "Season tempeh with soy sauce, black pepper, and salt and bake at 400 degrees. Prepare and chop veggies. Allow tempeh to cool and combine. Serve salad cold.", 
    "Curry Salad": "Prepare and chop veggies. Cook chickpeas in west indian curry. Fry or scramble just egg. Let hot items cool and combine to serve salad room temp.", 
    "Tacos de Alambre": "Stir fry the bacon and add the veggies. Served on a corn tortilla.", 
    "Tex Mex Bowl": "", 
    "Fried Rice": "This is down best with older rice. Add a sesame oil to pan on medium fire. Stir fry veggies, add rice and soy sauce.", 
    "Veggie Stir Fry": "Prepare and chop veggies.", 
    "Vegan Ramen": "Boil 2 cups of water.", 
    "2 Sushi Rolls": "Chop and prepare avocado, cucumber, carrots and . Handroll ingredients into 2 sushi rolls.", 
    "Avocado Toast and Eqqs": "", 
    "Crispy Tofu, Cucumber and Edamame": "Make or buy orange tofu from Trader Joe's. ", 
    "Guac, Eqqs, Salsa and Chips": "", 
    "Black Bean Burger": "Rinse black beans", 
    "Plant Meat Burger": "",
    "French Fries": "Cut a potato and place it in the fridge in a bowl of water and salt for at least an hour. Air fry those fries or bake them.", 
    "Burmese Mango Salad": "Prepare and chop veggie", 
    "Cheesy Popcorn": "smart corn cheesy popcorn", 
    "Plantains with Ginger Dip": "Chop blackend plantains and season. Fry in oil on medium high fire until browned on the outside.", 
    "Guac and Chips": "Cop and mix the ingredients to make a slightly chunky guac.", 
    "Steamed Broccoli": "Prepare and chop broccoli. Pan steam broccoli on medium high heat for 5 minutes.", 
    "Seaweed Salad": "", 
    "Baked Chickpeas": "After rinsing chickpeas, pour into a bowl with oil and mix. Spread on baking sheet and season. Baked at 410°F for 20 minutes.", 
    "Kabocha Squash": "", 
    "Grilled Veggies": "Prepare and chop veggies.", 
    "Pickled Beets": "Boil beets for 10 minutes. Strain and sqeeze lemon juice and salt on the beets. Serve cold.", 
    "Tater Tots": "Air fry or bake the tots for 18 to 22 minutes.",
    "Lemon Poppy Seed Balls": "", 
    "Brownies": "Preheat the oven to 350°F. First, line an 8x8 baking pan with parchment paper. Refer to the photos above or the notes below for the best way to do this. Then rub some softened butter on top of the parchment paper. In a large bowl, whisk together the hot melted butter and sugar. Then, whisk in the milk and vanilla. In a separate bowl, combine the dry ingredients: flour, cocoa powder, baking powder, and salt. Mix the dry ingredients into the bowl with the butter and sugar mixture until well combined. Fold in the chocolate chips. Spread the batter evenly into the baking pan. Bake for 25-30 minutes, or until a fork comes out relatively clean. Let cool for about 30 minutes in the pan. Then grab the parchment paper handles and pull the brownies out. Set on a wire rack to finish cooling completely before cutting. For clean-cut brownies, run a clean knife under hot water in between each slice. Store leftover brownies in an airtight container at room temperature for up to 5 days.", 
    "Boba Ice Cream Bar": "you just eat it 😋", 
    "Honey Dew, Kiwis, Asian Pears, Plumcots": "Choose the fruit that sounds the most appealing", 
    "Apple and Peanut Butter": "4 apples", 
    "Oatmeal and Bananas": "Cook oatmeal and top with bananas, honey, peanut butter, and spices.", 
    "Plumcots": "One case from Trader Joe's", 
    "Red Bean Mochi": "", 
    "Batida de Coco": "", 
    "Cinnamon Sweet Potatoes": "Chop sweet potato into coin shaped pieces. Arrange on a baking pan and drizzle oil, honey, smoked paprika, black pepper, and salt. Bake at 450˚F", 
    "Granola and Greek Yogurt": "", 
    "Bananas" : "buy 3 bananas", 
    "Sunflower Butter Ice Cream": "1 pint", 
    "Cashew Caramel Ice Cream": "1 pint",
    "Palak Paneer": "Blanch the spinach for 2 minutes then drain and dry. Prep onion, garlic, ginger, tomatoe, serrano pepper for food processor. Boil Tofu for 2 minutes. Add veggies, spinach and cashews to food processor and blend until smooth. Cook spices, bay leaf, onion, garlic on stove then pour in spinach sauce. Coat tofu cubes in, add lemon or lime juice, and cook for 2 minutes.",
    "Pineapple Fried Rice": "1/4 cup pineapple, 1/2 cup frozen peas, 1/4 cup diced onion, 2 tbsp olive oil, 2 tsp sesame oil, 1/2 tsp ginger powder, 1/4 cup green onion, 3/4 short grain rice, 1.5 vegetable broth, 1 egg",
    "Noodle Stir Fry": "",
    "Cilantro Lime Rice": "1 tsp olive oil, 1/4 cup chopped onion, 1 clove garlic, 3/4 long grain jasmine rice, 1.25 cup water, 1/8 tsp salt, 1 tbsp freshly squeezed lime juice, 1/8 cup chopped cilantro",
    "Green Tea Ice Cream": "",
    "Avocado Banana Smoothie Bowl": "Blend ingredients until creamy. Feel free to add other fruits. Top with chia seeds, nuts and granola."
    
};


//INGREDIENTS
var groceryDict = {
    "Brownies": ["½ cup melted vegan butter - hot","1½ cup granulated cane sugar", "⅓ cup non-dairy milk", "3 teaspoons vanilla extract", "1 cup all-purpose flour", "¾ cup cocoa powder", "¾ teaspoon baking powder", "¼ teaspoon salt", "1 cup vegan chocolate chips"],
    "Teriyaki Bao": ["140 g (5 oz) all-purpose flour", "50 g (1.5 oz) corn starch", "45 g (1.5 oz) powdered sugar", "4 g (1.5 teaspoons) active dry yeast or instant yeast", "80 ml lukewarm water", "1 tablespoon oil", "1 teaspoon baking powder", "1 teaspoon cold water"],
    "Kabocha Squash": ["1 kabocha squash"],
    "Bananas" : ["3 bananas"], 
    "Oyster Mushroom Nuggets": ["oyster mushroom", "corn starch", "black pepper", "mushroom umami"],
    "Spicy Salmon Onigiri": ["Kewpie Mayo", "Premium Dark Soy Sauce", "Sriracha", "Kokuho Rose Sushi Rice", "Black Pepper", "Vegeta", "Nori Komi Furikake Rice Seasoning", "Salmon", "Green Onion", "Avocado oil", "Water", "Seaweed"],
    "Shakshuka": ["1 large onion", "1 red bell pepper", "3 garlic cloves", "cumin", "paprika", "cayenne", "1 28-ounce can of whole plum tomatoes", "salt", "black pepper", "olive oil"], 
    "Pondu and Rice": ["2 cases of frozen cassava leaves", "palm oil"], 
    "TLT": ["tempeh", "1 tomato", "1 avocado", "sandwich bread", "lettuce"], 
    "Vegan American Breakfast": ["Just Egg", "Veggie Breakfast Sausage", "tater tots"],
    "Gnocchi in red sauce": [], 
    "Japanese Style Bento": [], 
    "Avocado Banana Smoothie Bowl": ["salt", "1/2 avocado", "honey", "chia seeds", "nuts", "granola", "1/2 frozen banana"],
    "Crispy Rice Spicy Chickpea Crab": ["2 cups sushi rice", "3 cups water, plus extra for rinsing rice", "2 tbsp rice vinegar, or white wine vinegar", "1 tbsp sugar", "salt", "1 can garbanzo beans", "2 tbsp vegan mayonnaise", "1 tsp paprika", "1 tsp garlic powder", "1/2 tsp salt", "ground pepper", "1 Lemon", "1/2 cup vegan mayonnaise", "1-2 tbsp sriracha", "1 tsp garlic powder", "1 tsp ground paprika", "1 tbsp soy sauce", "Salt and pepper to taste", "Avocado", "Jalapeño or Serrano pepper, thinly sliced", "Chili oil or chili pepper flakes", "Fresh cilantro", "1/3 cup soy sauce", "Avocado oil"],
    "Mediterranean Style Salad": ["chickpeas", "kale", "dried cranberries", "hummus", "1 cucumber"], 
    "Kale Salad": ["curly kale", "1 tomato", "tempeh", "1 avocado", "soy sauce", "poppy seed dressing"], 
    "Curry Salad": ["Just egg", "West Indian Curry", "1 Sweet potato", "1/2 a bag of Spinach", "1 can of Chickpeas", "Black Pepper", "Salt", "Avocado Oil"], 
    "Tacos de Alambre": ["mushrooms", "1 green pepper", "1 orange pepper", "1 onion", "black pepper", "mushroom umami", "cumin", "vegan bacon", "gucamole", "nacho cheese", "corn tortilla"], 
    "Tex Mex Bowl": ["1 can of black beans", "pickled jalapenos"], 
    "Fried Rice": ["jasmine rice", "soy sauce", "Just egg", "black pepper", "1 carrot", "1/2 cup of peas"], 
    "Vegan Ramen": ["seaweed", "miso paste", "sriracha", "1 egg", "ramen noodles"], 
    "Avocado Toast and Eqqs": [], 
    "Crispy Tofu, Cucumber and Edamame": ["cucumber", "edamame", "tofu morsels"],
    "Guac, Eqqs, Salsa and Chips": ["gucamole", "just egg", "tortilla chips", "chipotle salsa"], 
    "Plant Meat Burger": ["Beyond burger", "lettuce", "mushrooms", "1/2 an onion", "black pepper", "soy sauce", "gouda cheez", "pickles"], 
    "Pesto Rotini": [], 
    "Sweet Potato Hash": [], 
    "Palak Paneer": ["spinach", "cashews", "garam masala", ""], 
    "Noodle Stir Fry": [], 
    "Sushi Bake": ["spicy mayo", "furikake rice seasoning"], 
    "Nachos": ["nacho cheez", "1 can of black beans", "gucamole", "pickled jalapenos", "tortilla chips"], 
    "Burmese Tea Leaf Salad": [], 
    "Gyros": ["tomato", "onion"], 
    "Congolese Shrimp": ["frozen uncooked shrimp", "palm oil", "all purpose seasoning"],
    "Kiwis" : ["3 kiwis"], 
    "Pineapple Fried Rice": ["Cook brown rice in the rice cooker with vegetable broth. While the rice is cooking, saute the peas, carrots, and onion on the stove with 1 tbsp olive oil and 1 tsp sesame oil until onions are translucent. Add pinapple, egg, and green onion. When rice is finished cooking, heat the remaining tbsp of olive oil and 1 sp of sesame oil in pan and add rice. Stir for about 1 minute before adding the other ingredients. Cook for 2-3 minutes and serve immediately."],
    "Cilantro Lime Rice": ["Add olive oil and choppen onion to the rice cooker then switch on. When the onion begins to soften, add the garlic, rice, water, and salt. Cook until all the water is absorbed. Fluff rice with a fork. Stir in lime juice and cilantro and serve immediately"],
    "Sunflower Butter Ice Cream" : ["1 pint of Sunflower Butter Ice Cream"], 
    "Batida de Coco": ["Coconut milk", "Ice", "Cachaça (rum)", "Sweetened condensed milk", "Lime juice"],
    "Cashew Caramel Ice Cream": ["1 pint of So Delicious Cashew Caramel Ice Cream"],
    "Baked Chickpeas": ["1 can of chickpeas", "smoked paprika", "salt", "black pepper", "cumin", "italian spices"],
    "Tater Tots": ["1 pack of tater tots"],
    "Gnocchi in Red Sauce": ["gnocchi", "pesto", "veggie sausage", "sun dried tomatoes", "spinach", "mushrooms"],
    "Black Bean Burger": ["1 avocado", "pickled jalapenos", "2 cans of black beans"], 
    "French Fries": ["french fries"], 
    "Boba Ice Cream Bar": ["1 box of Brown Sugar Boba Ice Cream Bars"], 
    "Honey Dew, Kiwis, Asian Pears, Plumcots": ["buy 2 of the most appealing fruit"], 
    "Apple and Peanut Butter": ["peanut butter", "apples"], 
    "Apple Pie Oatmeal": ["cornstarch", "cinnamon", "a pinch of salt", "sugar", "oats", "1 green apple"], 
    "Red Bean Mochi": ["rice", "red beans"], 
    "Cinnamon Sweet Potatoes": ["2 sweet potatoes", "honey", "smoked paprika", "black pepper", "salt", "nutmeg"], 
    "Granola, Strawberries and Greek Yogurt": ["honey greek yogurt", "strawberries", "ginger granola"],
    "Galettes": ["vegan butter", "flour", "sugar"], 
    "Peach Cobbler": ["peaches"], 
    "Peanut Butter Protein Waffles": ["peanut butter", "honey", "chia seeds", "flour", "water"],
    "Chocolate Rice Cooker Cake": [],
    "Burmese Mango Salad": [], 
    "Plantains": [" 2 brown plantains", "black pepper"], 
    "Tortilla Chips": [], 
    "Steamed Broccoli": ["broccoli"], 
    "Seaweed Salad": ["seaweed"], 
    "Grilled Veggies": [], 
    "Pickled Beets": ["1/2 a lemon", "2 beets"], 
    "Roasted Veggies": [], 
    "Congolese Spinach": ["spinach"], 
    "Basmati Rice": ["basmati rice"], 
    "Pinapple Fried Rice": ["pineapple", "jasmine rice", "soy sauce"],
    "Congolese Tomato Sauce": ["1 bunch of green onion", "tomato paste", "toamtoes", "black pepper", "salt", "vegeta all purpose seasoning"], 
    "Pili Pili": ["8 orange habaneros", "1 lemon", "vegeta all purpose seasoning", "black pepper"], 
    "Hummus": ["tahini", "chickpeas", "lemon", "garlic"], 
    "Tahini Herb Sauce": [], 
    "Congolese Ginger Sauce": [], 
    "Sesame Orange Sauce": [], 
    "Chipotle Salsa": [], 
    "Avocado Poppy Seed Dressing": ["1 avocado", "poppy seed dressing"],  
    "West Indian Curry": ["west indian curry paste", "mild jerk paste"], 
    "Japanese Curry": ["japanese curry paste block", "miso paste"], 
    "White Bean Dip": [], 
    "Cashew Nacho Cheez": ["cashews", "dijon mustard", "nutritional yeast", "umami seasoning", "unsweetened oat milk", "corn starch"], 
    "Walnut Pesto": [], 
    "Spicy Mayo": ["vegan mayo", "sriracha"], 
    "Miso Tahini Butter": [], 
    "Guacamole": ["3 avocados", "1 lime", "1 tomoato", "1/4 onion"], 
    "Ginger Jalapeno Sauce": [],
    "Green Tea Ice Cream": ["cashews", "matcha powder", "coconut cream"]
}
    
//GROCERY ARRAY 
var groceryArray = [];


//FUNCTIONS -------------------------------------
//ENTREES
function randomEntree(main){
    
    
    var mainLength = main.length;
    var randomNumber = Math.floor(Math.random() * mainLength);
    var chosenMain = main[randomNumber];
    
    //return chosenMain;
    document.querySelector(".entree").innerHTML = chosenMain;
    
    //show image for recipe card
    var recipeImgMain = "img/" + chosenMain + ".jpg";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", recipeImgMain);
    
    //show recipe title
//    document.querySelectorAll(".card-title")[0].innerHTML = chosenMain;
    
    //show recipe directions
    var recipeDirectionsMain = document.querySelectorAll(".card-text")[0].innerHTML = recipeDict[chosenMain];
    
    //show ingredient list
    var groceryDirectionsMain = document.querySelectorAll(".card-list")[0].innerHTML = groceryDict[chosenMain];
    
    
// MAKING THE INGREDIENT LIST
    //create ul in card
    var ul = document.createElement("ul");
    
    // add list to card body
    var cardbody = document.querySelectorAll(".card-body")[0].appendChild(ul);
    
    // display items in the list
    for (var i = 0; i <= groceryDict[chosenMain].length; i++) {
        
        //create a list item with the class name items
        var li = document.createElement("li");  
        li.className = "items";
        
        // setting inner html to ingredients
        var a = document.createElement("a");
        a.innerHTML = groceryDict[chosenMain][i];

        li.appendChild(a);
        ul.appendChild(li);
    }
    
    // Push items to grocery list on click
    
};

randomEntree(main);


function NewEntree()
{
    var anotherEntree = main[Math.floor(Math.random() * main.length)];
    
   //show new entree when button is pressed
    document.getElementById("message1").innerHTML=anotherEntree;
    
    //show image for recipe card
    var recipeImgMain = "img/" + anotherEntree + ".jpg";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", recipeImgMain);
    
    //show recipe title
//    document.querySelectorAll(".card-title")[0].innerHTML = anotherEntree;
    
    //show recipe directions
    var recipeDirectionsMain = document.querySelectorAll(".card-text")[0].innerHTML = recipeDict[anotherEntree];
    
    //show ingredients
    var groceryDirectionsMain = document.querySelectorAll(".card-list")[0].innerHTML = groceryDict[anotherEntree];
    

    
    }
    

//------------/

//SAUCE
function randomSauce(sauce){
    
    //show random dish
    var sauceLength = side.length;
    var randomNumberFour = Math.floor(Math.random() * sauceLength);
    var chosenSauce = sauce[randomNumberFour];
    
    document.querySelector(".sauce").innerHTML = chosenSauce;
    
    //show image for recipe card
    var recipeImgSauce = "img/" + chosenSauce + ".jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", recipeImgSauce);
        
    //show recipe title
//    document.querySelectorAll(".card-title")[1].innerHTML = chosenSauce;
    
    //show recipe directions
    var recipeDirectionsSauce = document.querySelectorAll(".card-text")[1].innerHTML = recipeDict[chosenSauce];
    
    //show ingredients
    var groceryDirectionsSauce = document.querySelectorAll(".card-list")[1].innerHTML = groceryDict[chosenSauce];
    
    // MAKING THE INGREDIENT LIST
    //create ul in card
    var ul = document.createElement("ul");
    
    // add list to card body
    var cardbody = document.querySelectorAll(".card-body")[1].appendChild(ul);
    
    // display items in the list
    for (var i = 0; i <= groceryDict[chosenSauce].length; i++) {
        
        //create a list item with the class name items
        var li = document.createElement("li");  
        li.className = "items";
        
        // setting inner html to ingredients
        var a = document.createElement("a");
        a.innerHTML = groceryDict[chosenSauce][i];

        li.appendChild(a);
        ul.appendChild(li);
    }
    
};

randomSauce(sauce);

function NewSauce()
{
    var anotherSauce = sauce[Math.floor(Math.random() * sauce.length)];
    
   //show new side when button is pressed
    document.getElementById("message2").innerHTML=anotherSauce;
    
     //new recipe photo based on choice
    var recipeImgSauce = "img/" + anotherSauce + ".jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", recipeImgSauce);
    
    //show recipe directions
    var recipeDirectionsSauce = document.querySelectorAll(".card-text")[1].innerHTML = recipeDict[anotherSauce];
    
    //show ingredients
    var groceryDirectionsSauce = document.querySelectorAll(".card-list")[1].innerHTML = groceryDict[anotherSauce];
    }

    

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
    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", recipeImgSide);
        
    //show recipe directions
    var recipeDirectionsSide = document.querySelector(".recipe-directions-side");
        
    
    //show recipe directions
    var recipeDirectionsMain = document.querySelectorAll(".card-text")[2].innerHTML = recipeDict[chosenSide];
    
    //show ingredients
    var groceryDirectionsMain = document.querySelectorAll(".card-list")[2].innerHTML = groceryDict[chosenSide];
    
    // MAKING THE INGREDIENT LIST
    //create ul in card
    var ul = document.createElement("ul");
    
    // add list to card body
    var cardbody = document.querySelectorAll(".card-body")[2].appendChild(ul);
    
    // display items in the list
    for (var i = 0; i <= groceryDict[chosenSide].length; i++) {
        
        //create a list item with the class name items
        var li = document.createElement("li");  
        li.className = "items";
        
        // setting inner html to ingredients
        var a = document.createElement("a");
        a.innerHTML = groceryDict[chosenSide][i];

        li.appendChild(a);
        ul.appendChild(li);
    }
    
    //show ingredients in grocery list on click
        //maybe I need to push items into an array that places each item as a li
    
};

randomSide(side);

function NewSide()
{
    var anotherSide = side[Math.floor(Math.random() * side.length)];
    
   //show new side when button is pressed
    document.getElementById("message3").innerHTML=anotherSide;
    
    //new recipe photo based on choice
    var recipeImgSide = "img/" + anotherSide + ".jpg";
    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", recipeImgSide);
    
    //show recipe directions
    var recipeDirectionsMain = document.querySelectorAll(".card-text")[2].innerHTML = recipeDict[anotherSide];
    
    //show ingredients
    var groceryDirectionsMain = document.querySelectorAll(".card-list")[2].innerHTML = groceryDict[anotherSide];
}

//------------/


//DESSERT
function randomDessert(sweets){
    
    var sweetsLength = sweets.length;
    var randomNumberThree = Math.floor(Math.random() * sweetsLength);
    var chosenDessert = sweets[randomNumberThree];
     document.querySelector(".sweets").innerHTML = chosenDessert;
    
    //show image for recipe card
    var recipeImgSweet = "img/" + chosenDessert + ".jpg"; 
    var image4 = document.querySelectorAll("img")[3];
    image4.setAttribute("src", recipeImgSweet);
    
    //show recipe directions
    var recipeDirectionsMain = document.querySelectorAll(".card-text")[3].innerHTML = recipeDict[chosenDessert];
    
    //show ingredients
    var groceryDirectionsMain = document.querySelectorAll(".card-list")[3].innerHTML = groceryDict[chosenDessert];
    

    
};

randomDessert(sweets);

//refresh sweet
document.querySelector(".redoEntree").addEventListener("click", randomDessert(sweets));

function NewSweet()
{
    var anotherSweet = sweets[Math.floor(Math.random() * sweets.length)];
    
   //show new side when button is pressed
    document.getElementById("message4").innerHTML = anotherSweet;
    
    //show image for recipe card
    var recipeImgSweet = "img/" + anotherSweet + ".jpg"; 
    var image4 = document.querySelectorAll("img")[3];
    image4.setAttribute("src", recipeImgSweet);
    
     //show recipe directions
    var recipeDirectionsMain = document.querySelectorAll(".card-text")[3].innerHTML = recipeDict[anotherSweet];
    
    //show ingredients
    var groceryDirectionsMain = document.querySelectorAll(".card-list")[3].innerHTML = groceryDict[anotherSweet];
}

//-------------------------------------------------



//GROCERIES

document.querySelector(".entree").addEventListener("click", addToGroceryList);

document.querySelector(".sauce").addEventListener("click", addToGroceryList);

document.querySelector(".side").addEventListener("click", addToGroceryList);

document.querySelector(".sweets").addEventListener("click", addToGroceryList);




//GROCERY LIST
    
    
function addToGroceryList(){
    alert("added to the list");
    
    // add items on screen to the list
    
}

    //push items into list as li


    //allow for item removal


    //allow the items to be sent to notes/email/messages or something to generate the list

