
const mapss=new Map();//Maps= are key-values and the data is from any type.

const FName = 'FirstName',
     Lname = {},
     Cast = function(){};
//Set the key-values of Map
     mapss.set(FName,'My Name is Sulman');
     mapss.set(Lname,'Ahmed');
     mapss.set(Cast,'awan');
 //Get the key-values of Map

//  console.log(mapss.get(FName));
//  console.log(mapss.get(Lname));
//  console.log(mapss.get(Cast));

 //Now for...of loop is used for geting key-values

//  for (let [name,values] of mapss) {
//   console.log(`${name}:${values}`)
   
//  }


//Now getting only keys
// for (let key of mapss.keys()) {
//   console.log(`${key}`)
  
// }

//Now getting only values

// for (let values of mapss.values()) {
//   console.log(`${values}`)
  
// }


//Now using ForEach loop
// mapss.forEach((value,key) => {
//   console.log(`${key}:${value}`)
// });

//Now converting in Arrays

// const KeyArr=Array.from(mapss.keys());
// console.log(KeyArr);


//Now converting Values into Array

//  const ValueArr=Array.from(mapss.values());
//  console.log(ValueArr);

