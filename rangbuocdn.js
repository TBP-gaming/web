   function send(){
    var arr = document.getElementsByTagName('input');
    var tennd = arr[0].value;
    var mk = arr[1].value; 
    if ( tennd == "" || mk == "" ) {
        alert(" Hãy nhập đủ thông tin ");
        return;
    }
}