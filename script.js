const btn = document.getElementById("btn");
const result = document.getElementById("result");
const birthdate = document.getElementById("birthday");

btn.addEventListener("click",()=>{
    const birthdateInfo = birthdate.value;
    if (birthdateInfo === "") {
        alert("Please enter your birthday!");
    }
    else{
        const age = getAge(birthdateInfo);
        result.innerText = `Your age is ${age} ${age  > 1 ? "years" : "year"} old`;
    }
});

function getAge(birthdateInfo) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdateInfo);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
    
}