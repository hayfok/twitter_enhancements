let s;
function r(){
    s = document.querySelectorAll('[data-testid="sidebarColumn"]'); 
    s[0].remove(); 
    console.log('sidebar removed');
}

setTimeout(() => {
    try{
        r();
    }
    catch(e){
        if (e.name == 'TypeError'){
            // bad connection
            setTimeout(() => {
                r()
            }, 4000);
        };
    };
}, 1000);
