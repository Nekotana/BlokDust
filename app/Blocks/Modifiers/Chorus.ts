import ChorusComponent = require("../AudioEffectComponents/Chorus");
import IModifier = require("../IModifier");
import Modifier = require("../Modifier");
import Grid = require("../../Grid");

class Chorus extends Modifier {


    constructor(grid: Grid, position: Point){
        super(grid, position);

        var effect = new ChorusComponent({
            rate : 1,
            delayTime : 2.5,
            type : "triangle",
            depth : 0.4,
            feedback : 0.2
        });

        this.Effects.Add(effect);

        // Define Outline for HitTest
        this.Outline.push(new Point(-1, 0),new Point(0, -1),new Point(1, 0),new Point(0, 1));
    }

    Draw() {
        super.Draw();

        this.Ctx.beginPath();
        this.Ctx.fillStyle = "#aa3311";
        this.DrawMoveTo(-1,0);
        this.DrawLineTo(0,-1);
        this.DrawLineTo(1,0);
        this.DrawLineTo(0,1);
        this.Ctx.closePath();
        this.Ctx.fill();
    }

}

export = Chorus;