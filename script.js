const projects = [
    {
        titulo: "Projeto 1",
        descricao: "Plataforma completa com carrinho de compras, autenticação de usuários e integração com gateway de pagamento (Stripe).",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/joeltcl94-art/ecommerce-fullstack",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        titulo: "Projeto React",
        descricao: "Sistema para controle de receitas e despesas com gráficos interativos e relatórios exportáveis em PDF.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/joeltcl94-art/finance-dashboard",
        tags: ["TypeScript", "Next.js", "PostgreSQL"]
    }
];


function renderProjects( ) {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;


    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.img}" alt="${project.titulo}">
            <div class="project-info">
                <h3>${project.titulo}</h3>
                <p>${project.descricao}</p>
                <div class="project-tags" style="margin-bottom: 1.5rem; display: flex; gap: 8px; flex-wrap: wrap;">
                    ${project.tags.map(tag => `<span style="background: rgba(46, 204, 113, 0.1); color: #2ecc71; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; border: 1px solid rgba(46, 204, 113, 0.2);">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">Ver no GitHub <i class="fab fa-github"></i></a>
            </div>
        </div>
    `).join('');
}


document.addEventListener('DOMContentLoaded', () => {
    renderProjects();


    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Efeito de transparência no header ao rolar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 0';
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '1.2rem 0';
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
});

