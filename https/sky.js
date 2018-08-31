class YdSky {
    constructor() {
        this.stars = [];
    }
    static get inputProperties() {
        return ["--star-density", "--star-opacity"]
    }
    paint(ctx, paintSize, properties) {
        let xMax = paintSize.width;
        let yMax = paintSize.height;
        ctx.fillRect(0, 0, xMax, yMax);
        let starDensity = properties
            .get("--star-density")
            .toString() || 1;
        starDensity > 1 && (starDensity = 1); //修正星星密度
        // 设置一共多少星星
        let allStarts = Math.round((xMax + yMax) * starDensity);
        for (let i = 0; i < allStarts; i++) {
            let x = Math.floor(Math.random()*xMax +1);
            let y = Math.floor(Math.random()*yMax + 1);
            let size = Math.floor(Math.random()*2 +1);
            //设置每个星星的透明度
            const opacityOne = Math.floor(Math.random()*9 +1);
            const opacityTwo = Math.floor(Math.random()*9 +1);
            const hue = Math.floor(Math.random()*360 +1);
            const opacity = +("."+(opacityOne+opacityTwo))*starDensity;
            ctx.fillStyle = `hsla(${hue},30%,80%,${opacity})`;
            ctx.fillRect(x,y,size,size);
        }
    }
}
registerPaint("yd-sky", YdSky);