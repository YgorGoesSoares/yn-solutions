document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollElements = document.querySelectorAll('.menu .item, .contato, .botoes .contact-us, .botoes .view-more');

    smoothScrollElements.forEach(item => {
        item.addEventListener('click', function(event) {
            const href = item.getAttribute('href');
            
            if (href.startsWith('#')) {
                event.preventDefault(); // Prevent the default link behavior
                const targetId = href;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth', // Scroll behavior
                        block: 'start' // Scroll to the top of the element
                    });
                }
            }
        });
    });
});

document.getElementById('submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    if (email && celular) {
      const contactData = { email: email, celular: celular };
      localStorage.setItem('contactData', JSON.stringify(contactData));
      document.querySelector('.form-contato').classList.add('hidden');
      document.getElementById('confirmation-message').classList.remove('hidden');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
