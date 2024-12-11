// 1

// class Person {
//     constructor(name, age, country) {
//       this.name = name;
//       this.age = age;
//       this.country = country;
//     }
  
//     displayDetails() {
//       console.log(`Name: ${this.name}`);
//       console.log(`Age: ${this.age}`);
//       console.log(`Country: ${this.country}`);
//       console.log('----------------------');
//     }
//   }
  
 
//   const person1 = new Person('Alice', 30, 'USA');
//   const person2 = new Person('Bob', 25, 'Canada');
  
  
//   person1.displayDetails();
//   person2.displayDetails();


  
// 2

// class Employee {
//     constructor(name, salary) {
//       this.name = name;
//       this.salary = salary;
//     }
  
    
//     calculateAnnualSalary() {
//       return this.salary * 12;
//     }
//   }
  
  
//   class Manager extends Employee {
//     constructor(name, salary, department, bonus) {
//       super(name, salary);
//       this.department = department;
//       this.bonus = bonus; 
//     }
  
    
//     calculateAnnualSalary() {
//       return super.calculateAnnualSalary() + this.bonus;
//     }
  
    
//     displayDetails() {
//       console.log(`Name: ${this.name}`);
//       console.log(`Department: ${this.department}`);
//       console.log(`Annual Salary (including bonus): $${this.calculateAnnualSalary().toFixed(2)}`);
//       console.log('----------------------');
//     }
//   }
  
  
//   const manager1 = new Manager('Alice Johnson', 5000, 'Finance', 10000);
//   const manager2 = new Manager('Bob Smith', 6000, 'IT', 12000);
  
  
//   manager1.displayDetails();
//   manager2.displayDetails();



  

// 3


class Book {
    constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  
    
    displayDetails() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Publication Year: ${this.publicationYear}`);
    }
  }
  
  
  class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
      super(title, author, publicationYear); 
      this.price = price;                    
    }
  
    
    displayDetails() {
      super.displayDetails();               
      console.log(`Price: $${this.price}`);
    }
  }
  
  
  const myEbook = new Ebook("JavaScript Essentials", "Jane Doe", 2024, 9.99);
  
  
  myEbook.displayDetails();
  