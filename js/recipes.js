//DISHES

var breakfast = ["American Breakfast", "Avocado Toast, Eggs and Black beans", "Avocado Smoothie Bowl", "Cottage Cheese, Fruit, Yellow Pepper", "Sweet Potato Hash", "Parfait", "Tex Mex Salad, Apple and Peanut Butter", "Shakshuka and Toast", "Lox Bagel and Cucumber", "Quiche & Pickled Beets", "Apple Pie Oatmeal", "Parfait French Toast", "Peanut Butter Waffles and Omelette", "Soyrizo Bowl", "Shrimp, Mashed Potatoes, Asparagus and Egg Whites"];

var lunch = ["Oyster Mushroom Maki Roll",  "Black Bean Burger and Fries", "Tacos de Alambre", "Spicy Salmon Onigiri and Cucumber", "Nachos", "Pesto Pizza", "Garlic Tofu and Broccoli, Kabocha Squash", "Teriyaki Bao", "Soba Cold Noodles", "Mediterranean Style Salad", "West Indian Curry and Plantains", "TLT", "Crispy Rice Spicy Chickpea Crab and Cucumber", "Gnocchi in red sauce", "Kale Salad", "Fried Rice", "Miso Tahini Butter Sweet Potato, Asparagus and ", "Tofu"];

var dinner = ["Jerk Salmon, Mango Salsa, and Black Rice", "Dijon Crusted Salmon and Garlic Broccoli", "Japanese Curry Udon", "Burmese Tea Leaf Salad and Thai Green Curry Tofu", "Crispy Tofu, Cucumber and Edamame", "Miso Ramen", "Pondu and Rice and Pili Pili", "Palak Paneer, Rice, and Chana Masala", "Congolese Ginger Tilapia and Spinach", "Curry Salad", "West Indian Curry & Naan", "Tahini Herb Sauce", "Congolese Ginger Tilapia, Fufu, and Spinach", "Thanksgiving meal"];

var sweets = ["Brownies", "Boba Ice Cream Bar", "Red Bean Buns", "Mochi", "Earl Grey Macarons", "Batida de Coco", "Galettes", "Peach Cobbler", "Green Tea Ice Cream", "Chocolate Lava Cake"];


//RECIPES

