//                                Kilometer To Meter Problem
function kilometerToMeter(inputValue) {
    const factor = 1000; // conversion factor

    var meter = inputValue * factor; //calculation formula

    if (inputValue < 0) {
        return meter = console.log("Distance cannot be negative! Please insert positive value."); // Warning text.
    } else {
        return meter;
    }
}

//                                 Kilometer To Meter Problem

//                                 Budget Calculator Problem

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {

    var totalBudget;

    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return total = console.log("Quantity of the product cannot be negative.")
    } else {
        var watchPrice = numberOfWatch * 50;
        var phonePrice = numberOfPhone * 100;
        var laptopPrice = numberOfLaptop * 500;
        total = watchPrice + phonePrice + laptopPrice;
        return totalBudget;
    }
}

//                                 Budget Calculator Problem

//                                 Hotel Cost Problem

function hotelCost(stayingDays) {

    var totalHotelCost;
    var remainingDays;

    if (stayingDays <= 0) {
        return totalHotelCost = console.log("Sorry!! Your stay in the hotel days value is negative. You have to stay at the hotel first."); // Warning text.
    } else {
        if (stayingDays <= 10) {
            totalHotelCost = stayingDays * 100;
            return totalHotelCost;
        } else if (stayingDays <= 20) {
            remainingDays = stayingDays - 10;
            var firstTenDay = 10 * 100;
            totalHotelCost = firstTenDay + (remainingDays * 80);
            return totalHotelCost;
        } else {
            remainingDays = stayingDays - 20;
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            totalHotelCost = firstTenDay + secondTenDay + (remainingDays * 50);
            return totalHotelCost;
        }
    }

}


//                                 Hotel Cost Problem

//                                 Mega Friend Problem 

function megaFriend(friendName) {
    var initialString = friendName[0].length;
    var longestString = friendName[0];
    for (var i = 1; i < friendName.length; i++) {
        var longestString = friendName[i].length;
        if (longestString > initialString) {
            longestString = friendName[i];
            // initialString = maximumLength;
        }
    }
    return longestString;
}


//                                 Mega Friend Problem