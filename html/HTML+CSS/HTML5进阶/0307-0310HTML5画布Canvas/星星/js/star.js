// 创建类starObj 
var starObj = function () {
    this.isMax = [];//bool
    this.time = [];
    this.x = [];
    this.y = [];
    this.life_time = []; //存活时间
    this.jianbain = [] ; //渐变时间
    this.star_pic = new Image();
    this.star2_pic = new Image();
    // this.num = 50;
}
// prototype 属性使您有能力向对象添加属性和方法。
starObj.prototype.num = 50;
starObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.born(i);
    }
    for(var j = 0 ; j < 10; j++){
        this.suiji();
    }

    this.star_pic.src = "./src/star2.png";
    this.star2_pic.src = "./src/star1.png";
}
starObj.prototype.draw = function () {
    for(var i = 0; i < this.num; i++){
        if(this.isMax[i]){
            // 当星星存在时间大于随机时间，则重新获取出生值
            if(this.time[i] >= this.life_time[i]){
                this.born(i);
                this.suiji();
            }
            if(this.time[i] < this.life_time[i]){
                if(this.time[i] <= 3 * this.life_time[i] / 5){
                    ctx.save();
                    ctx.globalAlpha = this.jianbain[i];
                    ctx.beginPath();
                    ctx.drawImage(this.star_pic, this.x[i], this.y[i], 20 , 20);
                    ctx.closePath();
                    ctx.restore();
                    this.jianbain[i] +=  detaltime/1000;
                }else if(this.time[i] <= 4 * this.life_time[i] / 5){
                    ctx.save();
                    ctx.drawImage(this.star2_pic, this.x[i], this.y[i], 20 , 20);
                    ctx.restore();
                    this.jianbain[i] = 1;
                }
                else if(this.time[i] < this.life_time[i]){
                    ctx.save();
                    ctx.globalAlpha = this.jianbain[i];
                    ctx.beginPath();
                    ctx.drawImage(this.star2_pic, this.x[i], this.y[i], 20 , 20);
                    ctx.closePath();
                    ctx.restore();
                    this.jianbain[i] -=  detaltime/1000;
                }
            }
            this.time[i] += detaltime;
        }
        else{
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.drawImage(this.star_pic, this.x[i], this.y[i], 20 , 20);
            ctx.closePath();
            ctx.restore();
        }

    }
}
// 设置星星生成的初始值
starObj.prototype.born = function (i) {
        this.isMax[i] = false;
        this.time[i] = 0;
        // 随机生成星星坐标值
        this.x[i] = w/2 + Math.random() * 200 + i*10;
        this.y[i] = 20 + Math.random() * 200 + i*2;
        this.life_time[i] = Math.random()*2 * 1000;//生存时间为0-2000毫秒
        this.jianbain[i] = 0;
}
// 获取随机变化的星星
starObj.prototype.suiji = function () {
    var sui = parseInt(Math.random()*49+1, 10); //1-50随机数,10进制
    if(!this.isMax[sui]){
        this.isMax[sui] = true;
    }else{
        this.suiji();
    }

}
