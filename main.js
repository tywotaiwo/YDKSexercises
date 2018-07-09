const TAX_RATE = 0.18;
const PHONE_PRICE = 5000;
const ACCESSORY_PRICE = 100;

var accountBalance, numberOfBoughtPhones = 0, numberOfAccessories;

var accountBalance = prompt("What is your account Balance");
numberOfBoughtPhones = 0, numberOfAccessories = 0;

var accountBalance = prompt("What is your account Balance");

while(accountBalance >= PHONE_PRICE){
    buyaphone();
    buyScreenProtector();

}
reportStatus();


function buyaphone(){
    numberOfBoughtPhones++;
    accountBalance =  accountBalance - PHONE_PRICE - (PHONE_PRICE * TAX_RATE);

}

function buyScreenProtector() {
    if(accountBalance > ACCESSORY_PRICE){
        accountBalance = accountBalance - ACCESSORY_PRICE - (ACCESSORY_PRICE * TAX_RATE);;

        numberOfAccessories++;
    }
    else {
        console.log("You can't afford to add a screen protector");
    }
}

function reportStatus(){
    console.log("You just bought " + numberOfBoughtPhones + " new phone(s) and " + numberOfAccessories + " screen protector" );
    console.log("And you have $" + accountBalance.toFixed(2) + " left in your account");
}