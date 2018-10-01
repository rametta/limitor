const { after } = require('fluture')

const chunkor = arr => perChunk => arr.reduce((all,one,i) => {
  const ch = Math.floor(i/perChunk); 
  all[ch] = [].concat((all[ch]||[]),one); 
  return all
}, [])

const limitor = flutures => limit => chunkor(flutures)(limit)
  .map((chunk, chunkIndex) => chunk.map(f => chunkIndex * 1000 > 0 ? f.chain(x => after(chunkIndex * 1000, x)) : f))
  .reduce((acc, chunk) => acc.concat(chunk), [])

module.exports = limitor