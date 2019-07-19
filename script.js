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

const parseDex = (dexNum) => {
  if(dexNum[0] === '0'){
    return dexNum.substring(1);
  }else if (dexNum[0] === '0' && dexNum[1] === '0'){
    return dexNum.substring(2);
  }else{
    return dexNum;
  }
}

async function getPokeInfo (dexNum){
  try{
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexNum}/`);
    const data = await result.json();
    console.log(data.types);
    const info = 
    `
    No. #${data.id} <br>
    Name: ${data.name.toUpperCase()} <br>
    Height: ${(data.height*0.1).toFixed(2)} m 
    Weight: ${(data.weight*0.1).toFixed(2)} kg
    `;
    return info;
  } catch(error){
    console.log(error);
  }
}

async function randPokemon (){
  for (let i = 1; i < 11; i++) {
    const newPokemon = randPokedex();
    let slide = document.querySelector(`#slide${i}`);
    let attri = document.createAttribute('src');
    attri.value = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newPokemon}.png`;
    slide = slide.setAttributeNode(attri);
    let info = document.querySelector(`#info${i}`);
    console.log(parseDex(newPokemon));
    info.innerHTML = (`${await getPokeInfo(parseDex(newPokemon))}`);
  }
}

randPokemon();