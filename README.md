# Front-End-Tests

Foi desenvolvido 2 Single Page com uma delas realizado um modal de envio de senha.

Login : desenvolvido com HTML 5, Css 3 e com validações crosBrowser feitas com o framework JQuery

https://raw.githubusercontent.com/tmouraro/Front-End-Tests/master/Zup/Zup/login.PNG

Modal do Login: desenvolvido com HTML 5, Css 3 e com validações crosBrowser feitas com o framework JQuery

Registro: Single Page onde consta os 3 serviços solicitados desenvolvidas com o framework JQuery.

https://github.com/tmouraro/Front-End-Tests/blob/master/Zup/Zup/registro.PNG

1 serviço: Quando e carregado a tela de Registro traz o serviço onde busca todos os POIs guardados em uma base de dados feito com mock.

2 serviço: É utilizado dois campos inputs onde o usuário preenche com os dois pontos de referência X e Y, e ao clicar no botão buscar e realizado um calculo dentro de uma funçao desenvolvido com JQuery:

jQuery('.buscar').click(function() {

        var x = jQuery('#X').val();
        var y = jQuery("#Y").val();
        
        if (x != "" && y != "") {
            
            var dMax = x - y;
            jQuery('table tbody').find('tr').hide();
            jQuery('table tbody').find('tr').each(function() {
                
                var conteudoCelula = jQuery(this).text();
                var conteudoCelulaId = jQuery(this);
                var array = conteudoCelula.split(/\s+/);
                
                var coordX = array[3];
                var coordY = array[5];
                 
                var strX = coordX - x;
                var stry = coordY - y;
                
                if (dMax <= "0") {
                    
                    return false;
                
                } else {
                    
                    if (strX <= dMax && stry <= dMax) { 
                   
                        var contains = jQuery(conteudoCelulaId).is(':visible');
             
                         if (contains == false) {

                             jQuery(this).show();
                         }
                   
                    } if (strX > dMax || stry > dMax) {
                    
                        jQuery(conteudoCelulaId).hide();
                    } 
                    
                }
                
            });
        }
        
        return false;
    });
    
    
    3 serviço: Quando é clicado o botão buscar todos onde traz novamente todos os POIs cadastrados:
    
     jQuery('.buscarTudo').click(function() {
        
       
         jQuery('table tbody').find('tr').each(function() {
             
             var style = jQuery(this).is(':visible');
             
             if (style == false) {
                 
                 jQuery(this).css('display', 'block');
             }
             
         });
        
    });
    
    
     
