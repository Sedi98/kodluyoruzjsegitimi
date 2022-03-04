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



let  check = window.prompt("Davam etmeden once xahis edirem adini daxil et","");
console.log(check);


if(check.length<1){

    alert("Adi bos qoymaq olmaz")

    check=window.prompt("Davam etmeden once xahis edirem adini daxil et","");
}


