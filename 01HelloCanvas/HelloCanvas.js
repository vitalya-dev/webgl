function main() {
    // Get the <canvas> element
    var canvas = document.getElementById('webgl');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    // Get the WebGL rendering context
    var gl = canvas.getContext('webgl');
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    // Specify the clear color for the <canvas>
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    // Clear the <canvas>
    //gl.clear(gl.COLOR_BUFFER_BIT);
}
