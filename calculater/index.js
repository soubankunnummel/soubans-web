function buttenclick(val){
    
    document.getElementById("screen").value+=val
    
}
function celarScreen(){
   
    document.getElementById("screen").value=""

}
function equlClick() {
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}