$('form').on('submit', function(e){
    e.preventDefault()

    var tarefa = $('#endereco-tarefa').val();
    var list = $('<li></li>') 

    $(`<li> ${tarefa} </li>`).appendTo(list)

    $(list).appendTo('ul')

    // Evento da tarefa feita
    $(list).on('click', function(){

    $(this).toggleClass('line-through')
    })
})