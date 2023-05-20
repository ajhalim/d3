/*
class logo extends Phaser.Scene {
    constructor(){
        super('logo');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('logo', 'STUDIO.png');
        this.load.image('scene1', 'scene1.png');
        this.load.image('scene2', 'scene2.PNG');
        this.load.image('scene3', 'scene3 (1).png');
        this.load.audio('demon', 'demon.wav');
        this.load.audio('write', 'write.wav');
    }
    create(){
        this.add.image(960, 540, 'logo');
        this.add.text(700,1000,"Click to continue").setFontSize(40)
        this.input.on('pointerdown', () => this.scene.start('scene1'));
    }
}
*/

class lvl1 extends Phaser.Scene {
    keySpace;
    constructor(){
        super('lvl1');
        this.rope;
    }
    create(){
        //var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //physics
        this.matter.world.setBounds();
        //Player
        let player = this.matter.add.circle(1920/2,1080/2,50,0xFF0000);
        //player.setCollisionCategory(playerThing);
        //player.setOnCollideWith(ceil, )

        
        //Ceiling
        let ceil = this.matter.add.rectangle(1920/2,0,1920,1080*.15, { isStatic: true }, 0x808080);

        //floor 
        let floor = this.matter.add.rectangle(1920* .35, 1080, 1500,128, { isStatic: true }, 0x808080);

        //rope
        this.rope = this.matter.add.spring(player, ceil, 1080/6, 0.001);
        //this.input.keyboard.on('SPACE', callback, context);

        this.matter.add.mouseSpring();

        //please work
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //console.log("test");

        this.input.keyboard.on('keyup-SPACE', event =>
        {

            console.log('test');
            rope.destroy();
            //rope = false;

        });

        //this.input.once('keydown-A', () =>
        //{
         //   console.log("test");
          //  this.rope.destroy();

        //});

    }
    update(){
        if (this.keySpace.isDown)
        {
           this.rope = false;
        }
    }
}

class intro extends Phaser.Scene {
    constructor(){
        super('intro');
    }

    preload(){
        //let width = this.game.config.width;
        //let height = this.game.config.height;
    }
    create(){
        this.add.text(this.game.config.width/2, this.game.config.height/2, "Click to continue");
        this.input.on('pointerdown', () => this.scene.start('lvl1'));
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
        //backgroundColor: '#FFFFFF'
    },
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            debug: {

                showAxes: false,
                showAngleIndicator: true,
                angleColor: 0xe81153,

                showBroadphase: false,
                broadphaseColor: 0xffb400,

                showBounds: false,
                boundsColor: 0xffffff,

                showVelocity: true,
                velocityColor: 0x00aeef,

                showCollisions: true,
                collisionColor: 0xf5950c,
    
                showSeparations: false,
                separationColor: 0xffa500,

                showBody: true,
                showStaticBody: true,
                showInternalEdges: true,

                renderFill: false,
                renderLine: true,
    
                fillColor: 0x106909,
                fillOpacity: 1,
                lineColor: 0x28de19,
                lineOpacity: 1,
                lineThickness: 1,
    
                staticFillColor: 0x0d177b,
                staticLineColor: 0x1327e4,

                showSleeping: true,
                staticBodySleepOpacity: 1,
                sleepFillColor: 0x464646,
                sleepLineColor: 0x999a99,
    
                showSensors: true,
                sensorFillColor: 0x0d177b,
                sensorLineColor: 0x1327e4,
    
                showPositions: true,
                positionSize: 4,
                positionColor: 0xe042da,
    
                showJoint: true,
                jointColor: 0xe0e042,
                jointLineOpacity: 1,
                jointLineThickness: 2,
    
                pinSize: 4,
                pinColor: 0x42e0e0,
    
                springColor: 0xe042e0,
    
                anchorColor: 0xefefef,
                anchorSize: 4,
    
                showConvexHulls: true,
                hullColor: 0xd703d0
            }
        }
    },
    scene: [intro,lvl1],
    title: "D1",
});

