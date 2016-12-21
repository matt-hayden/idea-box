
/* Unless I'm wrong, this array is used to store strings that are later synced to localStorage... why?
 * why not read and write straight to localStorage?
 */
var localDataArray = [];
/* Here's how to use it:
 */
function populateFromStorage() {
  /* Without the { } brackets, the for loop only loops over the next line. I changed the indents
   */
  for (var i = 0; i < localStorage.length; i++)
    localDataArray.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
  debug_log("synced from localStorage: "+localDataArray);
};
/* ... but I don't see it used in the rest of this script
 */


// This pattern is common:
debug_log = console.log
// You can turn off or change logging without having to go through the rest of the file


/* I like these 'wrapper' functions:
 */
function getIdea(name, parser=JSON.parse) {
  return parser(localStorage.getItem(name);
}
function setIdea(name, content, flattener=JSON.stringify) {
  localStorage.setItem(name, flattener(content));
}
function *getIdeas() {
  var n;
  for (var i = 0; i < localStorage.length; i++) {
    n = localStorage.key(i);
    if (n) yield [ n, getIdea(n) ];
  }
}
function debugIdeas() {
  for (var t of getIdeas())
    debug_log(t);
}

/* I'm specifying the function above _as a function argument_, I'm not calling it.
 */
$(populateFromStorage);


$('.card-section').on('click', '.delete-btn', function(){
  $(this).closest('section').remove();
  // localStorage.removeItem(id);
  // debug_log(id);
});

$('.card-section').on('click', '.delete-btn', function(){
  // $(this).siblings().attr('id');
  localStorage.removeItem(id);
  debug_log("Removed localStorage "+id);
});


$('.js-save-btn').on('click', function(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $idea = new NewIdea($titleInput, $bodyInput);
  //NewIdea();
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
