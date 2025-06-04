export default function mySum(num:number):number{
    if(num === 1)
        return 1
    return num + mySum(num - 1)
}
console.log(mySum(5))
/**return 5 + mySUm(4) -> 15
    * return 4 + mySum 3 -> 10
        * return 3 + mySum 2 -> 6
            * return 2 + mySum 1 -> 3
*/