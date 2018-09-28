var fs = require('fs');

$(document).ready(function(){

	function getPmetals(){

		/**
		 * Note:
		 * Data is inconsistent for gold and silver. 
		 * Gold [0][2] is PM price USD
		 * Silver [0][2] is GBP.  There is no AM/PM pricing on silver in this API
		 */

		metalIndex = {
			GOLD:2,
			SILVER:1,
			PALL:4,
			PLAT:4
		};

		$("#p-metals li").each(function(){
			let sym = $(this).data('sym');
			let mkt = $(this).data('market');
			t = new Date();
			tDay = t.getFullYear() + '-' + ( Number(t.getMonth()) + 1 )  + '-' + t.getDate();
			t.setDate( t.getDate() - 1 );
			yDay = t.getFullYear() + '-' + ( Number(t.getMonth()) + 1 )  + '-' + t.getDate();

			let _this = $(this);
			
			let q = 'https://www.quandl.com/api/v3/datasets/'+mkt+'/'+sym+'?&api_key='+api_keys.quandl;
			console.log(q);
			$.get(q,function(d){
				i = metalIndex[sym];
				_this.find('span').text( "$" + d.dataset.data[0][i] );
			});
		});

	}

	$('body').on('click','#action-submit',function(){
		if ( $(this).data('target') == "quandl" ) {
			api_keys['quandl'] = $("#action-input").val();
			fs.writeFile('pref/keys.conf',JSON.stringify(api_keys));
			getPmetals();
		}
	});


	// INIT PMETALS
	fs.readFile('pref/keys.conf',function(err,data){
		if (err) {
			console.log(err);
			if ( err.code == 'ENOENT') {
				fs.writeFile('pref/keys.conf','{}'); // create a blank file to solve this in the future
				// Now setup to insert Quandl key (at this time, handler for only one API)
				$("#action-notices").append('<div class="error">Missing API key for Quandl feeds <a id="add-quandl-key" href="#">Fix</a></div>').slideDown();
			}
		} else {
			api_keys = JSON.parse(data);
			if ( api_keys.quandl == '' ) {
				$("#action-notices").append('<div class="error">Missing API key for Quandl feeds <a id="add-quandl-key" href="#">Fix</a></div>').slideDown();
			} else {
				getPmetals();
			}
		}
	});
	

});

