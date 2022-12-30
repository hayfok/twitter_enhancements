let s, t, e;
let resolved = false;
function r(s){
    try{
        s = document.querySelectorAll('[data-testid="sidebarColumn"]');
        s[0].remove();
        console.log('sidebar removed');
    }
    catch{
        if (e.name = "TypeError"){
            return;
        }
    }
}

onscroll = () => {
    r(s); 
    t = document.querySelectorAll('[data-testid="tweetText"]'); for (e of t){e.style.display = 'none'};
}
