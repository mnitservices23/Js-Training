var array=[20,"yes",25];
function arrayChecker(array1, index){
  if (typeof array1[index]=="undefined"){
      array[index]=0;
  }else if(typeof array1[index]=="number"){
     array[index]=1;
  }else if(typeof array1[index]=="string"){
     array[index]=2;
  }
  
  return array1;
}
