function noRepeat(str:string){
    let final:string[][]=[];
    for(let i in str.split("")){
        let strArray = str.split("")
        let aux = strArray.splice(parseInt(i),1).join("");
        console.log(aux,strArray);
        final.push(permutation(aux,strArray))
      
    }
    // console.log(final.flat(1));
    let flattenedAndFiltered = final.flat(1).filter((Element) => {
    let sw=0;
    for(let w=0; w<Element.length-1; w++){
        if(Element.charAt(w)===Element.charAt(w+1)){
            sw=1;
            break
        }            
    }
    return sw === 0;      
})
console.log(flattenedAndFiltered);

}

function permutation(word:string,arrayWord:string[]):string[]{
    let result=new Set<string>();
    for(let i of arrayWord){
        let newArray = [...arrayWord];
        while(newArray.length>0){
            let c = newArray.splice(0,1)
            result.add(word+i+c.join(""))
        }
    }
    console.log([...result.values()]);
    return [...result.values()]
}

noRepeat("aab");
