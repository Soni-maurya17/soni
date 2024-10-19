
// multi text
const typed = new Typed('.multiple-text', {
    strings: ['full-stack Development', 'front-end devlopment','web-designing'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true
});


// goofle sheet contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyDZQadguLf6_Vek55aoa9p7D6LQdblS4-G_-73DxFK4yI1Vxv6bXEDCy7zDYWPtYOm/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg= document.getElementById("msg")
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => 
                    {
                        msg.innerHTML= "message sent successfully"
                        setTimeout(function(){
                            msg.innerHTML=""
                        },5000)
                        form.reset()
                    }
                )
                .catch(error => console.error('Error!', error.message))
            });


            // variable for side menu
            var sidemenu= document.getElementById("sidemenu");
            function openmenu(){
                sidemenu.style.right= "0";
            }
            function closemenu(){
                sidemenu.style.right= "-200px";
            }