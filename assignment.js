// https://github.com/shahedzaman-web/assignment-3


//                                Kilometer To Meter Problem
function kilometerToMeter(inputValue) {
    const factor = 1000; // conversion factor

    var meter = inputValue * factor; //calculation formula

    if (inputValue < 0) {
        return meter = console.log("Distance cannot be negative! Please insert positive value."); // Warning text , if value is negative.
    } else {
        return meter;
    }
}

// console.log(kilometerToMeter(12));

//                                 Kilometer To Meter Problem

//                                 Budget Calculator Problem

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {

    var totalBudget;

    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return total = console.log("Quantity of the product cannot be negative.") // Warning text , if value is negative.
    } else {
        var watchPrice = numberOfWatch * 50; //Calculate Watch price (50Taka)
        var phonePrice = numberOfPhone * 100; //Calculate Phone price (100Taka)
        var laptopPrice = numberOfLaptop * 500; //Calculate Laptop price(500Taka)
        totalBudget = watchPrice + phonePrice + laptopPrice; //Calculate Total price
        return totalBudget;
    }
}

//console.log(budgetCalculator(2, 3, 4));
//                                 Budget Calculator Problem

//                                 Hotel Cost Problem

function hotelCost(stayingDays) {

    var totalHotelCost; // Variable for Total Hotel Cost
    var remainingDays; //Variable for Remaining Days
    var firstTenDay = 10 * 100; //First ten days Hotel cost
    var secondTenDay = 10 * 80; //Second ten days Hotel cost

    if (stayingDays <= 0) {
        return totalHotelCost = console.log("Sorry!! Your stay in the hotel days value is negative. You have to stay at the hotel first."); // Warning text , if value is negative.
    } else {
        if (stayingDays <= 10) {
            totalHotelCost = stayingDays * 100; //Total calculation for in between ten days.
            return totalHotelCost;
        } else if (stayingDays <= 20) {
            remainingDays = stayingDays - 10; //Calculation for after ten days.

            totalHotelCost = firstTenDay + (remainingDays * 80); //Total calculation for in between twenty days.
            return totalHotelCost;
        } else {
            remainingDays = stayingDays - 20; //Calculation for after twenty days.
            totalHotelCost = firstTenDay + secondTenDay + (remainingDays * 50); //Total calculation , if more than twenty days.
            return totalHotelCost;
        }
    }

}
//console.log(hotelCost(17));

//                                 Hotel Cost Problem

//                                 Mega Friend Problem 

function megaFriend(friendName) {
    var initialString = friendName[0].length; //Initializing Value for array first string
    var resultString = friendName[0]; //Let first string has longest name.
    for (var i = 1; i < friendName.length; i++) {
        var longestString = friendName[i].length;
        if (longestString > initialString) {
            resultString = friendName[i];
            initialString = longestString;

        }
    }
    return resultString;
}


// console.log(megaFriend(["Shahed", "Zaman", "Rifat", "Araf"]));
// console.log(megaFriend(["ab", "a", "abcd"]));

//                                 Mega Friend Problem
