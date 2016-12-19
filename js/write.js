$('.js-save-btn').on('click', function(){
  newIdea();
});

function newIdea(){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('js-body-input').val();
  $('.card-box').append(
    `<section class="idea-card">
    <li> "${$titleInput}" </li>
    <button class="delete-btn">&#xd7;</button>
    <li> "${$bodyInput}" <li>
    <button class="up-btn">&#x2191;</button>
    <button class="down-btn">&#x2193;</button>
    <li>quality:swill</li>
  </section>`
  );
}
