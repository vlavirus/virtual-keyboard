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
                ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
                ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
                ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
                ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'empty']];

let defaultKeys = ['Backspace', 'Del', 'Delete', 'Tab', 'CapsLock', 'Space', 'Enter',  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];

let rowAletrnateSymbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592'];


window.onload = function() {
    createKeyboar();
    listenerDisplayKeyboard();
    listenerMechanicKeyboard();
    onmouseover();
    onmouseout();
    onmousedown();
    onmouseup();
}

let properyCapsLock = false;
let properyShift = false;
let localLanguage = null;

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
            if ( localStorage.getItem('Language') === null || localStorage.getItem('Language') === 'engl' ) {
                key.innerHTML = engKeyboard[rows][keys];
            } else {
                key.innerHTML = rusKeyboard[rows][keys];
            }
            document.querySelector(`.row${rows+1}`).append(key);
        }
    }
    let notation = document.createElement('div');
    notation.className = 'notation';
    notation.innerHTML = "Change Languge push Alt + Ctrl, or Click Win";
    document.body.append(notation);
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

function onmouseover() {
    document.querySelector('.keyboard-korpus').addEventListener('mouseover', (e) => {
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

function onmousedown() {
    document.querySelector('.keyboard-korpus').addEventListener('mousedown', (e) => {
        let target = e.target.closest('.keyboard-key');
        if (!target) return;
        target.classList.remove('hovered');
        target.classList.add('pushed');
    })
}

function onmouseup() {
    document.querySelector('.keyboard-korpus').addEventListener('mouseup', (e) => {
        let target = e.target.closest('.keyboard-key');
        if (!target) return;
        target.classList.remove('pushed');
        target.classList.add('hovered');
    })
}

function changeLanguage() {
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
    localStorage.removeItem('Language')
    localStorage.setItem('Language', localLanguage);
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
    localStorage.removeItem('Language')
    localStorage.setItem('Language', localLanguage);
    }
}

function checktKeys(button) {
    findItem = document.querySelector('.'+button);
    if ( defaultKeys.includes(button)) {
        document.querySelector('.text--window').focus();
        findItem.classList.add('pushed');
        return true;
    } else {
        return false;
    }
}

function onShift( ) {
    if ( properyShift == false ) {
        let firsRow = document.querySelector(`.row1`);
        let keys = firsRow.querySelectorAll(`.keyboard-key`);
        document.querySelector('.BracketLeft').innerHTML = '{';
        document.querySelector('.BracketRight').innerHTML = '}';
        document.querySelector('.Backslash').innerHTML = '|';
        document.querySelector('.Semicolon').innerHTML = ':';
        document.querySelector('.Quote').innerHTML = '"';
        document.querySelector('.Comma').innerHTML = '&#8249';
        document.querySelector('.Period').innerHTML = '&#8250';
        document.querySelector('.Slash').innerHTML = '?';
        for ( let k = 0; k < rowAletrnateSymbols.length; k++ ) {
            keys[k].innerHTML = rowAletrnateSymbols[k];
        }
        properyShift = true;
    } else if ( properyShift == true ) {
        let firsRow = document.querySelector(`.row1`);
        let keys = firsRow.querySelectorAll(`.keyboard-key`);
        if (localLanguage === 'engl' || localLanguage == null) {
            document.querySelector('.BracketLeft').innerHTML = engKeyboard[1][11];
            document.querySelector('.BracketRight').innerHTML = engKeyboard[1][12];
            document.querySelector('.Backslash').innerHTML = engKeyboard[1][13];
            document.querySelector('.Semicolon').innerHTML = engKeyboard[2][10];
            document.querySelector('.Quote').innerHTML = engKeyboard[2][11];
            document.querySelector('.Comma').innerHTML = engKeyboard[3][8];
            document.querySelector('.Period').innerHTML = engKeyboard[3][9];
            document.querySelector('.Slash').innerHTML = engKeyboard[3][10];
        } else {
            document.querySelector('.BracketLeft').innerHTML = rusKeyboard[1][11];
            document.querySelector('.BracketRight').innerHTML = rusKeyboard[1][12];
            document.querySelector('.Backslash').innerHTML = rusKeyboard[1][13];
            document.querySelector('.Semicolon').innerHTML = rusKeyboard[2][10];
            document.querySelector('.Quote').innerHTML = rusKeyboard[2][11];
            document.querySelector('.Comma').innerHTML = rusKeyboard[3][8];
            document.querySelector('.Period').innerHTML = rusKeyboard[3][9];
            document.querySelector('.Slash').innerHTML = rusKeyboard[3][10];
        }
        for ( let k = 0; k < rowAletrnateSymbols.length; k++ ) {
            if (localLanguage === 'engl' || localLanguage == null) {
                keys[k].innerHTML = engKeyboard[0][k];
            } else {
                keys[k].innerHTML = rusKeyboard[0][k];
            }
            properyShift = false;
        }
    }
}

function vitruadDelete() {
    let texWindow = document.querySelector('.text--window');
    texWindow.setRangeText('', texWindow.selectionStart, texWindow.selectionEnd + 1)
    texWindow.focus();
}

function vitruadEnter() {
    let texWindow = document.querySelector('.text--window');
    texWindow.value += '\n';
    texWindow.focus();
}


function vitruadBalckspace() {
    let texWindow = document.querySelector('.text--window');
    texWindow.setRangeText('', texWindow.selectionStart - 1, texWindow.selectionEnd);
    texWindow.focus();
}


function listenerDisplayKeyboard() {
    document.querySelector('.keyboard-korpus').addEventListener('click', (e) => {
        let targeted = e.target.closest('.keyboard-key');
        let find = targeted.classList[1];
        if ( find != null ) {
            if ( find === 'CapsLock') {
                addCapsLock();
                return;
            } else if ( find === 'Tab') {
                document.querySelector('.text--window').value += '    ';
            } else if ( find === 'AltLeft' || find === 'AltRight' ) {
                e.preventDefault();
                return;
            } else if ( find === 'MetaLeft' ) {
                changeLanguage();
            } else if ( find === 'ShiftLeft' || find === 'ShiftRight' ) {
                onShift();
                return;
            } else if ( find === 'Del' || find === 'Delete' ) {
                e.preventDefault();
                vitruadDelete();
            } else if ( find === 'ControlLeft' || find === 'ControlRight' ) {
                e.preventDefault();
                document.querySelector('.text--window').focus();
            } else if ( find === 'Enter' ) {
                e.preventDefault();
                vitruadEnter();
            } else if ( find === 'Backspace' ) {
                e.preventDefault();
                vitruadBalckspace();
            } else {
                document.querySelector('.text--window').value += targeted.innerHTML;
                document.querySelector('.text--window').focus();
            }
        }
    })
}

function listenerMechanicKeyboard() {
    document.addEventListener('keydown', (e) => {
        let find = (''+e.code);
        let findItem = document.querySelector('.'+find);
        if ( find === 'CapsLock') {
            addCapsLock();
            findItem.classList.add('pushed');
        } else if ( find === 'Tab') {
            document.querySelector('.text--window').value += '    ';
            findItem.classList.add('pushed');
        } else if ( find === 'AltLeft' || find === 'AltRight' ) {
            console.log(findItem);
            findItem.classList.add('pushed');
            e.preventDefault();
            return 0;
        } else if ( e.altKey && e.ctrlKey ) {
            changeLanguage();
            findItem.classList.add('pushed');
            e.preventDefault();
        } else if ( find === 'ShiftLeft' || find === 'ShiftRight' ) {
            onShift();
            findItem.classList.add('pushed');
            e.preventDefault();
            return;
        } else if (checktKeys(find, e)) {
        } else {
            document.querySelector('.text--window').value += document.querySelector('.'+e.code).innerHTML;
            e.preventDefault();
            findItem.classList.add('pushed');
        }
    });

    document.addEventListener('keyup', (e) => {
        let find = (''+e.code);
        let findItem = document.querySelector('.'+find);
        findItem.classList.remove('pushed');
    });
}git