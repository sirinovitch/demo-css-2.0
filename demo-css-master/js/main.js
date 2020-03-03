let maDivPrincipale     = document.querySelector('.transform');
let mesSousDivs         = document.querySelectorAll('.transform > div > div');


for (let i = 0; i < mesSousDivs.length; i++) {
    
    console.log(mesSousDivs);
    function Selection() {
        
        this.classList.toggle('active');
        
    }
    
    mesSousDivs[i].addEventListener('click', Selection);
    
};
