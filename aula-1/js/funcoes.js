function minhafuncao1() {
     $('.btn-danger').empty().append('Novo nome');
     $('.btn-danger').css({
        color: '#00ff00',
        textTransform: 'uppercase',
        width: '2000%'
     })
};

function minhaFuncao2()
{
    $('#area-mensagens').empty(); // Remove tudo que estiver na caixa de mensagem antes de chamar a função

    var alunos = ['Aluno 01', 'Aluno 02', 'Aluno 03 ', 'Aluno 04', 'Aluno 05'];

    // Itera ao longo do array inserindo seus elementos ao final daquele cujo
    $.each(alunos, function(index, value)
    {
        $('#area-mensagens').append(value);
    });
    $('.btn-danger').empty().append('Executar');
};