document.addEventListener("DOMContentLoaded", () => {
    let array = ["sor", "require", "MORRA", "ann", "deploy", "sobe no git", "tept", "erro no codigo", "ohhh", "ta certo", "cone", "CRUD", "boostrap", "vitor", "*abraço coletivo*", "meninos, meninas  e (insira nome aqui)", "ihhhh", "atalhos", "volta no codigo", "*olhar medonho*", "h2", "nosso telespectador", "giobane", "roberta", "banheiro", "pessoas", "pessoal", "tudo bem?", "mongo", "anão", "Rafael, para de me gravar", "*audio random do fundo*", "*alulu recusando ajudar*", "presta atenção", "*implorando por ajuda*"]

    embaralhar(array)

    criarBox(array[0])
    criarBox(array[1])
    criarBox(array[2])
    criarBox(array[3])
    criarBox(array[4])
    criarBox(array[5])
    criarBox(array[6])
    criarBox(array[7])
    criarBox(array[8])
    criarBox(array[9])
    criarBox(array[10])
    criarBox(array[11])
    criarBox("")
    criarBox(array[13])
    criarBox(array[14])
    criarBox(array[15])
    criarBox(array[16])
    criarBox(array[17])
    criarBox(array[18])
    criarBox(array[19])
    criarBox(array[20])
    criarBox(array[21])
    criarBox(array[22])
    criarBox(array[23])
    criarBox(array[24])

    let arrBox = document.querySelectorAll(".box")
    let arrChb = document.querySelectorAll("input")


    for (let i = 0; i < arrBox.length; i++) {
        arrBox[i].addEventListener("click", () => {
            arrBox[i].classList.toggle("check")
            checkBingo(arrChb)
        })
    }


})

function criarBox(content) {
    const ficha = document.querySelector("#ficha")

    let box = document.createElement("div")
    let p = document.createElement("p")
    let chb = document.createElement("input")

    if (content == "") {
        box.style.background = "url('logo.png')"
    }

    box.classList.add("box")
    chb.setAttribute("type", "checkbox")
    p.innerHTML = content

    box.appendChild(p)
    box.appendChild(chb)
    ficha.appendChild(box)


}

function embaralhar(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkBingo(arr) {

    //Horizontal
    if (arr[0].checked && arr[1].checked && arr[2].checked && arr[3].checked && arr[4].checked) {
        bingo()
    } else if (arr[5].checked && arr[6].checked && arr[7].checked && arr[8].checked && arr[9].checked) {
        bingo()
    } else if (arr[10].checked && arr[11].checked && arr[13].checked && arr[14].checked) {
        bingo()
    } else if (arr[15].checked && arr[16].checked && arr[17].checked && arr[18].checked && arr[19].checked) {
        bingo()
    } else if (arr[20].checked && arr[21].checked && arr[22].checked && arr[23].checked && arr[24].checked) {
        bingo()

        //Vertical
    } else if (arr[0].checked && arr[5].checked && arr[10].checked && arr[15].checked && arr[20].checked) {
        bingo()
    } else if (arr[1].checked && arr[6].checked && arr[11].checked && arr[16].checked && arr[21].checked) {
        bingo()
    } else if (arr[2].checked && arr[7].checked && arr[17].checked && arr[22].checked) {
        bingo()
    } else if (arr[3].checked && arr[8].checked && arr[13].checked && arr[18].checked && arr[23].checked) {
        bingo()
    } else if (arr[4].checked && arr[9].checked && arr[14].checked && arr[19].checked && arr[24].checked) {
        bingo()

        //diagonal 
    } else if (arr[0].checked && arr[6].checked &&  arr[18].checked && arr[24].checked) {
        bingo()
    }else if (arr[4].checked && arr[8].checked &&  arr[16].checked && arr[20].checked) {
        bingo()
    }



}

function bingo() {
    document.querySelector(".bingo").style.display = "flex"
}