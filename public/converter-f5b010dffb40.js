
  // Function to clear both text boxes
  function clear_text() {
    document.getElementById("legacy_text").value = "";
    document.getElementById("unicode_text").value = "";
  }

  function copyResult(id) {
    var copyText = document.getElementById(id);
    if (copyText.value === "") {
        alert("Nothing to copy!");
        return;
    }
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  }

  // ... [Keep your existing convert_to_unicode() and supporting logic here] ...


/* ORIGINAL SCRIPT PRESERVED 
*/
function convert_to_unicode()
{
var array_one = new Array( 
"0","1","2","3","4","5","6","7","8","9", 
"#","$","&","*",
"Wÿ","Xÿ","[ô","]ô",
"î","ï",
"Ð","Ñ","Ò","Ó","Ô","Õ","Ö","×","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß",
"<","l","m","n","o","…","μ","‰","Š",
"Œ","™","š","›","œ","Ÿ",
"p","q","r","s","t","u","v","w","x","y","z","{","|","}",
"¡","¢","¤","¦","§","©","ª","«","¬","®","¯",
"°","±","²","´","¸","¹","º","»","¼","½","¾","¿",
"À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï",
"@ା","@","A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O",
"P","Q","R","S","T",
"U","V","W","X","Y",
"Z","[","\\","]","^",
"_","`","a","b","c",
"~","d","e","f","g","h","i","j","k",
"£","à","á","â","ã","ä","å","æ","ç","è","ý",
"û","ò","ú","ê","ë","ì","í","é","ö",
"ñ","õ","ü","þ","ଅା")

var array_two = new Array(
"୦","୧","୨","୩","୪","୫","୬","୭","୮","୯",
"୰","ଽ","ଌ","ଞ୍ଚ",
"ଡ଼","ଢ଼","ଥି","ଧି",
"୍ରୁ","୍ରୂ",
"କ୍ଷ୍ଣ","୍କ","୍ଖ","୍ଗ","୍ଚ","୍ଜ","୍ଝ","୍ଠ","୍ଡ","୍ଣ","୍ଥ","୍ଧ","୍ନ","୍ପ","୍ଫ","୍ବ",
"ଣ୍ଟ","କ୍ଷ","ଜ୍ଞ","ଦ୍ଭ","କ୍ଟ","ଟ୍ଟ","ମ୍ପ","ଣ୍ଣ","ଣ୍ଡ",
"ଣ୍ଠ","ତ୍ମ","ତ୍ପ","ତ୍ସ","ତ୍ସ୍ନ","ଦ୍ଧ",
"କ୍ଟ୍ର","କ୍ତ","କ୍ସ","ଗ୍ଦ","ଗ୍ଧ","ଙ୍କ","ଙ୍ଖ","ଙ୍ଗ","ଙ୍ଘ","ଚ୍ଚ","ଚ୍ଛ","ଜ୍ଜ","ଜ୍ଝ","କ୍ର",
"ଦ୍ଧ","ଦ୍ଘ","ଧ୍ଯ","ନ୍ଦ","ନ୍ଧ","ତ୍ତ","ନ୍ର","ନ୍ତ","ଞ୍ଜ","ପ୍ପ","ପ୍ତ",
"ପ୍ସ","ବ୍ଦ","ବ୍ଧ","ମ୍ବ","ମ୍ଭ","ମ୍ମ","ଲ୍କ","ଲ୍ଗ","ଶ୍ଛ","ଶ୍ଚ","ଷ୍ଣ","ଷ୍ପ",
"ଷ୍ଫ","ଷ୍ଟ","ଷ୍ଠ","ଷ୍କ","ସ୍କ","ସ୍ଖ","ସ୍ପ","ସ୍ଫ","ସ୍ତ୍ର","ସ୍ତ","ସ୍ବ","ଳ୍କ","ଳ୍ପ","ଳ୍ଫ","ତ୍ଥ","ଳ୍ଳ",
"ଆ", "ଅ","ଇ","ଈ","ଉ","ଊ","ଋ","ୠ","ଏ","ଐ","ଓ","ଔ",  
"କ","ଖ","ଗ","ଘ","ଙ",
"ଚ","ଛ","ଜ","ଝ","ଞ",
"ଟ","ଠ","ଡ","ଢ","ଣ",
"ତ","ଥ","ଦ","ଧ","ନ",
"ପ","ଫ","ବ","ଭ","ମ",
"ଯ","ୟ","ର","ଲ","ଶ","ଷ","ସ","ହ","ଳ",
"୍ମ","୍ମ","୍ମୃ","୍ର","୍ର","୍ଲ","୍ଭ","୍ଳ","୍ବ","୍ସ","୍ୟ",
"ା", "ି","ୀ","ୁ","ୁ","ୂ", "ୂ", "ୃ","।",
"ଁ","ଂ","ଃ","୍","ଆ")

    var array_one_length = array_one.length ;
    var modified_substring = document.getElementById("legacy_text").value  ;
    Replace_Symbols( ) ;
modified_substring = modified_substring.replace( /([ù])([କଖଗଘଚଛଜଝଟଠଡଢଢ଼ଣତଥଦଧନପଫବଭମୟରଲବଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$1" ) ;
modified_substring = modified_substring.replace( /([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଢଢ଼ଣତଥଦଧନପଫବଭମୟରଲବଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$3$1" ) ;
modified_substring = modified_substring.replace( /([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଢଢ଼ଣତଥଦଧନପଫବଭମୟରଲବଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$3$1" ) ;
modified_substring = modified_substring.replace( /ùø/g  ,  "ୌ" ) ;
modified_substring = modified_substring.replace( /ùା/g  ,  "ୋ" ) ;
modified_substring = modified_substring.replace( /ù÷/g  ,  "ୈ" ) ;
modified_substring = modified_substring.replace( /ù/g  ,  "େ" ) ;
    processed_text = modified_substring ;
    document.getElementById("unicode_text").value = processed_text  ;

function Replace_Symbols( )
{
if ( modified_substring != "" ) 
{
for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )
{ 
idx = 0  ;  
while (idx != -1 ) 
{
modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )
} 
} 
var position_of_wrong_ee = modified_substring.indexOf( "ି୍" ) 
while ( position_of_wrong_ee != -1 ) 
{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var charecter_to_be_replaced =  "ି୍" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( charecter_to_be_replaced , "୍" + consonent_next_to_wrong_ee + "ି" ) 
position_of_wrong_ee = modified_substring.search( /ି୍/ , position_of_wrong_ee + 2 ) 
} 
var position_of_wrong_ee = modified_substring.indexOf( "ିଂ୍" ) 
while ( position_of_wrong_ee != -1 ) 
{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 3 )
var charecter_to_be_replaced = "ିଂ୍" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( charecter_to_be_replaced , "୍" + consonent_next_to_wrong_ee +   "ିଂ" ) 
position_of_wrong_ee = modified_substring.search( /ିଂ୍/ , position_of_wrong_ee + 3 ) 
} 
set_of_matras = "ା  ି  ୀ  ୁ   ୂ   ୃ  େ  ୈ   ୋ  ୌ ଂ ଃ  ଁ"
var position_of_R = modified_substring.indexOf( "ð" )
while ( position_of_R > 0 ) 
{
probable_position_of_half_r = position_of_R - 1 ;
var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )
while ( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null ) 
{
probable_position_of_half_r = probable_position_of_half_r - 1 ;
charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;
} 
charecter_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_R - probable_position_of_half_r ) ) ;
new_replacement_string = "ର୍" + charecter_to_be_replaced ; 
charecter_to_be_replaced = charecter_to_be_replaced + "ð" ;
modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "ð" ) ;
} 
modified_substring = modified_substring.replace( /ଣ୍ର୍ଣ/g , "ର୍ଣ୍ଣ")   ;  
} 


} 
} 

function convert_to_AkrutiOriSarala99 ()
{
var array_one = new Array(
"क़","ख़","ग़","ज़","ड़","ढ़","फ़",  
"!",".","।",";","(",")","{","}","[","]","/","<","=",">",",","+","*","%",
"ख़्","ख़","फ़्","फ़",
"ॐ", "?", 
"ज्ञ","ह्य","हृ","ट्ट","त्त्","क्त","श्र","द्य","द्व","द्द","द्ध","क्ष्","क्ष","ठ्ठ","त्र","ह्र","जि",
"क्रु","क्रू","୍ର","ୂ","रू","रु",
"क्र","कृ","फ्र","फृ", 
"ड़","ढ़",
"ट्र","ड्र","ढ्र","୍ର",
"क़","ग़","ज़्",
"क्","क","ख्","ख","ग्","ग","घ्","घ","ङ",  
"च्","च","छ","ज़","ज्","ज","झ्","झ","ञ्","ञ",
"ଟ","ଠ","ଡ","ଢ","ण्","ଣ",
"ତ୍","ତ","ଥ୍","ଥ","ଦ","ध्","ध","न्","ନ",
"ପ","ଫ","ବ","ଭ","ମ",
"य्","ୟ","ର","ଲ","ଶ","ଷ","ସ","ହ","ଳ", 
"औ","ओ","ऑ","ଆ","ଅ","ଈ","ଈ","ଇ","ଉ","ଊ","ଋ","ऌ","ଐ","ଏ",   
"ୌ","ୋ","ୋ","ା","ୀ","ୁ","ୂ","ୃ","େ","ୈ","ଁ","ଂ",":","ଃ","୍","ॅ","ऽ","଼")

var array_two = new Array( 
"क़","ख़","ग़","ज़","ड़","ढ़","फ़", 
"Ñ","º",".","Â","³","´","¡","£","¤","¥","À","Ã","Ä","Å","¸","†","µ","‰",
"K,","Ó","F,","Ô",
"!","Æ", 
"&","(",")","+","<",">","Ea","V","W","_","w","x","xa","{","~","œ","Ÿ",
"Ëu","Ëu","`u","`U","$","É",
"Ë","Ì","Í","Î", 
"D,","Z,",
"T/","D/","Z/","`",
"k,","ga,","j,",
"@","k","#","K","g","ga","G","Ga","=",  
"c","ca","C","ja,","j","ja","J","Ja","H","Ha",
"T","z","D","Z","N","Na",
"%","t","q","qa","d","Q","Qa","n","na",
"P","p","F","f","b","ba","B","Ba","m","ma",
"y","ya","r","l","la","L","v","va","S","Sa","Y","Ya","s","sa","*","h", 
"AaO","Aao","Aa^","Aa","A","š","[-","[","]","}","?",";","eo", "e",     
"aO","ao","a^","a","I","u","U","R","o","O","Ð","M","Á",":","\\","^","|",",")
  
    var array_one_length = array_one.length ;
    var modified_substring = document.getElementById("unicode_text").value  ;
    Replace_Symbols( ) ;
    processed_text = modified_substring ;
    document.getElementById("legacy_text").value = processed_text  ;

function Replace_Symbols( )
   {
    if (modified_substring != "" )  
       {
        var position_of_f = modified_substring.indexOf( "ି" )  ;
         while ( position_of_f != -1 )  
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ି" ,  "i" + character_left_to_f )  ;
            position_of_f = position_of_f - 1  ;
            while (( modified_substring.charAt( position_of_f - 1 ) == "୍" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "୍"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "i", "i" + string_to_be_replaced ) ;
                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ି/ , position_of_f + 1 ) ; 
           } 
       set_of_matras = "ାିୀୁୂୃେୈୋୌଂ:ଁॅ" 
       modified_substring += '  '    ;  
      modified_substring = modified_substring.replace ( /-/g , "¹" )  ; 
      modified_substring = modified_substring.replace ( /श्र्/g , "E" )  ; 
      modified_substring = modified_substring.replace ( /त्र्य/g , "~\\ya" )  ; 
       var space = " "
       var position_of_half_R = modified_substring.indexOf( "ର୍" ) ;
   while ( position_of_half_R > 0  )  
   {
    var probable_position_of_Z = position_of_half_R + 2   ;  
    var character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z )
    while( set_of_matras.match( character_at_probable_position_of_Z ) != null ) 
    {
     probable_position_of_Z = probable_position_of_Z + 1 ;
     character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z ) ;
    } 
    var right_to_position_of_Z = probable_position_of_Z + 1 ;
    if (right_to_position_of_Z > 0)  
    { var character_right_to_position_of_Z = modified_substring.charAt( right_to_position_of_Z )
      while ( character_right_to_position_of_Z == "୍" ) 
      {  
         probable_position_of_Z = right_to_position_of_Z + 1 ;
         character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z ) ;
         right_to_position_of_Z = probable_position_of_Z + 1 ;
         character_right_to_position_of_Z = modified_substring.charAt( right_to_position_of_Z )
      } 
   } 
       string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2,(probable_position_of_Z - position_of_half_R)-1) ;
       modified_substring = modified_substring.replace( "ର୍" + string_to_be_replaced, string_to_be_replaced + "-" ) ;
       position_of_half_R = modified_substring.indexOf( "ର୍" ) ;
   } 
modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;
        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
           {
            idx = 0  ;  
            while (idx != -1 ) 
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } 
           } 
        } 
       modified_substring = modified_substring.replace ( /-ao/g , "ao-" ) 
       modified_substring = modified_substring.replace ( /-a/g , "a-" )  
       modified_substring = modified_substring.replace ( /-I/g , "I-" )  
       modified_substring = modified_substring.replace ( /\ -/g , "\-" )
       modified_substring = modified_substring.replace ( /ki,/g , "ik," ) 
       modified_substring = modified_substring.replace ( /Ki,/g , "iÓ" ) 
       modified_substring = modified_substring.replace ( /gai,/g , "iga," ) 
       modified_substring = modified_substring.replace ( /fi,/g , "iÔ" ) 
       modified_substring = modified_substring.replace ( /Di,/g , "iD," ) 
       modified_substring = modified_substring.replace ( /Zi,/g , "iZ," ) 
       modified_substring = modified_substring.replace ( /jai,/g , "ija," ) 
       modified_substring = modified_substring.replace ( /nai,/g , "ina," ) 
       modified_substring = modified_substring.replace ( /ri,/g , "ir," ) 
       modified_substring = modified_substring.replace ( /Li,/g , "iL," ) 
    } 
  } 

  // Helper function for user convenience
  function copyResult(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  }

document.querySelector('[data-converter-action="converter-0"]').addEventListener("click",function(e){e.preventDefault();convert_to_unicode();;});
document.querySelector('[data-converter-action="converter-1"]').addEventListener("click",function(e){e.preventDefault();clear_text();;});
document.querySelector('[data-converter-action="converter-2"]').addEventListener("click",function(e){e.preventDefault();copyResult('unicode_text');;});