const monthName= ()=>
{
    const month=['jan','feb','march','may','july']
    month.splice(3,0,'april');
    console.log(month);
    month.splice(5,1,'june');
    console.log(month);

}
let arr= monthName();
console.log(arr);