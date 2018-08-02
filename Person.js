class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
var cody = new Person("Cody", 23, 250, 74);
var reco = new Person("Reco", 19, 155, 72);
var peopleList = [cody,reco];
cody.printPerson();
reco.printPerson();
document.write(peopleList[0]);
document.write(peopleList[1]);
console.log("Cody's BMI is" + cody.bodyMassIndex());
console.log("Reco's BMI is" + reco.bodyMassIndex());
}

main();


