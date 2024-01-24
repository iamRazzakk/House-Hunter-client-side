function isPalindrome(str) {
  const ClearStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return ClearStr === ClearStr.split("").reverse().join("");
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// output
// true
// false
// true