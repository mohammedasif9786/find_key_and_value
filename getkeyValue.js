function getKeysAndValues(obj) {

    let [finalArr, keysArr , valuesArr] =[[] ,[] ,[]]
     
    for(i in obj){
        
        keysArr.push(i);
        valuesArr.push(obj[i])
        
     }

    finalArr =[keysArr , valuesArr]
   return finalArr

}

getKeysAndValues({name: "asif" , roll_no : 1155606})