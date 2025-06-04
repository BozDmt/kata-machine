export default function two_crystal_balls(breaks: boolean[]): number {
    //return the index
    //const building:boolean[]=[50]; ordered array
    
    const jumpAmount:number = Math.floor(Math.sqrt(breaks.length))
    let j = 0,i = jumpAmount
    while(i < breaks.length){
        if(breaks[i]){
           break
        }
        i+=jumpAmount
    }
    console.log(`i: ${i}`)
    //return at the next to last jump it broke on
    i -= jumpAmount
    while(j < jumpAmount && j < breaks.length){
        if(breaks[i])
            return i

        j++,i++;

    }

    return -1
}
    //implement it another way
    // const jumpAmount = Math.floor(Math.sqrt(breaks.length))
    // let i = jumpAmount
    // for(;i<breaks.length;i+=jumpAmount){
    //     if(breaks[i]){
    //         break
    //     }
    // }

    // i-=jumpAmount

    // for(let j = 0;j<jumpAmount && j<breaks.length;++j,++i){
    //     if(breaks[i]){
    //         return i
    //     }
    // }