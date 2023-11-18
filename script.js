// console.log("h1");
const data = [
  { name: "john", age: 28, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
// 1. Print Developers
let date1;
let date2;
function printDeveloper() {
  for (let i of data) {
    if (i.profession == "developer") {
      console.log(i.name);
    }
  }
  date1 = prompt("Enter date1");
  date2 = prompt("Enter date2");
}
// 2. Add Data
function addData() {
  data[0].date = date1;
  data[1].date = date2;
  console.log(data[0].date);
  console.log(data[1].date);
}
// 3. Remove Admins
function removeAdmin() {
  for (i = 0; i < data.length; i++) {
    if (data[i].profession == "admin") {
      data.splice(i, 1);
    }
  }
  console.log(data);
}
// 4. Concatenate Array
function concatenateArray() {
  let arr = [1, 2, 3, 4];
  let arr1 = [5, 6, 7, 8];
  let arr3 = [...arr, ...arr1];
  console.log(`Array 1 is ${arr}`);
  console.log(`Array 2 is ${arr1}`);
  console.log(`Concatenated Array is ${arr3}`);
}
// 5. Average Age
function averageAge() {
  let sum = 0;
  for (let i of data) {
    sum = sum + i.age;
  }
  let avg_age = sum / data.length;
  console.log(avg_age);
}
// 6. Age Check
function checkAgeAbove25() {
  for (let i of data) {
    if (i.age > 25) {
      console.log(i.name);
    }
  }
}
// console.log("dev" of ["dev", "hi"]);
// 7. Unique Professions
function uniqueProfessions() {
  console.log("Incomplete");
}
// 8. Sort by Age
function sortByAge() {
  console.log("Incomplete");
}
// 9. Update Profession
function updateJohnsProfession() {
  for (let i of data) {
    if (i.name == "john") {
      i.profession = "Manger";
      //or
      // i.profession = prompt('Enter john profession:' );
      console.log(`John Profession is ${i.profession}`);
    }
  }
}
// 10. Profession Count
function getTotalProfessions() {
  let admins_count = 0;
  let developer_count = 0;
  for (let i of data) {
    if (i.profession == "admin") {
      admins_count++;
    } else {
      developer_count++;
    }
  }
  console.log(
    `Admins count ${admins_count} and Developer count ${developer_count}`
  );
}
