(function() {
		var textHolder = document.getElementById('title-neon'),
  			text = textHolder.innerHTML,
			chars = text.length,
			newText = '',
			i;
		
		for (i = 0; i < chars; i += 1) {
			newText += '<label>' + text.charAt(i) + '</label>';
		}
		
		textHolder.innerHTML = newText;
		
		var letters = document.getElementsByTagName('label'),
			flickers = [5, 7, 9, 11, 13, 15, 17],
			randomLetter,
			flickerNumber,
			counter;
		
		function randomFromInterval(from,to) {
			return Math.floor(Math.random()*(to-from+1)+from);
		}

		function hasClass(element, cls) {
    		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
		}

		function flicker() {		
			counter += 1;
			if (counter === flickerNumber) {
				return;
			}		
			setTimeout(function () {
				if(hasClass(randomLetter, 'off')) {
					randomLetter.className = '';
				} else {
			randomLetter.className = 'off';
		}
		flicker();
	}, 30);
}
(function loop() {
    var rand = randomFromInterval(100,500);
	randomLetter = randomFromInterval(0, 14);
	randomLetter = letters[randomLetter];
	flickerNumber = randomFromInterval(0, 6);
	flickerNumber = flickers[flickerNumber];
    setTimeout(function() {
            counter = 0;
            flicker();
            loop();
    }, rand);
}());
})();