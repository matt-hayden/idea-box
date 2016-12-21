$(function() {
  for (var i = 0; i < localStorage.length; i++){
    var storedObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    displayCard(storedObj);
  }
});

$('.card-section').on('click', '.delete-btn', function(){
  var id = $(this).closest(".idea-card").attr("id");
  localStorage.removeItem(id);
  $(this).closest('.idea-card').remove();
});

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

function displayCard (idea){
  /* Tick marks `` are EMCA templates
   */
  $('.card-section').prepend(
    `<section id="${idea.id}" class="idea-card">
    <ul class="card-box">
    <li class="li-title"> ${idea.title} </li>
    <button class="delete-btn"><img src="images/delete.svg" alt="X"/></button>
    <li class="li-body">"${idea.body}"</li>
    <li id="key-number" class="li-id">"${idea.id}"</li>
    <button class="up-btn"><img src="images/upvote.svg" alt="^"/></button>
    <button class="down-btn"><img src="images/downvote.svg" alt="v"/></button>
    <li class="li-quality">"quality:${idea.quality}"</li>
    </ul>
  </section>`
  );
}

function clearInputs(){
  $('.js-title-input').val('');
  $('.js-body-input').val('');
};
