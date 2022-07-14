//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© PBA MODS BoT.In THAKKUDU 3.7 MD
//Thank you to God , DGXEON , ALIEN ALFA
//════════════════════════════//
// NB:

//Umbikam But Oru Thozil Akkaruthu 
//════════════════════════════//

const axios = require('axios')
const cheerio = require('cheerio')

const wikiSearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
hasil.push({ wiki, thumb, judul })
return hasil
}
module.exports = { wikiSearch}
