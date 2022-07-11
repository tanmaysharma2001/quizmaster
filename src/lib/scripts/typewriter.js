/**
 * @param {number} speed
 * @param {number} s
 * @param {number} l
 * @param {number} sentence_length
 * @param {string} text
 * @param {HTMLElement | null} typeContainer
 */



let speed = 100; // typing speed
let l = 0; // letter index
let s = 0; // sentence index

/**
 * @param {string[] | any[]} txt
 * @param {HTMLElement} type_effect
 */
export function typeWriter(type_effect, txt){
    let text = txt[s];
    let sentence_length = text.length;    
    if(l < sentence_length){
        let typeContainer  = type_effect;
        if(typeContainer != null){
            typeContainer.innerHTML += text.charAt(l);
            l++;
        }
        setTimeout(function(){typeWriter(type_effect, txt)}, speed);
    } else {
        l = 0;
        s++;
        if(s >= txt.length) s = 0;

        function removeLastLetter(){
            let typeContainer = type_effect;
    
            if(typeContainer != null && typeContainer.innerHTML.length > 0){
                let tmp = typeContainer.innerHTML.split("");
                tmp.pop();
                type_effect.innerHTML = tmp.join("");
                setTimeout(function(){removeLastLetter()}, speed);
            } else {
                setTimeout(function(){typeWriter(type_effect, txt)}, speed);
            }
        }

        removeLastLetter();  // remove the existing text letter by letter
    }
}