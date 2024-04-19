
// // Literal Notation
// let studentNames = [];

// //Object Notation
// let stdNames = [{}];

// //String Array
// let fruits = ['banana' , 'apple' , 'orange'];

// //Number Array
// let num = [1,2,3,4,5];

// //Boolean Array
// let bool = [true , false , null , undefined];

// //Mixed Array 
// let arr = ['banana', 1 , true ,"apple"];


// let educationQualification = ['SSC','HSC' ,'BCS','BS','BCOM','MS','M.Phil','PhD']

let matrix1 = [
    [4,5,6],
    [7,8,9],
    [10,11,12]
]

let matrix2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// let result =[
//     [5,7,9]
//     [11,13,15]
//     [17,19,21]

// ]

for(let i = 0 ; i<matrix1.length;i++){
    // console.log(matrix1[i])
    for(let j=0 ; j<matrix1.length ;j++){
        console.log(matrix1[i][j] + matrix2[i][j])
        console.log(matrix1[i][j] **2)
    }

}