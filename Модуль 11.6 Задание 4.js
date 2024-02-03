let funInterval = setInterval( function() {
  let i = prompt('Введите значение');
  let j = prompt('Введите значение');
  if( i == 0 || j == 0){
    clearInterval(funInterval)
    console.log("Был введен 0, программа остановлена")
  }else{
    while (i < j) {
      i++;
      console.log(i)
    }
  }
  console.log('Прошло 2 секунды')
}, 2000)