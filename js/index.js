$(document).ready(function(){
	getRandomQuote();

	$("#generateQuote").on("click",function(){
		getRandomQuote();
	});

	function getRandomQuote(){
		//$("#loading-indicator").show();
		$("#spin-indicator").addClass("fa fa-refresh fa-spin");
		$.ajax({
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type:'POST',
			dataType:'json',
			beforeSend: function(request) {
				request.setRequestHeader('X-Mashape-Key', 'flmxzjVef7mshx4o5gbo5dlJVf17p1EOZgQjsnKhVhOi816Ueq');
			},
			success: function(val){
				var quote = val.quote;
				var author = val.author;
				$("#quote").html(quote);
				$("#author").html(author);
				//$("#loading-indicator").hide();
				$("#spin-indicator").removeClass("fa fa-refresh fa-spin");
				$("a").prop("href","https://twitter.com/intent/tweet/?text=\"" + quote + "\" " + author);

			},
			error:function(val){
				console.log(val);
				$("#spin-indicator").removeClass("fa fa-refresh fa-spin");
				//$("#loading-indicator").hide();
			}

		});
	}
});