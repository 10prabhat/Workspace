// We are given array of marks of students. Filter out the marks of students that scored 90+

let marks = [80,90,96,20,98,20,86];

let top_marks=marks.filter((num)=>{
    return num>90;
});

console.log(top_marks);

