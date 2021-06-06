//new add to todo list
//list shows the output
//delete an element from array
//quit the app
const list = ["play","study","read","gym"]
let input = prompt("What would you like to do");

while( input !== "quit"){

    if(input === "list"){
        console.log("************");
       for(i=0; i<list.length;i++){ 
           console.log(`${i}:${list[i]}`);
    }
    console.log("************");
}
     else if(input === "new"){
        const newtodo = prompt("OK whats new to be added");
        list.push(newtodo);
        console.log(`${newtodo} added to the list`);
     }
      else if(input === "delete"){
          const index = prompt("OK whats to be deleted")
          const deleted = list.splice(index,1);
          console.log(`OK deleted ${deleted}`);
      }
    input = prompt("What would you like to do");
}
console.log("OK QUIT THE APP")
