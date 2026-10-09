
        // NEW: Function to clear both boxes
        function clear_text() {
            document.getElementById("legacy_text").value = "";
            document.getElementById("unicode_text").value = "";
        }

        function copyToClipboard(elementId) {
            var copyText = document.getElementById(elementId);
            if (copyText.value === "") {
                alert("Nothing to copy!");
                return;
            }
            copyText.select();
            copyText.setSelectionRange(0, 99999); 
            navigator.clipboard.writeText(copyText.value);
            alert("Text copied to clipboard!");
        }

        // ... [Keep your existing convert_to_akruti() and Replace_Symbols() functions here] ...
    

function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    
    // Optional: Visual feedback
    alert("Text copied to clipboard!");
}
function convert_to_akruti()
{
 
var array_one = new Array( 
"0","1","2","3","4","5","6","7","8","9", 
"#","$","&","*","‚","}",
"Wÿ","Xÿ",
//"[ô","]ô",
"î","ï",//"Iß",
"p","q","r","s","t","u","v","w","x","y","z","{","|",
"¡","¢","¤","¦","§","©","ª","«","¬","®","¯","Ÿ",
"°","±","²","´","¸","¹","º","»","¼","½","¾","¿",
"À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï",
"à","á","â","ã","ä","å","æ","è","ý",

"<","l","m","n","o","…","õ_",
"Œ","™","š","›","œ","¡",
"Ð","Ñ","Ò","Ó","Ô","Õ","Ö","×","Š","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß",



//ý  ZþZ ©
//ß
//Ê
"@ା","@","A","B","C","D","E","F","G","H","I","J",

"K","L","M","N","O",
"P","Q","R","S","T",
"U","V","W","X","Y",
"Z","[","\\","]","^",
"_","`","a","b","c",

"~","d","e","f","g","h","i","j","k",


"ÿ",
"û","ò","ú","ê","ë","ì","í","é","ö","ö",

//"ù÷","÷","ùø","ø", "ùû", "ù"
"ñ","õ","ü","þ","ଅା")

//  Remove typing mistakes in the original file

var array_two = new Array(
"୦","୧","୨","୩","୪","୫","୬","୭","୮","୯",
"୰","ଽ","ଌ","ଞ୍ଚ","ଞ୍ଛ","ତ୍କ",
"ଡ଼","ଢ଼",
//"ଥି","ଧି",
"୍ରୁ","୍ରୂ",//"ୱ",
"କ୍ଟ୍ର","କ୍ତ","କ୍ସ","ଗ୍ଦ","ଗ୍ଧ","ଙ୍କ","ଙ୍ଖ","ଙ୍ଗ","ଙ୍ଘ","ଚ୍ଚ","ଚ୍ଛ","ଜ୍ଜ","ଜ୍ଝ",
"ଦ୍ଧ","ଦ୍ଘ","ଧ୍ଯ","ନ୍ଦ","ନ୍ଧ","ତ୍ତ","ନ୍ର","ନ୍ତ","ଞ୍ଜ","ପ୍ପ","ପ୍ତ","ଦ୍ଦ",
"ପ୍ସ","ବ୍ଦ","ବ୍ଧ","ମ୍ବ","ମ୍ଭ","ମ୍ମ","ଲ୍କ","ଲ୍ଗ","ଶ୍ଛ","ଶ୍ଚ","ଷ୍ଣ","ଷ୍ପ",
"ଷ୍ଫ","ଷ୍ଟ","ଷ୍ଠ","ଷ୍କ","ସ୍କ","ସ୍ଖ","ସ୍ପ","ସ୍ଫ","ସ୍ତ୍ର","ସ୍ତ","ସ୍ବ","ଳ୍କ","ଳ୍ପ","ଳ୍ଫ","ତ୍ଥ","ଳ୍ଳ",
"୍ମ","୍ମୃ","୍ର","୍ର","୍ଲ","୍ଭ","୍ଳ","୍ସ","୍ୟ",

"ଣ୍ଟ","କ୍ଷ","ଜ୍ଞ","ଦ୍ଭ","କ୍ଟ","ଟ୍ଟ","ମ୍ପ",
"ଣ୍ଠ","ତ୍ମ","ତ୍ପ","ତ୍ସ","ତ୍ସ୍ନ","ଦ୍ଧ",
"କ୍ଷ୍ଣ","୍କ","୍ଖ","୍ଗ","୍ଚ","୍ଜ","୍ଝ","୍ଠ","ଣ୍ଡ","୍ଡ","୍ଣ","୍ଥ","୍ଧ","୍ନ","୍ପ","୍ଫ","୍ବ",




"ଆ", "ଅ","ଇ","ଈ","ଉ","ଊ","ଋ","ୠ","ଏ","ଐ","ଓ","ଔ",

"କ","ଖ","ଗ","ଘ","ଙ",
"ଚ","ଛ","ଜ","ଝ","ଞ",
"ଟ","ଠ","ଡ","ଢ","ଣ",
"ତ","ଥ","ଦ","ଧ","ନ",
"ପ","ଫ","ବ","ଭ","ମ",

"ଯ","ୟ","ର","ଲ","ଶ","ଷ","ସ","ହ","ଳ",


"଼" ,
"ା", "ି","ୀ","ୁ","ୁ","ୂ", "ୂ", "ୃ","।","|",
//"ୈ", "ୖ", "ୌ", "ୗ" , "ୋ",  "େ"
"ଁ","ଂ","ଃ","୍","ଆ")

// Remove typing mistakes in the original file 

//**************************************************************************************
//
// Punctuation marks incorporated at the end
//
//**************************************************************************************
// The following two characters are to be replaced through proper checking of locations:
//**************************************************************************************
//    "ò","ó",         
//    "ି", "ିଁ",  )     
//
//   "ð", ð
// "ର୍" (reph) 
//**************************************************************************************

    var array_one_length = array_one.length ;

    var modified_substring = document.getElementById("legacy_text").value  ;
    Replace_Symbols( ) ;

//modified_substring = modified_substring.replace( "$2$1" , /([ù])([କଖଗଘଚଛଜଝଟଠଡଢଢ଼ଣତଥଦଧନପଫବଭମୟରଲବଶଷସହକ୍ଷଡ଼ଳ])/g  ) ;

modified_substring = modified_substring.replace( "$2$3$1", /([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଢଢ଼ଣତଥଦଧନପଫବଭମୟରଲବଶଷସହକ୍ଷଡ଼ଳ])/g  ) ;
 
modified_substring = modified_substring.replace( "$2$3$1", /([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଢଢ଼ଣତଥଦଧନପଫବଭମୟରଲବଶଷସହକ୍ଷଡ଼ଳ])/g  ) ;

//modified_substring = modified_substring.replace( "ୌ", "ùø" ) ;

//modified_substring = modified_substring.replace( "ୋ", "ùû" ) ;

//modified_substring = modified_substring.replace( "ୈ", "ù÷"  ) ;

//modified_substring = modified_substring.replace( "େ",  "ù" ) ;


    processed_text = modified_substring ;
     
    document.getElementById("unicode_text").value = processed_text  ;

// --------------------------------------------------


function Replace_Symbols( )

{
var position_uppercoma = modified_substring.indexOf( "`" ) 

while ( position_uppercoma != -1 )  //while-03

{
modified_substring = modified_substring.replace( "`" , "'")   ;

position_uppercoma = modified_substring.search( "`", position_uppercoma + 1 ) // search for 'wrong ee' ahead of the current position. 

}
//substitute array_two elements in place of corresponding array_one elements

if ( modified_substring != "" )  // if stringto be converted is non-blank then no need of any processing.
{

//start


modified_substring = modified_substring.replace( "ର୍ଣ୍ଣ" , "‰ð")   ; 

var position_of_f = modified_substring.indexOf( "ୌ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ୌ" ,  "ù" + character_left_to_f + "ø")  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "୍" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "୍"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "ù", "ù" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ୌ/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 
		   
var position_of_f = modified_substring.indexOf( "ୈ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ୈ" ,  "ù" + character_left_to_f + "÷")  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "୍" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "୍"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "ù", "ù" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ୈ/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 
var position_of_f = modified_substring.indexOf( "ୋ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ୋ" ,  "ù" + character_left_to_f + "û")  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "୍" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "୍"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "ù", "ù" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ୋ/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 		   
		   
var position_of_f = modified_substring.indexOf( "େ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "େ" ,  "ù" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "୍" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "୍"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "ù", "ù" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
			 while (( modified_substring.charAt( position_of_f - 1 ) == "ଡ" )  &  ( position_of_f != 0  ) &  ( modified_substring.charAt( position_of_f + 1 ) == "଼"  ) )
               {
				var string_to_be_replaced = modified_substring.charAt( position_of_f - 1 ) + "ଡ"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "ù", "ù" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
                  
               }  
            position_of_f = modified_substring.search( /େ/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 
	set_of_matras = "େ  ୈ   ୋ  ୌ "

while ( position_of_R != -1 )  // while-04
{
var position_of_R = modified_substring.indexOf( "ର୍" )
modified_substring = modified_substring.replace( "ର୍" , "ð" ) ;
probable_position_of_half_r = position_of_R + 1 ;
var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )


// trying to find non-maatra position left to current O (ie, half -r).

while ( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null )  // while-05

{
probable_position_of_half_r = probable_position_of_half_r + 1 ;
charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

}  // end of while-05


charecter_to_be_replaced = modified_substring.substr ( position_of_R , (probable_position_of_half_r- position_of_R)+1 ) ;
new_replacement_string = modified_substring.substr ( (position_of_R+1) , (probable_position_of_half_r- (position_of_R) ) )+"ð"  ; 

modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "ର୍" ) ;

}	   

for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

{ 

//  alert(" modified substring = "+modified_substring)

//***********************************************************
// if (input_symbol_idx==106) 
//  { alert(" input_symbol_idx = "+input_symbol_idx);
//    alert(" input_symbol_idx = "+input_symbol_idx)
//; alert(" character =" + modified_substring.CharCodeAt(input_symbol_idx))
//     alert(" character = "+modified_string.fromCharCode(input_symbol_idx)) 
//   }
// if (input_symbol_idx == 107) 
//   { alert(" input_symbol_idx = "+input_symbol_idx);
//    alert(" character = ",+string.fromCharCode(input_symbol_idx)) 
//   }
//***********************************************************
idx = 0  ;  // index of the symbol being searched for replacement

while (idx != -1 ) //while-00
{

modified_substring = modified_substring.replace( array_two[ input_symbol_idx ] , array_one[input_symbol_idx] )
idx = modified_substring.indexOf( array_two[input_symbol_idx] )

} // end of while-00 loop
// alert(" end of while loop")
} // end of for loop
// alert(" end of for loop")

// alert(" modified substring2 = "+modified_substring)
//*******************************************************
//var position_of_i = modified_substring.indexOf( "ò" )

//while ( position_of_i != -1 )  //while-02
//{
//var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
//var charecter_to_be_replaced = "ò" + charecter_next_to_i
//modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "ି"  ) 
//position_of_i = modified_substring.search( /ò/ , position_of_i + 1 ) // search for i ahead of the current position.

//} // end of while-02 loop

//**********************************************************************************
// End of Code for Replacing four Special glyphs
//**********************************************************************************

// following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.


modified_substring = modified_substring.replace( "OÑ", "u" ) ;

var position_of_f = modified_substring.indexOf( "þଵ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
			modified_substring = modified_substring.replace( "þଵ", "ß" ) ;

            position_of_f = modified_substring.search( "þଵ" , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 
// replacing rna 		   
var position_of_f = modified_substring.indexOf( "YðÙ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
			modified_substring = modified_substring.replace( "YðÙ", "‰ð" ) ;

            position_of_f = modified_substring.search( "YðÙ" , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 
// replacing b phala
var position_of_f = modified_substring.indexOf( "þୱ" )  ;
         while ( position_of_f !=-1 )  //while-02
           {
			modified_substring = modified_substring.replace( "þୱ", "ß" ) ;

            position_of_f = modified_substring.search( "þୱ" , position_of_f + 1 ) ; // search for f ahead of the current position.

           } 			   

var position_of_wrong_ee = modified_substring.indexOf( "ି୍" ) 

while ( position_of_wrong_ee != -1 )  //while-03

	{
	var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
	var charecter_to_be_replaced =  "ି୍" + consonent_next_to_wrong_ee 
	modified_substring = modified_substring.replace( charecter_to_be_replaced , "୍" + consonent_next_to_wrong_ee + "ି" ) 
	position_of_wrong_ee = modified_substring.search( /ି୍/ , position_of_wrong_ee + 2 ) // search for 'wrong ee' ahead of the current position. 

	} // end of while-03 loop

// following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

var position_of_wrong_ee = modified_substring.indexOf( "ିଂ୍" ) 

while ( position_of_wrong_ee != -1 )  //while-03

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 3 )
var charecter_to_be_replaced = "ିଂ୍" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( charecter_to_be_replaced , "୍" + consonent_next_to_wrong_ee +   "ିଂ" ) 
position_of_wrong_ee = modified_substring.search( /ିଂ୍/ , position_of_wrong_ee + 3 ) // search for 'wrong ee' ahead of the current position. 

} // end of while-03 loop


// Eliminating reph "ð" and putting 'half - r' at proper position for this.
 set_of_matras = "ା  ି  ୀ  ୁ   ୂ   ୃ  େ  ୈ   ୋ  ୌ ଂ ଃ  ଁ"
//var position_of_R = modified_substring.indexOf( "ð" )
var position_of_wrong_tta = modified_substring.indexOf( "ZðþZ" ) 

while ( position_of_wrong_tta != -1 )  //while-03

{
modified_substring = modified_substring.replace( "ZðþZ" , "©ð")   ;

position_of_wrong_tta = modified_substring.search( "ZðþZ", position_of_wrong_tta + 1 ) // search for 'wrong ee' ahead of the current position. 

} 
//*while ( change of position_of_କ୍ଯ )  // while-04

var position_of_wrong_tta = modified_substring.indexOf( "þ~" ) 

while ( position_of_wrong_tta != -1 )  //while-03

{
modified_substring = modified_substring.replace( "þ~" , "ý")   ;

position_of_wrong_tta = modified_substring.search( "þ~", position_of_wrong_tta + 1 ) // search for 'wrong ee' ahead of the current position. 

} 
 

//*while ( change of position_of_ଚଢେଇ ) þ? =þ // while-04

var position_of_wrong_tta = modified_substring.indexOf( "Xùÿ" ) 

while ( position_of_wrong_tta != -1 )  //while-03

{
modified_substring = modified_substring.replace( "Xùÿ" , "ùXÿ")   ;

position_of_wrong_tta = modified_substring.search( "Xùÿ", position_of_wrong_tta + 1 ) // search for 'wrong ee' ahead of the current position. 

} 
//*while ( change of position_of_ଉଦ୍ଦେଶ୍ୟ  -\þ\ = Ÿ ) þ? =þ // while-04

var position_of_wrong_tta = modified_substring.indexOf( "ୱ" ) 

while ( position_of_wrong_tta != -1 )  //while-03

{
modified_substring = modified_substring.replace( "ୱ" , "Iß")   ;

position_of_wrong_tta = modified_substring.search( "ୱ", position_of_wrong_tta + 1 ) // search for 'wrong ee' ahead of the current position. 

}
//*while ( change of position_of_ନ୍ତ୍ର -\þ\ = Ÿ ) þ? =þ // while-04

var position_of_wrong_ntra = modified_substring.indexOf( "«â" ) 

while ( position_of_wrong_ntra != -1 )  //while-03

{
modified_substring = modified_substring.replace( "«â" , "ª")   ;

position_of_wrong_ntra = modified_substring.search( "«â", position_of_wrong_ntra + 1 ) // search for 'wrong ee' ahead of the current position. 

}
//*while ( change of position_of_ତ୍ସ-\þ\ = Ÿ ) þ? =þ // while-04

var position_of_wrong_tsa = modified_substring.indexOf( "Zè" ) 

while ( position_of_wrong_tsa != -1 )  //while-03

{
modified_substring = modified_substring.replace( "Zè" , "›")   ;

position_of_wrong_tsa = modified_substring.search( "Zè", position_of_wrong_tsa + 1 ) // search for 'wrong ee' ahead of the current position. 

}
//*while ( change of position_of_ର୍ଚ୍ଚ -\þ\ = Ÿ ) þ? =þ // while-04

var position_of_wrong_rch = modified_substring.indexOf( "PðÔ" ) 

while ( position_of_wrong_rch != -1 )  //while-03

{
modified_substring = modified_substring.replace( "PðÔ" , "yð")   ;

position_of_wrong_rch = modified_substring.search( "PðÔ", position_of_wrong_rch + 1 ) // search for 'wrong ee' ahead of the current position. 

}

/*while ( position_of_R > 0 )  // while-04
{
probable_position_of_half_r = position_of_R + 1 ;
var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )


// trying to find non-maatra position left to current O (ie, half -r).

while ( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null )  // while-05

{
probable_position_of_half_r = probable_position_of_half_r + 1 ;
charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

} // end of while-05


charecter_to_be_replaced = modified_substring.substr ( position_of_R , ( position_of_R + probable_position_of_half_r ) ) ;
new_replacement_string = modified_substring.substr ( (position_of_R+1) , ( position_of_R + probable_position_of_half_r ) )+"ð" ;
//charecter_to_be_replaced = charecter_to_be_replaced + "ð" ;
modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "ð" ) ;

}*/ // end of while-04
//ମୁର୍ଖାମୀ
//ðcêLûcú (current)
//cêLðûcú (Expected)
//**********punctuation marks ****************
//    "¡","£","¤","¥","²","³","´","µ","¹","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","Ê","Ñ","Ò","Õ",
// "{","}","[","]","!","(",")","*","-","/",":",";","<","=",">","?","@","|",",","!","\\","√","-",
modified_substring = modified_substring.replace( "‰‰ð" , "‰ð")   ;
//modified_substring = modified_substring.replace( "ZðþZ" , "©ð")   ; 
//modified_substring = modified_substring.replace( "ZþZ" , "©")   ; 
//modified_substring = modified_substring.replace( /£/g , "}" )   ;  
//modified_substring = modified_substring.replace( /¤/g , "[" )   ;  
//modified_substring = modified_substring.replace( /¥/g , "]" )   ;  
//modified_substring = modified_substring.replace( /²/g , "!" )   ;  
//modified_substring = modified_substring.replace( /³/g , "(" )   ;  
//modified_substring = modified_substring.replace( /´/g , ")" )   ;  
//modified_substring = modified_substring.replace( /µ/g , "*" )   ;  
//modified_substring = modified_substring.replace( /Æ/g , "?" )   ;  

} // end of IF  statement  meant to  supress processing of  blank  string.

} // end of the function  Replace_Symbols

} // end of convert_to_unicode function


//*******************************************************************************
 

document.querySelector('[data-converter-action="converter-1"]').addEventListener("click",function(e){e.preventDefault();convert_to_akruti();});
document.querySelector('[data-converter-action="converter-2"]').addEventListener("click",function(e){e.preventDefault();clear_text();});
document.querySelector('[data-converter-action="converter-3"]').addEventListener("click",function(e){e.preventDefault();copyToClipboard('unicode_text');});