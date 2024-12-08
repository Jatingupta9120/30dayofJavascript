// // function getImages() {
// //   const img = document.querySelector("#dogImage");
// //   fetch("https://dog.ceo/api/breeds/image/random")
// //     .then((response) => {
// //       console.log(response.body, "mia hun");
// //       return response.json();
// //     })
// //     .then((json) => {
// //       console.log("I m coming from json");
// //       console.log(json);
// //       img.src = json.message;
// //     })
// //     .catch((e) => {
// //       console.log("error while fetching image", e);
// //     });
// // }

// // const button = document.querySelector("button");
// // const img = document.querySelector("img");
// // button.addEventListener("click", () => {
// //   const xhr = new XMLHttpRequest();
// //   console.log(xhr); //xhr request will be send from client to server

// //   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
// //   xhr.send();
// // });

// function XMLHttpRequestss() {
//   const img = document.querySelector("img");
//   const button = document.querySelector("button");

//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   //   xhr.addEventListener("load", () => {
//   //     img.src = xhr.response.message;
//   //   });
//   //Instead of doing this in XHR we will do

//   xhr.onload = () => {
//     img.src = xhr.response.message;
//     console.log(xhr);
//   };

//   //   console.log(xhr);
//   //   console.log(xhr.responseType="json")
//   console.log((xhr.responseType = "json"));

//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
// }

// // setTimeout(()=>{
// //     console.log('Hello')
// // },4000)

// //Browser is multi threaded whereas Js is single Threaded

// //This will block the main thread after the execution of js code

// const blockingBtn = document.querySelector(".blocking-btn");

// blockingBtn.addEventListener("click", () => {
//   const currTime = date.now();
//   console.log(currTime);
//   const startTime = currTime;
//   console.log(startTime);
//   while (startTime + 4000 > currTime) {
//     currTime = date.now();
//   }
// });
// //Above code is blocking the main thread for the 4 seconds it will verify some steps like it wil checking the current time and the starttime will be same initially and after 4 seconds of starttime current time will be changing untill it will get out of the loop so here the main thread will remains block for 4 seconds


// //so AJAX means asynchronous Javascript and XML and now it has to be renamed to be AJAJ because now asynchronous Javascript and JSON it deals with and now the other code will remains run into another thread it will not block the Js main thread we will do something like this xhr.open('Method','url',async) here we will doing multithreading in Js




// function blockMainThread(){
//     const currTime=Date.now();//here we are storing our curr time
//     let sum=0;
//     while(Date.now()-currTime<5000){
//         sum+=Math.random();
//     }
//     console.log('block finished',sum);
// }

// const blockingBtn = document.querySelector(".blocking-btn");
// blockingBtn.addEventListener('click',()=>{
//     console.log('First running 1')
//     blockMainThread();//here the blocking the main thread 
//     console.log('Third running 3')
// })


const startBtn=document.querySelector('start-btn');

startBtn.addEventListener('click',()=>{
    const worker=new Worker('worker.js');

    worker.onmessage=(e)=>{
        document.getElementById('result').textContent='Task Completed'+e.data;
    }

    worker.postMessage('start')
})

/*To demonstrate non-blocking behavior and running code in another thread, you can use a Web Worker in JavaScript. Web Workers allow you to run computationally expensive tasks in the background, without blocking the main thread. This way, the UI and other tasks can continue to run smoothly, even if a heavy task is being processed in the background*/


/*How It Works:
Main Thread:

When you click the "Start Heavy Task" button, the main thread creates a new Web Worker (worker.js).
The worker performs a computationally heavy task (simulated by a loop that runs a large number of times).
The main thread remains non-blocked and can continue interacting with the page.
Web Worker:

The Web Worker runs the heavy computation in the background.
Once the task is done, the worker sends the result back to the main thread using postMessage.
Result:

The result (sum) from the worker is displayed in the <p> element on the page.
Why It's Non-Blocking:
The main thread doesn't get blocked by the heavy task. The button click and UI interactions remain responsive.
The worker thread performs the heavy computation, leaving the main thread to handle other tasks (like updating the DOM).

*/