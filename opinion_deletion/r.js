let s, t, e;
let resolved = false;
function r(){
    if (resolved != false)
    {
        return ;
    }
    else {
        s = document.querySelectorAll('[data-testid="sidebarColumn"]'); 
        s[0].remove(); 
        console.log('sidebar removed');
        resolved = true;
    }
}
onscroll = () => {
    r(); 
    t = document.querySelectorAll('[data-testid="tweetText"]'); for (e of t){e.style.display = 'none'};
}
