const titulo = document.querySelector(".titulo")
const conteudo = document.querySelector('.conteudo')


document.addEventListener('click', (event) => {
    console.log(event.target)
    let elementClick = event.target

    if(elementClick.id == 'apresentacao'){
        titulo.textContent = 'Olá, seja bem-vindo ao meu portfólio!'
        conteudo.innerHTML = `Olá! Bem-vindo(a) ao meu portfólio. Aqui você encontrará alguns dos projetos que desenvolvi ao longo da minha jornada de aprendizado.

        Sou apaixonado(a) por programação e tenho me dedicado a aprimorar minhas habilidades no desenvolvimento de software. Neste portfólio, reuni alguns dos projetos que refletem meu conhecimento e experiência até o momento.
        
        Cada projeto representa um desafio que enfrentei e uma oportunidade para aprender algo novo. Explore-os para conhecer as tecnologias, as soluções e as abordagens que utilizei em cada um deles.
        
        Estou constantemente em busca de novos desafios e oportunidades de crescimento. Se você tiver alguma pergunta ou quiser saber mais sobre algum dos projetos, fique à vontade para entrar em contato comigo.
        
        Agradeço por visitar meu portfólio e espero que você aprecie os projetos que compartilhei aqui. Fique à vontade para navegar e conhecer mais sobre meu trabalho. Obrigado(a)! `
    }

    if(elementClick.id == 'android'){
        titulo.textContent = 'O PROJETO ANDROID'
        conteudo.innerHTML = `
        O primeiro projeto que desenvolvi enquanto aprendia HTML5 e CSS3 foi chamado 'História do Mascote do Android'. Esse projeto foi desenvolvido seguindo as instruções do canal Curso em Vídeo. Nele, tive a oportunidade de explorar conceitos como HTML5 semântico e CSS3 responsivo, proporcionando meu primeiro contato com o mundo do front-end.
        O projeto foi desenvolvido de forma responsiva, adaptando-se a diferentes dispositivos e tamanhos de tela. Foi uma experiência valiosa para entender como estruturar o código HTML de maneira mais significativa e aproveitar os recursos avançados do CSS para criar um design responsivo e agradável aos usuários.
        Esse projeto marcou o início da minha jornada no desenvolvimento front-end e me proporcionou as bases necessárias para continuar aprendendo e explorando novas tecnologias. Desde então, tenho buscado aprimorar minhas habilidades e expandir meus conhecimentos nessa área fascinante do desenvolvimento web.
        <br></br>
        Aqui está o link da aplicação hospedada: <a href="https://android-six.vercel.app/" target="_blank">Android</a>`
    }

    if(elementClick.id == 'landing'){
        titulo.textContent = `O projeto Landing Page`
        conteudo.innerHTML = 
        `A Landing Page é um projeto que desenvolvi para aplicar meus conhecimentos em HTML5, CSS3 e Bootstrap na criação de uma página de destino para um produto fictício. Essa página foi desenvolvida com foco na usabilidade. Durante o desenvolvimento, utilizei o framework Bootstrap para agilizar o processo de criação, aproveitando seus componentes e recursos responsivos. Também apliquei técnicas de design e usabilidade para criar uma experiência atraente e intuitiva para o usuário.
        Foi uma oportunidade valiosa para praticar a criação de layouts responsivos, trabalhar com formulários e aprimorar minhas habilidades em HTML5, CSS3 e Bootstrap.
        <br></br>
        Aqui está o link da aplicação hospedada: <a href="https://landing-page-zmarcio.vercel.app/" target="_blank">Landing Page</a>`
    }

    if(elementClick.id == 'task'){
        titulo.textContent = `O projeto Task-List`
        conteudo.innerHTML = `
        A Task-List é um projeto de lista de tarefas desenvolvido com HTML5, CSS3 e JavaScript. Essa aplicação permite aos usuários criar, visualizar e gerenciar tarefas de forma simples e intuitiva. Durante o desenvolvimento desse projeto, pratiquei conceitos de manipulação do DOM com JavaScript, como criar elementos dinamicamente, adicionar eventos aos elementos e atualizar o conteúdo da página de acordo com as ações do usuário. Também aprimorei minhas habilidades em estilização com CSS3, criando uma interface amigável e responsiva.
        Essa aplicação foi um exercício valioso para consolidar meus conhecimentos em HTML5, CSS3 e JavaScript, além de entender como criar interações mais complexas com o usuário.
        <br></br>
        Aqui está o link da aplicação hospedada: <a href="https://add-task-ibm.vercel.app/" target="_blank">Task-List</a>`
    }


    if(elementClick.id == 'contatos'){
        titulo.textContent = `Contatos`
        conteudo.innerHTML = `Obrigado por ver até aqui, não deixe de ver o Sobre lá eu conto como foi minhas espectativas e o que eu queria fazer, algo mais pessoal.
        <br></br>
        Aqui está o links para contatos:
        <br></br>
        LinkedIn:<a href='https://www.linkedin.com/in/márcio-paulo96a224263/'>LinkedIn</a>
        <br></br>
        E-mail: marciopaulolima21@edu.unifor.br
        <br></br>
        GitHub: <a href='https://github.com/zMarcio'>zMarcio</a>
        <br></br>
        `
    }

    if(elementClick.id == 'sobre'){
        titulo.textContent = `Sobre o planejamento do projeto`
        conteudo.innerHTML = `Obrigado por chegar até aqui! Tentei criar este portfólio com base em uma temática que eu amo: o espaço. Este projeto reflete um pouco de quem eu sou e dos meus aprendizados. Optei por manter um design simples, pois nas minhas tentativas anteriores acabei me perdendo um pouco. Para me guiar, criei um projeto preliminar no Figma. Mais uma vez, agradeço por ter acompanhado até o final e desejo a você um excelente dia!
        <br></br>
        Aqui o link para o figma: <a href='https://www.figma.com/file/WAFvaDMua7ufFT5JrpN8Fr/Untitled?type=design&node-id=0%3A1&mode=design&t=H8ra2mDftV3sgUxz-1' target="_blank"> Figma </a>
        `
    }
})