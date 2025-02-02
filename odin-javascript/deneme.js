// let user ={
//     name:"John",
//     surname:"Smith"
// }
// key = "name"
// console.log(user[key])
// user["name"] = "Pete"
// console.log(user[key])
// delete user.name
// console.log(user[key])
// let object1={
//     name:"deneme"
// }
// console.log(object1)
// function checkProp(object) {
// 	for(let prop in object){
//         console.log(prop)
//         if(prop!=null){
//             console.log("var")
//         }else{
//             console.log("yok")
//         }
//     }
// }
// checkProp(object1)

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// }
// let sum = 0
// for(prop in salaries){
//     sum+=salaries[prop]
// }
// console.log(sum)
let menu = {
	width: 200,
	height: 300,
	title: "My menu",
}
function multiplyNumeric(obj) {
	for (prop in obj) {
		if (typeof obj[prop] == "number") {
			obj[prop]=obj[prop]*2
		}
	}
}
multiplyNumeric(menu)
console.log(menu)