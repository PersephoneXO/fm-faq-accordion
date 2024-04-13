const accordion=document.getElementsByClassName('accordion');

for (let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',()=>{
        //toggle the buttons that control the panel
        accordion[i].classList.toggle('open');
        accordion[i].nextElementSibling.classList.toggle('open');

        //hide all panels
        let allPanels=document.getElementsByClassName('panel');
        for(let each of allPanels){
            each.style.display='none';
        }

        //toggle between hiding and showing the panel
        let panel=accordion[i].parentNode.parentNode.querySelector('.panel');
        panel.classList.toggle('show');

        if(panel.style.display=='none' && panel.classList.contains('show')){
            panel.style.display='block';
        }else{
            panel.style.display='none';
        }

    });
}
