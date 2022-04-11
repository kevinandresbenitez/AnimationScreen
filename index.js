const container = document.querySelectorAll('.container')[0];
const btnAnimation =document.getElementById('btnAnimationStart');
let braekInterval=false;


function showAnimation(limit = false){
    //Reset interval status
    braekInterval=false;

    let counter = 0;
    const CircleTimeExpand=2;
    let interval = setInterval(()=>{

        // Create circle
        let circle = document.createElement('span');
        circle.classList.add('Element');
        circle.style.animation=`circleExpand ${CircleTimeExpand}s`;
        circle.style.backgroundColor =`rgb(${Math.random() * (225 - 10) + 10},${Math.random() * (225 - 10) + 10}, ${Math.random() * (225 - 10) + 10})`;

        // Delete circle after animation end
        circle.addEventListener('animationend',(e)=>{
            e.path[1].removeChild(e.path[0]);
        });
        
        //Clear interval if limitex exeded or click button stop animation
        if((limit && (counter >= limit)) || braekInterval){
            clearInterval(interval);
            circle.style.animation=`circleContract ${CircleTimeExpand*2}s`;
            // container.style.backgroundColor=circle.style.backgroundColor;
        }
        
        // Add new circle
        container.appendChild(circle);

        counter ++;
    },250)

}

function stopAnimation(){
    braekInterval=true;
}