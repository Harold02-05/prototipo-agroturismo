// common.js - Funcionalidades compartidas Cargar navegacion

function loadNavigation() {
    fetch('/PlataFormaAgroturismo/navigation.html')

    
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            setActiveLink();
            updateSectionDescription();
        })
        .catch(error => console.error('Error loading navigation:', error));
}

// Establecer enlace activo
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage || 
            (currentPage === 'index.html' && link.getAttribute('href') === '../index.html')) {
            link.classList.add('active');
        }
    });
}

// Actualizar descripcion de seccion
function updateSectionDescription() {
    const path = window.location.pathname;
    const description = document.getElementById('section-description');
    
    if (!description) return;
    
    if (path.includes('campesinos')) {
        description.textContent = 'Zona para Campesinos';
    } else if (path.includes('organizaciones')) {
        description.textContent = 'Zona para Organizaciones';
    } else if (path.includes('turistas')) {
        description.textContent = 'Zona para Turistas';
    } else {
        description.textContent = 'Conectando el campo con oportunidades';
    }
}

// Cargar footer
function loadFooter() {
    const footerHTML = `
    <footer>
        <p>&copy; ${new Date().getFullYear()} AgroPlataforma. Todos los derechos reservados.</p>
        <nav>
            <ul>
                <li><a href="#">Terminos de servicio</a></li>
                <li><a href="#">Politica de privacidad</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </footer>
    `;
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Inicializar cuando el DOM este listo
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});