var balance = 0;
var balanceElement = document.getElementById("balance");

function earn() {
	var amount = parseFloat(document.getElementById("amount").value);
	if (amount > 0) {
		balance += amount;
		updateBalance();
	}
}

function spend() {
	var amount = parseFloat(document.getElementById("amount").value);
	if (amount > 0 && amount <= balance) {
		balance -= amount;
		updateBalance();
	}
}

function updateBalance() {
	balanceElement.innerText = balance.toFixed(2);
}
