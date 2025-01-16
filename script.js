var name = prompt('Ismingizni kiriting: ')
var age = +prompt('Yoshingizni kiriting: ')
if (confirm(`Siz kiritgan ma'lumotlarni tasdiqlaysizmi? Ismingiz: ${name} Yoshingiz: ${age}`))
{ 
    alert("Ma'lumotlar tasdiqlandi!");
}
else {
    alert("Iltimos, ma'lumotlarni qayta kiriting.");
    nameAgain = prompt(`Ismingizni kiriting: `)
    ageAgain = +prompt(`Yoshingizni kiriting: `)
    confirm(`Siz qayta kiritgan ma'lumotlar: Ismingiz: ${nameAgain} Yoshingiz: ${ageAgain}. Ma'lumotlarni tasdiqlaysizmi?`)
}
var a = 6
var b = 3
var c = 5
var d = 8
var e = 2
var f = 20
var correct1 = a + b;
var correct2 = c - e;
var correct3 = a * d;
var correct4 = d / e;
var correct5 = f % e;
var answer1 = +prompt(`Amalni bajaring: ${a} + ${b} = ?`)
var answer2 = +prompt(`Amalni bajaring: ${c} - ${e} = ?`)
var answer3 = +prompt(`Amalni bajaring: ${a} * ${d} = ?` )
var answer4 = +prompt(`Amalni bajaring: ${d} / ${e} = ?` )
var answer5 = +prompt(`Amalni bajaring: ${f} % ${e} = ?`)
alert('Javoblarni cansole dan tekshiring!')
console.log(`Sizning ismingiz: ${name}`);
console.log(`Sizning yoshingiz: ${age}`);

if (answer1===correct1) {
    console.log(`Misol1: ${a} + ${b} = ${correct1} Sizning javobigiz: ${answer1} Javob - to'g'ri`)
    
}
else {
    console.log(`Misol1: ${a} + ${b} = ${correct1} Sizning javobingiz: ${answer1} Javob - noto'g'ri `);
}
if (answer2===correct2) {
    console.log(`Misol2: ${c} - ${e} = ${correct2} Sizning javobigiz: ${answer2} Javob - to'g'ri`)
    
}
else {
    console.log(`Misol2: ${c} - ${e} = ${correct2} Sizning javobingiz: ${answer2} Javob - noto'g'ri `);
}
if (answer3===correct3) {
    console.log(`Misol3: ${a} * ${d} = ${correct1} Sizning javobigiz: ${answer3} Javob - to'g'ri`)
    
}
else {
    console.log(`Misol3: ${a} * ${d} = ${correct1} Sizning javobingiz: ${answer3} Javob - noto'g'ri `);
}
if (answer4===correct4) {
    console.log(`Misol4: ${d} / ${e}} = ${correct4} Sizning javobigiz: ${answer4} Javob - to'g'ri`)
    
}
else {
    console.log(`Misol4: ${d} / ${e} = ${correct4} Sizning javobingiz: ${answer4} Javob - noto'g'ri `);
}
if (answer5===correct5) {
    console.log(`Misol5: ${f} % ${e} = ${correct5} Sizning javobigiz: ${answer5} Javob - to'g'ri`)
    
}
else {
    console.log(`Misol5: ${f} % ${e} = ${correct5} Sizning javobingiz: ${answer5} Javob - noto'g'ri `);
}