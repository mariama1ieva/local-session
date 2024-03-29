"use strict"


// sessionStorage.setItem("name","Meryem");
// sessionStorage.setItem("name","Haaci");
// sessionStorage.setItem("name","Toti");
// sessionStorage.setItem("surname","Aliyeva");

// sessionStorage.clear();
// sessionStorage.removeItem("surname")
// console.log(sessionStorage.getItem("name"));


// localStorage.setItem("name","Mariam");
// localStorage.setItem("surname","Aliyeva");

// localStorage.clear()

// localStorage.removeItem("name")

// let inputKey = document.querySelector(".input-key");
// let inputValue = document.querySelector(".input-value");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click",function(){
//     let key = inputKey.value;
//     let value = inputValue.value;

//   localStorage.setItem(key,value)
//     // console.log(key,value);

//     inputKey.value = "";
//     inputValue.value = "";
// })


// let datas = ["Meryem", "haci", "Totii", "Cavid"];

// localStorage.setItem("datas",datas)


// let jsonData = {
//     name: "meryem",
//     surname: "aliyeva",
//     phones: [
//         23456, 2345678
//     ],

//     group: {
//         name: "P418",
//         capacity: 40,
//         teachers: [
//             "Cavid",
//             "Hemid"
//         ]
//     }
// };
// console.log(jsonData.group.capacity);
// for (const iterator of jsonData.group.teachers) {
// /    console.log(iterator);
// // }/ 


// let datas = ["Meryem", "haci", "Totii", "Cavid"];
// localStorage.setItem("datas",JSON.stringify(datas));

// console.log(JSON.parse(localStorage.getItem("datas")));


let basket = [];

if ((JSON.parse(localStorage.getItem("basket"))) == null) {
    localStorage.setItem("basket", JSON.stringify(basket))
}
else {
    basket = JSON.parse(localStorage.getItem("basket"));
}



getBasketCount(basket);


function getBasketCount(arr){
    let basketCount = 0;
    if(arr.length !=0){
        for (const item of basket) {
            basketCount+=b=item.count;
          }
    }
    document.querySelector(".navigation .basket-count").innerText = basketCount
}


let addBtns = document.querySelectorAll("#product .add-btn");
addBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      
        e.preventDefault();
        let productId = parseInt(this.parentNode.previousElementSibling.getAttribute("data-id"))
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.parentNode.firstElementChild.nextElementSibling.innerText;
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productPrice = this.parentNode.lastElementChild.innerText;

       let existProduct = basket.find(m=>m.id==productId);

       if(existProduct != undefined){
        existProduct.count++;
       }else{
        basket.push({
            name: productName,
            description: productDesc,
            image: productImage,
            count: 1,
            id: productId,
            price: productPrice

        })
       } 
       getBasketCount(basket);
      localStorage.setItem("basket",JSON.stringify(basket));
    })

});
