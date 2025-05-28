export default function bubble_sort(arr: number[]):void {
    // start traversing the array 
    console.log('elements before sorting')
    for(let m = 0; m < 10; m++){
        console.log(arr[m])
    }

    for(let j = 0; j< arr.length; ++j){
        for(let i = 0; i < arr.length - 1; ++i){
            //need to find if the current element is bigger than the next 
            if(arr[i] > arr[i + 1]){
                //swap the elements
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                //swapping this way works for only one element- complexity should be n^2
            }
        }
    }
    console.log('elements after sorting')
    // for(let m = 0; m < 10; m++){
    //     console.log(arr[m])
    // }
    console.log(' Length: ' + arr.length)
}
