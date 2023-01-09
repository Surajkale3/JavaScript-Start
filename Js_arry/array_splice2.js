const monthName= ()=>
{
    const month=['jan','feb','march','may','july','aug','oct']
    month.splice(3,0,'april');
    console.log(month);
    month.splice(5,2,'june','baishak');
    console.log(month);

}
let arr= monthName();
