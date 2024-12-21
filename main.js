let color=document.querySelector(".color");
// console.log(color)
let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let count=6;
let val="#";
color.addEventListener("click",function(){
    for(let i=0;i<count;i++){
        val+= arr[Math.floor(Math.random()*arr.length)];
       }
     
       document.body.style.backgroundColor=val;
       val="#";
})
    
   

document.body.append(val);






// let arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// let arrhexa=[];
// for(let i=0;i<6;i++){
//     arrhexa.push(arr[Math.floor(Math.random()*arr.length)]);

// }
// let finalcolor=`#${arrhexa.join("")}`;
// // document.body.append(finalcolor);    //
// document.body.style.backgroundColor=finalcolor