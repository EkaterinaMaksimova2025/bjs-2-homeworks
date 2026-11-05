function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    Student.hasOwnProperty("marks");
    return;
  }

  if (!!marksToAdd.length) {
    this.marks.push(...marksToAdd);
  }
  return;
};

/*

Если мы хотим вернуть 0, когда оценок нет, условие должно проверять, что длина массива равна нулю: 
if (!this.marks || this.marks.length === 0)

Теперь логика верна: «Если оценок нет ИЛИ если их количество равно 0, то возвращаем 0».
---
Обратите внимание, что в метод reduce добавлен второй аргумент 0. Это "начальное значение" суммы. 
Если его не указать, и в массиве будет всего одна оценка, reduce может повести себя непредсказуемо. 
С нулем всё работает надежно: 0 + первая_оценка

*/

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude("плохая учёба");
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
