const bars = document.querySelector('#bars')
const menu = document.querySelector('#menu')
const fmenu = document.querySelector('#fmenu')

bars.addEventListener('click', () => {
    if(menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden')
        menu.classList.add(
            'flex',
            'flex-col',
            'w-full',
            'absolute',
            'top-28',
            'z-20'
        );
        }
        else {
            menu.classList.add('hidden');
    }
});

menu.addEventListener('click', () => {
    menu.classList.add('hidden');
})

window.addEventListener('resize', () => {
    fmenu.classList.add('hidden');
    menu.classList.add('hidden');
    menu.classList.remove(
        'flex',
        'flex-col',
        'w-full',
        'absolute',
        'top-28',
        'z-20'
    );
})