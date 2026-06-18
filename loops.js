let str = "hello world";
let result = "";

for (let i = 0;i < str.length; i++) {
    let ch=str[i];
    if ("aeiou".includes(ch)) {
        result += "*";
    } else {
        result += ch;
    }
}

console.log(result);

//even places *


let strg = "hello world";
let Result = "";
for (let i = 0; i < strg.length; i++) {

    let ch = strg[i];

    if (i % 2 === 0 && "aeiou".includes(ch)) {

        Result += "*";

    } else {

        Result += ch;

    }

}



console.log(result);