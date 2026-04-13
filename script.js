// Array de objetos contendo os projetos (conforme exigido na tarefa)
const projects = [
    {
        titulo: "Projeto 1: Meu Portfólio",
        img: "https://via.placeholder.com/400x250/0d1b2a/2ecc71?text=Meu+Portfólio",
        link: "https://github.com/joeltcl94/portfolio-mvp",
        descricao: "Primeira versão do meu portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript."
    },
    {
        titulo: "Projeto 2: Portfólio React",
        img: "https://via.placeholder.com/400x250/0d1b2a/2ecc71?text=Portfólio+React",
        link: "https://github.com/joeltcl94/portfolio-react",
        descricao: "Versão avançada do portfólio utilizando a biblioteca React para componentes dinâmicos."
    }
];

// Função para renderizar os projetos dinamicamente no HTML
function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    
    // Limpa o grid antes de renderizar (opcional)
    projectGrid.innerHTML = '';

    // Mapeia o array de projetos e gera o HTML para cada card
    projects.map(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.img}" alt="${project.titulo}">
                <div class="project-info">
                    <h3>${project.titulo}</h3>
                    <p>${project.descricao}</p>
                    <a href="${project.link}" target="_blank" class="project-link">Ver no GitHub <i class="fab fa-github"></i></a>
                </div>
            </div>
        `;
        // Adiciona o card ao grid
        projectGrid.innerHTML += projectCard;
    });
}

// Executa a renderização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Adiciona scroll suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
