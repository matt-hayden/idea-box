function populateFromStorage() {
  for (var i = 0; i < localStorage.length; i++) {
    var storedObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    displayCard(storedObj);
  }
};


// This pattern is common:
debug_log = console.log
// You can turn off or change logging without having to go through the rest of the file


/* I like these 'wrapper' functions:
 */
function getIdea(name, parser=JSON.parse) {
  return parser(localStorage.getItem(name));
}
function removeIdea(name) {
  localStorage.removeItem(name);
}
// This replaced StoreIdea
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
  for (var t of getIdeas()) debug_log(t);
}

/* I'm specifying the function above _as a function argument_, I'm not calling it.
 */
$(populateFromStorage);


$('.card-section').on('click', '.delete-btn', function(){
  var title = $(this).closest(".idea-card").attr("card_title");
  if (title) {
    removeIdea(title);
    $(this).closest('.idea-card').remove();
    debug_log("Removed localStorage "+title);
  } else debug_log("Boo: .idea-card contained no title");
});

$('.js-save-btn').on('click', function(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $idea = new NewIdea($titleInput, $bodyInput);
  if ($titleInput) {
    displayCard($idea);
    setIdea($titleInput, $idea);
    clearInputs();
  } else debug_log("Boo: won't save without a title");
});

function NewIdea (title, body, quality){
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = quality || 'Swill';
}


function displayCard (idea){
  /* Tick marks `` are EMCA templates
   */
  $('.card-section').prepend(
    `<section id="${idea.id}" class="idea-card" card_title="${idea.title}">
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
