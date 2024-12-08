const xhr=new XMLHttpRequest();
xhr.responseType="json"
xhr.addEventListener('load',()=>{
    console.log(xhr);
})
xhr.open('GET','url',)
xhr.send();
console.log(xhr);