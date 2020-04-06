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
['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', '']];


window.onload = function() {
    createKeyboar();
}



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

        for ( let rows = 0; rows < 6; rows++ ) {
            let keyboardRow = document.createElement('div');
            keyboardRow.className = 'keyboard-row ${i+1}';
            document.querySelector('.keyboard-korpus').append(keyboardRow);
            
    }
}