// RLRRLLRLRL
 // RL RRLLL RL RL  == 4


 // RLRRRLLRLL

 // RL RRRLLRLL

//  LLLLRRRR


const letters=['L','R']

let lArray=[]
let rArray=[]

let lCount=0
let rCount=0


const getSameStringCount = (string) =>{
    const arrayValue=string.split('')
    arrayValue.forEach((key)=>{
       if( key==letters[0]){
        console.log("key",key);
        lArray.push("L")
        lCount=lCount+1;
       }else if(key==letters[1]){
        console.log("key",key);
        rArray.push(key)
        rCount++;
       }
    })
}







const getValue=getSameStringCount("RLRRLLRLRL")

console.log(lCount);
console.log(rCount);

const Count =Math.min(lCount,rCount)

console.log("Count",Count);