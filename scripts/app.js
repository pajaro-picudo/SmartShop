document.addEventListener('DOMContentLoaded', () => {
    // Sistema de temas
    const themes = {
        green: {
            primary: '#34C759',
            background: '#FFFFFF',
            text: '#1D1D1F',
            card: '#F8F8F8'
        },
        orange: {
            primary: '#FF9500',
            background: '#FFF9F2',
            text: '#2A200B',
            card: '#FFF3E5'
        },
        red: {
            primary: '#FF3B30',
            background: '#FFF5F4',
            text: '#2E0D0B',
            card: '#FFE8E6'
        },
        purple: {
            primary: '#AF52DE',
            background: '#FBF5FF',
            text: '#2D1137',
            card: '#F3E8FF'
        }
    };

    document.querySelectorAll('.theme-btn').forEach(button => {
        button.addEventListener('click', () => {
            const theme = themes[button.dataset.theme];
            document.documentElement.style.setProperty('--primary-color', theme.primary);
            document.documentElement.style.setProperty('--background', theme.background);
            document.documentElement.style.setProperty('--text-primary', theme.text);
            document.documentElement.style.setProperty('--card-background', theme.card);
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });

    // Drag and Drop básico
    document.querySelectorAll('.list-item').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.textContent);
            setTimeout(() => {
                e.target.classList.add('dragging');
            }, 0);
        });

        item.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });
});