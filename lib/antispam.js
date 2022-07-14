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
// Message Filter / Message Cooldowns
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1500);// 1.5 sec is delay before processing next command;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};
