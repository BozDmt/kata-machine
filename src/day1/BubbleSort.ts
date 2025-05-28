export default function bubble_sort(arr: number[]): void {
    //array=[3,1,4,5,6,2]
    //if 1 < 3 arr[1] = 3 arr[0] = 1; if arr[2] < arr[1] swap again and so on
    
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j < arr.length - 1 ; j++){
                if(arr[i] > arr[j+i]){
                    let k = arr[i]
                    arr[i] = arr[j+i]
                    arr[j+i] = k
                }
            }
        }
    
    
}