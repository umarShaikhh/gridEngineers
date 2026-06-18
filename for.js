let text = "hello world";

let result = "";



for (let i = 0; i < text.length; i++) {

    let char = text[i];

    if (i % 2 === 0 && "aeiou".includes(char)) {

        result += "*";

    } else {

        result += char;

    }

}



console.log(result);