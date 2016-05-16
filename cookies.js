
		$(document).ready(function(){
			// on click, increment up either sugar, chocolate, or lemon, depending on which check box is clicked, every time a check box is clicked, count up 1.
			// 
			var count1 = Cookies.get("key1");
			var count2 = Cookies.get("key2");
			var count3 = Cookies.get("key3");
			$('#c1').text(count1);
			$('#c2').text(count2);
			$('#c3').text(count3);
	 		
	    if(Cookies.get("key1")) {
        $("#cookie1").on('click', function() {
            count1++;
            Cookies.set("key1", count1);
            $("#c1").text(count1);
        });
		    }
		    else {
		        Cookies.set("key1", 0);
		    };

		    // $('#clearc1'.on('click', function(){
		    // 		Cookies.set("key1", 0);
		    // }));
	 
	    if(Cookies.get("key2")) {
        $("#cookie2").on('click', function() {
            count2++;
            Cookies.set("key2", count2);
            $("#c2").text(count2);
        });
		    }
		    else {
		        Cookies.set("key2", 0);
		    };

		  
	 
	    if(Cookies.get("key3")) {
        $("#cookie3").on('click', function() {
            count3++;
            Cookies.set("key3", count3);
            $("#c3").text(count3);
        });
		    }
		    else {
		        Cookies.set("key3", 0);
		    };

		    $("#clearc1").on('click',function(){
					var clearOne = Cookies.set('key1',0);
					count1 = 0
					$('#c1').text(Cookies.get('key1'))
				});

		    $("#clearc2").on('click',function(){
					var clearTwo = Cookies.set('key2',0);
					count2 = 0
					$('#c2').text(Cookies.get('key2'))
				});

		    $("#clearc3").on('click',function(){
					var clearThree = Cookies.set('key3',0);
					count3 = 0
					$('#c3').text(Cookies.get('key3'))
				});
		// 	function set_cookies() {
		// 			if (Cookies.set($('#cookie1').text())){
		// 				$('#cookie1-number').text(Cookies($('#cookie1').text()));
		// 				$('#cookie2-number').text(Cookies($('#cookie2').text()));
		// 				$('#cookie3-number').text(Cookies($('#cookie3').text()));
		// 			}	else {
		// 					Cookies.set($('#cookie1').text(), ('#cookie1-number').text());
		// 					Cookies.set($('#cookie2').text(), ('#cookie2-number').text());
		// 					Cookies.set($('#cookie3').text(), ('#cookie3-number').text());

		// 	};
		// }
		// $('.button').click(function(){
	 //  		var count = $('.'+$(this).attr('class')).text();
 	// 			Cookies.set(cookie, parseInt(Cookies(cookie)) + 1);
 	// 			var num = Cookies(cookie);
 	// 			$('.'+ (this).attr('class') + '-number').text(num);
 	// 			$('#message').text("You stole " + cookie + " Cookies!")
		// });

		// set_cookies

});		