var recipeDict = {
    "Apple Pie Oatmeal" : "Butter pan and add in cornstarch, cinnamon and sugar. Add in apples. Cook oatmeal and top with apple pied apples.",
    "Avocado Smoothie Bowl" : "Blend avocado, frozen banana, yogurt, and honey. Top with chia seeds.",
    "Cottage Cheese, Fruit, Yellow Pepper" : "Serve medjool dates, strawberries, and blackberries on top of cottage cheese. Yellow pepper on the side.",
    "Spicy Salmon Onigiri and Cucumber": "Cook 2 cups of sushi rice in a rice cooker. Add avocado oil to the pan. Cook Salmon on medium fire. Add vegeta, black pepper, and green onion. Add a splash of soy sauce. Cook for approx. 15 minutes or to desired cookedness. Add the cooked salmon to a container. Squeeze in mayo and sriracha to desired spicyness and salmon wetness. Put salmon salad in the fridge to cool for 30 minutes. To serve, layer warm sushi rice, cool spicy salmon, and sushi rice in the onigiri shaper. Serving size is 2 onigiri. Serve with juliene cut cucumber",
    "Soyrizo Bowl": "Cook hash browns until crispy. Season and add in soyrizo. Cook black beans. Scramble 2 eggs. Served cooked ingredients with avocado, yellow peppers, hot sauce and greek yogurt.",
    "Peanut Butter Waffles and Omelette": "Mix flour, baking powder, salt. Mix sugar, butter, peanut butter, and chia seeds. Sautee mushrooms and spinach then cook in omelette.",
    "Shakshuka and Toast": "Heat oven to 375 degrees. Cook onion, oil, and bell pepper over medium-low fire for 20 minutes. Add garlic and cook for 2 minutes. Add in spices and cook 1 minute. Pour in tomatoes and cook for 10 minutes or until thickened. Crack eggs and bake for 7-10 minutes. Top with basil and cilantro and serve over toasted bread.", 
    "Pondu and Rice": "Chop all veggies. Boil 2 packs of pondu in water for 10 minutes then strain.",
    "TLT": "Pan fry the chopped tempeh in soy sauce and black pepper. Toast the bread adn layer into a beautiful sandwich.", 
    "American Breakfast": "Cook the eggs, vegan meat, asparagus, and potatoes.",
    "Dijon Crusted Salmon": "Mix honey, dijon mustard, panko, chives, in a bowl. Speard mixture on salmon and shake panko over it. Bake at 225 degrees for 15 minutes then at 415 degrees for 10 minutes.",
    "Lox Bagel and Cucumber": "Toast bagel. Over medium egg optional. Spread chive and onion cream cheese or vegan cheese on bagel and layer smoked salmon on top. Eat with pickle and cucumbers.",
    "Gnocchi in Red Sauce": "Pan fry the chopped and prepared veggies. Add in red sauce and pesto. Cook gnocchi until chewy, not squishy.", 
    "Japanese Style Bento": "garlicky cucmbers, ginger grilled tofu, curried butternut squash or kabocha squash, pickled daikon, oyster mushroom avocado mango maki roll, seaweed salad", 
    "Teriyaki Bao": "Chop veggies. Prepare the yeast. Stir fry veggies while the yeast rises. Wrap veggies in dough balls and steam on medium heat for 8 minutes.",
    "Nachos": "Cook black beans. Make guacamole. Make cheese sauce. top tortilla chips with guac, salsa, cheese, pickled jalapenos, and beans.",
    "Sweet Potato Hash": "Dice sweet potatoes and cook in 1 spoon of avocado oil over medium fire. Season with black pepper, smoked paprika, thyme, and salt. Add in mushrooms and chopped asparagus once fragrant. Fry 2 eggs over medium and top with eggs, avocado, chopped mango, and greek yogurt.",
    "Mediterranean Style Salad": "Sautee walnuts and kale in sugar, butter water mixture to candy them. Bake cinnamon sweet potatoes. Bake chickpeas. chop cucumber. Pan fry couscous in oil. Boil couscous in water with dried cranberries, and salt. Top with hummus. Falafel optional.",
    "Soba Cold Noodles": "Boil soba noodles for 5 minutes and strain. Mix soy sauce, green onion, mirin, sugar, filtered water and miso paste. Serve with chopped cucumber.",
    "Japanese Curry Udon": "Blanch Udon noodles for 2 minutes. Make udon broth by mixing fish sauce, water, green onion, and japanese curry.",
    "Quiche & Pickled Beets": "Pan fry spinach, sun dried tomatoes, mushrooms, and chopped shallot on medium high fire. Scoop sauteed veggies into pie crust. Add beaten eggs and shredded cheese mixture. Bake quiche for 20 minutes at 350ºF. Boil beets for 10 minutes. Squeeze lemon on diced beets.",
    "Shrimp, Mashed Potatoes, Asparagus and Egg Whites": "Cook shrimp in pesto and seasoning for 8 minutes. Boil diced potato until soft. Mix boiled potato with yogurt, thyme, salt, and black pepper. Cook egg whites into an omlette. Sautee asparagus. Serve shrimp over asparagus over mashed potatoes over egg white omlette. Top with hot sauce and fresh basil.",
    "Crispy Rice Spicy Chickpea Crab": "1.Rinse the rice in a strainer until the water runs clear. Combine with water in a medium saucepan. Bring to a boil, then reduce the heat to low, cover and cook for 20 minutes. Rice should be tender and water should be absorbed. Let sit for 10 minutes then dump into a large bowl and mix so the heat releases.  2.In a separate small bowl, combine the rice vinegar, sugar and salt, mix then stir into the cooked rice. Let it cool COMPLETELY! The rice nuggets will fall apart if its warm. (you can put into fridge for a little too) 3.* Prepare the “chickpea imitation crab”* In a bowl combine drained chickpeas and all ingredients. Mash with a fork until all is well combined  and garbanzo beans are all broken up. Taste and adjust seasonings! 4.*Prepare the spicy mayo*: Combine all ingredients in a bowl. Mix well to combine. Taste and adjust seasonings to your liking!  5.*Making the crispy rice nuggets* make sure the rice is cooled COMPLETELY, then tightly form into squares, rounds or rectangles. In a bowl add in 1/3 cup of soy sauce. 6.In a large skillet over medium heat add 1-2 tbsp avocado oil or sesame oil. Cook them for 2 minutes on each side just until slightly golden then remove from the skillet and quickly dip the rice nuggets into the soy sauce. 7.Return the rice nuggets to the pan for an additional 2-3 minutes on each side * add in an extra 1 tbsp oil to the pan if needed. 8.Remove from the skillet and top with the spicy chickpea “crab”, then garnish with sliced avocado, a dollop of spicy mayo, fresh cilantro, and chili flakes",
    "Chocolate Lava Cake": "",
    "Kale Salad": "Season tempeh with soy sauce, black pepper, and salt and bake at 400 degrees. Prepare and chop veggies. Candy walnuts. Allow tempeh to cool and combine. Serve salad with avocado poppy dressing.", 
    "Curry Salad": "Prepare and chop veggies. Cook chickpeas in west indian curry. Fry or scramble just egg. Let hot items cool and combine to serve salad room temp.", 
    "Tacos de Alambre": "Soak cashews overnight in filtered water. Blend cashews, filtered water, dijon mustard, nutritional yeast, black pepper, and salt. Stir fry the bacon and add in the chopped veggies. Top with cashew cheese cheese and serve on a corn tortilla.", 
    "Tex Mex Bowl": "Layer black beans, jalapenos, lettuce, cheese, guac, chipotle tobasco over cilantro lime rice.", 
    "Pesto Pizza": "Make pizza dough or buy it. Chop sun dried tomatoes, fontina, mozzarella and sliced salted tomatoes. Top pizza with pesto, fried oyster mushroom, cheese, tomato, and sun dried tomatoes. Serve pizza with fresh basil.",
    "Fried Rice": "This is down best with older rice. Add a sesame oil to pan on medium fire. Stir fry veggies, add rice and soy sauce. Pineapple is optional.", 
    "Veggie Stir Fry": "Prepare and chop veggies.", 
    "Miso Ramen": "Boil an egg for 7 minutes. Make ramen broth by combining soy sauce, miso paste, chopped green onion, fried chili paste, and 1/2 cup of hot filtered water. Place boiled egg in soy sauce for 3 hours or directly in ramen broth. Boil 2 cups of water. Cook ramen noodles for 4 minutes. Add strained ramen and 1/4 cup of ramen water to broth and serve.", 
    "Oyster Mushroom Maki Roll": "Cook sushi rice. Once cooked, mix rice with sugar and rice wine vinegar. Put soy sauce, water, and sesame oil in a bowl. Hand shred oyster mushrooms and let soak for 5 minutes in the mixture. Make cornstarch, black pepper, panko mixture. Bread the wet mushrooms with the dry mixture. Put grapseed oil in the pan and fry on medium fire for until golden brown on both sides. Chop and prepare avocado, cucumber, and mango. Handroll ingredients into 2 sushi rolls.", 
    "Avocado Toast, Eggs and Black beans": "Fry eggs over medium or scramble. Toast bread and top with sliced avocado. Serve cooked black beans over toast", 
    "Crispy Tofu, Cucumber and Edamame": "Make orange tofu or buy it from Trader Joe's. Set in bowl with edamame and chopped cucumber adn serve", 
    "Guac, Eqqs, Salsa and Chips": "Scramble eggs and place them in a bowl. Top with chipotle salsa and guacamole. Eat by scooping with tortilla chips.", 
    "Black Bean Burger and Fries": "Mash black beans, chopped jalapenos, chopped green pepper, panko, onion, black pepper, salt, garlic, greek yogurt, and chipotle paste. Shape into patty and pan fry until crispy. Add smoked gouda and cover to melt. Sautee sliced onion and mushrooms in soy sauce, oil, water mixture. Stack with sliced tomato, lettuce, onions, mushrooms, pickled jalapenos, avocado, dijon mustard, and mayo. FRENCH FRIES: Cut a potato and place it in the fridge in a bowl of water and salt for at least an hour. Air fry those fries or bake them. Serve with fries.",
    "Burmese Mango Salad": "Prepare and chop mangoes and veggies", 
    "Plantains": "Chop blackend plantains and season. Fry in oil on medium high fire until browned on the outside.", 
    "Chips & Guac": "Cop and mix the ingredients to make a slightly chunky guac.", 
    "Sauteed Broccoli": "Prepare and chop broccoli. Butter pan and sautee garlic. Pan steam broccoli on medium high heat for 5 minutes.", 
    "Baked Chickpeas": "After rinsing chickpeas, pour into a bowl with oil and mix. Spread on baking sheet and season. Baked at 410°F for 20 minutes.", 
    "Brownies": "Preheat the oven to 350°F. First, line an 8x8 baking pan with parchment paper. Refer to the photos above or the notes below for the best way to do this. Then rub some softened butter on top of the parchment paper. In a large bowl, whisk together the hot melted butter and sugar. Then, whisk in the milk and vanilla. In a separate bowl, combine the dry ingredients: flour, cocoa powder, baking powder, and salt. Mix the dry ingredients into the bowl with the butter and sugar mixture until well combined. Fold in the chocolate chips. Spread the batter evenly into the baking pan. Bake for 25-30 minutes, or until a fork comes out relatively clean. Let cool for about 30 minutes in the pan. Then grab the parchment paper handles and pull the brownies out. Set on a wire rack to finish cooling completely before cutting. For clean-cut brownies, run a clean knife under hot water in between each slice. Store leftover brownies in an airtight container at room temperature for up to 5 days.",  
    "Pesto Rotini": "Make pesto or buy it from Trader Joe's",
    "Fruit": "Choose the fruit that sounds the most appealing", 
    "Tex Mex Salad, Apple and Peanut Butter": "Fry 1 egg over medium and place on top of spinach, black beans, and chopped avocado. Slice 1 apple and plate with 1 hefty spoon of peanut butter.", 
    "Red Bean Buns": "Prepare yeast. Mix dry ingredients. Blend azuki beans with brown sugar.", 
    "Batida de Coco": "Pour rum, sweetened condensed milk, coconut milk, coconut cream, and ice into a blender.", 
    "Cinnamon Sweet Potatoes": "Chop sweet potato into coin shaped pieces. Arrange on a baking pan and drizzle oil, honey, smoked paprika, black pepper, and salt. Bake at 450˚F", 
    "Parfait": "Scoop greek yogurt, granola, chia seeds and chopped strawberries and mangoes into a bowl.", 
    "Palak Paneer, Rice, and Chana Masala": "Blanch the spinach for 2 minutes then drain and dry. Prep onion, garlic, ginger, tomatoe, serrano pepper for food processor. Boil Tofu for 2 minutes. Add veggies, spinach and cashews to food processor and blend until smooth. Cook spices, bay leaf, onion, garlic on stove then pour in spinach sauce. Coat tofu cubes in, add lemon or lime juice, and cook for 2 minutes.",
    "Green Tea Ice Cream": "",
    "Avocado Banana Smoothie Bowl": "Blend ingredients until creamy. Feel free to add other fruits. Top with chia seeds, nuts and granola.",
    "Earl Grey Macarons": "Line a cookie sheet with a silicone mat or you can use parchment paper if you don't have one. Cut open each of the tea sachets and pour the contents into the food processor. Pulse the food processor a few times to break up any of the bigger leaves. Add the powdered sugar and almond flour and pulse until fully combined and rid of lumps. Sift the combined dry ingredients into a large bowl. If you do not have a food processor you can just sift the ingredients together. In a medium bowl, prepare the french meringue. Beat the egg whites on low speed with a hand mixer until they get frothy. Increase the speed and slowly add the sugar. Beat until stiff peaks form. If you want to add any food coloring, do it now, but use it sparingly or you will make the meringue too liquidy. Add the french meringue into the dry ingredients and begin to gently fold. The batter should be fully combined and not streaky. When you are able to make a figure 8 with the batter in one motion, the batter is ready (more information on this process in my French Macaron Recipe). If it is too runny it has been over-mixed. Transfer the batter to a piping bag fitted with a piping tip. Pipe 1-inch disks on to the silicone mat. Tap the cookie sheet on the countertop 3 or 4 times to get rid of any air bubbles. Use a toothpick to pop any remaining air bubbles. Allow the macarons to rest for an hour or until the tops of the macarons have dried. You will be able to gently run your finger over them without anyting getting on your finger. Preheat the oven to 280 degrees (F). Place the macarons on the middle rack of the oven and bake for 5 minutes, rotate the cookie sheet and bake for another 5 minutes, rotate the pan one last time and bake for 5 minutes. 15 minutes in total. Remove from the oven and allow to cool completely on the cookie sheet. If the macarons were baked correctly they should easily peel off of the silicone mat. For Buttercream:In the bowl of a stand mixer or in a medium bowl with a hand mixer, beat the butter until very soft and fluffy. Add the honey and half of the powdered sugar. Beat until fully combined. Add the rest of the powdered sugar and the heavy cream and beat for 5-6 minutes or until the buttercream is light and fluffy. If the buttercream is too thick you can add more heavy cream. Transfer the buttercream to a piping bag and pipe the desired amount of buttercream onto the inside of a macaron shell. Sandwich another macaron shell on top.",
    "Congolese Ginger Tilapia, Fufu, and Spinach": "Blend ginger, garlic, vegeta, black pepper, and lemon into a thick paste. Pan fry or bake with chopped onions.",
    "Parfait French Toast": "Mix 1 egg, cinnamon, cream, and sugar to create french toast batter batter. Coat in dry sugar and cinnamon mixture. Toast in buttered pan. Top with chopped strawberries, 2 scoops of plain greek yogurt, drizzle honey and serve.",
    "West Indian Curry & Naan": ""
    
};


