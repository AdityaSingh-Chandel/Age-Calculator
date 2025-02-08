function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Please enter a valid birthdate.");
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();
    
    let age = today.getFullYear() - birthDateObj.getFullYear();
    let monthDiff = today.getMonth() - birthDateObj.getMonth();
    let dayDiff = today.getDate() - birthDateObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }
    if (dayDiff < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        dayDiff += prevMonth.getDate();
        monthDiff--;
    }

    let nextBirthday = new Date(today.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    let timeDiff = nextBirthday - today;
    let daysToBirthday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let resultMessage = `Your age is ${age} years, ${monthDiff} months, and ${dayDiff} days.`;

    if (monthDiff === 0 && dayDiff === 0) {
        resultMessage = "Happy Birthday! 🎉";
    } else {
        resultMessage += `\nYour next birthday is in ${daysToBirthday} days.`;
    }

    document.getElementById("result").textContent = resultMessage;
}
