const isInRange=(x)=>{
    if(x.charCodeAt()>64&&x.charCodeAt()<91){
        if(x.charCodeAt()<=77){
            return String.fromCharCode(x.charCodeAt()+13)
        } else {
            return String.fromCharCode(x.charCodeAt()-13)
        }
    } else {
        return x
    }
}
function rot13(str) {
    let charArray=str.split('')
      console.log(charArray)
    let AsciiArray=charArray.map(function(x) { return isInRange(x); }
    )
    str=AsciiArray.join('')
    return str;
  }
  
  rot13("SERR");
  
  //ABCDEFGHIJKLMN,OPQRSTUVWXYZ