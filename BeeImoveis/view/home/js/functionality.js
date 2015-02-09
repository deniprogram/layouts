$(function() {

 $('#datadeValidacao').datepicker();

    $('.cartaoForma').hide();
    $('.gerarBoleto').hide();

    $('.cart').click(function(){
        $('.cartaoForma').fadeIn(1000);
        $('.gerarBoleto').hide();
    });

    $('.bolet').click(function(){
        $('.cartaoForma').hide();
        $('.gerarBoleto').fadeIn(1000);
    });

    var tabela = $(".comparacaoImovel");
    tabela.hide();
	
  	$(".estrelaFavorito").click(function(){
  		$(this).toggleClass("estrelaFavoritoInativo");	
  	});

    $(".viewMovel").click(function(){
        $(this).toggleClass("selecionado");
    });

    $(".comparacaoImovelbtn").click(function(){
             tabela.fadeIn(1000);
    });

    $( "#slider-range-min" ).slider({
      range: "min",
      value: 0,
      min: 1,
      max: 6000,
      slide: function( event, ui ) {
        $( "#amount" ).val( "R$:" + ui.value+",00" );
      }
    });

    $( "#amount" ).val( "R$:" + $( "#slider-range-min" ).slider( "value" ) );

    $('#cpf').mask('999.999.999-99'); 
    $('#nomeCompleto').popover('hide')
    $('#cpf').popover('hide')
    $('#senha').popover('hide')
    $('#confirmaSenha').popover('hide')

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    
  });