//INGREDIENTS
var groceryDict = {
    "Avocado Smoothie Bowl" : ["1 avocado", "honey", "1 frozen banana", "3 scoops of plain greek yogurt", "1 scoop of chia seeds"],
    "Brownies": ["½ cup melted vegan butter - hot","1½ cup granulated cane sugar", "⅓ cup non-dairy milk", "3 teaspoons vanilla extract", "1 cup all-purpose flour", "¾ cup cocoa powder", "¾ teaspoon baking powder", "¼ teaspoon salt", "1 cup vegan chocolate chips"],
    "Cottage Cheese, Fruit, Yellow Pepper" : ["1/4 cup medjool dates", "1/4 cup strawberries", "1/4 cup blackberries", "1 cup of cottage cheese", "1 yellow pepper"],
    "Teriyaki Bao": ["140 g (5 oz) all-purpose flour", "50 g (1.5 oz) corn starch", "45 g (1.5 oz) powdered sugar", "4 g (1.5 teaspoons) active dry yeast or instant yeast", "80 ml lukewarm water", "1 tablespoon oil", "1 teaspoon baking powder", "1 teaspoon cold water", "oyster mushroom", "green onion", "teriyaki sauce"],
    "Spicy Salmon Onigiri and Cucumber": ["Kewpie Mayo", "Premium Dark Soy Sauce", "Sriracha", "Kokuho Rose Sushi Rice", "Black Pepper", "Vegeta", "Nori Komi Furikake Rice Seasoning", "Salmon", "Green Onion", "Avocado oil", "Water", "Seaweed", "Cucumber"],
    "Shakshuka and Toast": ["1 large onion", "1 red bell pepper", "3 garlic cloves", "cumin", "paprika", "cayenne", "1 can of 14 oz can of whole plum tomatoes", "salt", "black pepper", "olive oil", "2 slices of bread", "1 can of 14 oz diced tomatoes with green chilis"], 
    "Pondu and Rice": ["2 cases of frozen cassava leaves", "palm oil", "green onion", "green pepper", "black pepper", "vegeta", "thai eggplant", "eggplant", "tilapia", "king mackerel in tomato sauce"], 
    "Soba Cold Noodles": ["soba noodles", "cucumber", "black pepper", "soy sauce", "2 teaspoons mirin", "water", "sugar", "garlic", "green onion", "miso paste"],
    "Lox Bagel and Cucumber": ["smoked salmon", "1 egg", "onion and chive cream cheese", "1 bagel", "1 pickle", "1 cucumber"],
    "Soyrizo Bowl": ["soyrizo", "2 eggs", "2 hash browns", "1 yellow pepper", "1/2 cup black beans", "black pepper", "bay leaf", "salt", "onion powder", "garlic", "hot sauce", "1 tbsp greek yogurt"],
    "Shrimp, Mashed Potatoes, Asparagus and Egg Whites": ["6 oz shrimp", "1 potato", "asparagus", "3 egg whites", "salt", "pesto", "hot sauce", "basil", "thyme", "black pepper", "2 oz greek yogurt"],
    "TLT": ["tempeh", "1 tomato", "1 avocado", "sandwich bread", "lettuce", "garlic", "mayo", "dijon mustard", "jalapeno kettle chips"], 
    "American Breakfast": ["Just Egg", "Veggie Breakfast Sausage", "tater tots", "asparagus"],
    "Gnocchi in red sauce": ["gnocchi", "black pepper", "garlic", "basil", "tomato sauce"], 
    "Japanese Style Bento": ["seaweed salad", "kambocha squash", "soy sauce"], 
    "Quiche & Pickled Beets": ["sun dried tomatoes", "spinach", "3 eggs", "goat cheese", "mozzarella", "pie crust", "beets", "1/2 lemon", "black pepper", "salt"],
    "Peanut Butter Waffles and Omelette": ["peanut butter", "butter", "brown sugar", "baking powder", "chia seeds", "2 eggs", "mushroom", "spinach", "salt", "flour", "black pepper"],
    "Avocado Banana Smoothie Bowl": ["salt", "1/2 avocado", "honey", "chia seeds", "nuts", "granola", "1/2 frozen banana"],
    "Japanese Curry Udon": ["udon", "green onion", "fish sauce", "soy sauce", "japanese curry", "tempura flakes"],
    "Eel Sauce": ["soy sauce", "mirin", "sugar"],
    "Crispy Rice Spicy Chickpea Crab": ["2 cups sushi rice", "3 cups water, plus extra for rinsing rice", "2 tbsp rice vinegar, or white wine vinegar", "1 tbsp sugar", "salt", "1 can garbanzo beans", "2 tbsp vegan mayonnaise", "1 tsp paprika", "1 tsp garlic powder", "1/2 tsp salt", "ground pepper", "1 Lemon", "1/2 cup mayo", "1-2 tbsp sriracha", "1 tsp garlic powder", "1 tsp ground paprika", "1 tbsp soy sauce", "Salt and pepper to taste", "Avocado", "Jalapeño or Serrano pepper, thinly sliced", "Chili oil", "Fresh cilantro", "1/3 cup soy sauce", "Avocado oil"],
    "Mediterranean Style Salad": ["chickpeas", "kale", "dried cranberries", "hummus", "1 cucumber", "brown sugar", "walnuts"], 
    "Kale Salad": ["chopped curly kale", "1 green apple", "tempeh", "1 avocado", "soy sauce", "poppy seed dressing", "walnuts", "goat cheese", "sugar"], 
    "Curry Salad": ["Just egg", "West Indian Curry", "1 Sweet potato", "1/2 a bag of Spinach", "1 can of Chickpeas", "Black Pepper", "Salt", "Avocado Oil"], 
    "Tacos de Alambre": ["mushrooms", "1 green pepper", "1 orange pepper", "1 onion", "black pepper", "mushroom umami", "cumin", "vegan bacon", "gucamole", "nacho cheese", "corn tortilla", "cashews", "dijon mustard", "nutritional yeast", "umami seasoning", "unsweetened oat milk", "corn starch"], 
    "Tex Mex Bowl": ["1 can of black beans", "pickled jalapenos", "cilantro lime rice", "guacamole", "lettuce"], 
    "Fried Rice": ["jasmine rice", "soy sauce", "Just egg", "black pepper", "1 carrot", "1/2 cup of peas", "pineapple"], 
    "Miso Ramen": ["seaweed", "miso paste", "fried chili oil", "1 egg", "ramen noodles", "1 green onion"],
    "Pesto Pizza": ["pizza dough", "pesto", "fried oyster mushrooms", "fontina", "mozzarella", "fresh basil", "1 tomato", "sun dried tomatoes"],
    "Avocado Toast, Eggs and Black beans": ["1 avocado", "2 slices of bread", "eggs", "black pepper", "salt", "1 can of black beans", "bay leaf", "onion powder", "lime juice", "italian seasoning"], 
    "Crispy Tofu, Cucumber and Edamame": ["cucumber", "edamame", "tofu morsels"],
    "Parfait": ["granola", "5 strawberries", "1/2 mango", "1 cup greek yogurt", "chia seeds"], 
    "Black Bean Burger and Fries": ["1 can black beans", "lettuce", "mushrooms", "1 onion", "black pepper", "soy sauce", "smoked gouda", "pickled jalapenos", "fries", "1/2 green pepper", "1 jalapeno", "chipotle paste", "greek yogurt"], 
    "Parfait French Toast" : ["2 scoops greek yogurt", "2 pieces of french toast", "cinnamon", "1 egg", "3 tbsps brown sugar", "walnuts", "strawberries", "honey"],
    "Sweet Potato Hash": ["1 sweet potato", "kale", "2 eggs", "1/2 cup mushrooms", "1 mango", "1 scoop of greek yogurt", "1 avocado", "smoked paprika", "black pepper", "salt", "thyme", "asparagus"], 
    "Palak Paneer, Rice, and Chana Masala": ["spinach", "cashews", "garam masala", "paneer", "black pepper", "1 can chickpeas", "2 tomatoes", "ginger", "basmati rice", "garlic", "onion", "bay leaf", "red chili powder", "coriander powder", "salt"], 
    "Sushi Bake": ["spicy mayo", "furikake rice seasoning", "salmon/crab"], 
    "Nachos": ["cheese", "1 can of black beans", "1 avocado", "pickled jalapenos", "tortilla chips", "chipotle salsa", "1 scoop greek yogurt", "bay leaf", "black pepper", "salt", "lime", "1 tomato"], 
    "Veggie Stir Fry": [""],
    "Burmese Tea Leaf Salad": ["2 mangoes", ""], 
    "Gyros": ["tomato", "onion", "cucumber", ], 
    "Congolese Shrimp": ["frozen uncooked shrimp", "palm oil", "vegete all purpose seasoning"],
    "Batida de Coco": ["Coconut milk", "Ice", "rum", "Sweetened condensed milk", "Lime juice"],
    "Baked Chickpeas": ["1 can of chickpeas", "smoked paprika", "salt", "black pepper", "cumin", "italian spices"],
    "Gnocchi in Red Sauce": ["gnocchi", "pesto", "veggie sausage", "sun dried tomatoes", "spinach", "mushrooms"],
    "Black Bean Burger": ["1 avocado", "pickled jalapenos", "2 cans of black beans"], 
    "Tex Mex Salad, Apple and Peanut Butter": ["2 scoops peanut butter", "1 apple", "1 egg", "spinach", "black beans", "1 avocado", "cholula"], 
    "Apple Pie Oatmeal": ["1 tsp of cornstarch", "cinnamon", "a pinch of salt", "brown sugar", "1 cup of oats", "1 green apple"], 
    "Red Bean Buns": ["140 g (5 oz) all-purpose flour", "50 g (1.5 oz) corn starch", "45 g (1.5 oz) powdered sugar", "4 g (1.5 teaspoons) active dry yeast or instant yeast", "80 ml lukewarm water", "1 tablespoon oil", "1 teaspoon baking powder", "1 teaspoon cold water", "azuki beans"], 
    "Cinnamon Sweet Potatoes": ["2 sweet potatoes", "honey", "smoked paprika", "black pepper", "salt", "nutmeg"], 
    "Parfait": ["honey greek yogurt", "4 strawberries", "ginger granola", "1 mango"],
    "Galettes": ["vegan butter", "flour", "sugar"], 
    "Peach Cobbler": ["peaches", "butter"], 
    "Peanut Butter Protein Waffles": ["peanut butter", "honey", "chia seeds", "flour", "water"],
    "Chocolate Lava Cake": [],
    "Burmese Mango Salad": [], 
    "Plantains": [" 2 brown plantains", "black pepper", "cajun seasoning"], 
    "Sauteed Broccoli": ["broccoli", "black pepper", "garlic", "salt", "butter"], 
    "Earl Grey Macarons": ["1 2/3 cup (200 grams) powdered sugar", "1 cup (110 grams) almond flour", "4 Earl Grey tea satchets", "3 large (100 grams) egg whites", "1/4 cup (50 grams) granulated sugar", "4 tablespoons (56 grams) unsalted butter softened", "1 tablespoon (20 grams) honey", "1 cup (113 grams) powdered sugar", "1 tablespoon heavy cream or milk"],   
    "Congolese Spinach": ["spinach", "palm oil", "yellow onion", "vegeta all-purpose seasoning"], 
    "Basmati Rice": ["basmati rice", "filtered water"], 
    "Congolese Tomato Sauce": ["1 bunch of green onion", "tomato paste", "toamtoes", "black pepper", "salt", "vegeta all purpose seasoning"], 
    "Pili Pili": ["8 orange habaneros", "1 lemon", "vegeta all purpose seasoning", "black pepper"], 
    "Hummus": ["tahini", "chickpeas", "lemon", "garlic"], 
    "Tahini Herb Sauce": ["tahini", "roast garlic", "lemon juice", "fresh dill", "lime juice"], 
    "Congolese Ginger Tilapia": ["ginger", "vegeta all purpose seasoning", "5 green onions", "black pepper", "tilapia", "lemon", "yellow onion", "oil"], 
    "Sesame Orange Sauce": ["juice of 1/2 an orange", "sesame oil", "brown sugar", "corn starch", "salt", "soy sauce", "black pepper"],  
    "West Indian Curry & Naan": ["west indian curry paste", "mild jerk paste", "sweet potato", "cauliflower", "naan or paratha", "coconut milk", ""],  
    "Spicy Mayo": ["vegan mayo", "sriracha"], 
    "Miso Tahini Butter": ["mmiso paste", "tahini"], 
    "Chips & Guac": ["3 avocados", "1 lime", "1 tomoato", "1/4 onion", "tortilla chips"], 
    "Green Tea Ice Cream": ["cashews", "coconut cream", "1 tablespoon matcha green tea powder", "3 tablespoons hot water", "5 tablespoons granulated white sugar"],
    "Oyster Mushroom Maki Roll": ["1 mango", "1/2 a cucumber", "1/2 avocado", "eel sauce", "spicy mayo", "seaweed", "sushi rice", "rice vinegar", "sugar", "water", "oyster mushrooms", "corn starch", "black pepper", "mushroom umami", "soy sauce", "water", "panko", "sesame oil"],
    "French Toast": ["2 pieces of brioche bread", "brown sugar", "cinnamon", "1 egg", "cream", "1 cup greek yogurt", "5 strawberries", "butter", "1 pinch of salt"]
}

