

function inputProcessing(){
    let input = document.getElementById('input').value;
    result = input.toString().toLowerCase().replace(/a|e|i|o|u/g, function (x) {
        switch(x) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
        }
    });

    document.getElementById("result").innerHTML=`<div class="result">
                                                <p id="textResult" class="p-result">${result}</p>
                                                
                                                <button class="btn-3" onclick="copyText()">Copiar</button>
                                                </div>`;

}

function decrypt(){
    let input= document.getElementById('input').value;
    result = input.toString().toLowerCase().replace(/ai|enter|imes|ober|ufat/g, function (x) {
        switch(x) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
        }
    });
    document.getElementById("result").innerHTML=`<div class="result">
                                                <p id="textResult" class="p-result">${result}</p>
                                                <button class="btn-3" onclick="copyText()">Copiar</button>
                                                </div>`;
}

function copyText() {
    let text = document.getElementById("textResult").innerText;

    navigator.clipboard.writeText(text);
 
    
}