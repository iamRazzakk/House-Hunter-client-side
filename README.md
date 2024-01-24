function isPalindrome(str) {
  const ClearString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return ClearString === ClearString.split("").reverse().join("");
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// output:
// true
// false
// true

server side code link: https://github.com/iamRazzakk/House-Hunter-Server-side