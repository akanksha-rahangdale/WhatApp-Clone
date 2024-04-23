let btns = document.querySelectorAll('.bottom_header_content button');

let status_area = document.querySelector('.status_area');

let calls_area = document.querySelector('.call_area');

let contact_list = document.querySelector('.contact_list');

let community_area = document.querySelector('.community_area');

let chatBtns = document.querySelector('.chatBtns');

let status_btns =document.querySelector('.status_btns');

let callBtns = document.querySelector('.callBtns');

/*this 0,100,-100 hepl to move from chats,status.call,community whichever we want to */
btns.forEach((element) =>{
    element.addEventListener('click', () =>{
        document.querySelector('.active').classList.remove('active');/*this will help us to move botton border whichever we want */

       if(element.id === "status"){
        status_area.style.left = '0';
        contact_list.style.left = '-100%';
        calls_area.style.left="100%";
        community_area.style.left ="-100%";
        element.classList.add('active');        /*this help to move bottom-border */
        chatBtns.style.display = "none";       /*chatting icon = not display */
       status_btns.style.display = "block";     /*pencil and camera icon = display */
       callBtns.style.display = "none";        /*call icon = not display */

       }else if(element.id === "chats"){
        status_area.style.left = '100%';
        contact_list.style.left = '0%';
        calls_area.style.left="100%";
        community_area.style.left ="-100%";
        element.classList.add('active');
        chatBtns.style.display = "block";     /*chatting icon = display */
        status_btns.style.display = "none";    /*pencil and camera icon =not display */
        callBtns.style.display = "none";       /*call icon = not display */

       }else if(element.id === "calls"){
        calls_area.style.left="0";
        status_area.style.left = '-100%';
        contact_list.style.left = '-100%';
        community_area.style.left ="-100%";
        element.classList.add('active');
        chatBtns.style.display = "none";       /*chatting icon = not display */
        status_btns.style.display = "none";    /*pencil and camera icon =  not display */
        callBtns.style.display = "block";      /*call icon = display */

       }else{
        calls_area.style.left="100%";
        status_area.style.left = '100%';
        contact_list.style.left = '100%';
        community_area.style.left ="0";
        element.classList.add('active');
        chatBtns.style.display = "none";
        status_btns.style.display = "none";
        callBtns.style.display = "none";
       }
    })
})
