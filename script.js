let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 200,
  slidesPerGroup: 1,
  // loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const randPokedex = () => {
  const min = 1;
  const max = 810;
  let pokedex = Math.floor(Math.random() * (max - min)) + min;
  if (pokedex < 10) {
    return '00' + pokedex;
  } else if (10 <= pokedex && pokedex < 100) {
    return '0' + pokedex;
  } else {
    return pokedex;
  }
}

const randPokemon = () => {
  for (let i = 1; i < 11; i++) {
    const newPokemon = randPokedex();
    let slide = document.querySelector(`#slide${i}`);
    let attri = document.createAttribute('src');
    attri.value = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newPokemon}.png`;
    slide = slide.setAttributeNode(attri);
  }
}

randPokemon();



