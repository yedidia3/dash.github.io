
var flip = document.querySelector(".flip");
var flip = document.querySelector(".next");

//ALL FLASHCARDS---------------------------

//phrases

//objects

//verbs
var verbFlashcards = [
    {
        english: 'drag, slide or slip',
        french: 'glisser',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
        {
        english: 'have',
        french: 'avoir',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'finish',
        french: 'finir',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'be',
        french: 'être',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'wait',
        french: 'attendre',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'see',
        french: 'voir',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'choose',
        french: 'choisir',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'like',
        french: 'aimer',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'read',
        french: 'lire',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'Come',
        french: 'venir',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'eat',
        french: 'manger',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'write',
        french: 'écrire',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'Go',
        french: 'partir',
        portuguese: 'partir',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    {
        english: 'To ',
        french: 'g',
        portuguese: 'T',
        lingala: 'T',
        japanese: 'T'
      }, 
    
 
//    {
//        front: 'Ursäkta mig',
//        back: 'Excuse me'
//      }, 
      ];



//vocab function
function vocabCard(verbFlashcards){
    
    var verbLength = verbFlashcards.length;
    var randomNumber = Math.floor(Math.random() * verbLength);
    var chosenCard = verbFlashcards[randomNumber];

    // generate random card and display all languages
    
     document.querySelector(".english").innerHTML = chosenCard.english;
     document.querySelector(".french").innerHTML = chosenCard.french;
     document.querySelector(".portuguese").innerHTML = chosenCard.portuguese;
     document.querySelector(".lingala").innerHTML = chosenCard.lingala;
     document.querySelector(".japanese").innerHTML = chosenCard.japanese;
    

    console.log(chosenCard.english);
    console.log(chosenCard.french);
    console.log(chosenCard.portuguese);
    console.log(chosenCard.lingala);
    console.log(chosenCard.japanese);



    
    
};

vocabCard(verbFlashcards);



//function flip card
  function flipCard(){
      
  };
  
  
//function next card
  
  function nextCard(){
      
  };
  
  
  
  