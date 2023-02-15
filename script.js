//// arguments
// function sum(a,b){
//     console.log(arguments);
//     let res=0;
//     for (let i in arguments)
//     res+=arguments[i]
//     return res;
// }
//   console.log(sum("cvrcoe",10,20,30,40));


////rest
// function sum(name,...rest){
//     console.log(name,rest);
    
//     let res=0;
//     for(let i in rest)
//     res+=rest[i]
//     return res;

// }
// let arr=[10,20,30];
// console.log(...arr)

////rest
// function sum(name,...rest){
//     console.log(name,rest);
//     let res=0;
//     for(let i in rest)
//     res+=rest[i]
//     return res;

// }
// let arr=[10,20,30];
// console.log(...arr)


////spread
// let obj={
//     name:"shruthi",
//     age:20
// }
// console.log(obj);
// let obj1={
//     address:"hyd"
// }
// let newobj={
//     ...obj,...obj1
// }
// console.log(newobj);


////asyncronous-bind
// let addr="shruthi"
// let obj={
//     addr,
//      display:function(){
//         console.log(this)
//         setTimeout(function(){

        
//             console.log("inside",this.addr)
//         }.bind(this),2000);
//      }
// }
// obj.display()

////asynchronous-refer that to this 
// let addr="shruthi"
// let obj={
//     addr,
//      display:function(){ 
//         console.log(this)
//                let that=this
//         setTimeout(function(){

        
//             console.log("inside",that.addr)
//      },2000);
//      }
// }
// obj.display()

////asynchronous-fat arrow
// let addr="shruthi"
// let obj={
//     addr,
//      display:function(){
//         console.log(this)
//         setTimeout(() =>
//            {
        
//             console.log("inside",this.addr)
//         },2000);
//      }
// }
// obj.display()