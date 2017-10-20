$(document).ready(function(){

    let users = [{
        name: 'Kubus Puchatek',
        age: 18,
        phone: '+48 787 693 128'
    },
    {
        name: 'Pszczółka Maja',
        age: 25,
        phone: '+48 569 235 564'
    },
    {
        name: 'Śpiąca Królewna',
        age: 55,
        phone: '+48 679 452 545'
    },
    {
        name: 'Kot w Butach',
        age: 68,
        phone: '+48 564 123 685'
    }
    ];

    let button = $('.btn');
    let userMainContainer = $('.main-container');

    button.click(function(){
        let $this = $(this);
        $this.toggleClass('button-open');

        if($this.hasClass('button-open')){
            $this.text('Hide Users Data');

            for(var i = users.length-1; i >= 0; i--){
                //console.log(users[i]);
                userMainContainer.append(`
                <div class="user-container">  
                    <span class="user-number info">${i + 1}</span>
                    <span class="user-name">${users[i].name}</span>
                    
                    <div class="user-tel">
                        <span class="info">Telephone:</span>
                        <span>${users[i].phone}</span> 
                          </div>
                    
                    <div class="user-age">
                        <span class="user-age info">Age:</span>
                        <span class="user-age">${users[i].age}</span>
                    </div>
                </div>
                `);
            }
        } else {
            $this.removeClass('button-open');
            $this.text('Show Users Data');
            $('div.user-container').remove();
        }
    });
});