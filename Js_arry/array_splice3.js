const dayName= ()=>
{
    const day=['sun','mon','tues','thurs','sat'];
    day.splice(3,0,'wed');
    console.log(day);
    day.splice(4,5,'fri');
    console.log(day);
}
let result=dayName();