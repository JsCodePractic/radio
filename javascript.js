const radios = []

var radioNashe = new Audio();
radios.push(radioNashe)

radioNashe.src = "http://nashe2.hostingradio.ru/nashe-128.mp3";

document.querySelector('.radioNashe').onclick = function () {

  if (radioNashe.paused == true) {
    radioNashe.play();
    radioMC.pause();
    radioKiss.pause();
    radioRecord.pause();
    radioRus.pause();
    radioRoks.pause();
    document.querySelector('.radioNashe').innerHTML = 'Pause';
    document.body.style.backgroundImage = 'url(img/nashe.jpg)';
    document.getElementById('TEXTRADIO').innerHTML = 'Наше Радио';
    
  } else {
    radioNashe.pause();
    document.querySelector('.radioNashe').innerHTML = 'Play';
    
  }

};



var radioMC = new Audio();
radios.push(radioMC)
radioMC.src = " http://montecarlo.gcdn.co/st11.mp3/icecast.audio";


document.querySelector('.radioMC').onclick = function () {

  if (radioMC.paused == true) {
    radioMC.play();
    radioNashe.pause();
    radioKiss.pause();
    radioRecord.pause();
    radioRus.pause();
    radioRoks.pause();
    document.querySelector('.radioMC').innerHTML = 'Pause';
    document.body.style.backgroundImage = 'url(img/monte.jpeg)';
    document.getElementById('TEXTRADIO').innerHTML = 'Monte Carlo';
    

  } else {
    radioMC.pause();
    document.querySelector('.RadioMC').innerHTML = 'Play';
  }


};


var radioKiss = new Audio();
radios.push(radioKiss)

radioKiss.src = "http://online-kissfm2.tavrmedia.ua/KissFM_Deep";

document.querySelector('.radioKiss').onclick = function () {

  if (radioKiss.paused == true) {
    radioKiss.play();
    radioNashe.pause();
    radioMC.pause();
    radioRecord.pause();
    radioRus.pause();
    radioRoks.pause();
    document.querySelector('.radioKiss').innerHTML = 'Pause';
    document.body.style.backgroundImage = 'url(img/DP.jpg)';
    document.getElementById('TEXTRADIO').innerHTML = 'Kiss FM';
  } else {
    radioKiss.pause();
    document.querySelector('.radioKiss').innerHTML = 'Play';
  }
};


var radioRecord = new Audio();
radios.push(radioRecord)


radioRecord.src = "http://air.radiorecord.ru:805/rr_320"

document.querySelector('.radioRecord').onclick = function () {

  if (radioRecord.paused == true) {
    radioRecord.play();
    radioKiss.pause();
    radioNashe.pause();
    radioMC.pause();
    radioRus.pause();
    radioRoks.pause();
    document.querySelector('.radioRecord').innerHTML = 'Pause';
    document.body.style.backgroundImage = 'url(img/recordBG.jpg)';
    document.getElementById('TEXTRADIO').innerHTML = 'Radio Record';

  } else {
    radioRecord.pause();
    document.querySelector('.radioRecord').innerHTML = 'Play';
  };
}
var radioRus = new Audio();
radios.push(radioRus)

radioRus.src = "http://rmgradio.gcdn.co/rr_m.mp3"

document.querySelector('.radioRus').onclick = function () {

  if (radioRus.paused == true) {
    radioRus.play();
    radioRecord.pause();
    radioKiss.pause();
    radioNashe.pause();
    radioMC.pause();
    radioRoks.pause();
    document.querySelector('.radioRus').innerHTML = 'Pause';
    document.body.style.backgroundImage = 'url(img/RusBG.jpg)';
    document.getElementById('TEXTRADIO').innerHTML = 'Русское Радио';

  } else {
    radioRus.pause();
    document.querySelector('.radioRus').innerHTML = 'Play';
  };
}
var radioRoks = new Audio();
radios.push(radioRoks)

radioRoks.src = "http://online-radioroks.tavrmedia.ua/RadioROKS"

document.querySelector('.radioRoks').onclick = function () {

  if (radioRoks.paused == true) {
    radioRoks.play();
    radioRus.pause();
    radioRecord.pause();
    radioKiss.pause();
    radioNashe.pause();
    radioMC.pause();

    document.querySelector('.radioRoks').innerHTML = 'Pause';
    document.body.style.backgroundImage = 'url(img/RockBg.jpg)'
    document.getElementById('TEXTRADIO').innerHTML = 'Radio Roks';
    

  } else {
    radioRoks.pause();
    document.querySelector('.radioRoks').innerHTML = 'Play';
  }
}
document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
function sliderLeft() {

  var polosa = document.getElementById("polosa");
  left = left - 210
  if (left < -630) {
    left = 0
  }
  polosa.style.left = left + "px";
};


var audio = document.getElementsByTagName('img');
var range = document.querySelector('#range');


const changeRadioVolume = radios => {
  radios.forEach(radio => {
    radio.volume = range.value * 0.01
  })
}

changeRadioVolume(radios)

range.onchange = () => changeRadioVolume(radios)

