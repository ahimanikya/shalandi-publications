



function clearText() {
    // Changed IDs from 'unicodeInput'/'akrutiOutput' to 'txtInput'/'txtOutput'
    document.getElementById("txtInput").value = "";
    document.getElementById("txtOutput").value = "";
}

function copyToClipboard() {
    // Changed ID from 'akrutiOutput' to 'txtOutput'
    const output = document.getElementById("txtOutput");
    if (output.value === "") { 
        alert("Nothing to copy!"); 
        return; 
    }
    
    // Select the text field
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(output.value).then(() => {
        alert("Akruti text copied!");
    }).catch(err => {
        // Fallback for older browsers
        document.execCommand("copy");
        alert("Akruti text copied!");
    });
}
  
	
	function convertToAkruti() {
    let text = document.getElementById("txtInput").value;
    if (!text) return;

    // 1. Initial cleanup for special characters
    text = text.replace(/ड़/g, "æ[");
    text = text.replace(/ढ़/g, "æ{");

    // 2. SHIFT 'i' MATRA: Moves "ि" to the front and turns it into "ef"
    // This handles single consonants and clusters (like 'स्थि')
    text = text.replace(/(([क-ह]्)+|[क-ह])ि/g, "ef$1");

    // 3. HANDLE REPH (Half-R): Moves "र्" to the end of the syllable
    text = text.replace(/र्(([क-ह]्)*[क-ह][ािीुूृेैोौंःँ]?)/g, "$1-");

    // 4. MAIN CHARACTER MAPPING
    const map = [
        ["अ", "De"], ["आ", "Dee"], ["इ", "F"], ["ई", "F&"],
        ["उ", "G"], ["ऊ", "T"], ["ऋ", "$eÝ"], ["ए", "S"],
        ["ऐ", "Sw"], ["औ", "Dees"], ["ओ", "Deew"],  
        ["श्र", "Þe"], ["ज्ञ", "%e"], ["क्ष", "#e"], ["त्र", "$e"],
        
        // Map half letters first to ensure 'e' is removed correctly
        ["क्", "keÀ"], ["ख्", "K"], ["ग्", "i"], ["घ्", "I"],
        ["च्", "®"], ["ज्", "p"], ["ण्", "C"], ["त्", "l"],
        ["थ्", "L"], ["ध्", "O"], ["न्", "v"], ["प्", "H"],
        ["फ्", "HeÀ"], ["ब्", "y"], ["भ्", "Y"], ["म्", "c"],
        ["य्", "³"], ["ल्", "u"], ["व्", "J"], ["श्", "M"], ["ष्", "<"], ["स्", "m"],

        // Map special letters
        ["ख़", "Ke"],  ["ग़", "ie"],
        ["ज़", "pe"], 
         
		["फ़", "HeÀ"],["ड़", "æ["],["—", "ö"],["”", "’"],   
		
		// Map full letters
        ["क", "keÀ"], ["ख", "Ke"], ["ग", "ie"], ["घ", "Ie"], ["ङ", "*"],
        ["च", "®e"], ["छ", "í"], ["ज", "pe"], ["झ", "Pe"], ["ञ", "_e"],
        ["ट", "ì"], ["ठ", "þ"], ["ड", "["], ["ढ", "{"], ["ण", "Ce"],
        ["त", "le"], ["थ", "Le"], ["द", "o"], ["ध", "Oe"], ["न", "ve"],
        ["प", "He"], ["फ", "HeÀ"], ["ब", "ye"], ["भ", "Ye"], ["म", "ce"],
        ["य", "³e"], ["र", "j"], ["ल", "ue"], ["व", "Je"], ["श", "Me"], 
        ["ष", "<e"], ["स", "me"], ["ह", "n"],
		
	 
       
		 

        // Matras ँ 
        ["ा", "e"], ["ी", "er"], ["ु", "g"], ["ू", "t"], ["ृ", "="],
        ["े", "s"], ["ै", "w"], ["ो", "es"], ["ौ", "aO"],
        ["्", ""], ["।", "~"], ["ं", "b"], ["ः", ":"],
		["ँ", "@"], ["'र ्", "&"], ];

    // Apply the map
    map.forEach(([uni, akr]) => {
        let regex = new RegExp(uni, "g");
        text = text.replace(regex, akr);
    });

    document.getElementById("txtOutput").value = text;
}

 

document.querySelector('[data-converter-action="converter-1"]').addEventListener("click",function(e){e.preventDefault();convertToAkruti();});
document.querySelector('[data-converter-action="converter-2"]').addEventListener("click",function(e){e.preventDefault();clearText();});
document.querySelector('[data-converter-action="converter-3"]').addEventListener("click",function(e){e.preventDefault();copyToClipboard();});