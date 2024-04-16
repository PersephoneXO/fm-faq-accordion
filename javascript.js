
/*
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
}*/

const accordions=document.getElementsByClassName('accordion');
let allPanels=document.getElementsByClassName('panel');
for (let accordion of accordions){
    accordion.addEventListener('click',()=>{
        let thisPanel=accordion.parentNode.parentNode.querySelector('.panel');

        //hide all panels but the one clicked
        for(let panel of allPanels){
            //console.log(panel);
            if(panel!==thisPanel){
                panel.style.display='none';
                if(panel.classList.contains('show')){
                    panel.classList.toggle('show');
                }
                //console.log(thisPanel);
            }
        }

        //untoggle all the other accordions
        for(let each of accordions){
            if(each!==accordion){
                if(each.classList.contains('open')){
                    each.classList.toggle('open');
                    each.nextElementSibling.classList.toggle('open');
                }
            }
        }

        //toggle the buttons that control the panel
        accordion.classList.toggle('open');
        accordion.nextElementSibling.classList.toggle('open');
        //toggle between hiding and showing the panel
        thisPanel.classList.toggle('show');
        if(thisPanel.style.display=='none' && thisPanel.classList.contains('show')){
            thisPanel.style.display='block';
        }else{
            thisPanel.style.display='none';
        }

    });
}
