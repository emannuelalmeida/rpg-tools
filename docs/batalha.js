var initiativeRolls = [];

$(document).ready(function(){
            
    $('#add').click(function() {
       if (validateFields()) {
            add($('#nome').val(), 
               $('#iniciativa').val(), 
               $('#pvs').val(), 
               $('#ca').val(), 
               $('#ataques').val(),
               $('#eJogador').is(':checked'));
            $('#nome').val("");
            $('#iniciativa').val("");
            $('#pvs').val("");
            $('#ca').val("");
            $('#ataques').val("");
            $('#eJogador').prop('checked', false);
        }
        else
            alert("Por favor, preencha todos os campos.");       
    });
    
    $('#clear').click(function(){
       clear(); 
    });

});

function add(nome, iniciativa, pvs, ca, ataques, tipoJogador){
    initiativeRolls.push({nome, iniciativa, pvs, ca, ataques, tipoJogador});
    sortAndUpdate();
}

function remove(id){
    initiativeRolls.splice(id);
    sortAndUpdate();
}

function clear() {
    initiativeRolls = [];
    sortAndUpdate();
}

function sortAndUpdate(){

    $('#initiativesList').html("");
    initiativeRolls.sort(function(a, b){
        return b.iniciativa-a.iniciativa;
    });

    initiativeRolls.forEach(function(line, idx) {
        var div = document.createElement('div');
        
        if (line.tipoJogador) 
            var classeJogador = 'jogador';
        else    
            var classeJogador = 'inimigo';

        $(div).append("<span class='cell "+classeJogador+"'>"+line.nome+"</span>");
        $(div).append("<span class='cell'>"+line.iniciativa+"</span>");
        $(div).append("<span class='cell'>"+line.pvs+"</span>");
        $(div).append("<span class='cell'>"+line.ca+"</span>");
        $(div).append("<span class='cell'>"+line.ataques+"</span>");
        $(div).append("<button onclick='remove("+idx+")'>Remove</button>");

        initiativesList.append(div);
    });
}

function validateFields(){
    if ($('#nome').val().trim() == "" 
        || $('#iniciativa').val().trim() == "" 
        || $('#pvs').val().trim() == "" 
        || $('#ca').val().trim() == "" 
        || $('#ataques').val().trim() == "") 
        
        return false;
    else 
        return true;
}