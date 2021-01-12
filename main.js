// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!


// Mostra hamburger Menu
$('.header-right .fas').mouseenter(function(){
  alert('Sei entrato');
});


// Nascondi hamburger Menu
$('.header-right .fas').mouseleave(function(){
  alert('Sei uscito');
});
