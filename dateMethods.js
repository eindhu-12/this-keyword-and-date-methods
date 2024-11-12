let date=new Date();
console.log(date)
console.log("--------------get----------------------")

console.log("time:-",date.getTime());  //since 1 jan 1970
console.log("Day:-", date.getDay()); //mon-sun
console.log("Hours:-", date.getHours()); //0-23
console.log("Minutes:-", date.getMinutes()); //0-59
console.log("Seconds:-", date.getSeconds()) //0-59
console.log("Milliseconds:-",date.getMilliseconds()) //0-999
console.log("Year:-",date.getFullYear()); 
console.log("Year:-",date.getMonth());  //0-11
console.log("Year:-",date.getDate());   //1-31
console.log("TimezoneOffset:-",date.getTimezoneOffset())
console.log("UTCDate:-",date.getUTCDate())
console.log("UTCMonth:-",date.getUTCMonth())

// -----------------------------set------------------------------------
console.log("---------------set-----------------")

let x=new Date();
console.log("Date:-",x)
// console.log("setTime:-",x.setTime(120))
console.log("setHours:-",x.setHours(12))
console.log("setMinutes:-",x.setMinutes(13));
console.log("setSeconds:-",x.setSeconds(23));
console.log("setMilliseconds:-",x.setMilliseconds(223));
console.log("toDateString:-",x.toDateString());
console.log("toTimeString:- ",x.toTimeString());
console.log("toLocaleDateString:-",x.toLocaleDateString());
console.log("toLocaleTimetring:-",x.toLocaleTimeString());
console.log("setFullYear:-",x.setFullYear(2025));
console.log("setUTCFullYear:-",x.setUTCFullYear(2025));

// ---------------------------------this Keyword----------------------------
// obj={
//     name:"Eindhu",
//     id:12334,
//     color:"black",
//     thisKey:function(){
//         console.log(this.name,"Helo");
//     }

// }
// console.log(obj.thisKey)

console.log("----------this Keyword------------")

obj={
    name:"Eindhu",                  //call()
    id:12334,
    color:"black"
}
let getFromObj=function(y){
    console.log("Helo",this.name+" "+y);
}
// getFromObj.call(obj)        //Helo Eindhu
getFromObj.call(obj,"How are you!.")  //pass parameter y and and also console y along with this

getFromObj.apply(obj,["How are you!.","R u okay!!!"]) ;//Helo Eindhu   How are you!.R u okay!!!--- //pass required parameter based on array elements(x,y) i have only 2 elements in array

let c=getFromObj.bind(obj,[56,"helo","hi","how are you ?"]);
c()


