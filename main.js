const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdownmenu').style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdownmenu').style.display = 'none';
        });
    });

