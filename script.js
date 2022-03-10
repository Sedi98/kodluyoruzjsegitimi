let username="Sedi Memmedov"
let email="sedi9816@gmail.com"
let borc = "50"

let age="23"




let info = `<h2>Salam Hormetli ${username}</> 
<p>Sizin ${age}  yasiniz var ama buna baxmayaraq sizin <span style="color:red;">${borc} </span> manat borcunuz var 
Xahis edirik borcunuzu odeyesiniz.
Eksi teqdirde ${email} adresinize borcunuzun artirilmasi haqqinda
bildiris gonderilecekdir</>`
var textarea= document.querySelector(".textarea")

textarea.innerHTML= info

// console.log(info)

// console.log(email.length)


// // console.log(email[1])
// // search ile axtardigimiz stringin harda yerlesdiyini bize deyir
// console.log(email.search("@"))
// slice ile hardan hara gostermek lazimdi onu teyin etmek olar iki deyer yazildiqda o ikisi arasindaki 
// stringi ekrana cixarmaq ucun istifade edilir
// console.log(email.slice(8))


// // sadece domaini "gmail.com" elde etmek ucun avtomatik sistem
// let DOMAIN= email.slice(email.search("@")+1)

// console.log(DOMAIN)


// // sadece maili elde etmek ucun "gmail" basdan . noqteye kimi kesib goturmek ucun bu metoddan istifade edilir
// let domainName= DOMAIN.slice(0, DOMAIN.indexOf("."))


// console.log(domainName)


// // stringin terkibini deyismek ucun  replace istifade edilir
// email=email.replace("gmail.com","sedimail.com");

// console.log(email)




// .includes() moterizedeki deyer stringin icinde varsa true yoxdursa false cavab qaytarir



// email.startsWith() value ile string baslayirsa   email.endsWith()  ise value ile string bitirse true ya false olaraq cavab qaytarir 




// let fullname= "sedi memmedov"



// let capitalize= `Xos gelsiniz ${fullname[0].toUpperCase()}${fullname.slice(1)}`



// console.log(capitalize)



// document object model


// console.log(document.location.hostname);

// console.log(document.location.pathname);

// console.log(document.baseURI);

// console.log(document.URL);

// kohne metod dom 

// let word = document.getElementById("test");


// console.log(word);




// Yeni metod dom
// let word= document.querySelector("#test");


// word.innerHTML="Destroy all of the javaScript";

// console.log(word.innerHTML);


// prompt



// let  check = window.prompt("Davam etmeden once xahis edirem adini daxil et","");
// console.log(check);


// if(check.length<1){

//     alert("Adi bos qoymaq olmaz")

//     check=window.prompt("Davam etmeden once xahis edirem adini daxil et","");
// }



const btn = document.querySelector(".btn");

let data = document.querySelector("#data");

let list = document.querySelector("ul")


btn.addEventListener("click", function () {
    let add= document.createElement("li")

    add.innerHTML= data.value;

    list.append(add)


    data.value=""

});





let classify = document.querySelector("#classList");

// classify.classList.add("text","new-color", "btn-primary") // itema yeni class elave etmek ucun classlist.add
// classify.classList.remove("text") // itemdan class silmek ucun .remove


// console.log(classify.classList.contains("zero")) // contains hemin classin olub olmamasini yoxlayir

// console.log(classify.classList.item[3])




const clrBtn = document.querySelector('#clrBtn');

clrBtn.addEventListener("click", function(){
    classify.classList.toggle("blue");
})


// console.log("test ",!!2)  iki !! olanda true cavabi verir 


// if else

// let istifadeci=window.prompt("Xahis edirik adinizi yazin")



// if(istifadeci.length){   //if else basic 
//     alert(`Adiniz ${istifadeci} , Xos gelmisiniz!!!` )
// }else{
//     alert("Istifadeci adi bos buraxila bilmez")
// }



//switch case   statement
// let date = new Date();

// let hour = date.getHours();



// console.log(hour);


// switch (hour) {
//     case 12:
//         console.log("Nahara 1 saat qalib");
//         break;

//     case 13:
//     console.log("Nahar vaxtidir")
//     break;


//     case 14:
//     console.log("Nahardan 1 saat kecib");
//      break;

//     default:
//         console.log("Nahar vaxti melum deyil");
//         break;
// }




// ternary operator istifadesi


//  sert ? dogru olarsa : yanlis  olarsa



// let UserName = window.prompt("Xahis edirem adini daxil et");



// console.log(UserName ?  UserName : "Istifadeci adi qeyd edilmeyib" );




// let test;
// const isBooleanTrue = test ? true : false;

// console.log(isBooleanTrue)

// var money;
//     var canBuy = 
//         (money < 17) ? "Satın alamazsın..":
//         (money > 30) ? "Satın alabilirsin..":
//         "Para miktarını girmen gerekmektedir..";

//     console.log(canBuy) 



//  90-100 A
//  80-90 B
// 70-80 C
// 60-70 D
// 51- 60 E
// 51> ... F


let point= window.prompt("Balinizi daxil edin")

//normal if ile qiymetlendirme
// if(point>=90 && point<=100 ){
//     console.log("Sizin Baliniz A sizi tebrik etmek isteyirem");
// }
// else if(point>=80 && point<90){
//     console.log("Sizin Baliniz B");
// }
// else if(point>=70 && point<80){
//     console.log("Sizin Baliniz C");
// }
// else if(point>=60 && point<70){
//     console.log("Sizin Baliniz D");
// }
// else if(point>=51 && point<60){
//     console.log("Sizin Baliniz E");
// }
// else if(point<=50){
//     console.log("Sizin Baliniz F siz imtahandan kece bilmediniz");
// }
// else{
//     console.log("Balinizi duzgun daxil etmemisiniz");
// }


// ternary operator yeni short If ile qiymetlendirme
var result=
    point>=90 && point<=100 ? "Sizin Baliniz A sizi tebrik etmek isteyirem":
    point>=80 && point<90 ? "Sizin Baliniz B":
    point>=70 && point<80 ? "Sizin Baliniz C":
    point>=60 && point<70 ? "Sizin Baliniz D":
    point>=51 && point<60 ? "Sizin Baliniz E":
    point<=50 && point>0 ?  "Sizin Baliniz F siz imtahandan kece bilmediniz":
    "Balinizi duzgun daxil etmemisiniz";


    console.log(result)
