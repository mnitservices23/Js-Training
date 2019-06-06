var array=[20,"yes",25,true];
function arrayChecker(array1){

    for(var index=0; index<array1.length; index++){
      if (typeof array1[index]=="undefined"){
          array1[index]=0;
      }else if(typeof array1[index]=="number"){
         array1[index]=1;
      }else if(typeof array1[index]=="string"){
         array1[index]=2;
      }else {array1[index]=-1;}
    }
  
  return array1;
}
