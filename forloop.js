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



console.log(Result);