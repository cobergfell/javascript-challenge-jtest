
const compareObjects=require("../index.js/").compareObjects;


test("The compareObjects function compares two objects and return true is they are similar otherwise false",function(){})
{
 //Arrange
    const object1={name: "Piet", id: 1};
    const object2={name: "Klaas", id: 2};
    const object3={name: "Piet", id: 1};

    //Act
    const result12=compareObjects(object1,object2)
    const result13=compareObjects(object1,object3)

    //Assert
    expect(result12).toBe(false);
    expect(result13).toBe(true);
}
