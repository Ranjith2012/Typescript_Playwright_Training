function dis1() {
    let name: string = "Ranjith";
    console.log(name);
}

function dis2(){
    const age:number = 10000;
    console.log(age)
}

dis1()
dis2()



// Interface
interface emp{
    user_id: number;
    name: string;
    role? : any;
}

const user1:emp={
    user_id:2,
    name:"rash",
    role:"EC"
}

const user2:emp={
    user_id:2,
    name:"rash"
}

console.log(user1);
console.log(user2);


class compnay1 implements emp{
    user_id: number;
    name: string;
    role?: any;
    constructor(user_id:number, name:string, role:any){
        this.user_id=user_id;
        this.name=name;
        this.role=this.role;
    }
}

function showcompany1(){
    const emp1:emp = new compnay1(1,"dhurv","trainer");
    console.log(emp1);
}

function showcompany2(){
    const emp2:emp = new compnay1(10,"karthik","employee");
    console.log(emp2);
}

showcompany1()
showcompany2()


const database1: compnay1[] = [
    new compnay1(2,"user1","dep1"),
    new compnay1(2,"user2","dep1"),
    new compnay1(2,"user3","new")
]


const sort1 = database1.sort((e1,e2)=>e1.user_id>e2.user_id ? -1: 0)

for (const vendor of sort1) {
    console.log(`ID: ${vendor.user_id}, Name: ${vendor.name}, Role: ${vendor.role != undefined ? " " : vendor.role}`);
}


