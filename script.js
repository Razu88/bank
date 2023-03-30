var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var balance = 1000;

function processTransaction() {
	var amount = parseFloat(document.getElementById("amount").value);
	var transactionType = document.getElementById("transactionType").value;
	
	if (transactionType === "deposit") {
		deposit(amount);
	} else if (transactionType === "withdraw") {
		withdraw(amount);
	}
}

function deposit(amount) {
	balance += amount;
	drawTransaction(amount, "green", "Deposited");
}

function withdraw(amount) {
	if (balance >= amount) {
		balance -= amount;
		drawTransaction(amount, "red", "Withdrawn");
	} else {
		drawTransaction(amount, "orange", "Insufficient Funds");
	}
}

function drawTransaction(amount, color, message) {
	ctx.fillStyle = color;
	ctx.fillRect(10, 10, 200, 50);
	ctx.fillStyle = "white";
	ctx.font = "20px Arial";
	ctx.fillText(message + " " + amount.toFixed(2), 20, 40);
	ctx.fillText("New Balance: " + balance.toFixed(2), 20, 70);
}
