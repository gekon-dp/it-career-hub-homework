let mark = 100;
if (mark > 0 && mark <= 100 && mark % 1 === 0) {
  if (mark >= 90) {
    console.log("A");
  }
  if (mark >= 80 && mark <= 89) {
    console.log("B");
  }
  if (mark >= 70 && mark <= 79) {
    console.log("C");
  }
  if (mark >= 60 && mark <= 69) {
    console.log("D");
  } else if (mark < 60) {
    console.log("F");
  }
}
