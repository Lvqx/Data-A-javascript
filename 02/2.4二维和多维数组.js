var averageTemp = [];
//day 1 
averageTemp[0] = []; 
averageTemp[0][0] = 72; 
averageTemp[0][1] = 75; 
averageTemp[0][2] = 79; 
averageTemp[0][3] = 79;
averageTemp[0][4] = 81; 
averageTemp[0][5] = 81; 
//day 2 
averageTemp[1] = []; 
averageTemp[1][0] = 81; 
averageTemp[1][1] = 79;
averageTemp[1][2] = 75; 
averageTemp[1][3] = 75; 
averageTemp[1][4] = 73; 
averageTemp[1][5] = 72;

function printMatrix(myMatrix) {
    for(var i = 0; i<myMatrix.length;i++) {
        for(var j = 0; j<myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);


// 3*3
var matrix3x3x3 = [];
for(var i = 0; i< 3; i++) {
    matrix3x3x3[i] = []; {
        for(var j = 0; j < 3; j++) {
            matrix3x3x3[i][j] = [];
            for(var z = 0; z < 3; z++) {
                matrix3x3x3[i][j][z] =i + j + z;
            }
            }
        }
    }
}