let a = 1;
let b = 2;
let c = ++a + b++;

//prefix > right operand > assignment > postfix
/*
the order being applied:
++a -> a + b -> b++
1. a = 2
2. b = 3
3. c = 4
 */

console.log(c);







