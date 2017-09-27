
	var number = Math.floor(Math.random() * 150 + 20)

	$("#numberDisplay").text(number);

	var ran1 = Math.floor(Math.random() * 15 + 1);
	var ran2 = Math.floor(Math.random() * 15 + 1);
	var ran3 = Math.floor(Math.random() * 15 + 1);
	var ran4 = Math.floor(Math.random() * 15 + 1);

	var userDisplay = 0;
	var wins = 0;
	var losses = 0;

	$("#winDisplay").text(wins);
	$("#lossesDisplay").text(losses);

	function reset() {
		number = Math.floor(Math.random() * 150 + 20);
		console.log(number)
		$("#numberDisplay").text(number);
		ran1 = Math.floor(Math.random() * 15 + 1);
		ran2 = Math.floor(Math.random() * 15 + 1);
		ran3 = Math.floor(Math.random() * 15 + 1);
		ran4 = Math.floor(Math.random() * 15 + 1);
		userDisplay = 0;
		$("#totalScore").text(userDisplay);
	}

	function match() {
		alert("You won!!!");
		wins++;
		$("#winDisplay").html(wins);
		reset();
	}

	function fail() {
		alert("You Lose!!!");
		losses++;
		$("#lossesDisplay").text(losses);
		reset();
	}

	$("#one").on('click', function(){
		userDisplay = userDisplay + ran1;
		console.log("User Score= " + userDisplay);
		$("#totalScore").text(userDisplay);

			if (userDisplay == number) {
				match();
			}
			else if (userDisplay > number) {
				fail();
			}
	})

	$("#two").on('click', function(){
		userDisplay = userDisplay + ran2;
		console.log("User Score= " + userDisplay);
		$("#totalScore").text(userDisplay);

			if (userDisplay == number) {
				match();
			}
			else if (userDisplay > number) {
				fail();
			}
	})

	$("#three").on('click', function(){
		userDisplay = userDisplay + ran3;
		console.log("User Score= " + userDisplay);
		$("#totalScore").text(userDisplay);

			if (userDisplay == number) {
				match();
			}
			else if (userDisplay > number) {
				fail();
			}
	})

	$("#four").on('click', function(){
		userDisplay = userDisplay + ran4;
		console.log("User Score= " + userDisplay);
		$("#totalScore").text(userDisplay);

			if (userDisplay == number) {
				match();
			}
			else if (userDisplay > number) {
				fail();
			}
	})


