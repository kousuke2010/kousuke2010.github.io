function decodeAll(encodeStr) {
	var arr = encodeStr.split("%"),
	str = "";
	for (var i = 1; arr[i]; i++) {
		str += String.fromCharCode(parseInt(arr[i], 16));
	}
	return str;
}