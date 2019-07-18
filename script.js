let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 200,
  slidesPerGroup: 1,
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(function(){

  const randPokedex = () => {
    const min = 1;
    const max = 810;
    let pokedex = Math.floor(Math.random() * (max-min))+min;
    if (pokedex < 10){
      return '00'+pokedex;
    }else if (10 <= pokedex && pokedex < 100){
      return '0'+pokedex;
    }else{
      return pokedex;
    }
  }
  
  const randPokemon = () =>{
    for (let i = 1; i < 11; i++){
      const newPokemon = randPokedex();
      $(`#slide${i}`).attr('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newPokemon}.png`)
    }
  }

  randPokemon();

});

  

