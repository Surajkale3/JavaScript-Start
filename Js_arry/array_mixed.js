const monthName= ()=>

{
    const month=["jan","feb","march","may","july"];
    month.splice(3,0,"april")
    console.log(month);
    month.splice(4,3,"june");

    let filterMonths =month.filter(item=>item.length>4);
    console.log(filterMonths);
    
}

let output=monthName();
console.log(output);