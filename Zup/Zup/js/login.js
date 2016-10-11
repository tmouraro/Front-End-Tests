jQuery(document).ready(function() {
    
jQuery('a[rel=modal]').on('click', function(ev){
    
        ev.preventDefault();

        var id = jQuery(this).attr("href");
        var modal = jQuery('.loginSenha').is(":visible");
    
        if(modal == false) {
          
            jQuery('.loginSenha').show('slow');  
            
        } else {
            
            return false;
        }

    });
    
    jQuery('input[type=text]').focus(function() {
        
        var pText = jQuery("p");
        
        if (pText.text() != "") {
            
            jQuery(pText).hide();
        }
        
    });
 
    jQuery('.registroSenha').click(function(ev){
        
        ev.preventDefault();
        $(".loginSenha").hide('slow');
    });
    
    jQuery('.submitLogin').on('click', function() {
        
        var username = jQuery('input[type=text][name=username]').val();
        var password = jQuery('input[type=password][name=password]').val();
        
        if (username == undefined || username == "") {
            
            verificaInputsLogin();
      
        }
        
        if (password == undefined || password == "") {
            
            verificaInputsLogin();
       
        } else {
            
            jQuery('.submitLogin').load('lista.html');
        }
        
    });
    
    jQuery('.submitPassword').on('click', function() {
        
        var nome = jQuery('input[type=text][name=nome]').val();
        var email = jQuery('input[type=text][name=email]').val();
        
        if (nome == undefined || nome == "") {
            
            verificaInputsPassword();
        }
        
        if (email == undefined || email == "") {
            
            verificaInputsPassword();
       
        } else {
            
            verificaEmail();
        }
        
    });
    
    function verificaInputsLogin() {

        var inputUsername = jQuery('input[type=text][name=username]');
        var inputPassword = jQuery('input[type=password]');
        
        if (inputUsername.val() == undefined || inputUsername.val() == "") {
            
            jQuery(inputUsername).css('border-color', 'red');
      
        }
        
        if (inputPassword.val() == undefined || inputPassword.val() == "") {
            
            jQuery(inputPassword).css('border-color', 'red');
            jQuery(inputPassword).required;
        }
        
        
    }    
    
    function verificaInputsPassword() {

        var inputEmail = jQuery('input[type=text][name=email]');
        var inputNome = jQuery('input[type=text][name=nome]');
        
        if (inputEmail.val() == undefined || inputEmail.val() == "") {
            
            jQuery(inputEmail).css('border-color', 'red');
        }        
        
        if (inputNome.val() == undefined || inputNome.val() == "") {
            
            jQuery(inputNome).css('border-color', 'red');
        }
        
        
    }
    
    function verificaEmail() {
        
        var sEmail = jQuery('input[type=text][name=email]');
        var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        
        if (sEmail.val() != undefined || sEmail.val() != "") {
             
            jQuery(sEmail).css('border-color', 'red');
            
            if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			
            jQuery("p").show().text('Por favor, informe um email válido.');                
                
            return false;
                
        }
    }
        
}

});