function testPrime(somenum){
   if (somenum == 1){
     return false;
   }
   else if (somenum == 2){
     return true;
   }
   else {
      for (let k=2;k<somenum;k++){
         if (somenum % k == 0){
            return false;
         }
      }
      return true;
   }
}
    
 for (let i = 1;i<400;i++){
     y = i + 6;
      if (testPrime(i) && testPrime(y)) {
          console.log(i + " and " + y + " are sexy primes");
          document.write(i + " and " + y + " are sexy primes" + '<br>');
      } 
         
    }
 

    
    //console.log(testPrime(6));
