$('.js-save-btn').on('click', function(){
  newIdea();
});

function newIdea(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('js-body-input').val();
  $('.card-box').append(
    `<section class="idea-card">
    <h1> "${$titleInput}" </h1>
    <button class="delete-btn">&#xd7;</button>
    <p> "${$bodyInput}" </p>
    <button class="up-btn">&#x2191;</button>
    <button class="down-btn">&#x2193;</button>
    <h2>quality:swill</h2>
  </section>`
  );
}
