'use strict';


const information = [];
function Employees (fullName,department,level,photo) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.photo = photo;
  this.employeeID=this.employeeID();
  this.theSalary=this.theSalary();
  information.push(this);
  
}

Employees.prototype.employeeID = function() {
  
     return Math.floor(Math.random()*100) + 300;
}
Employees.prototype.theSalary = function () {
  var minSalary, maxSalary;
  switch (this.level) {
    case "Senior":
      minSalary = 1500;
      maxSalary = 2000;
      break;
    case "Mid-Senior":
      minSalary = 1000;
      maxSalary = 1500;
      break;
    case "Junior":
      minSalary = 500;
      maxSalary = 1000;
      break;
    default:
      minSalary = 0;
      maxSalary = 0;
  }
      var randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
      var netSalary = Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
     
      return netSalary;
    

}
let employee1 =new Employees ("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
let employee2 =new Employees ("Lana Ali","Marketing","Mid-Senior","./assets/Lana.jpg");
let employee3 =new Employees ("Tamara Ayoub","Development","Senior","./assets/Tamara.jpg");
let employee4 =new Employees ("Safi Walid","Finance","Junior","./assets/Safi.jpg");
let employee5 =new Employees ("Rana Saleh","Development","Junior","./assets/Rana.jpg");
let employee6 =new Employees ("Hadi Ahmad","Marketing","Senior","./assets/Hadi.jpg");
console.log(employee6);


for (let i = 0; i < information.length; i++) {

  let divE=document.createElement("div")
  let body=document.getElementsByTagName("body")[0];
  body.appendChild(divE);
  
  let employeeImage=document.createElement("img");
  employeeImage.src=information[i].photo;
  employeeImage.alt=information[i].fullName;
  divE.appendChild(employeeImage);
  
  let employeeName=document.createElement("h5");
      employeeName.textContent=` Name: ${information[i].fullName}`;
      divE.appendChild(employeeName);
  
  let employeedepartment=document.createElement("h5");
      employeedepartment.textContent=` department: ${information[i].department}`;
      divE.appendChild(employeedepartment);
  
  let employeelevel=document.createElement("h5");
      employeelevel.textContent=` level: ${information[i].level}`;
      divE.appendChild(employeelevel);
  
  let employeeid=document.createElement("h5");
      employeeid.textContent=` ID: ${information[i].employeeID}`;
      divE.appendChild(employeeid);
  
  let employeesalary=document.createElement("h5");
      employeesalary.textContent=` salary: ${information[i].theSalary}`;
      divE.appendChild(employeesalary);
      divE.style.border="2px solid black";
    

// for (let i = 0; i < information.length; i++) {
//   document.write("Employee name: " + information[i].fullName + "<br>");
//   document.write("Department: " + information[i].department + "<br>");
//   document.write("Employee salary: " + information[i].theSalary() + "<br>")
  
//  } 


  
 } 

// for (let i = 0; i < information.length; i++) {
//   document.write("Employee name: " + information[i].fullName + "<br>");
//   document.write("Department: " + information[i].department + "<br>");
//   document.write("Employee salary: " + information[i].theSalary() + "<br>")
  
//  } 




// for (let i = 0; i < information.length; i++) {
//   document.write("Employee name: " + information[i].fullName + '<br>'); }
  
// for (let i = 0; i < information.length; i++) {
//   document.write('Department: ' + information[i].department + '<br>'); }
  
// for (let i = 0; i < information.length; i++) {
//   document.write('Employee salary: ' + information[i].theSalary() + '<br><br>');
// }

// document.write(`Employee name : ${this.fullName} 
//   <br>Employee salary :${this.theSalary()}`);



// let employee1 = {
//     fullName: "Ghazi Samer",
//     department: "Administration",
//     level: "Senior",
//     imageURL: ".jpg",
//     employeeID: function () {
//       return Math.floor(Math.random()*100) + 300;
//     },
//     theSalary: function () {
//       const minSalary = 1500;
//       const maxSalary = 2000;
//       const randomSalary = Math.ceil(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
//       const netSalary = Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
//       return netSalary;
      
//     }
    
//   };
  
//   console.log(employee1.employeeID())
//   console.log(employee1.theSalary())
//   console.log(employee1);
//   let employee2 = {
//     fullName: "Lana Ali",
//     department: "Marketing",
//     level: "Mid-Senior",
//     imageURL: ".jpg",
//     employeeID: function () {
//       return Math.floor(Math.random()*100) + 300;
//     },
//     theSalary: function () {
//       const minSalary = 1000;
//       const maxSalary = 1500;
//       const randomSalary = Math.ceil(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
//       const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
//       return netSalary;
//     },
//   };
//  console.log(employee2.employeeID())
//   console.log(employee2.theSalary())
//   console.log(employee2);
//   let employee3 = {
//     fullName: "Tamara Ayoub",
//     department: "Development",
//     level: "Senior",
//     imageURL: ".jpg",
//     employeeID: function () {
//       return Math.floor(Math.random()*100) + 300;
//     },
//     theSalary: function () {
//       const minSalary = 1500;
//       const maxSalary = 2000;
//       const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
//       const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
//       return netSalary;
//     },
//   };
//   console.log(employee3.employeeID())
//   console.log(employee3.theSalary())
//   console.log(employee3);
  
//   let employee4 = {
//     fullName: "Safi Walid",
//     department: "Finance",
//     level: "Junior",
//     imageURL: ".jpg",
//     employeeID: function () {
//       return Math.floor(Math.random()*100) + 300;
//     },
//     theSalary: function () {
//       const minSalary = 500;
//       const maxSalary = 1000;
//       const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
//       const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
//       return netSalary;
//     },
//   };
//   console.log(employee4.employeeID())
//   console.log(employee4.theSalary())
//   console.log(employee4);
  
//   let employee5 = {
//     fullName: "Rana Saleh",
//     department: "Development",
//     level: "Junior",
//     imageURL: ".jpg",
//      employeeID: function () {
//       return Math.floor(Math.random()*100) + 300;
//     },
//     theSalary: function () {
//       const minSalary = 500;
//       const maxSalary = 1000;
//       const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
//       const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
//       return netSalary;
//     },
//   };
//   console.log(employee5.employeeID())
//   console.log(employee5.theSalary())
//   console.log(employee5);

//   let employee6 = {
//     fullName: "Hadi Ahmad",
//     department: "Marketing",
//     level: "sunior",
//     imageURL: ".jpg",
//      employeeID: function () {
//       return Math.floor(Math.random()*100) + 300;
//     },
//     theSalary: function () {
//       const minSalary = 1500;
//       const maxSalary = 2000;
//       const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
//       const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
//       return netSalary;
//     },
//   };
//   console.log(employee6.employeeID())
//   console.log(employee6.theSalary())
//   console.log(employee6);

//   document.getElementById("javadesign").innerHTML = `Employee name : ${employee1.fullName} 
//   <br>Employee salary :${employee1.theSalary()}`;
  
//   document.getElementById("javadesign1").innerHTML = `Employee name : ${employee2.fullName} 
//   <br>Employee salary :${employee2.theSalary()}`;
//   document.getElementById("javadesign2").innerHTML = `Employee name : ${employee3.fullName} 
//   <br>Employee salary :${employee3.theSalary()}`;
//   document.getElementById("javadesign3").innerHTML = `Employee name : ${employee4.fullName} 
//   <br>Employee salary :${employee4.theSalary()}`;
//   document.getElementById("javadesign4").innerHTML = `Employee name : ${employee5.fullName} 
//   <br>Employee salary :${employee5.theSalary()}`;
  
//   document.getElementById("javadesign5").innerHTML = `Employee name : ${employee6.fullName} 
//   <br>Employee salary :${employee6.theSalary()}`;