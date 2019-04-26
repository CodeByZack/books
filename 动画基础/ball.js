function Ball(radius,color){
    this.x = 0;
    this.y = 0;
    this.radius = radius || 20;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = color || "#ff0000";
    this.lineWidth = 1;
}

Ball.prototype.draw = function(ctx){
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.rotation);
    ctx.scale(this.scaleX,this.scaleY);
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(0,0,this.radius,0,(Math.PI*2),true);
    ctx.closePath();
    ctx.fill();
    if(this.lineWidth > 0){
        ctx.stroke();
    }
    ctx.restore();
}