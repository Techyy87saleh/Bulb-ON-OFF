
 let pic = document.getElementById('bulb');
 let button1 = document.getElementById('on');
 let button2 = document.getElementById('off');
  
  button1.addEventListener('click',()=>{
       
     pic.src = "on.jpg";
     
 button2.addEventListener('click',()=>{
      
       pic.src = "off.jpg";
 });
  });
