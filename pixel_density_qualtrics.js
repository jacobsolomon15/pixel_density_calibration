Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/

	var slider = document.getElementById("scale_slider");
	var credit_card_img = document.getElementById("credit_card");
	var start_height = credit_card_img.height;
	var start_width = credit_card_img.width;

	slider.oninput = function(){
		var scalar = slider.value / 50;
		credit_card_img.height = start_height * scalar;
		credit_card_img.width = start_width*scalar;
	}

	slider.onchange = function() {
		var dpi = credit_card_img.width / 3.37;
		this.setEmbeddedData("dpi", dpi);
	}
});
