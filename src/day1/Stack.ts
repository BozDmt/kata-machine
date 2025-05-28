type myNode<T>={
    value: T,
    //to remind that Stack is the opposite of Queue
    prev?: myNode<T>
}
export default class Stack<T> {
    public length: number
    private head?: myNode<T>

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node = {value:item} as myNode<T>;
        this.length ++;
        if(!this.head){
            this.head = node
            return
        }
        
        node.prev = this.head//new value points to one below it
        this.head = node//new value is at the top of the stack now
    }
    pop(): T | undefined {
        this.length  = Math.max(0,this.length -1)
        if(this.length === 0){// may be 0 already and return undefined but is somehow better than putting another if
            const head = this.head
            this.head = undefined
            return head?.value
        }
        const head = this.head as myNode<T>
        this.head = head.prev
        /*explicitly freeing memory- unnecessary for TS */
        head.prev = undefined
        
        return head?.value
    }
    peek(): T | undefined {
        return this.head?.value
    }
    peekAt(pos:number): T|undefined{
        // if(pos === 0){
        //     return this.peek()
        // }
        return this.traverse(pos,this.head)
    }
    private traverse(pos:number,node?:myNode<T>): T | undefined{
        if(!node?.prev || pos === 0){
            return node?.value
        }if(pos > this.length){
            console.error('length exceeded')
        }
        return this.traverse(--pos,node?.prev)
    }
}