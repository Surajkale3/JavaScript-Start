

// Loop in array 



// Variable define 
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}


// after
items.forEach((x)=>
{
    copyItems.push(x);
})


console.log(copyItems);
