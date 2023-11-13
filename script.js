var valorEmDolar = 60;
var cotacaoDoDolar = 4.91;
var cotacaoDoBitcoin = 179116.39;
var valorEmReal = valorEmDolar * cotacaoDoDolar; valorEmReal = valorEmReal.toFixed(2);
var valorEmBitcoin = valorEmReal / cotacaoDoBitcoin; valorEmBitcoin = valorEmBitcoin.toFixed(5);
alert("\n Cotação do dolar em reais:  $" + valorEmReal + "\n Cotação em Bitcoin:  $" + valorEmBitcoin);