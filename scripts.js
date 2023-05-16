let courses = [
 {
 CourseId: "PROG100",
 Title: "Introduction to HTML/CSS/Git",
 Location: "Classroom 7",
 StartDate: "09/08/22",
 Fee: "100.00",
 },
 {
 CourseId: "PROG200",
 Title: "Introduction to JavaScript",
 Location: "Classroom 9",
 StartDate: "11/22/22",
 Fee: "350.00",
 },
 {
 CourseId: "PROG300",
 Title: "Introduction to Java",
 Location: "Classroom 1",
 StartDate: "01/09/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROG400",
 Title: "Introduction to SQL and Databases",
 Location: "Classroom 7",
 StartDate: "03/16/23",
 Fee: "50.00",
 },
 {

 CourseId: "PROJ500",
 Title: "Introduction to Angular",
 Location: "Classroom 1",
 StartDate: "04/25/23",
 Fee: "50.00",
 }
];

// let course = courses.find((item) => item.CourseId === "PROG200");
// if (course) {
//   let startDate = course.StartDate;
//   console.log(startDate);
// } else {
//   console.log("Course not found");
// }

// let course = courses.find((item) => item.CourseId === "PROJ500");
// if (course) {
//   let Title = course.Title;
//   console.log(Title);
// } else {
//   console.log("Course not found");
// }

LIMIT = 50
function isCheap(item){
    return Number (item.Fee) <= LIMIT
}
cheapItems = courses.filter(isCheap)
console.log(cheapItems.length)

console.log(courses.filter( item => Number(item.Fee) <= LIMIT ).length)