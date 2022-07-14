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

const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const XinzLog = (text, color) => {
	return !color ? chalk.yellow('[FAX] ') + chalk.green(text) : chalk.yellow('[XINZ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	XinzLog
}
