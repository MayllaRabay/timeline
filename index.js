// Função para definir a distancia do card em relação ao topo do documento HTML.
function boxTop(idCard) {
	var boxOffset = $(idCard).offset();
	return boxOffset.top;
}

// A animação acontece aqui.
// Primeiro adicionamos a função .scroll ao documento, assim toda vez que o usuário utilizar o scroll a função é ativada.
$(document).on("scroll", function() {

	// Adiciona o valor total do Scroll a variável documentTop
	var documentTop = $(this).scrollTop();
	
	// Verifica se o documentTop é maior que o Topo do #card menos 150px. Esses 150px é para que a função seja ativada um pouco antes do card chegar ao topo.
  // Se for maior ele adiciona a classe animate.
  // Caso contrário ele remove a classe animate.
	if (documentTop > boxTop('#card-1') - 200) {
		$('#card-1').addClass('animate');
	} else {
		$('#card-1').removeClass('animate');
	}
	
	if (documentTop > boxTop('#card-2') - 200) {
		$('#card-2').addClass('animate');
	} else {
		$('#card-2').removeClass('animate');
	}
	
	if (documentTop > boxTop('#card-3') - 200) {
		$('#card-3').addClass('animate');
	} else {
		$('#card-3').removeClass('animate');
	}

  if (documentTop > boxTop('#card-4') - 200) {
		$('#card-4').addClass('animate');
	} else {
		$('#card-4').removeClass('animate');
	}

  if (documentTop > boxTop('#card-5') - 150) {
		$('#card-5').addClass('animate');
	} else {
		$('#card-5').removeClass('animate');
	}

	if (documentTop > boxTop('#card-6') - 300) {
		$('#card-6').addClass('animate');
	} else {
		$('#card-6').removeClass('animate');
	}

	//Funcionalidade para o botão de voltar ao topo:
	if($(this).scrollTop() < 100){
		//Para desaparecer entre 0 e 100px de rolagem do scroll.
		$(".return-top").css("display", "none");
	} else {
		//Para aparecer depois de 100px de rolagem do scroll.
		$(".return-top").css("display", "block");
	}
});

//Ao ser clicado, o botão fará com que o usuário volte ao topo da página, com uma animação suave de rolagem.
$(".return-top").on("click", function() {
	$("html").animate({scrollTop: 0}, 800);
});