//here we declare variables for each of the parameters, days, hour, minutes and seconds
let dayBox = document.getElementById("day_box");
let hourBox = document.getElementById("hr_box");
let minuteBox = document.getElementById("min_box");
let secondBox = document.getElementById("sec_box");

//Here we are going to set the deadline for the giveaway

let endDate = new Date("nov 30,2024 11:59:00");

//output value in miliseconds
//getTime converts time to miliseconds
let endTime = endDate.getTime();

function countings(){
let todayDate = new Date();
let todayTime = todayDate.getTime();
let remainderTime = endTime - todayTime;


//60 seconds is 1000 milliseconds
let oneMin = 60 * 1000;

//1 hour = 60 minutes (we have already converted our seconds to miliseconds above, so we just use the declared variable here)
let oneHr = 60 * oneMin;

//1day = 24 hours
let oneDay = 24 * oneHr;

//here we manipulate using a function to format number if it is single digit
let addZero = num => num < 10 ? `0${num}`: num;

//if expiry date is before today's date
if(endTime < todayTime){
    clearInterval(i);
    document.querySelector(".countings").innerHTML = '<h1>Oooops, you came late, Giveaway has expired. Mr. Hilson Won it</h1>';
    document.querySelector("marquee").innerHTML = "EXPIRED SINCE 30TH NOV 2022"
}

//if expiry date which is endDate is not before today
else{
    //calculating remaining days, hours, mins, seconds
    //We use Math.floor to round off to the nearest whole number
    let daysLeft = Math.floor(remainderTime / oneDay);
    let hrLeft = Math.floor((remainderTime % oneDay)/oneHr);
    let minLeft = Math.floor((remainderTime % oneHr)/oneMin);
    let secsLeft = Math.floor((remainderTime % oneMin)/1000);
    
    //here we display our result in the place provided using already declared and assigned variables

    dayBox.textContent = addZero(daysLeft);
    hourBox.textContent = addZero(hrLeft);
    minuteBox.textContent = addZero(minLeft);
    secondBox.textContent = addZero(secsLeft);
}

}
let i = setInterval(countings,1000);
countings(); 





