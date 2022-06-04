let eggs = document.getElementById('eggs');
let psalms = document.getElementById('psalms');
let toddler = document.getElementById('toddler');
let functions = document.getElementById('functions');
let halo = document.getElementById('halo');

let eggsP = document.getElementById('eggs-p');
let psalmsP = document.getElementById('psalms-p');
let toddlerP = document.getElementById('toddler-p');
let functionsP = document.getElementById('functions-p');
let haloP = document.getElementById('halo-p');

let readMores = [eggs, psalms, toddler, functions, halo];
let paragraphs = document.getElementsByClassName('paragraph-container');

const readMoreLess = (projectDescriptionID, textToScroll) => {    
    if(projectDescriptionID.innerHTML === 'read more...........') {
        textToScroll.style.overflowY = 'scroll';
        projectDescriptionID.innerHTML = 'read less...........';
    } 
    else {
        textToScroll.scrollTo(0, 0);
        textToScroll.style.overflowY = 'hidden';
        projectDescriptionID.innerHTML = 'read more...........';
    }    
}

eggs.addEventListener('click', function() {readMoreLess(eggs, eggsP)});
psalms.addEventListener('click', function() {readMoreLess(psalms, psalmsP)});
toddler.addEventListener('click', function() {readMoreLess(toddler, toddlerP)});
functions.addEventListener('click', function(){readMoreLess(functions, functionsP)});
halo.addEventListener('click', function(){readMoreLess(halo, haloP)})
