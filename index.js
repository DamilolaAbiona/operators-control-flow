// 3
let studentClass = prompt("Enter Your Deprtment Name");
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing ";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = " English, Mathematics";
// comparison
if (studentClass == "scienceSubjects") {
  document.write(scienceSubjects + generalSubjects);
  console.log(scienceSubjects + generalSubjects);
} else if (studentClass == "socialScienceSubjects") {
  document.write(socialScienceSubjects + generalSubjects);
  console.log(socialScienceSubjects + generalSubjects);
} else if (studentClass == "artsSubjects") {
  document.write(artsSubjects + generalSubjects);
  console.log(artsSubjects + generalSubjects);
} else {
  document.write(generalSubjects);
  console.log(generalSubjects);
}

// 4.
for (let i = 1; i < 20; i += 7) {
  console.log(i);
};

// 5
let lastValue;
for (let i = 2; i < 20; i = i ** 2) {
  lastValue = i;
}
console.log(lastValue);
