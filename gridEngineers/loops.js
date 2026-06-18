let str = "hello world";
let result = "";

for (i=0;i<str.length;i++) {
    let ch = str[i];
    if ("aeiou".includes(ch)) {
        result += "*";
    } else {
        result += ch;
    }
}

console.log(result);