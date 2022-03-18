const bars = document.querySelector('#bars')
const menu = document.querySelector('#menu')

bars.addEventListener('click', () => {
    if(menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden')
        menu.classList.add(
            'flex',
            'flex-col',
            'items-center',
            'bg-blue-500',
            'dark:bg-gray-800',
            'w-full',
            'absolute',
            'top-28'   
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
    menu.classList.add('hidden');
    menu.classList.remove(
        'flex',
        'flex-col',
        'text-center',
        'bg-blue-200',
        'w-full',
        'absolute',
        'top-28'   
    );
})