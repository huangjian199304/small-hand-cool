export class SmallHandCool {
    private name: string;
    constructor() {
        this.name = 'twinkleJ';
    }

    //圆的面积
    circleArea(radius: number): number{
        const area = Math.PI * Math.pow(radius, 2);
        return area;
    }
}