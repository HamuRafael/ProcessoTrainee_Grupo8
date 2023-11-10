const mokedPosts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sit voluptatem, labore tempore atque iure ipsam dignissimos rerum unde suscipit consequatur eius provident ducimus. Nulla corporis autem saepe. Quo, totam!'
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sit voluptatem, labore tempore atque iure ipsam dignissimos rerum unde suscipit consequatur eius provident ducimus. Nulla corporis autem saepe. Quo, totam!'

    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sit voluptatem, labore tempore atque iure ipsam dignissimos rerum unde suscipit consequatur eius provident ducimus. Nulla corporis autem saepe. Quo, totam!'

    },
    {
        id: 4,
        title: 'Post 4',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sit voluptatem, labore tempore atque iure ipsam dignissimos rerum unde suscipit consequatur eius provident ducimus. Nulla corporis autem saepe. Quo, totam!'
    },
]

const renderPosts = () => {
    const postContainer = document.querySelector('.conteudoPrincipal__feed')

    mokedPosts.forEach(post => {
        const postElement = document.createElement('div')

        postElement.innerHTML = `
            <h2>${post.title}</h2>

            <p>${post.content}</p>
        ` 
        postContainer.appendChild(postElement)
    })
}

renderPosts()
