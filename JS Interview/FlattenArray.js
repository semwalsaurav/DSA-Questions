let arr=[[1,2],[6,7,8,9],[45,[70,71,[72,[73,[74],75],76],[77,[78,79]]],47]];
function flattenArray(arr,depth=Infinity){
    let result=[];
    arr.forEach(element => {
       if(Array.isArray(element)&&depth>0){
           result.push(...flattenArray(element, depth-1));
       }else{
        result.push(element)
       }
    });
    return result;
}
console.log(flattenArray(arr)); // if we don't pass depth it will go upto maximum depth
console.log(flattenArray(arr,2)) // if we pass depth it wil go upto given depth