let tela1 = document.querySelector('.tela-1');
let tela2 = document.querySelector('.tela-2');
let paragrafoSorte = document.querySelector('#sorte');
let biscoitoFechado = document.querySelector('#biscoito-fechado');
let botaoAgain = document.querySelector('#btn-again');
let arraySorte = [
    'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
    'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
    'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
    'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
    'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
    'A perseverança é a mãe da boa sorte.',
    'Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.',
    'Sorte é estar pronto quando a oportunidade vem.',
    'A sorte favorece a mente bem preparada.',
    'Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.'
]

function toogleTela(){
    tela1.classList.toggle('hide');
    tela2.classList.toggle('hide');
}

biscoitoFechado.addEventListener('click', event =>{
    toogleTela();
    let luckNumber = Math.floor(Math.random() * 9);
    paragrafoSorte.textContent = arraySorte[luckNumber];
    console.log(luckNumber);
})

botaoAgain.addEventListener('click', event => {
    toogleTela();    
})