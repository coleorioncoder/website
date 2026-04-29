var canvas1 = document.getElementById("main-canvas");

var DOMvss = document.getElementById("vertex-vsh").textContent;
var DOMfss = document.getElementById("fragment-fsh").textContent;
var DOMfss1 = document.getElementById("fragment1-fsh").textContent;

var vsSource = DOMvss;
var fsSource = DOMfss1;


var vertexSize = 1.41;

var cubeAlpha = 1.0;
var tetrahedronData = {
    vertices: [
        -1.0, 1.0, -1.0,  vertexSize,  1.0, 0.0, 0.0, 1.0,
        1.0, 1.0, 1.0,    vertexSize,  0.0, 1.0, 0.0, 1.0,
        -1.0, -1.0, 1.0,  vertexSize,  0.0, 0.0, 1.0, 1.0,
        1.0, -1.0, -1.0,  vertexSize,  1.0, 1.0, 1.0, 1.0
        ],
    points: [],
    lines: [],
    triangles: [0, 2, 1,  0, 3, 2,  0, 1, 3,  1, 2, 3]
};
var lazyCubeData = {
    vertices: [
        -1.0, -1.0, -1.0,  vertexSize,  1.0, 0.0, 0.0, cubeAlpha, // back bottom left
        -1.0, -1.0, 1.0,   vertexSize,  1.0, 1.0, 0.0, cubeAlpha, // front bottom left
        1.0, -1.0, 1.0,    vertexSize,  1.0, 1.0, 1.0, cubeAlpha, // front bottom right
        1.0, -1.0, -1.0,   vertexSize,  0.0, 1.0, 0.0, cubeAlpha, // back bottom right
        1.0, 1.0, -1.0,    vertexSize,  0.0, 1.0, 1.0, cubeAlpha, // back top right
        1.0, 1.0, 1.0,     vertexSize,  0.0, 0.0, 1.0, cubeAlpha, // front top right
        -1.0, 1.0, 1.0,    vertexSize,  1.0, 0.0, 1.0, cubeAlpha, // front top left
        -1.0, 1.0, -1.0,   vertexSize,  0.5, 0.5, 0.5, cubeAlpha,  // back top left
        
        -1.0, -1.0, -1.0,  1.4,  0.0, 0.0, 0.0, 1.0, // back bottom left
        -1.0, -1.0, 1.0,   1.4,  0.0, 0.0, 0.0, 1.0, // front bottom left
        1.0, -1.0, 1.0,    1.4,  0.0, 0.0, 0.0, 1.0, // front bottom right
        1.0, -1.0, -1.0,   1.4,  0.0, 0.0, 0.0, 1.0, // back bottom right
        1.0, 1.0, -1.0,    1.4,  0.0, 0.0, 0.0, 1.0, // back top right
        1.0, 1.0, 1.0,     1.4,  0.0, 0.0, 0.0, 1.0, // front top right
        -1.0, 1.0, 1.0,    1.4,  0.0, 0.0, 0.0, 1.0, // front top left
        -1.0, 1.0, -1.0,   1.4,  0.0, 0.0, 0.0, 1.0,  // back top left
        
        0.0, 0.0, -1.5,   6.7,  1.0, 0.0, 1.0, 1.0,  // back top left
        0.0, 0.0, 1.5,   6.7,  1.0, 0.0, 1.0, 1.0,  // back top left
        ],
    indices: [
        3, 1, 0,  3, 2, 1, // bottom face
        0, 1, 6,  0, 6, 7, // left face
        0, 4, 3,  0, 7, 4, // back face
        3, 4, 2,  4, 5, 2, // right face
        6, 5, 4,  7, 6, 4, // top face
        1, 2, 6,  2, 5, 6 // front face
        ]
};
var octahedronData = {
    vertices: [
        0.0, 1.0, 0.0,   1.4,  1.0, 0.0, 0.0, 1.0,
        -1.0, 0.0, 0.0,  1.4,  1.0, 1.0, 0.0, 1.0,
        0.0, 0.0, -1.0,  1.4,  0.0, 1.0, 0.0, 1.0,
        1.0, 0.0, 0.0,   1.4,  0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0,   1.4,  0.0, 0.0, 1.0, 1.0,
        0.0, -1.0, 0.0,  1.4,  1.0, 0.0, 1.0, 1.0
        ],
    points: [],
    lines: [],
    triangles: [0, 2, 1,  0, 3, 2,  0, 4, 3,  0, 1, 4,  5, 1, 2,  5, 2, 3,  5, 3, 4,  5, 4, 1]
};

var triangleVertexData = [
    0.0, -1.0, 1.0,   1.41,  0.0, 0.0, 1.0, 1.0,
    -0.5, 0.0, 1.0,   1.41,  1.0, 0.0, 0.0, 1.0,
    0.5, 0.0, 1.0,    1.41,  0.0, 1.0, 0.0, 1.0,
    -1.0, -1.0, 1.0,  1.41,  1.0, 0.0, 1.0, 1.0,
    1.0, -1.0, 1.0,   1.41,  0.0, 1.0, 1.0, 1.0,
    0.0, 1.0, 1.0,    1.41,  1.0, 1.0, 0.0, 1.0,
    
    ];
var triangleIndexData = [0, 1, 2,  0, 1, 3,  0, 2, 4,  1, 2, 5];

var triangleLinesVertices = [
    
    ];

var zCoord = 1.0;

var squareVertexData = [
    -0.5, -0.5, zCoord,   1.41,  1.0, 0.0, 0.0, 1.0,   
    0.5, -0.5, zCoord,    1.41,  0.0, 1.0, 0.0, 1.0,   
    -0.5, 0.5, zCoord,    1.41,  0.0, 0.0, 1.0, 1.0,   
    0.5, 0.5, zCoord,     1.41,  1.0, 1.0, 1.0, 1.0,
    0.0, -1.0, zCoord,    1.41,  1.0, 1.0, 0.0, 1.0,
    -1.0, 0.0, zCoord,    1.41,  1.0, 0.0, 1.0, 1.0,
    0.0, 1.0, zCoord,     1.41,  0.0, 0.0, 0.5, 1.0,
    1.0, 0.0, zCoord,     1.41,  0.0, 0.5, 0.0, 1.0
    ];
var squareIndexData = [0, 1, 2,  1, 2, 3,  0, 1, 4,  0, 2, 5,  2, 3, 6,  3, 1, 7];

var vertexData = lazyCubeData.vertices;
var indexData = lazyCubeData.indices;


var multiShapeCubeData = {
    vertices: lazyCubeData.vertices,
    triangles: lazyCubeData.indices,
    points: [0, 1, 2, 3, 4, 5, 6, 7,  16, 17],
    lines: [
        8, 9,  9, 10,  10, 11,  11, 8, 
        8, 15,  9, 14,  10, 13,  11, 12,
        12, 13,  13, 14,  14, 15,  15, 12
    ]
};



