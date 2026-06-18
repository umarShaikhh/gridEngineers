let str = "hello world";

let result = "";



for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (i % 2 === 0 && "aeiou".includes(ch)) {

        result += "*";

    } else {

        result += ch;

    }

}



console.log(result);