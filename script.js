console.log("working");
//Q1.
let studentRecords = [{name:"Harry Potter",id:123,marks:98},
    {name:"Hermione Granger",id:101,marks:23},
    {name:"Ron Weasley",id:200,marks:45},
    {name:"Lord Voldemort",id:115,marks:75}
];
let arr = studentRecords.map(x => x.name.toUpperCase());
console.log(arr);
//Q2.
let arr1 = studentRecords.filter(x => x.marks > 50);
console.log(arr1);
//Q3.
let arr2 = studentRecords.filter((x) =>x.marks > 50&&x.id>120);
console.log(arr2);
//Q4.
let arr3 = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr3);
//Q5.
let arr4 = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<arr4.length; i++){
    console.log(arr4[i].name);
}
//Q6.
let arr5 = studentRecords.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr6);
//Q7.
for(let x of studentRecords){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}
let arr7 = studentRecords.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr8);
//Q8.
let student1 = {
    name : "Pitambar Bhadra",
    class : 12,
    roll_no : 10021
}
let student2 = {
    name : "Neha Bhageriya",
    class : 12,
    roll_no : 10024
}
let student3 = {
    name : "Pushpendra Singh",
    class : 11,
    roll_no : 10056
}
let student4 = {
    name : "Atul Pandey",
    class : 11,
    roll_no : 10067
}
let student5 = {
    name : "Vivek Singh",
    class : 11,
    roll_no : 10079
}
let student6 = {
    name : "Bittu Bhadra",
    class : 11,
    roll_no : 10067
}
let student =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(student);