// you can implement class using interface.
interface employee{
    name:string;
    empid:string;
    salary:number;
    getsalary:()=>number;
}
class SD implements employee{
    name:string;
    empid:string;
    salary:number;
    constructor(name:string,empid:string,salary:number){
        this.name=name;
        this.empid=empid;
        this.salary=salary;
    }
    getsalary():number{
        return this.salary;
    }
    pushcode(code:string):void{}
}
class manager implements employee{
    name:string;
    empid:string;
    salary:number;
    constructor(name:string,empid:string,salary:number){
        this.name=name;
        this.empid=empid;
        this.salary=salary;
    }
    getsalary():number{
        return this.salary;
    }
}


