
AOS.init();

Vue.component('project', {
    props: ['project'],
    template: `
    <div class="project__box {{index}}">{{index}}
        <a :href=" project.link " target="_blank">
            <div class="project__box-icon"><img class="project__box-img" :src="'img/projects/' + project.img + '.png'" :alt="project.title" loading="lazy"></div>
            <div class="project__box-info">
                <div class="project__box-title">{{project.title}}</div>
                <div class="project__box-date">Добавлено: <span>{{project.date}}</span></div>
            </div>
        </a>
    </div>
`
})

const app = new Vue({
	// router
	data: {
		projects: [
			{ index: 0, title: 'Bakery', img: 'bakery', link: 'https://www.behance.net/gallery/119065175/Bakery', date: '07.05.2021'},
			{ index: 1,title: 'Honey', img: 'honey', link: 'https://www.behance.net/gallery/114871247/HONEY-site', date: '10.04.2021' },
			{ index: 2,title: 'Sport', img: 'sport', link: 'https://www.behance.net/gallery/119088115/Find-your-perfect-shoes', date: '08.05.2021' },
			{ index: 3,title: 'Insta Flower Project', img: 'kv', link: 'https://agentdmitro.github.io/Gravity', date: '30.05.2021' },
			{ index: 4,title: 'Mogo', img: 'mogo', link: 'https://anzbetta.github.io/mogo/', date: '15.05.2023' },
			
		]
	}
}).$mount('#app')




    $('.sidebar__works-count').html($('.project__box').length)

    function bgRemove() {
        $('.bg').removeClass('show');
        $('body').toggleClass('lock')
        
    }
    function bgAdd() {
        $('.bg').toggleClass('show');
        $('body').toggleClass('lock')
    }
    
    $('#open-popup').click(function (e) {
        $('.popup').toggleClass('show');
        bgAdd();
    });
    
    
    $('.bg').click(function () {
        $('.popup').removeClass('show');
        bgRemove();
    });
    $('#close-popup').click(function (e) {
        $('.popup').removeClass('show');
        bgRemove();
    });
    
    
    
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && $( ".popup" ).hasClass('show')){
            $('.popup').removeClass('show');
            bgRemove();
        }
    })

    // $(document).on('click', function(e){
    //     console.log(e.target);
    //     if($('.popup').hasClass('show')){
    //         if((e.target.className != "popup__inner")){
    //             bgRemove()
    //             $('.popup').removeClass('show');
    //         }
    //     }
    // })