//GROCERY ARRAY 
//var groceryArray = [];


//FUNCTIONS -------------------------------------

//BREAKFAST
function randomBreakfast(breakfast){
    
    
    var breakfastLength = breakfast.length;
    var randomNumber = Math.floor(Math.random() * breakfastLength);
    var chosenBreakfast = breakfast[randomNumber];
    
    //return chosenBreakfast;
    document.querySelector(".breakfast").innerHTML = chosenBreakfast;
    
    //show image for recipe card
    var recipeImgBreakfast = "img/" + chosenBreakfast + ".jpg";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", recipeImgBreakfast);
    
    //show recipe title
//    document.querySelectorAll(".card-title")[0].innerHTML = chosenMain;
    
    //show recipe directions
    var recipeDirectionsBreakfast = document.querySelectorAll(".card-text")[0].innerHTML = recipeDict[chosenBreakfast];
    
    //show ingredient list
    var groceryDirectionsBreakfast = document.querySelectorAll(".card-list")[0].innerHTML = groceryDict[chosenBreakfast];
    
    
// MAKING THE INGREDIENT LIST
    //create ul in card
    var ul = document.createElement("ul");
    ul.className = "ingredients";
    
    // add list to card body
    var cardbody = document.querySelectorAll(".card-body")[0].appendChild(ul);
    
    // display items in the list
    for (var i = 0; i <= groceryDict[chosenBreakfast].length; i++) {
        
        //create a list item with the class name items
        var li = document.createElement("li");  
        li.className = "items";
        
        // setting inner html to ingredients
        var a = document.createElement("a");
        a.innerHTML = groceryDict[chosenBreakfast][i];

        li.appendChild(a);
        ul.appendChild(li);
    }
    
    // Push items to grocery list on click
    
};

