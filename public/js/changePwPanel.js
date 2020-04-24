

var cPw = document.getElementById('changePw');
cPw.addEventListener("click",showPwForm);

var cPwP = document.getElementById('changePwPanel');

var exit = document.getElementById('exit');
exit.addEventListener("click",exitPwForm);

function showPwForm() {
	cPwP.style.display = "inline";
}

function exitPwForm() {
	cPwP.style.display = "none";
}