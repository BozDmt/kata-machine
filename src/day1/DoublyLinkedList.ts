type myNode<T>={
    value:T,
    prev?:myNode<T>,
    next?:myNode<T>
}
export default class DoublyLinkedList<T> {
    public length: number
    private head?: myNode<T>
    private tail?: myNode<T>
    

    constructor() {
        this.head = this.tail = undefined 
        this.length = 0
    }

    prepend(item: T): void {

    }
    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {

    }
    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {
        let curr = this.head
        for(let i= 0; i < idx && curr; ++i){
            curr = curr.next
        }
        return curr?.value
    }
    removeAt(idx: number): T | undefined {

    }
}