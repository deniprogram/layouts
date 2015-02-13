$(function() {


    $('.areaUtil').tooltip();
    $('.areaTotal').tooltip();
    $('.areaTerreno').tooltip();

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

    $(".optionPlano").click(function(){
            $(this).toggleClass("aptionPlanoCerto");
            $(".marcado").fadeIn();
     });

     $(".optionPlano2").click(function(){
                 $(this).toggleClass("aptionPlanoCerto");
                 $(".marcado2").fadeIn();
          });

    $(".comparacaoImovelbtn").click(function(){
             tabela.fadeIn(1000);
    });

    
    
  });

