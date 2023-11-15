function swap(arr){
    let temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
}
function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr);
            }
        }
    }
}
console.log(bubblesort(arr));
