// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!


// $('.header-right').show();
alert('Main2.js');
// inizializza var
$('.burger-menu-custom').addClass('green');
$('.burger-menu-custom').hide();
// $('prova').addClass('red');

// Mostra hamburger Menu
$('.burger-button').click(function(){
  // alert('Sei entrato');
  $(this).addClass('red');
  $('.burger-menu-custom').show('fast');
});


// Nascondi hamburger Menu
$('.burger-menu-custom').mouseleave(function(){
  // alert('Sei uscito');
  $(this).removeClass('red');
  $('.burger-menu-custom').hide('slow');
});
