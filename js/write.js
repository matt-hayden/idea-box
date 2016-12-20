$(document).ready(function() {
  for (var i = 0; i < localStorage.length; i++){
    displayCard(localStorage.key(i));
    console.log('shit')
  }
})

$('.js-save-btn').on('click', function(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $idea = new NewIdea($titleInput, $bodyInput);
  NewIdea();
  displayCard($idea);
  StoreIdea(id, $idea);
  clearInputs();
});

function NewIdea (title, body){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality ="swill";
}

function StoreIdea (id, idea){
   localStorage.setItem(id, JSON.stringify(idea));
};

function loadIdeas (id){
  localStorage.getItem(id, JSON.parse(idea));
  console.log(id, idea);
}

function displayCard (idea){
  $('.card-section').append(
    `<section class="idea-card">
    <li> "${idea.title}" </li>
    <button class="delete-btn">&#xd7;</button>
    <ul class="card-box">
    <li> "${idea.body}" </li>
    <li> "${idea.id}" </li>
    <li> "${idea.quality}"</li>
    <li> "${idea.quality}"
    <button class="up-btn">&#x2191;</button>
    <button class="down-btn">&#x2193;</button>
    <li>quality: swill</li>
    </li>
  </section>`
  );
}

// Use delete button to remove card
$('.card-section').on('click', '.delete-btn', function(){
  $(this).closest('section').remove();
  console.log('delete')
});

// Clear input fields after event listener on button save
function clearInputs(){
   $('.js-title-input').val('');
   $('.js-body-input').val('');
};
