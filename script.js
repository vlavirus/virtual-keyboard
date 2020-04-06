let rusKeyboard = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592'],
                ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del'],
                ['capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
                ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'shift'],
                ['ctrl', 'win', 'alt', ' ', 'alt', 'ctrl', '&#9668', '&#9660', '&#9658', '']];

let engKeyboard = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592'],
                ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
                ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
                ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'shift'],
                ['ctrl', 'win', 'alt', ' ', 'alt', 'ctrl', '&#9668', '&#9660', '&#9658', '']];

let eventCode = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
                ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del'],
                ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
                ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
                ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'empty']];


window.onload = function() {
    createKeyboar();
    listenerDisplayKeyboard();
    listenerMechanicKeyboard();
    onmouseover();
    onmouseout();
    onmousedown();
    onmouseup();
    // activeKeys();
    // activeKeys();
}

let properyCapsLock = false;
let localLanguage = 'engl';

function createKeyboar() {

    
    let container = document.createElement('section');
    let textWindow = document.createElement('textarea');
    let keyboard = document.createElement('div');
    let keyboardRow = document.createElement('div');

    container.className = 'container';
    textWindow.className = 'text--window';
    keyboard.className = 'keyboard-korpus';
    keyboardRow.className = 'keyboard-row ';

    document.body.append(container);
    document.querySelector('.container').append(textWindow);
    document.querySelector('.container').append(keyboard);

    for ( let rows = 0; rows < 5; rows++ ) {
        let keyboardRow = document.createElement('div');
        keyboardRow.className = `keyboard-row row${rows+1}`;
        document.querySelector('.keyboard-korpus').append(keyboardRow);
        for ( let keys = 0; keys < eventCode[rows].length; keys = 1 + keys ) {
            let key = document.createElement('button');
            key.className = `keyboard-key ${eventCode[rows][keys]}`; 
            key.innerHTML = engKeyboard[rows][keys];
            document.querySelector(`.row${rows+1}`).append(key);
        }
            
    }
}

function addCapsLock() {
    let allKeys = document.querySelectorAll('.keyboard-key');

    if ( properyCapsLock === false ) {
        allKeys.forEach((btn) => {
            const keyButton = btn;
            keyButton.innerHTML = btn.innerHTML.toUpperCase();
        });
        properyCapsLock = true;
    } else {
        allKeys.forEach((btn) => {
            const keyButton = btn;
            keyButton.innerHTML = btn.innerHTML.toLowerCase();
        });
        properyCapsLock = false;
    }
}



function listenerDisplayKeyboard() {
    document.querySelector('.keyboard-korpus').addEventListener('click', (e) => {
        // console.log(e.target.closest('.keyboard-key'));
        let target = e.target.closest('.keyboard-key');

        if ( target != null ) {
            document.querySelector('.text--window').value += target.innerHTML;
        }
    })
}
    

function onmouseover() {
    document.querySelector('.keyboard-korpus').addEventListener('mouseover', (e) => {
        // console.log(e.target.closest('.keyboard-key'));
        let target = e.target.closest('.keyboard-key');

        if ( target != null ) {
            target.classList.add('hovered');
        }
    })
}


function onmouseout() {
    document.querySelector('.keyboard-korpus').addEventListener('mouseout', (e) => {
        let target = e.target.closest('.keyboard-key');

        if ( target != null ) {
            target.classList.remove('hovered');
        }
    })
}

function  onmousedown() {
    document.querySelector('.keyboard-korpus').addEventListener('mousedown', (e) => {
        let target = e.target.closest('.keyboard-key');
        if (!target) return;
        target.classList.remove('hovered');
        target.classList.add('pushed');
    })
}

function  onmouseup() {
    document.querySelector('.keyboard-korpus').addEventListener('mouseup', (e) => {
        let target = e.target.closest('.keyboard-key');
        if (!target) return;
        target.classList.remove('pushed');
        target.classList.add('hovered');
    })
}

function changeLenguge() {
    console.log('check2');
    let delRows = document.querySelectorAll('.keyboard-row');
    if (localLanguage === 'engl' ) {

        for(let i = 0; i < delRows.length; i++) {
            delRows[i].remove();
        }
        for ( let rows = 0; rows < 5; rows++ ) {
            let keyboardRow = document.createElement('div');
            keyboardRow.className = `keyboard-row row${rows+1}`;
            document.querySelector('.keyboard-korpus').append(keyboardRow);
            for ( let keys = 0; keys < eventCode[rows].length; keys = 1 + keys ) {
                let key = document.createElement('button');
                key.className = `keyboard-key ${eventCode[rows][keys]}`; 
                key.innerHTML = rusKeyboard[rows][keys];
                document.querySelector(`.row${rows+1}`).append(key);
            }
        }
    localLanguage = 'rus';
    } else {
        for(let i = 0; i < delRows.length; i++) {
            delRows[i].remove();
        }
        for ( let rows = 0; rows < 5; rows++ ) {
            let keyboardRow = document.createElement('div');
            keyboardRow.className = `keyboard-row row${rows+1}`;
            document.querySelector('.keyboard-korpus').append(keyboardRow);
            for ( let keys = 0; keys < eventCode[rows].length; keys = 1 + keys ) {
                let key = document.createElement('button');
                key.className = `keyboard-key ${eventCode[rows][keys]}`; 
                key.innerHTML = engKeyboard[rows][keys];
                document.querySelector(`.row${rows+1}`).append(key);
            }
        }
    localLanguage = 'engl';
    }
}

function listenerMechanicKeyboard() {
    document.addEventListener('keydown', (e) => {

        let find = (''+e.code);
        let findItem = document.querySelector('.'+find);
        
        console.log(find);
        if ( find === 'CapsLock') {
            addCapsLock();
            return;
        } else if ( find === 'Tab') {
            document.querySelector('.text--window').value += '    ';
            findItem.classList.add('pushed');
        } else if ( e.altKey && e.ctrlKey ) {
            console.log('check');
            changeLenguge();
        }
            document.querySelector('.text--window').value += document.querySelector('.'+e.code).innerHTML;
            // document.querySelector('.text--window').classList.add('focused');
            findItem.classList.add('pushed');

    });

    document.addEventListener('keyup', (e) => {

        let find = (''+e.code);
        // console.log(document.querySelectorAll('.'+find));
        let findItem = document.querySelector('.'+find);
        findItem.classList.remove('pushed');
        // document.querySelector('.text--window').classList.remove('pushed');
    });
}