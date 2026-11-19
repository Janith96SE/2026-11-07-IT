// console.log("Hello, World!");


// // ------Objects-------

// // class Customer {
// //     name;
// //     age;
// //     address;

// //     constructor(name,age,address){
// //         this.name=name;
// //         this.age=age;
// //         this.address=address;

// //     }
// // }

// // let customer1=new Customer("John",30,"123 Main St");
// // let customer2=new Customer("Jane",25,"456 Oak Ave");

// // console.log(customer1);
// // console.log(customer2);


// // -----What use in JavaScript-------

// // let person = {
// //     name : "Alice",
// //     age : 28,
// //     address : "789 Elm St",
// // }

// // console.log(person);

// let CustomerList = [
//     {
//         name: "John",
//         age: 30,
//         address: "123 Main St",
//         PurchaseDetails: [
//             {
//                 billNo01:[
//                     {
//                     item: [
//                         {
//                             itemName: "Product ABC",
//                             itemPrice: 1000,
//                         },
//                         {
//                             itemName: "Product DEF",
//                             itemPrice: 1500,

//                         }
//                     ]
//                     }
//                 ]
//             },
//             {
//                 billNo02:[
//                     {
//                     item: [
//                         {
//                             itemName: "Product IJK",
//                             itemPrice: 2000,
//                         },

//                         {
//                             itemName: "Product LMN",
//                             itemPrice: 2500,
//                         }

//                       ]
//                     },
//                 ]
//             }


//         ]

//     }




// ]

// console.log(CustomerList[0].PurchaseDetails[0].billNo01[0].item[1])


//--------------DOM MANUPULATION (DOM - Document Object Model)-------------------

// console.log(document);

// document.write("<h1> Hello world</h1>");
// document.write("<h5> Hello Java </h5>");




// function btnclickToOnAction(){

//     title.innerText="Hello Srilanka...!!!";  

// }

// let number=0;

// function btnIncrementOnAction(){
// number++;

// numberCount.innerText= "Number Count - "+ number;

// }

// function btnDecrementOnAction(){
// number--;
    
// numberCount.innerText= "Number Count -"+number;


// }

function btnSubmitOnAction(){
   let textName= document.getElementById("txtName");
   console.log(textName.value)

    Sname.innerText= "My Name is >>" + textName.value;
}





