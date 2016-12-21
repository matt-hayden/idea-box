$('.js-save-btn').on('click', function(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $idea = new NewIdea($titleInput, $bodyInput);
  NewIdea();
  displayCard($idea);
  StoreIdea(id, $idea);
  clearInputs();
});

function NewIdea (title, body, quality){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = quality || 'Swill';
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
    <ul class="card-box">
    <li class="li-title"> ${idea.title} </li>
    <button class="delete-btn"><img src="images/delete.svg"> </img></button>
    <li class="li-body">"${idea.body}"</li>
    <li id="key-number" class="li-id">"${idea.id}"</li>
    <li class="li-quality">"${idea.quality}"</li>
    <button class="up-btn"><img src="images/upvote.svg"></img></button>
    <button class="down-btn"><img src="images/downvote.svg"></img></button>
    </ui>
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
