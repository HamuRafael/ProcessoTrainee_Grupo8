var postEditor;

function closeModal(){
    var modal=document.getElementById('postModal');
    var overlay=document.getElementById('overlay');
    if (modal && overlay){
        modal.style.display='none';
        overlay.style.display='none';
        if (postEditor){
            postEditor.value('');
        }
    }
}

function openModal(){
    var modal = document.getElementById('postModal');
    var overlay=document.getElementById('overlay');
    if (modal && overlay) {
        modal.style.display = 'block';
        overlay.style.display='block';
        if (!postEditor){
            postEditor=new SimpleMDE({
                element: document.getElementById('postEditor'),
                placeholder: ''
            });
        }
    }
}

function criarPost(){
    var conteudoPost=postEditor.value();
    console.log('Conteudo do post:',conteudoPost);
    closeModal();
}

function redirectToPage(destination){
    window.location.href=destination
}

document.getElementsByClassName('create-post').addEventListener('click',openModal);
