$('.js-save-btn').on('click', function(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $idea = new NewIdea($titleInput, $bodyInput);
  NewIdea();
  displayCard($idea);
  StoreIdea();
});

function NewIdea (title, body, id, quality){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality =" swill"; //or quality?
}

function StoreIdea (title, body, id, quality){
  this.title = $('.js-title-input').val();
  this.body = $('.js-body-input').val();
  this.id = Date.now();
  this.quality =" swill"; //or quality?
  var $formData = [];
   $formData.push(this.title);
   $formData.push(this.body);
   $formData.push(this.id);
   $formData.push(this.quality);
   var storedString = $formData;

   $formData = localStorage.setItem("card-data", JSON.stringify(storedString));

   var retrievedData = localStorage.getItem("card-data");
   console.log(retrievedData);
   var winning = JSON.parse(retrievedData);
   console.log(winning);
};


function displayCard (idea){
  $('.card-section').append(
    `<section class="idea-card">
    <li> "${idea.title}" </li>
    <button class="delete-btn">&#xd7;</button>
    <ul class="card-box">
    <li> "${idea.body}" </li>
    <li> "${idea.id}" </li>
    <li> "${idea.quality}"</li>
    <button class="up-btn">&#x2191;</button>
    <button class="down-btn">&#x2193;</button>
    <li>quality: swill</li>
    </li>
  </section>`
  );
}





// function StoreIdea (title, body, id, quality){
//   var $formData = [];
//
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
