<template>
  
</template>

<script>
let blobURL = URL.createObjectURL( new Blob([ '(',
    function(){
        
        class Sky {
            paint (ctx, paintSize, properties) {
                ctx.fillRect(0, 0, paintSize.width, paintSize.height);
            }
        }
        registerPaint('sky', Sky);

    }.toString(),
 
    ')()' ], { type: 'application/javascript' } ) 
);

CSS.paintWorklet.addModule(blobURL);
export default {
}
</script>

<style>
body {
  background-image: paint(sky);
}
</style>
