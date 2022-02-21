//version-1
const ul = document.querySelector("#list");
const user1 = ul.firstElementChild;
const user2 = user1.nextElementSibling;
const user3 = user2.nextElementSibling;
const user5 = ul.lastElementChild;
const user4 = user5.previousElementSibling;


console.log("version-1:",user1.innerHTML + ',' + user5.innerHTML + ','
    + user2.innerHTML + ',' + user4.innerHTML + ',' + user3.innerHTML);

//version-2
const listArr =ul.children;
console.log("\nversion-2:",listArr[0].innerHTML + ',' + listArr[4].innerHTML + ','
    + listArr[1].innerHTML + ',' + listArr[3].innerHTML + ',' + listArr[2].innerHTML);
