$('.js-save-btn').on('click', function(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $cardId = (Date.now());
  var $quality = ("swill");
  var $idea = new NewIdea($titleInput, $bodyInput, $cardId, $quality);
  console.log($idea);
});


function NewIdea (title, body, id, quality){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality ="swill"; //or quality?
}



// function StoreIdea (title, body, id, quality){
//   var $formData = [];
//   $formData.push($titleInput);
//   $formData.push($bodyInput);
//   $formData.push($cardId);
//   $formData.push($quality);
//
//   var stringed = $formData;
//
//   localStorage.setItem("card-data", JSON.stringify(stringed));
//
//   var retrievedData = localStorage.getItem("card-data");
//
//   var winning = JSON.parse(retrievedData);
//   console.log(winning);
//
//
// };
//
//
// function newCard(titleInput, bodyInput, cardId, quality){
//   $('.card-box').append(
//     `<section class="idea-card">
//     <li> "${$titleInput}" </li>
//     <button class="delete-btn">&#xd7;</button>
//     <li> "${$bodyInput}" </li>
//     <li> "${$cardId}" </li>
//     <li> "${$quality}"
//     <button class="up-btn">&#x2191;</button>
//     <button class="down-btn">&#x2193;</button>
//     <li>quality:swill</li>
//   </section>`
//   );
// }



//
// function localData(){
//   var $titleInput = $('.js-title-input').val();
//   var $bodyInput = $('.js-body-input').val();
//   var $formData = [];
//   $formData.push($titleInput);
//   $formData.push($bodyInput);
// }






  // var formData = JSON.stringify($("#form-data").serializeArray());
  //



// Function to create object with all the information
//

// Function to get value of each:
//
// Function to stringify JSON.stringify($titleInput);:
//
// Function to set item localStorage.setItem():
//
// Function to parse JSON.parse()
//



// function localArray(){
//   var $titleInput = $('.js-title-input').val();
//   var $bodyInput = $('.js-body-input').val();
//   var $formData = [];
//   $formData.push($titleInput);
//   $formData.push($bodyInput);
// }
//
// function localSavedData(){
//   var stored = localStorage.setItem('$form-data', JSON.stringify($formData));
//     console.log(stored);
//
// }
