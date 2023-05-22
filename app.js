'use strict';


let employee1 = {
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    imageURL: ".jpg",
    employeeID: function () {
      return Math.floor(Math.random()*100) + 300;
    },
    theSalary: function () {
      const minSalary = 1500;
      const maxSalary = 2000;
      const randomSalary = Math.ceil(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
      const netSalary = Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
      return netSalary;
      
    }
    
  };
  
  console.log(employee1.employeeID())
  console.log(employee1.theSalary())
  console.log(employee1);
  let employee2 = {
    fullName: "Lana Ali",
    department: "Marketing",
    level: "Mid-Senior",
    imageURL: ".jpg",
    employeeID: function () {
      return Math.floor(Math.random()*100) + 300;
    },
    theSalary: function () {
      const minSalary = 1000;
      const maxSalary = 1500;
      const randomSalary = Math.ceil(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
      const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
      return netSalary;
    },
  };
 console.log(employee2.employeeID())
  console.log(employee2.theSalary())
  console.log(employee2);
  let employee3 = {
    fullName: "Tamara Ayoub",
    department: "Development",
    level: "Senior",
    imageURL: ".jpg",
    employeeID: function () {
      return Math.floor(Math.random()*100) + 300;
    },
    theSalary: function () {
      const minSalary = 1500;
      const maxSalary = 2000;
      const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
      const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
      return netSalary;
    },
  };
  console.log(employee3.employeeID())
  console.log(employee3.theSalary())
  console.log(employee3);
  
  let employee4 = {
    fullName: "Safi Walid",
    department: "Finance",
    level: "Junior",
    imageURL: ".jpg",
    employeeID: function () {
      return Math.floor(Math.random()*100) + 300;
    },
    theSalary: function () {
      const minSalary = 500;
      const maxSalary = 1000;
      const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
      const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
      return netSalary;
    },
  };
  console.log(employee4.employeeID())
  console.log(employee4.theSalary())
  console.log(employee4);
  
  let employee5 = {
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    imageURL: ".jpg",
     employeeID: function () {
      return Math.floor(Math.random()*100) + 300;
    },
    theSalary: function () {
      const minSalary = 500;
      const maxSalary = 1000;
      const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
      const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
      return netSalary;
    },
  };
  console.log(employee5.employeeID())
  console.log(employee5.theSalary())
  console.log(employee5);

  let employee6 = {
    fullName: "Hadi Ahmad",
    department: "Marketing",
    level: "sunior",
    imageURL: ".jpg",
     employeeID: function () {
      return Math.floor(Math.random()*100) + 300;
    },
    theSalary: function () {
      const minSalary = 1500;
      const maxSalary = 2000;
      const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary+100;
      const netSalary =  Math.trunc(randomSalary - (randomSalary * 7.5) / 100);
      return netSalary;
    },
  };
  console.log(employee6.employeeID())
  console.log(employee6.theSalary())
  console.log(employee6);

  document.getElementById("javadesign").innerHTML = `Employee name : ${employee1.fullName} 
  <br>Employee salary :${employee1.theSalary()}`;
  
  document.getElementById("javadesign1").innerHTML = `Employee name : ${employee2.fullName} 
  <br>Employee salary :${employee2.theSalary()}`;
  document.getElementById("javadesign2").innerHTML = `Employee name : ${employee3.fullName} 
  <br>Employee salary :${employee3.theSalary()}`;
  document.getElementById("javadesign3").innerHTML = `Employee name : ${employee4.fullName} 
  <br>Employee salary :${employee4.theSalary()}`;
  document.getElementById("javadesign4").innerHTML = `Employee name : ${employee5.fullName} 
  <br>Employee salary :${employee5.theSalary()}`;
  
  document.getElementById("javadesign5").innerHTML = `Employee name : ${employee6.fullName} 
  <br>Employee salary :${employee6.theSalary()}`;