var button=document.getElementById('counter');


button.oneclick=function()
{
  var request=new XMLhttpRequest();
  
  request.onreadystatechange=function()
  {
      if(request.readyState==XMLhttpRequest.DONE)
      {
          if(request.status)
          {
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
  };
  
  request.open('GET','http://deepg2018.imad.hasura-app.io/counter',true);
  request.send(null);
 
 };
