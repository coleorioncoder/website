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



var prismHeights = -47*(1/3);
var frameCount3 = 0;
var zoom3 = 0;
var ph3 = 0;
var vh3 = 0;
var ah3 = -0.01;
var userRotateXY = [0, 0];
var mainSymbolSize = 100;
var symbolPyramidDataObj = render3DDataArray([Symbol(new PVector(0, prismHeights, 33), new PVector(19.5, 0, 0), mainSymbolSize), Symbol(new PVector(-29, prismHeights, -16.75), new PVector(19.5, 120, 0), mainSymbolSize), Symbol(new PVector(29, prismHeights, -16.75), new PVector(19.5, -120, 0), mainSymbolSize), Symbol(new PVector(0, prismHeights+47, 0), new PVector(90, 0, 0), mainSymbolSize), {nodes:[[0, -80, 0], [0, 80, 0]], connections:[]}], new PVector(0.0, (20*Math.sin(degreesToRadians(frameCount3*2))*1)+(0.0), 0), new PVector(frameCount3+userRotateXY[0], frameCount3+userRotateXY[1], 0), -0.01, 1, 1.41, [0.0, 1.0, 1.0, 1.0]);
var webglInst2 = new WebGLStuffObj(canvas1, ["webgl", "experimental-webgl", "moz-webkit"]);
webglInst2.initShaderProgram(vsSource, fsSource);
//webglInst2.initBuffers(symbolPyramidDataObj);
webglInst2.setupCanvas(canvas1.clientWidth, canvas1.clientHeight, [0.0, 0.0, 0.0, 1.0], false);
//webglInst2.initAttributes([["a_vPos", 3, "FLOAT", false, 8*4, 0*4],["a_vSize", 1, "FLOAT", false, 8*4, 3*4],["a_vColor", 4, "FLOAT", false, 8*4, 4*4]]);
function drawFunc3(e) {
    frameCount3 ++;
    //rotateX = frameCount1;
    //rotateY = frameCount1*0.5;
    if (e) {
        if (e.buttons != 0) {
            userRotateXY[0] += e.movementY;
            userRotateXY[1] += e.movementX;
        }
        if (e.deltaY) {
            e.preventDefault();
            zoom3 += -e.deltaY;
        }
    }
    
    //rotateY = rotateY2;
    //rotateX = rotateX2;
    
    //vh3 += ah3;
    if (ph3+vh3 < -1.5) {
        vh3 *= -1.0;
        ph3 = -1.5;
    }
    //ph3 += vh3;
    
    symbolPyramidDataObj = render3DDataArray([Symbol(new PVector(0, prismHeights, 33), new PVector(19.5, 0, 0), mainSymbolSize), Symbol(new PVector(-29, prismHeights, -16.75), new PVector(19.5, 120, 0), mainSymbolSize), Symbol(new PVector(29, prismHeights, -16.75), new PVector(19.5, -120, 0), mainSymbolSize), Symbol(new PVector(0, prismHeights+47, 0), new PVector(90, 0, 0), mainSymbolSize), {nodes:[[0, -80, 0], [0, 80, 0]], connections:[]}], new PVector(0.0, (0.3*Math.sin(degreesToRadians(frameCount3*2))*1)+(0.0), 0), new PVector(frameCount3+userRotateXY[0], frameCount3+userRotateXY[1], 0), -0.01, 0, 1.41, [0.0, 1.0, 1.0, 1.0]);
    webglInst2.initBuffers(symbolPyramidDataObj);
    webglInst2.initAttributes([["a_vPos", 3, "FLOAT", false, 8*4, 0*4],["a_vSize", 1, "FLOAT", false, 8*4, 3*4],["a_vColor", 4, "FLOAT", false, 8*4, 4*4]]);
    
    
    
    
    webglInst2.initUniforms(function (glInst, shaderProgParam) {
        let fov = (45 * Math.PI) / 180; // in radians
        let aspectRatio = glInst.canvas.clientWidth / glInst.canvas.clientHeight;
        let zNear = 0.1;
        let zFar = 100.0;
        let projectionMatrix = Mat4.create();
        let modelViewMatrix = Mat4.create();
            
        //let projectionMatrix = M4.perspective(fieldOfView, aspect, zNear, zFar);
        Mat4.perspective(projectionMatrix, fov, aspectRatio, zNear, zFar);
        
        // Now move the drawing position a bit to where we want to
        Mat4.translate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to translate
            [0.0, ph3, -4.0+(zoom3*0.01)]
        ); // amount to translate
        // Mat4.rotate(
        //     modelViewMatrix,
        //     modelViewMatrix,
        //     (-frameCount1*0.3)/180 * Math.PI,
        //     [1, 0, 0]
        // );
        // Mat4.rotate(
        //     modelViewMatrix,
        //     modelViewMatrix,
        //     (-frameCount1)/180 * Math.PI,
        //     [0, 0, 1]
        // );
        Mat4.rotate(
            modelViewMatrix,
            modelViewMatrix,
            (userRotateXY[0] * Math.PI)/180,
            [1, 0, 0]
        );
        Mat4.rotate(
            modelViewMatrix,
            modelViewMatrix,
            (userRotateXY[1] * Math.PI)/180,
            [0, 1, 0]
        );
        
        //actually set the uniforms
        glInst.uniformMatrix4fv(glInst.getUniformLocation(shaderProgParam, "u_projectionMatrix"), false, projectionMatrix); //currently set to identity matrix 
        glInst.uniformMatrix4fv(glInst.getUniformLocation(shaderProgParam, "u_modelViewMatrix"), false, modelViewMatrix); //currently set to aspect ratio matrix
    });
    
    
    webglInst2.display(1, "tlp", true);
}


canvas1.addEventListener("mousemove", drawFunc3);
//secondCanvas.addEventListener("touchmove", drawFunc2);
canvas1.addEventListener("wheel", drawFunc3);
window.setInterval(drawFunc3, 20);


