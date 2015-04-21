function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}



function Property(){
	this.propertyId = randomNumber(300,5000);
	this.sqft = randomNumber(250, 2000);
	this.dollars = randomNumber(1, 25);
	this.totalCost = this.dollars * this.sqft;
}

$(document).ready(function () {
	$("#generate").on("click", function() {
		var newProperty = new Property();
		$("#random").append("<div><div class='cell'>" + newProperty.propertyId + "</div><div class='cell'>" + newProperty.sqft + "</div>" 
			+ "<div class='cell'>$" + newProperty.dollars +"/sqft</div><div class='cell'>$" + newProperty.totalCost + "</div><div class='cell'><button class='removeButton'>Remove</button></div></div>");
		$("#random").children().last().hide().slideDown("slow");
	});
	$("#random").on('click', '.removeButton', function() {
			$(this).parent().parent().slideUp();
	});
});