randomBreakfast(breakfast);


function NewBreakfast()
{
    var anotherBreakfast = breakfast[Math.floor(Math.random() * breakfast.length)];
    
   //show new entree when button is pressed
    document.getElementById("message1").innerHTML=anotherBreakfast;
    
    //show image for recipe card
    var recipeImgBreakfast = "img/" + anotherBreakfast + ".jpg";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", recipeImgBreakfast);
    
    //show recipe title
//    document.querySelectorAll(".card-title")[0].innerHTML = anotherEntree;
    
    //show recipe directions
    var recipeDirectionsBreakfast = document.querySelectorAll(".card-text")[0].innerHTML = recipeDict[anotherBreakfast];
    
    //show ingredients
    var groceryDirectionsBreakfast = document.querySelectorAll(".card-list")[0].innerHTML = groceryDict[anotherBreakfast];

    
    
    }
    

//------------/

//LUNCH
function randomLunch(lunch){
    
    //show random dish
    var lunchLength = lunch.length;
    var randomNumberFour = Math.floor(Math.random() * lunchLength);
    var chosenLunch = lunch[randomNumberFour];
    
    document.querySelector(".lunch").innerHTML = chosenLunch;
    
    //show image for recipe card
    var recipeImgLunch = "img/" + chosenLunch + ".jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", recipeImgLunch);
        
    //show recipe title
