//#version 100// es
//#ifdef GL_ES
//precision mediump float;
//#endif
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying lowp vec4 vColor;
varying lowp float vSize;

void main() {
    //gl_FragColor = vColor; 
    //*
    vec2 fragmentPosition = 1.0*gl_PointCoord - 0.5;
    float distance = length(fragmentPosition) * vSize;
    float distanceSq = distance * distance / distance;
    gl_FragColor = vec4(
vColor.x/distanceSq,
vColor.y/distanceSq,
vColor.z/distanceSq, vColor.w/distanceSq);//*/
    // something due to size / radius modification
}
