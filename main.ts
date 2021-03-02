let x: string = "CodeGym";
console.log(x);

let arrowFunction = () => {
    console.log('CodeGym');
}

arrowFunction();

class Student {
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    private _id: number;

    get id() {
        return this._id;
    }

    set id(id: number) {
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
})
//ARROW FUNCTION
let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("buy a new car");
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

money = 1000001;
const promise1 = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})

interface Product {
    id?: number;
    name?: string;
}

let product: Product = {
    id: 1
};
