function compareObjects(object1,object2)

{let str1=JSON.stringify(object1);
    let str2=JSON.stringify(object2);
    if (str1==str2)
        {
            return true
        }
    else{
        return false
    }
}


const objectTest1={name: "Piet", id: 1};
//const objectTest2={name: "Klaas", id: 2};
const objectTest2={name: "Piet", id: 1};
const result=compareObjects(objectTest1,objectTest2)
console.log(result);
module.exports={compareObjects};



