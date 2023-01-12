const odd= (numbers)=>
{
    return numbers<10;

}
const oddno=[1,3,5,7,9,11,13,15,17,19,21]
let list=oddno.filter(odd);
console.log(list);