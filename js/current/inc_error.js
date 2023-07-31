window.onerror = ErrorSetting

var e_msg="";
var e_file="";
var e_line="";

function ErrorSetting(msg, file_loc, line_no) {
	e_msg=msg;
	e_file=file_loc;
	e_line=line_no;
	display();
	return true; 
}

function display() {
	window.top.SendCommand('Error in file: ' + e_file + '<br>line number:' + e_line +  '<br>Message:' + e_msg);
		
}