//    document.querySelectorAll(".card-title")[1].innerHTML = chosenSauce;
    
    //show recipe directions
    var recipeDirectionsLunch = document.querySelectorAll(".card-text")[1].innerHTML = recipeDict[chosenLunch];
    
    //show ingredients
    var groceryDirectionsLunch = document.querySelectorAll(".card-list")[1].innerHTML = groceryDict[chosenLunch];
    
    // MAKING THE INGREDIENT LIST
    //create ul in card
    var ul = document.createElement("ul");
    
    // add list to card body
    var cardbody = document.querySelectorAll(".card-body")[1].appendChild(ul);
    
    // display items in the list
    for (var i = 0; i <= groceryDict[chosenLunch].length; i++) {
        
        //create a list item with the class name items
        var li = document.createElement("li");  
        li.className = "items";
        
        // setting inner html to ingredients
        var a = document.createElement("a");
        a.innerHTML = groceryDict[chosenLunch][i];

        li.appendChild(a);
        ul.appendChild(li);
    }
    
};

randomLunch(lunch);

function NewLunch()
{
    var anotherLunch = lunch[Math.floor(Math.random() * lunch.length)];
    
   //show new lunch when button is pressed
    document.getElementById("message2").innerHTML=anotherLunch;
    
     //new recipe photo based on choice
    var recipeImgLunch = "img/" + anotherLunch + ".jpg";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", recipeImgLunch);
    
    //show recipe directions
    var recipeDirectionsLunch = document.querySelectorAll(".card-text")[1].innerHTML = recipeDict[anotherLunch];
    
    //show ingredients
    var groceryDirectionsLunch = document.querySelectorAll(".card-list")[1].innerHTML = groceryDict[anotherLunch];
    }

    

