function send(){
	var arr = document.getElementsByTagName('input');
    var ten = arr[0].value;
    var tennd = arr[1].value;
    var sdt = arr[2].value;
    var mk = arr[3].value;
    var diachi = arr[4].value;
    if (ten == "" || tennd == "" || sdt == "" || mk == "" || diachi == "") {
    	alert(" Hãy nhập đủ thông tin ");
    	return;
    }
    if ( isNaN(sdt)){
    	alert(" Số điện thoại không được nhập chữ ");
    }
}