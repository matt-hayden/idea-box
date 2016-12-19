$('.js-save-btn').on('click', function(){
  localData();
});

function localData(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $formData = [];
  $formData.push($titleInput);
  $formData.push($bodyInput);
  console.log($formData);
}





  // var formData = JSON.stringify($("#form-data").serializeArray());
  //



// Function to create object with all the information
//
// function NewIdea(title, body, id, quality){
//   this.title = title;
//   this.body = body;
//   this.id = id;
//   this.quality ="swill";
// };

// Function to get value of each:
//
// Function to stringify JSON.stringify($titleInput);:
//
// Function to set item localStorage.setItem():
//
// Function to parse JSON.parse()
//


// function newIdea(){
//   $('.card-box').append(
//     `<section class="idea-card">
//     <li> "${$titleInput}" </li>
//     <button class="delete-btn">&#xd7;</button>
//     <li> "${$bodyInput}" <li>
//     <button class="up-btn">&#x2191;</button>
//     <button class="down-btn">&#x2193;</button>
//     <li>quality:swill</li>
//   </section>`
//   );
// }