//------------/

//DINNER
function randomDinner(dinner){
    
    //show random dish
    var dinnerLength = dinner.length;
    var randomNumberTwo = Math.floor(Math.random() * dinnerLength);
    var chosenDinner = dinner[randomNumberTwo];
    
    document.querySelector(".dinner").innerHTML = chosenDinner;
    
    //show image for recipe card
    var recipeImgDinner = "img/" + chosenDinner + ".jpg";
    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", recipeImgDinner);
        
    //show recipe directions
    var recipeDirectionsDinner = document.querySelector(".recipe-directions-dinner");
        
    
    //show recipe directions
    var recipeDirectionsDinner = document.querySelectorAll(".card-text")[2].innerHTML = recipeDict[chosenDinner];
    
    //show ingredients
    var groceryDirectionsDinner = document.querySelectorAll(".card-list")[2].innerHTML = groceryDict[chosenDinner];
    
    // MAKING THE INGREDIENT LIST
    //create ul in card
    var ul = document.createElement("ul");
    
    // add list to card body
    var cardbody = document.querySelectorAll(".card-body")[2].appendChild(ul);
    
    // display items in the list
    for (var i = 0; i <= groceryDict[chosenDinner].length; i++) {
        
        //create a list item with the class name items
        var li = document.createElement("li");  
        li.className = "items";
        
        // setting inner html to ingredients
        var a = document.createElement("a");
        a.innerHTML = groceryDict[chosenDinner][i];

        li.appendChild(a);
        ul.appendChild(li);
    }
    
    //show ingredients in grocery list on click
        //maybe I need to push items into an array that places each item as a li
    
};

