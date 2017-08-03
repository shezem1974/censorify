var censoredWords = ["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
	for(idx in consoredWords){
		inStr= inStr.replace(consoredWords[idx],"****");
	}
	for(idx in customCensoredWords){
		inStr= inStr.replace(customCensoredWords[idx],"****");
	}
	return inStr;
}

function addCensoredWords(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor=censor;
export.addCensoredWord=addCensoredWord;
export.addCensoredWords=addCensoredWords;
