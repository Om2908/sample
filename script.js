class Person{
    constructor(a,b)
    {
        this.name=a;
        this.age=b;
    }
    greet()
    {
        console.log(`hello ${this.name}`);
    }
}
let data=new Person("om",20);
data.greet();
console.log(data);