const urlprams = new URLSearchParams(window.location.href);
        const sort = urlprams.get('sort');
        const column = urlprams.get('column');
        const arrows = document.querySelectorAll('.updown');

        for (let i = 0; i < arrows.length; i++) {
            const arrow = arrows[i];
            // console.log(arrow);
            const currentarrow = arrow.getAttribute('href').includes(`sort=${sort}&column=${column}`);
            // console.log(currentarrow);
            if(currentarrow){
                if(sort === 'asc' || sort === 'desc'){
                    arrow.style.opacity = 0.4;
                    arrow.disabled = 'true';
                }else{
                    arrow.style.opacity = 1;
                }
            }else{
                arrow.style.opacity = 1;
            }
        }