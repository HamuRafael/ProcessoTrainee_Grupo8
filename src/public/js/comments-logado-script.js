var commentEditor;

function closeModal(){
    var modal=document.getElementById('commentModal');
    var overlay=document.getElementById('overlay');
    if (modal && overlay){
        modal.style.display='none';
        overlay.style.display='none';
        if (commentEditor){
            commentEditor.value('');
        }
    }
}

function openModal(){
    var modal=document.getElementById('commentModal');
    var overlay=document.getElementById('overlay');
    if (modal && overlay) {
        modal.style.display = 'block';
        overlay.style.display='block';
        if (!commentEditor){
            commentEditor=new SimpleMDE({
                element: document.getElementById('commentEditor'),
                placeholder: ''
            });
        }
    }
}

function criarPost(){
    var conteudoComment=commentEditor.value();
    console.log('Conteudo do comentário:',conteudoComment);
    closeModal();
}

document.getElementsByClassName('make-comment').addEventListener('click',openModal);
document.getElementById('editButton').addEventListener('click',openModal);
