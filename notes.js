
// Results for the tinyArray
// insert 17.208 μs
// append 73.167 μs

// Results for the smallArray
// insert 21.292 μs
// append 62.667 μs

// Results for the mediumArray
// insert 118.292 μs
// append 86.042 μs

// Results for the largeArray
// insert 5.629333 ms
// append 361.916 μs

// Results for the extraLargeArray
// insert 704.78275 ms
// append 1.699458 ms

// 4. 
//The insert method scales a lot worse. As the arrays get bigger,
// the time to run the array gets exponentially longer.

// 5.
//The insert results come from using the unshift method 
//at the end of the function, which has to shift the index of every 
//number and puts the new array number at the beginning. The append 
//results use the push method, which simply adds another number to the 
//end of the array, leaving the indexes of the other array integers 
//untouched. The unshift method requires extra steps, and a lot of extra 
//steps as the array gets bigger, which explains why it scales so much worse.
