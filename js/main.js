//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto);

function getPhoto(){
   document.querySelector('img').style.visibility = "visible";
   const dateVal = document.querySelector('input').value;
   const api = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+dateVal;
   
   fetch(api)
   .then(res => res.json())
   .then(data => {
       console.log(data);
       let spaceName = data.title
       let spaceData = data.explanation
       let spaceThumb = data.hdurl
       let spaceVideo = data.url
       
       document.querySelector('h2').innerText = spaceName;
       document.querySelector('p').innerText = spaceData;
     
       if (data.media_type === 'video'){
         document.querySelector('img').style.display = "none";
         document.querySelector('iframe').style.display = "block";
         document.querySelector('iframe').src = spaceVideo;
       }else{
         document.querySelector('img').src = spaceThumb;
         document.querySelector('img').style.display = "block";
         document.querySelector('iframe').style.display = "none";
       }
   })
   .catch(err => {
      console.log(`error ${err}`);
   })
}