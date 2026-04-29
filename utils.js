document.body.innerHTML += "<p>utils loaded</p>";
var Mat4 = glMatrix.mat4;
var M4 = {
    identity: [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ],
    perspective: function(fieldOfViewInRadians, aspect, near, far) {
        var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        var rangeInv = 1.0 / (near - far);
     
        return [
          f / aspect, 0, 0, 0,
          0, f, 0, 0,
          0, 0, (near + far) * rangeInv, -1,
          0, 0, near * far * rangeInv * 2, 0
        ];
    },
};

if (PVector == null) {
  function PVector(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
  }
}



var degreesToRadians = function (degrees) {
  return (degrees/180)*Math.PI;
};
var Symbol = function (centerPosPVec, rotatePVec, symbolSize, symbolDisplay) {
  symbolSize = symbolSize || 100;
  centerPosPVec = centerPosPVec || new PVector(0, 0, 0);
  rotatePVec = rotatePVec || new PVector(0, 0, 0);
  symbolDisplay = symbolDisplay || 0;
  
  var scaledPoints = [
      [symbolSize*Math.cos(degreesToRadians(-90)), symbolSize*Math.sin(degreesToRadians(-90)), 0],//0
      [symbolSize*Math.cos(degreesToRadians(30)), symbolSize*Math.sin(degreesToRadians(30)), 0],//1
      [symbolSize*Math.cos(degreesToRadians(150)), symbolSize*Math.sin(degreesToRadians(150)), 0],//2
      
      [symbolSize*(80/100)*Math.cos(degreesToRadians(-90)), symbolSize*(80/100)*Math.sin(degreesToRadians(-90)), 0],//3
      [symbolSize*(80/100)*Math.cos(degreesToRadians(30)), symbolSize*(80/100)*Math.sin(degreesToRadians(30)), 0],//4
      [symbolSize*(80/100)*Math.cos(degreesToRadians(150)), symbolSize*(80/100)*Math.sin(degreesToRadians(150)), 0],//5
      
      [symbolSize*(42/100)*Math.cos(degreesToRadians(-47)), symbolSize*(42/100)*Math.sin(degreesToRadians(-47)), 0],//6
      [symbolSize*(42/100)*Math.cos(degreesToRadians(-13)), symbolSize*(42/100)*Math.sin(degreesToRadians(-13)), 0],//7
      [symbolSize*(42/100)*Math.cos(degreesToRadians(73)), symbolSize*(42/100)*Math.sin(degreesToRadians(73)), 0],//8
      [symbolSize*(42/100)*Math.cos(degreesToRadians(107)), symbolSize*(42/100)*Math.sin(degreesToRadians(107)), 0],//9
      [symbolSize*(42/100)*Math.cos(degreesToRadians(193)), symbolSize*(42/100)*Math.sin(degreesToRadians(193)), 0],//10
      [symbolSize*(42/100)*Math.cos(degreesToRadians(227)), symbolSize*(42/100)*Math.sin(degreesToRadians(227)), 0],//11
      
      [symbolSize*(40/100)*Math.cos(degreesToRadians(-30)), symbolSize*(40/100)*Math.sin(degreesToRadians(-30)), 0],//12
      [symbolSize*(40/100)*Math.cos(degreesToRadians(90)), symbolSize*(40/100)*Math.sin(degreesToRadians(90)), 0],//13
      [symbolSize*(40/100)*Math.cos(degreesToRadians(-150)), symbolSize*(40/100)*Math.sin(degreesToRadians(-150)), 0],//14
      
      [symbolSize*(50/100)*Math.cos(degreesToRadians(-90)), symbolSize*(50/100)*Math.sin(degreesToRadians(-90)), 0],//15
      [symbolSize*(50/100)*Math.cos(degreesToRadians(30)), symbolSize*(50/100)*Math.sin(degreesToRadians(30)), 0],//16
      [symbolSize*(50/100)*Math.cos(degreesToRadians(150)), symbolSize*(50/100)*Math.sin(degreesToRadians(150)), 0],//17
      
      [symbolSize*(33/100)*Math.cos(degreesToRadians(-110)), symbolSize*(33/100)*Math.sin(degreesToRadians(-110)), 0],//18
      [symbolSize*(33/100)*Math.cos(degreesToRadians(10)), symbolSize*(33/100)*Math.sin(degreesToRadians(10)), 0],//19
      [symbolSize*(33/100)*Math.cos(degreesToRadians(-230)), symbolSize*(33/100)*Math.sin(degreesToRadians(-230)), 0],//20
      
      [symbolSize*(26.5/100)*Math.cos(degreesToRadians(-50)), symbolSize*(26.5/100)*Math.sin(degreesToRadians(-50)), 0],//21
      [symbolSize*(26.5/100)*Math.cos(degreesToRadians(-290)), symbolSize*(26.5/100)*Math.sin(degreesToRadians(-290)), 0],//22
      [symbolSize*(26.5/100)*Math.cos(degreesToRadians(-170)), symbolSize*(26.5/100)*Math.sin(degreesToRadians(-170)), 0],//23
      
      [symbolSize*(20/100)*Math.cos(degreesToRadians(-90)), symbolSize*(20/100)*Math.sin(degreesToRadians(-90)), 0],//24
      [symbolSize*(20/100)*Math.cos(degreesToRadians(30)), symbolSize*(20/100)*Math.sin(degreesToRadians(30)), 0],//25
      [symbolSize*(20/100)*Math.cos(degreesToRadians(150)), symbolSize*(20/100)*Math.sin(degreesToRadians(150)), 0],//26
      
      [symbolSize*(30/100)*Math.cos(degreesToRadians(-80)), symbolSize*(30/100)*Math.sin(degreesToRadians(-80)), 0],//27
      [symbolSize*(30/100)*Math.cos(degreesToRadians(40)), symbolSize*(30/100)*Math.sin(degreesToRadians(40)), 0],//28
      [symbolSize*(30/100)*Math.cos(degreesToRadians(160)), symbolSize*(30/100)*Math.sin(degreesToRadians(160)), 0],//29
      
      [symbolSize*(35.5/100)*Math.cos(degreesToRadians(-60)), symbolSize*(35.5/100)*Math.sin(degreesToRadians(-60)), 0],//30
      [symbolSize*(35.5/100)*Math.cos(degreesToRadians(60)), symbolSize*(35.5/100)*Math.sin(degreesToRadians(60)), 0],//31
      [symbolSize*(35.5/100)*Math.cos(degreesToRadians(180)), symbolSize*(35.5/100)*Math.sin(degreesToRadians(180)), 0],//32
      
      [symbolSize*(25/100)*Math.cos(degreesToRadians(-150)), symbolSize*(25/100)*Math.sin(degreesToRadians(-150)), 0],//33
      [symbolSize*(25/100)*Math.cos(degreesToRadians(-30)), symbolSize*(25/100)*Math.sin(degreesToRadians(-30)), 0],//34
      [symbolSize*(25/100)*Math.cos(degreesToRadians(90)), symbolSize*(25/100)*Math.sin(degreesToRadians(90)), 0]//35
  ];
  var connectedPoints = [
      [0, 1], [1, 2], [2, 0],
      [3, 6], [3, 11], [4, 7], [4, 8], [5, 10], [5, 9],
      [11, 18], [15, 18], [15, 21], [12, 21], [12, 25], [28, 25], [10, 32],
      [7, 19], [16, 19], [16, 22], [13, 22], [13, 26], [29, 26], [8, 31],
      [9, 20], [17, 20], [17, 23], [14, 23], [14, 24], [27, 24], [6, 30],
      [33, 34], [34, 35], [35, 33]
  ];
  var Xaxis = rotatePVec.x || 0;
  var Yaxis = rotatePVec.y || 0;
  var Zaxis = rotatePVec.z || 0;
  for (var i = 0; i < scaledPoints.length; i ++) {
      var Z1 = scaledPoints[i][2];
      var Y1 = scaledPoints[i][1];
      if (Xaxis!==0) {
          scaledPoints[i][2] = Z1*Math.cos(degreesToRadians(Xaxis))+Y1*Math.sin(degreesToRadians(Xaxis));
          scaledPoints[i][1] = Y1*Math.cos(degreesToRadians(Xaxis))-Z1*Math.sin(degreesToRadians(Xaxis));
      }
      var Z2 = scaledPoints[i][2];
      var X1 = scaledPoints[i][0];
      if (Yaxis!==0) {
          scaledPoints[i][0] = X1*Math.cos(degreesToRadians(Yaxis))-Z2*Math.sin(degreesToRadians(Yaxis));
          scaledPoints[i][2] = Z2*Math.cos(degreesToRadians(Yaxis))+X1*Math.sin(degreesToRadians(Yaxis));
      }
      var X2 = scaledPoints[i][0];
      var Y2 = scaledPoints[i][1];
      if (Zaxis!==0) {
          scaledPoints[i][0] = X2*Math.cos(degreesToRadians(Zaxis))-Y2*Math.sin(degreesToRadians(Zaxis));
          scaledPoints[i][1] = Y2*Math.cos(degreesToRadians(Zaxis))+X2*Math.sin(degreesToRadians(Zaxis));
      }
  }
  for (var i = 0; i < scaledPoints.length; i ++) {
      scaledPoints[i][0] += centerPosPVec.x;
      scaledPoints[i][1] += centerPosPVec.y;
      scaledPoints[i][2] += centerPosPVec.z;
  }
  
  if (symbolDisplay) {
      for (var i = 0; i < scaledPoints.length; i ++) {
          point(scaledPoints[i][0], scaledPoints[i][1]);
      }
      for (var i = 0; i < connectedPoints.length; i ++) {
          line(scaledPoints[connectedPoints[i][0]][0], scaledPoints[connectedPoints[i][0]][1], scaledPoints[connectedPoints[i][1]][0], scaledPoints[connectedPoints[i][1]][1]);
      }
  }
  
  return {nodes:scaledPoints, connections:connectedPoints};
};


