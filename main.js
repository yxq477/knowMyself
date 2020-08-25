let data = require('./data​​​​').replace(/[\s]*/g, '')
const iconv = require('iconv-lite')
const fs = require('fs')
const https = require('https');
const pieceLength = 300

function isNeededWord (wordObj) {
  // a	形容词	ad	副形词	an	名形词
  return wordObj.pos === 'n' || wordObj.pos === 'a' || wordObj.pos === 'ad' || wordObj.pos === 'an'
}

const options = {
  hostname: 'aip.baidubce.com',
  path: '/rpc/2.0/nlp/v1/lexer?chrset=UTF-8&access_token=24.a603d8df8bfff858076ea16539d841e3.2592000.1600913889.282335-22232232',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

let allWords = []
for (let i = 0; i < data.length + pieceLength; i += pieceLength) {
  const text = data.slice(i, i + pieceLength)
  setTimeout(() => {
    const req = https.request(options, res => {
      let body = ''
      res.on('data', (chunk) => {
        body += iconv.decode(chunk, 'GBK')
      });
      res.on('end', () => {
        const items = JSON.parse(body).items
        console.log(items)
        if (items) {
          allWords = allWords.concat(items.filter(i => isNeededWord(i)))
        }
        const result = allWords.map(item => item.item)
        // if (i > data.length - pieceLength) {
        const resultText = result.join(' ')
        console.log(resultText)
        fs.writeFileSync('result.txt', resultText, 'utf8');
        // }
      })
    })
    req.end(iconv.encode(JSON.stringify({ text }), 'GBK'))
  }, 10 * i)
}