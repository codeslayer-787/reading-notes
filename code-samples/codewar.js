function isIsogram(str){
  return str.split('').filter((item, pos, arr)=> arr.indexOf(item.toLowerCase) == pos).length == str.length;
}


