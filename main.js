$('form').on('submit', function(e){
    e.preventDefault()

    var tarefa = $('#endereco-tarefa').val();
    var list = $('ul') 
    var tarefasadd = $('#tarefasadd')

    $(`<li> ${tarefa} </li>`).appendTo(list)

    // Evento da tarefa feita
    $(list).on('click', function(){

    $(this).toggleClass('line-through')
    })
})