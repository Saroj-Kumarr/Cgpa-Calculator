
const subjects = ["CAP : 408", "CAP : 456", "CAP : 457", " CAP : 615", "CAP : 680", "CAP : 756", "CAP : 757", "CAP : 770", "MTH : 403", "PEA : 516", "PEL : 542"];

const subjectLength = [5, 4, 3, 4, 3, 4, 3, 3, 5, 4, 5];
const subjectCredit = [1, 3, 1, 3, 1, 3, 1, 4, 4, 4, 3];

const inputBox = document.getElementById('container');
const box = document.getElementById('box');
const h3 = document.getElementById('h3');
const h4 = document.getElementById("h4");


let divideCredit = 28;
let totalCredit = 0;
let tempCredit = 0;
let count = 0;
let index = 0;
h3.innerHTML = subjects[index];
let credit = 1;



inputBox.addEventListener('keypress', function (event) {

    if (event.key == 'Enter') {
        tempCredit += parseInt(inputBox.value);
        inputBox.value = "";
        count++;
        console.log(tempCredit);
    }

    if (count == subjectLength[index]) {
        if (tempCredit >= 0 && tempCredit <= 9) {
          totalCredit = totalCredit + 1 * credit;
        } else if (tempCredit >= 10 && tempCredit <= 19) {
          totalCredit = totalCredit + 2 * credit;
        } else if (tempCredit >= 20 && tempCredit <= 29) {
          totalCredit = totalCredit + 3 * credit;
        } else if (tempCredit >= 30 && tempCredit <= 39) {
          totalCredit = totalCredit + 4 * credit;
        } else if (tempCredit >= 40 && tempCredit <= 49) {
          totalCredit = totalCredit + 5 * credit;
        } else if (tempCredit >= 50 && tempCredit <= 59) {
          totalCredit = totalCredit + 6 * credit;
        } else if (tempCredit >= 60 && tempCredit <= 69) {
          totalCredit = totalCredit + 7 * credit;
        } else if (tempCredit >= 70 && tempCredit <= 79) {
          totalCredit = totalCredit + 8 * credit;
        } else if (tempCredit >= 80 && tempCredit <= 89) {
          totalCredit = totalCredit + 9 * credit;
        } else if (tempCredit >= 90 && tempCredit <= 100) {
          totalCredit = totalCredit + 10 * credit;
        } else {
            h4.innerHTML = "Wrong input❌";
        }
        index++;
        h3.innerHTML = subjects[index];
        credit = subjectCredit[index];
        count = 0;
        tempCredit = 0;
        console.log(totalCredit);
    }
    if(index==10) {
        let cgpa = (totalCredit / divideCredit);
        inputBox.value = "Your CGPA : " + cgpa.toFixed(2);
    }
    
});