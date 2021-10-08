const siyahi = ["paper.png", "qayçı.png", "daş.png"]

//DOM DOcument Object Model

const kagiz = document.getElementById('kagiz')
const qayci = document.getElementById('qayci')
const das = document.getElementById('das')


const komputerinSecimi = document.getElementById('komputer-secim')
const neticeniYaz = document.getElementById('netice')

kagiz.onclick = ZeynalabdinSeciminiEt
qayci.onclick = ZeynalabdinSeciminiEt
das.onclick = ZeynalabdinSeciminiEt


function ZeynalabdinSeciminiEt() {
    const komputer = RandomSecim()
    const secim = this.dataset.id

    if(komputer ==0 && secim ==0) {
        netice = "Her ikiniz eyni secimi etdiniz"
    }

    else if(komputer==0 && secim ==1) {
        netice = "Tebrikler! Qayci kagizi kesir"
    }

    else if(komputer==0 && secim ==2) {
        netice = "Uduzdur, kagiz dashi bukur"
    }

    else if (komputer ==1 && secim ==0) {
        netice = "Uduzdun, qayci kagizi kesir"
    }

    else if(komputer==1 && secim ==1) {
        netice = "Her ikiniz eyni secimi etdiniz"
    }

    else if (komputer==1 && secim ==2) {
        netice = "Tebrikler qazandin dash qaycini sindirir"
    }

    else if(komputer==2 && secim ==0){
        netice = "Qazandin! Kagiz dashi bukur"
    }
    else if(komputer==2 && secim ==1) {
        netice = "Uduzdun! Dash qaycinin sindirir"
    }
    else if(komputer==2 && secim ==2){
        netice = "Eyni elementi secdiniz! Yeniden cehd edin"
    }

    neticeniYaz.innerHTML = netice
}

function RandomSecim() {
    const say = Math.round(Math.random()*2) //0-2
    komputerinSecimi.src = `img/${siyahi[say]}`

    return say
}

