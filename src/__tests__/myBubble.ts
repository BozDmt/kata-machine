import bubble_sort from '@code/myBubble'

test("my-bubble-sort",function(){
    const arr = new Array(1000)
    for ( let i = 1; i< 1001; ++i){
        arr[i-1] = i
    }
    
    const myArr = new Array(1000).fill(null)
    const exhausted = new Array(1000).fill(null)
    let val = 0
    const hi = 1000
    const lo = 1
    
    for ( let k =  0; k < 1000;++k){
        val = Math.floor((Math.random()* (hi-lo + 1)))+lo
        if(!exhausted[val-1]){
            exhausted[val-1]=myArr[k]=val
        }else{
            k --
        }
    }

    debugger
    bubble_sort(myArr)
    expect(myArr).toEqual(arr)
})
