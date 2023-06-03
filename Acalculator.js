function calculate() {
    setInterval(() => {
        let birthday = new Date(document.getElementById('birthdate').value);
        let now = new Date();
        let ageInMs = now.getTime() - birthday.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMin = ageInS / 60;
        let ageInHrs = ageInMin / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMnt = ageInDays / 30,4375;
        let ageInYr = ageInMnt / 12;

        document.querySelector('#years').innerHTML = Math.floor(ageInYr);
        document.querySelector('#months').innerHTML = Math.floor(ageInMnt % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30),4375;
    }, 1000);
}

function reset() {
    window.location.reload();
}
