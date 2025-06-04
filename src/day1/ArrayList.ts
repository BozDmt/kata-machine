// type myNode<T> = {
//     value:T,
//      idx: number
// }
import bs_list1 from "./BinarySearchList"

export default class ArrayList/*<T>*/{
    public length: number
    public capacity: number = 65536
    private buff:ArrayBuffer
    private view:DataView

    constructor(cap:number) {
        this.length = 0    
        this.buff = new ArrayBuffer(/*(cap * 2),{maxByteLength:2**16}*/2**16)
        this.view = new DataView(this.buff,0)
    }
    
    prepend(item: number): void {
        // if(this.length === this.capacity)
        //     this.buff.resize(this.capacity * 2)
        for(let i = this.length * 2; i >= 0; i -= 2){
            this.view.setUint16(i + 2,this.view.getUint16(i))    
        }
        this.view.setUint16(0,item)
        if(this.view.getUint16(0) === item){
            console.log('Successful operation')
        }
        this.length++
    }
    insertAt(item: number, idx: number): void {
        if(idx === 0){
            this.prepend(item)
        }
        // else if(idx > this.capacity && idx <= this.capacity * 2){
        //     this.buff.resize(this.capacity * 2)
        // }
        for(let i = this.length; i >= idx * 2; i-=2){
            this.view.setUint16(i+2, this.view.getUint16(i))
        }
        this.view.setUint16(idx,item)
        if(this.view.getUint16(idx*2) === item){
            console.log('Successful operation')
        }
    }
    append(item: number): void {
        this.view.setUint16(this.length * 2, item)
        this.length++;
        // if(this.length + 1 >= this.capacity){
        //     this.buff.resize(this.capacity * 2)
        // }
    }
    deque(): number | undefined {
        //i'm not moving it bruh
        if(this.length === 0)
            return undefined
        const num = this.view.getUint16(0)
        
        this.view.setUint16(0, 0)
        this.length = Math.max(0,this.length-1)
        const len = this.length === 0? 1: this.length * 2

        for(let i = 0; i < len; i +=2){
            this.view.setUint16(i,this.view.getUint16(i+2))
        }
        return num
    }
    remove(item:number): number| undefined{
        /*
            !!!TODO 
            notes:
             ?adjust function arguments for byte counting 
        */
        // const idx = bs_list1(this.view,item)
        return 
    }
    get(idx: number): number | undefined {
        return this.view.getUint16(idx*2)
    }
    removeAt(idx: number):number|undefined{
        this.length = Math.max(0, this.length-1);
        const len = this.length === 0 ? 1 : this.length*2
        const num = this.view.getUint16(idx*2)

        for(let i = idx*2; i < len; i+=2){
            this.view.setUint16(i,this.view.getUint16(i+2))
        }
        
        this.view.setUint16(this.length*2,0)

        if(this.view.getUint16(idx*2) !== num){
            console.log('successful operation')
            return num
        }
        return undefined
    }
}