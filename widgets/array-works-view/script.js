const main = document.getElementById("main"),
  addUserBtn = document.getElementById("add-user"),
  doubleBtn = document.getElementById("double"),
  showMillionairesBtn = document.getElementById("show-millionaires"),
  sortBtn = document.getElementById("sort"),
  calculateWealthBtn = document.getElementById("calculate-wealth");
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function doubleMoney() {}

function sortByRichest() {}

function showMillionaires() {}

function calculateWealth() {}

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
