function getImages(){
    const img=document.querySelector('#dogImage');
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => {
    console.log(response.body,"mia hun")
    return response.json();
})
.then((json)=>{
    console.log('I m coming from json')
    console.log(json)
    img.src=json.message;
})
.catch((e)=>{
    console.log('error while fetching image',e)
})
}