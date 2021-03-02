let x = "CodeGym";
console.log(x);
let arrowFunction = () => {
    console.log('CodeGym');
};
arrowFunction();
class Student {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}
let student = new Student(1, 'Quan');
console.log(student.id);
student.id = 2;
console.log(student.id);
let promise = new Promise((resolve, reject) => {
    return resolve(25);
});
promise.then(value => {
    console.log(value);
});
let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("buy a new car");
            }
            else {
                reject("Do not enough money");
            }
        }, 1000);
    }));
};
money = 1;
const promise1 = buyACar("Vinfast");
console.log(promise1);
//# sourceMappingURL=main.js.map