//quick tip for time saving
const dir = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
]

function helper(maze:string[],wall:string,curr:Point, end:Point,seen:boolean[][],path:Point[]):boolean{
    let i = 0
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length){
        return false
    }
    if(maze[curr.y][curr.x] === wall){  
        return false
    }
    if(curr.x === end.x && curr.y === end.y){
        path.push(end)
        return true
    }
    if(seen[curr.y][curr.x]){
        return false
    }
    
    //recursion steps:
    //pre
    seen[curr.y][curr.x] = true    
    path.push(curr)
    //recurse
    //in all 4 directions
    for(let i =0; i< dir.length/*=4*/; ++i){
        const [x,y] = dir[i]
        if(helper(maze,wall,{
            x:curr.x + x,
            y:curr.y + y
        },end,seen,path)){
            return true
        }
    }
    //post
    path.pop()
    
    return false 
}

export default function MazeSolver(maze:string[],wall:string = "#",start:Point,end:Point):Point[]{
    const seen: boolean[][]=[]
    const path:Point[] = []
    for(let i = 0; i < maze.length; ++i){
        seen.push(new Array(maze[0].length).fill(false))
    }
    helper(maze,wall,start,end,seen,path)
    return path
}

