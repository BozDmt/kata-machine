type myNode<T> = {
    value: T,
    next?:myNode<T>
}

export default class Queue<T> {
    public length: number
    private head?: myNode<T>
    private tail?: myNode<T>
    

    constructor() {
        this.head = this.tail = undefined
        this.length = 0 
    }

    enqueue(item: T): void {
        const node = {value:item} as myNode<T>
        
        this.length ++
        if(!this.tail || !this.head) {
            this.head = this.tail = node
            return
        }

        
        this.tail.next = node
        this.tail = node
    }
    deque(): T | undefined {
        if(!this.head){ 
            return undefined
        }
        this.length --
        //isolate the value
        const head = this.head
        //set the head to the next in queue
        this.head = this.head.next

        //unnecessary for js because has garbage collection but nonetheless that's what's happening in reality
        // head.next = undefined
        if(this.length ===0 ){
            this.tail = undefined
        }
        //return the removed item
        return head.value
    }
    peek(): T | undefined {//retrieves the value of the first item
        return this.head?.value
    }
    peekAt(x: number): T | number | undefined | Error{
        if(!this.head){
            return undefined
        }
        else if(x > this.length){
            const err = new Error('Queue length exceeded. Invalid operation.')
            return err
        }else if(x < 0){
            return undefined
        }else if(x === 0){
            return this.peek()
        }
        
        return this.traverse(x,this.head)
    }
    private traverse(pos: number, node?: myNode<T>): T | number | undefined {
        
        if(!node?.next || pos === 0){
            return node?.value
        }

        return this.traverse(--pos,node?.next)
    }
    contains(item: T):boolean{
        let nextNode = this.head
        while(true){
            if(nextNode?.value === item){
                return  true
                
            }else if(!nextNode?.next){
                return false
            }
            nextNode = nextNode?.next
        }
        
    }
}
