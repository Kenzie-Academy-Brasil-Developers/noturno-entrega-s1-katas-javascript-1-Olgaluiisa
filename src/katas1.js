function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
  let meuRetorno = [];
   for(let contador = 1; contador <= 20; contador++){
     meuRetorno.push(contador);
     
   }
    return meuRetorno
    
}
console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */

   let meuRetorno = [];
   let contador = 1
   while(contador <= 20){
     if(contador % 2 === 0){
       meuRetorno.push(contador);
       
     } 
     contador++     
   }
   
    return meuRetorno
    
}
console.log(evensToTwenty());


//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let meuRetorno = [];
  for(let contador = 1; contador <= 20; contador += 2){
    meuRetorno.push(contador);
    
  }
   return meuRetorno
}
console.log(oddsToTwenty());

//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []; 
  for (let contador = 1; contador <= 100; contador++){
    if(contador % 5 === 0){
      meuRetorno.push(contador);   
    } 
  }
   return meuRetorno
}
console.log(multiplesOfFive());

//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = []; 
  for (let contador = 1; contador <= 10; contador++){
      indice = contador * contador;
      meuRetorno.push(indice);   
     
  }
   return meuRetorno
}
console.log(squareNumbers());



//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];

   for(let contador = 20; contador >= 1; contador--){
     meuRetorno.push(contador);
     
   }
    return meuRetorno
}
console.log(countingBackwards());

//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];
  let contador = 20;
   while(contador >= 1){
     if(contador % 2 === 0){
      meuRetorno.push(contador);
     }
     contador--   
   }
    return meuRetorno
}
console.log(evenNumbersBackwards());

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];

   for(let contador = 19; contador >= 1; contador -= 2){
     meuRetorno.push(contador);
     
   }
    return meuRetorno
}
console.log(oddNumbersBackwards());

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];

   for(let contador = 100; contador >= 1; contador--){
     if(contador % 5 === 0){
      meuRetorno.push(contador);
     }   
   }
    return meuRetorno
}
console.log(multiplesOfFiveBackwards());

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let meuRetorno = [];

   for(let contador = 10; contador >= 1; contador--){
      indice = contador * contador;
      meuRetorno.push(indice);    
   }
    return meuRetorno
}
console.log(squareNumbersBackwards());


//call function squareNumbersBackwards