randomDinner(dinner);

function NewDinner()
{
    var anotherDinner = dinner[Math.floor(Math.random() * dinner.length)];
    
   //show new dinner when button is pressed
    document.getElementById("message3").innerHTML=anotherDinner;
    
    //new recipe photo based on choice
    var recipeImgDinner = "img/" + anotherDinner + ".jpg";
    var image3 = document.querySelectorAll("img")[2];
    image3.setAttribute("src", recipeImgDinner);
    
    //show recipe directions
    var recipeDirectionsDinner = document.querySelectorAll(".card-text")[2].innerHTML = recipeDict[anotherDinner];
    
    //show ingredients
    var groceryDirectionsDinner = document.querySelectorAll(".card-list")[2].innerHTML = groceryDict[anotherDinner];
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
    
   //show new sweet when button is pressed
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

document.querySelector(".breakfast").addEventListener("click", addToGroceryList);

document.querySelector(".lunch").addEventListener("click", addToGroceryList);

document.querySelector(".dinner").addEventListener("click", addToGroceryList);

document.querySelector(".sweets").addEventListener("click", addToGroceryList);




//GROCERY LIST
    
    
function addToGroceryList(){
    alert("added to the list");
    
    // add items on screen to the list
    
}

    //push items into list as li


    //allow for item removal


    //allow the items to be sent to notes/email/messages or something to generate the list

