var x = "CodeGym";
console.log(x);
var arrowFunction = function () {
    console.log('CodeGym');
};
arrowFunction();
var Student = /** @class */ (function () {
    function Student(id, name) {
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Student.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student(1, 'Quan');
console.log(student.id);
student.id = 2;
console.log(student.id);
