let dogNames = [];
for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the name of dog:`);
   dogNames.push(name);
}
dogNames.sort().reverse();

let ul = document.createElement('ul');
dogNames.forEach(name => {
    let li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
});


document.body.appendChild(ul);

