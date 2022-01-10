let time;
let counter = document.querySelector('h1')

let ss = 0 //segundos
let mm = 0//minutos
let hh = 0//horas

//Iniciar o cronometro
function start() {
  time = setInterval(() => {
    timer()
  },1000)
}

//Pausar o cronometro
function pause() {
  clearInterval(time)
}

//Zerar o cronometro
function clear() {
  ss = 0
  mm = 0
  hh = 0
  clearInterval(time)
}

function timer() {
  ss++

  if(ss == 60) {
    ss = 0
    mm++

    if(mm == 60) {
      mm = 0
      hh++
    }
  }

  let format = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`
  counter.innerText = format
}
