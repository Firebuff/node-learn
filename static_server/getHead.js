const getHead = function (extname) {

	let name = ''
	switch (extname) {
		case '.html':
			name = "text/html;charset='utf-8'"
			break;
		case '.js':
			name = "text/js;charset='utf-8'"
			break;
		default:
			name = "text/css;charset='utf-8'"
			break;
	}

	return name;
}

module.exports = getHead