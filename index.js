const got = require('got');
const { send } = require('micro');

const API = 'http://d.yimg.com/autoc.finance.yahoo.com/autoc';

module.exports = async function (req, res) {
	// dont need to decode; yahoo will
	const q = req.url.substr(1);

	if (!q.length) {
		return send(res, 400, {error: 'You must include a pathname.'});
	}

	if (q === 'favicon.ico') {
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
    res.end();
		return;
	}

	const out = await got(API, {query: `query=${q}&region=1&lang=en`});

	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});

	res.end(out.body);
};