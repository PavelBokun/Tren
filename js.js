function isPrime(num) {
        let t=(""+num).split("").reverse().join("");
     let y=Number(t);
     alert(y)
}
isPrime(2023)
function k(num){

    let result = Math.sqrt(num);
      let r=  (result % 1 === 0);
      return r
}
k(2)