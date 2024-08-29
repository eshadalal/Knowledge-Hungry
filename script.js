document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const id = box.id;
            const url = getRedirectUrl(id);
            if (url) {
                window.location.href = url;
            }
        });
    });
});

function getRedirectUrl(id) {
    switch (id) {
        case 'math':
            return 'math.html'; 
        case 'physics':
            return 'physics.html'; 
        case 'chemistry':
            return 'chemistry.html'; 
        case 'biology':
            return 'biology.html'; 
        case 'arts':
            return 'arts.html';
        case 'sports':
            return 'sports.html'; 
        case 'history':
            return 'history.html'; 
        case 'languages':
            return 'languages.html'; 
        case 'literature':
            return 'literature.html'; 
        case 'general-knowledge': 
            return 'general-knowledge.html';
        case 'music': 
            return 'music.html';
        case 'life-skills': 
            return 'life-skills.html';
        case 'business': 
            return 'business.html';
        case 'finance': 
            return 'finance.html';
        case 'space': 
            return 'space.html';
        case 'coding': 
            return 'coding.html';
        case 'astronomy': 
            return 'astronomy.html';
        case 'travel': 
            return 'travel.html';
        case 'technology': 
            return 'technology.html';
        default:
            return ''; 
    }
}

document.getElementById('resource-filter').addEventListener('change', function() {
    var selectedResourceType = this.value;
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
        if (selectedResourceType === 'all') {
            box.classList.remove('hidden');
        } else {
            if (box.classList.contains(selectedResourceType)) {
                box.classList.remove('hidden');
            } else {
                box.classList.add('hidden');
            }
        }
    });
});
