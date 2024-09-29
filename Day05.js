function getFileExtension(filename) {
    if (!filename || typeof filename !== 'string') {
      return "Invalid filename";
    }
    var extension = filename.split('.').pop();
    return extension || "No file extension found";
  }
  var filename1 = "example.txt";
  var filename2 = "document";
  var filename3 = "image.jpeg";
  console.log(getFileExtension(filename1)); 
  console.log(getFileExtension(filename2));
  console.log(getFileExtension(filename3)); 
  