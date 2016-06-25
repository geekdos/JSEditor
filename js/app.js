function addHTML() {
	document.getElementById('textHTML').innerHTML += document.getElementById('txtHTML').value;
	document.getElementById('txtHTML').value = '';
}
function resetHTML() {
	document.getElementById('textHTML').innerHTML = '';
}
function addJS() {
	if (document.getElementById('add')) {
		document.getElementById('add').parentNode.removeChild(document.getElementById('add'));
	}
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.text = document.getElementById('txtJS').value;
	newScript.id = 'add';
	document.getElementsByTagName('head')[0].appendChild(newScript);
	document.getElementById('txtJS').value = '';
}