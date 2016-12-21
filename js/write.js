var localDataArray = [];

$(function() {
  for (var i = 0; i < localStorage.length; i++)
    localDataArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    console.log(localDataArray);
});

for (var i = 0; i < localStorage.length; i++){
      $('.card-section').prepend(localDataArray[i]);
}

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
  $('.card-section').prepend(
    `<section class="idea-card">
    <ul class="card-box">
    <li class="li-title"> ${idea.title} </li>
    <button class="delete-btn"><img src="images/delete.svg"> </img></button>
    <li class="li-body">"${idea.body}"</li>
    <li id="key-number" class="li-id">"${idea.id}"</li>
    <button class="up-btn"><img src="images/upvote.svg"></img></button>
    <button class="down-btn"><img src="images/downvote.svg"></img></button>
    <li class="li-quality">"quality:${idea.quality}"</li>
    </ui>
  </section>`
  );
}

$('.card-section').on('click', '.delete-btn', function(){
  var id = $(this).siblings('#key-number').text();
  localStorage.removeItem(id);
  // $(this).closest('section').remove();
  console.log(id);
});

function clearInputs(){
  $('.js-title-input').val('');
  $('.js-body-input').val('');
};



//
// $(this).parent().remove();
//  var id = $(this).parent().attr("id")
//  localStorage.removeItem(id);


// function deleteLocalStorage (){
//   localStorage.removeItem($idea);
//   deleteLocalStorage();

// $('.js-title-input, .js-body-input').keyup(function(){
//  var $title = $('.js-title-input').val();
//  var $url = $('.js-body-input').val();
//    if (title && url){
//      $('.js-save-btn').attr('disabled', false);
//    } else {
//      $('.js-save-btn').attr('disabled', true);
//    }
// });
// };

// $('.idea-card').on('click', '.delete-btn', function(){
//   $(this).closest('#key-number').remove();
// });

// Use delete button to remove card

// Clear input fields after event listener on button save
