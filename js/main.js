document.addEventListener("DOMContentLoaded", function() { 
    const error = document.querySelector('.cards__error');
    let id;
    allArray = new Set();
    function cardIdentify(id) {
        const parent = document.querySelector('div.card[data-id="'+ id +'"]');
        let cardButton = document.querySelectorAll('div.card[data-id="'+ id +'"] button');
        let array = new Array();
        for (let i = 0; i < cardButton.length; i++) {
            cardButton[i].addEventListener('click', function(event){
                if ( array.length < 5) {
                    this.classList.add('choice');
                    array.push(this.value);
                    error.classList.remove('show');
                } else {
                        error.classList.add('show');
                        parent.classList.add('invalid');
                    setTimeout(function(){
                        error.classList.remove('show');
                        parent.classList.remove('invalid');
                    }, 5000);
                }
                allArray.add(array);
                console.log( allArray ); 

                let jsonNumbers = JSON.stringify([...allArray]);
                console.log(jsonNumbers);
            });
        }
    }
        
    cardIdentify(1);
    cardIdentify(2);
    cardIdentify(3);
    cardIdentify(4);
    cardIdentify(5);

});