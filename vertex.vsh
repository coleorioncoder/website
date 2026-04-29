//#version 100 //es
//precision mediump float;
#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
#else
    precision mediump float;
#endif

attribute vec4 a_vPos;
attribute vec4 a_vColor;
attribute float a_vSize;

uniform mat4 u_projectionMatrix;
uniform mat4 u_modelViewMatrix;
//uniform mat4 u_identityMatrix;

varying lowp vec4 vColor;
varying lowp float vSize;
void main() {
    vec4 finalPosition = u_projectionMatrix * u_modelViewMatrix * a_vPos;
    gl_Position = finalPosition;
    gl_PointSize = a_vSize;
    vSize = a_vSize;
    vColor = a_vColor;
}
