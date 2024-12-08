// Listen for messages from the main thread
onmessage = function(e) {
    if (e.data === 'start') {
      let sum = 0;
      for (let i = 0; i < 1e8; i++) { // Simulate a heavy task
        sum += Math.random();
      }
      postMessage(sum);  // Send the result back to the main thread
    }
  };
  