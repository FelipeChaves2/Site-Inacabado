/*
	quando clicar na seta pra avançar,temos que 
	esconder todas as imagens e mostrar a proxima imagem

		A imagem atual começa em 0 porque é a primeira
		imagem assim que for clicando no avançar eu 
		preciso adicionar mais 1 ao contador de imagens
		pra saber que agora eu vou mostrar a segunda imagem

		esconder todas as imagens 
			pegar todas as imagens usando o DOM e remover
			a classe mostrar

		mostrar a proxima imagem
			pegar todas as imagens, descobrir qual a proxima
			e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
	imagensPainel.forEach(imagem => {
		imagem.classList.remove('mostrar')
	});

}

function mostrarImagem() {
	imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {

	// testa se o contador da 
	// imagemAtual é igual ao total de imagens
	const totalDeImagens = imagensPainel.length -1;
	if(imagemAtual === totalDeImagens) {
		return;
	}

	imagemAtual++;

	esconderImagens();
	mostrarImagem();
})

setaVoltar.addEventListener('click', function() {

	if(imagemAtual === 0) {
		return;
	}

	imagemAtual--;

	esconderImagens();
	mostrarImagem();

})


	