var render3DDataArray = function (dataObjectArrayParam, centerPVecParam, rotatePVecParam, scaleParam, showNodesParam, nodeSize, nodeColor) {
  let newDataObject = {
      vertices: [],
      points: [],
      lines: [],
      triangles: []
  };
  let dataObjectArray = dataObjectArrayParam || [];
  //newDataObjectArray = newDataObjectArray.length>0?newDataObjectArray:dataObjectArrayParam;
  let showPoints = showNodesParam ?? 0;
  let centerPVec = centerPVecParam || new PVector(0, 0, 0);
  let rotatePVec = rotatePVecParam || new PVector(0, 0, 0);
  // pushMatrix();
  // translate(centerPVec.x, centerPVec.y);
  //loop through the 3d data objects in this object array format: [{nodes:[[#, #, #], [#, #, #]], connections:[[this.nodes.indexOf([#, #, #]), this.nodes.indexOf([#, #, #]), ...], ...], ...}, ...]
  let currIndexOffset = 0;
  for (var i = 0; i < dataObjectArray.length; i ++) {
      //3D rotational & translational math
      var Xaxis = rotatePVec.x || 0;
      var Yaxis = rotatePVec.y || 0;
      var Zaxis = rotatePVec.z || 0;
      for (var j = 0; j < dataObjectArray[i].nodes.length; j ++) {
          var Z1 = dataObjectArray[i].nodes[j][2];
          var Y1 = dataObjectArray[i].nodes[j][1];
          if (Xaxis!==0) {
              dataObjectArray[i].nodes[j][2] = Z1*Math.cos(degreesToRadians(Xaxis))+Y1*Math.sin(degreesToRadians(Xaxis));
              dataObjectArray[i].nodes[j][1] = Y1*Math.cos(degreesToRadians(Xaxis))-Z1*Math.sin(degreesToRadians(Xaxis));
          }
          var Z2 = dataObjectArray[i].nodes[j][2];
          var X1 = dataObjectArray[i].nodes[j][0];
          if (Yaxis!==0) {
              dataObjectArray[i].nodes[j][0] = X1*Math.cos(degreesToRadians(Yaxis))-Z2*Math.sin(degreesToRadians(Yaxis));
              dataObjectArray[i].nodes[j][2] = Z2*Math.cos(degreesToRadians(Yaxis))+X1*Math.sin(degreesToRadians(Yaxis));
          }
          var X2 = dataObjectArray[i].nodes[j][0];
          var Y2 = dataObjectArray[i].nodes[j][1];
          if (Zaxis!==0) {
              dataObjectArray[i].nodes[j][0] = X2*Math.cos(degreesToRadians(Zaxis))-Y2*Math.sin(degreesToRadians(Zaxis));
              dataObjectArray[i].nodes[j][1] = Y2*Math.cos(degreesToRadians(Zaxis))+X2*Math.sin(degreesToRadians(Zaxis));
          }
          
          //weak projection algorithm math
          // dataObjectArray[i].nodes[j][2] = constrain(dataObjectArray[i].nodes[j][2], -fl, fl*80000);
          // dataObjectArray[i].nodes[j][1] = (dataObjectArray[i].nodes[j][1]*fl)/(dataObjectArray[i].nodes[j][2]+fl);
          // dataObjectArray[i].nodes[j][0] = (dataObjectArray[i].nodes[j][0]*fl)/(dataObjectArray[i].nodes[j][2]+fl);
          
          //scaling code
          dataObjectArray[i].nodes[j][0] *= scaleParam;
          dataObjectArray[i].nodes[j][1] *= scaleParam;
          dataObjectArray[i].nodes[j][2] *= scaleParam;
          
          //translation code
          dataObjectArray[i].nodes[j][0] -= centerPVec.x;
          dataObjectArray[i].nodes[j][1] -= centerPVec.y;
          dataObjectArray[i].nodes[j][2] -= centerPVec.z;
      }
      
      
      
      //display code
      for (var j = 0; j < dataObjectArray[i].nodes.length; j ++) {
          
          //point(dataObjectArray[i].nodes[j][0], dataObjectArray[i].nodes[j][1]);
          //if showNodes is equal to true or 1, then loop through and display the point data
          newDataObject.vertices.push(dataObjectArray[i].nodes[j][0], dataObjectArray[i].nodes[j][1], dataObjectArray[i].nodes[j][2], nodeSize, nodeColor[0], nodeColor[1], nodeColor[2], nodeColor[3]);
          if (showPoints) {
              newDataObject.points.push(j+currIndexOffset);
          }
      }
      
      //loop through and display connections data
      for (var j = 0; j < dataObjectArray[i].connections.length; j ++) {
          //as long as the connections data point array's length is greater than one, proceed
          if (dataObjectArray[i].connections[j].length > 1) {
              //if the connections data point array's length is equal to 2 just draw a line, otherwise draw a complex shape with beginShape() and endShape()
              if (dataObjectArray[i].connections[j].length === 2 && dataObjectArray[i].nodes[dataObjectArray[i].connections[j][0]] && dataObjectArray[i].nodes[dataObjectArray[i].connections[j][1]]) {
                 // line(dataObjectArray[i].nodes[dataObjectArray[i].connections[j][0]][0], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][0]][1], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][1]][0], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][1]][1]);
                  newDataObject.lines.push(dataObjectArray[i].connections[j][0]+currIndexOffset, dataObjectArray[i].connections[j][1]+currIndexOffset);
              }
              else {
                  //fill(255, 255, 255);
                  //beginShape();
                  for (var k = 0; k < dataObjectArray[i].connections[j].length; k ++) {
                      //vertex(dataObjectArray[i].nodes[dataObjectArray[i].connections[j][k]][0], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][(k+1)%dataObjectArray[i].connections[j].length]][0]);
                  }
                  //endShape();
              }
          }
      }
      currIndexOffset+=dataObjectArray[i].nodes.length;
  }
  // popMatrix();
  return newDataObject;
};
var setup3DDataObj = function (dataObjectParam, centerPVecParam, rotatePVecParam, showNodesParam, vertexFormatInArg, vertexFormatOutArg) {
  
  let vFormatInStr = vertexFormatInArg ?? "xyzsrgba";
  let vStride = vFormatInStr.length;
  let newDataObjectArray = [];
  let dataObject = dataObjectParam ?? {
      vertices: [],
      points: [],
      lines: [],
      triangles: []
  };
  newDataObjectArray = newDataObjectArray.length>0?newDataObjectArray:dataObjectArray;
  let showPoints = showNodesParam || 0;
  let centerPVec = centerPVecParam || new PVector(0, 0, 0);
  let rotatePVec = rotatePVecParam || new PVector(0, 0, 0);
  // pushMatrix();
  // translate(centerPVec.x, centerPVec.y);
  //loop through the 3d data objects in this object array format: [{nodes:[[#, #, #], [#, #, #]], connections:[[this.nodes.indexOf([#, #, #]), this.nodes.indexOf([#, #, #]), ...], ...], ...}, ...]
  let vertexArray = []; // [[x, y, z], size, [r, g, b, a]]
  let currVertex = [[], 0, []];
  for (let i = 0; i < dataObject.vertices.length; i ++) {
      if (i%vStride == 0 && i != 0) {
          vertexArray.push(currVertex);
          currVertex = [[], 0, []];
      }
      
      //let currVertexInd = Math.floor(i/vStride);
      switch (vFormatInStr.charAt(i%vStride)) {
          case "x":
              currVertex[0].push(dataObject.vertices[i]);
          break;
          case "y":
              currVertex[0].push(dataObject.vertices[i]);
          break;
          case "z":
              currVertex[0].push(dataObject.vertices[i]);
          break;
          case "s":
              currVertex[1] = dataObject.vertices[i];
          break;
          case "r":
              currVertex[2].push(dataObject.vertices[i]);
          break;
          case "g":
              currVertex[2].push(dataObject.vertices[i]);
          break;
          case "b":
              currVertex[2].push(dataObject.vertices[i]);
          break;
          case "a":
              currVertex[2].push(dataObject.vertices[i]);
          break;
          
      }
      // for (let j = (i*vStride); j < (i+1)*vStride; j++) {
      //     switch 
      // }
  }
  
  for (let i = 0; i < dataObjectArray.length; i ++) {
      //3D rotational math
      var Xaxis = rotatePVec.x || 0;
      var Yaxis = rotatePVec.y || 0;
      var Zaxis = rotatePVec.z || 0;
      for (var j = 0; j < dataObjectArray[i].nodes.length; j ++) {
          var Z1 = dataObjectArray[i].nodes[j][2];
          var Y1 = dataObjectArray[i].nodes[j][1];
          if (Xaxis!==0) {
              dataObjectArray[i].nodes[j][2] = Z1*Math.cos(degreesToRadians(Xaxis))+Y1*Math.sin(degreesToRadians(Xaxis));
              dataObjectArray[i].nodes[j][1] = Y1*Math.cos(degreesToRadians(Xaxis))-Z1*Math.sin(degreesToRadians(Xaxis));
          }
          var Z2 = dataObjectArray[i].nodes[j][2];
          var X1 = dataObjectArray[i].nodes[j][0];
          if (Yaxis!==0) {
              dataObjectArray[i].nodes[j][0] = X1*Math.cos(degreesToRadians(Yaxis))-Z2*Math.sin(degreesToRadians(Yaxis));
              dataObjectArray[i].nodes[j][2] = Z2*Math.cos(degreesToRadians(Yaxis))+X1*Math.sin(degreesToRadians(Yaxis));
          }
          var X2 = dataObjectArray[i].nodes[j][0];
          var Y2 = dataObjectArray[i].nodes[j][1];
          if (Zaxis!==0) {
              dataObjectArray[i].nodes[j][0] = X2*Math.cos(degreesToRadians(Zaxis))-Y2*Math.sin(degreesToRadians(Zaxis));
              dataObjectArray[i].nodes[j][1] = Y2*Math.cos(degreesToRadians(Zaxis))+X2*Math.sin(degreesToRadians(Zaxis));
          }
          
          //weak projection algorithm math
          // dataObjectArray[i].nodes[j][2] = constrain(dataObjectArray[i].nodes[j][2], -fl, fl*80000);
          // dataObjectArray[i].nodes[j][1] = (dataObjectArray[i].nodes[j][1]*fl)/(dataObjectArray[i].nodes[j][2]+fl);
          // dataObjectArray[i].nodes[j][0] = (dataObjectArray[i].nodes[j][0]*fl)/(dataObjectArray[i].nodes[j][2]+fl);
      }
      
      
      
      //display code
      if (showPoints) {
          //if showNodes is equal to true or 1, then loop through and display the point data
          for (var j = 0; j < dataObjectArray[i].nodes.length; j ++) {
              point(dataObjectArray[i].nodes[j][0], dataObjectArray[i].nodes[j][1]);
          }
      }
      //loop through and display connections data
      for (var j = 0; j < dataObjectArray[i].connections.length; j ++) {
          //as long as the connections data point array's length is greater than one, proceed
          if (dataObjectArray[i].connections[j].length > 1) {
              //if the connections data point array's length is equal to 2 just draw a line, otherwise draw a complex shape with beginShape() and endShape()
              if (dataObjectArray[i].connections[j].length === 2 && dataObjectArray[i].nodes[dataObjectArray[i].connections[j][0]] && dataObjectArray[i].nodes[dataObjectArray[i].connections[j][1]]) {
                  line(dataObjectArray[i].nodes[dataObjectArray[i].connections[j][0]][0], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][0]][1], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][1]][0], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][1]][1]);
              }
              else {
                  fill(255, 255, 255);
                  beginShape();
                  for (var k = 0; k < dataObjectArray[i].connections[j].length; k ++) {
                      vertex(dataObjectArray[i].nodes[dataObjectArray[i].connections[j][k]][0], dataObjectArray[i].nodes[dataObjectArray[i].connections[j][(k+1)%dataObjectArray[i].connections[j].length]][0]);
                  }
                  endShape();
              }
          }
      }
  }
  // popMatrix();
  
};
