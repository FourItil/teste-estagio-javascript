$(document).ready(function(){

		$('#campo-nome').keyup(function(){
			/*
				Resgatando o value do elemento cujo ID #campo-nome e adicionando o
			 	resultado no elemento cujo ID #nome-digitado
			*/
			$('#nome-digitado').text(
				/*
					$(this) faz referência ao elemento pai da função, cujo ID #campo-nome
				 	.val() resgata o value do elemento
				*/
				$(this).val()
			);

			/*
				Resgatando a quantidade de caracteres existentes no value do elemento
				cujo ID #quantidade-caracteres e adicionando o resultado no elemento
				cujo ID #quantidade-caracteres
			*/
			$('#quantidade-caracteres').text(
				/*
					$(this) faz referência ao elemento pai da função, cujo ID #campo-nome
				 	.val() resgata o value do elemento
					.length retorna a quantidade de caracteres do value
				*/
				$(this).val().length
			);
		});

});
