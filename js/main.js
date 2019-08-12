document.addEventListener("DOMContentLoaded", function() { 
    function randomArray() {
        randomArray = (length, max) => [...new Array(length)]
        .map(() => Math.round(Math.random() * max));

        let mapArray = new Array();
        mapArray.push(randomArray(5, 20));
        mapArray.push(randomArray(5, 20));
        mapArray.push(randomArray(5, 20));
        mapArray.push(randomArray(5, 20));
        mapArray.push(randomArray(5, 20));

        console.log(mapArray);
    }
    
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
                    array.push(Number(this.value));
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
            });
        }
    }
    const cardsCheck = document.querySelector('.cards__check');
    cardsCheck.addEventListener('click', function(event){
        const url = 'https://myFakeApi'
        axios.get(url)
        .then(response => console.log(response))
        .catch(response => (randomArray(), response))
    });

    
    cardIdentify(1);
    cardIdentify(2);
    cardIdentify(3);
    cardIdentify(4);
    cardIdentify(5);

    
});