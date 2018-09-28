var fs = require('fs');

$(document).ready(function(){

	function getCryptos() {
		// Takes in Crypto market symbol (sym) and updates the price in item CSS ID (id)
		$("#cryptos li").each(function(){
			var _sym = $(this).data('sym');
			var _this = $(this);
			$.post('https://min-api.cryptocompare.com/data/price?tsyms=USD&fsym='+_sym,function(d){
				_this.find('span').text('$'+d.USD);
			});
		});
	}

	// INTIALIZE

	getCryptos();
	t_crypt = setInterval(getCryptos,crypto_refresh);

});
