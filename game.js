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

class final extends Phaser.Scene{
    constructor(){
        super('final');
    }
    create(){
        let circle = this.add.image(1920 *.55, 1080 *.5, 'player').setScale(2)
        this.add.text(1920 *.5, 1080 *.5,"Game over, you did it");
    }
}

class lvl3 extends Phaser.Scene{
    constructor(){
        super('lvl3');
    }
    movingPlatform;
    player;
    cursors;
    platforms;
    goal;
    create(){
        this.platforms = this.physics.add.staticGroup();
        this.goal = this.physics.add.staticGroup();

        this.platforms.create(1920*.5, 1080 *1.05, 'plat').setScale(2).refreshBody()


        this.player = this.physics.add.sprite(1920, 0, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);


        this.goal.create(1920*.05, 1080*.85,'goal').refreshBody()

        this.movingPlatform1 = this.physics.add.image(1920*.9, 1080*.25, 'plat').setScale(0.75)

        this.movingPlatform1.setImmovable(true);
        this.movingPlatform1.body.allowGravity = false;
        this.movingPlatform1.setVelocityX(-100);

        this.movingPlatform2 = this.physics.add.image(1920*.1, 1080*.5, 'plat').setScale(0.75)

        this.movingPlatform2.setImmovable(true);
        this.movingPlatform2.body.allowGravity = false;
        this.movingPlatform2.setVelocityX(100);

        this.platforms.create(1920 * .18, 1080*.75, 'plat').setScale(.75).refreshBody()

        //this.platforms.create(1920 * .1, 1080*.75, 'plat').setScale(0.5).refreshBody()


        //physics stuff
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.goal, this.next3, null, this);
        this.physics.add.collider(this.player, this.movingPlatform1);
        this.physics.add.collider(this.player, this.movingPlatform2);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    next3(player,goal){
        this.scene.start('final');
    }

    update(){
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-320);

            //this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(320);

            //this.player.anims.play('right', true);
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-500);
        }
    }
}

class lvl2 extends Phaser.Scene{
    constructor(){
        super('lvl2');
    }
    player;
    cursors;
    platforms;
    goal;
    create(){
        //this.add.text(1920 *.5, 1080 *.5,"lvl2");
        //this.input.on('pointerdown', () => this.scene.start('lvl2'));

        this.platforms = this.physics.add.staticGroup();
        this.goal = this.physics.add.staticGroup();

        //platforms
        this.platforms.create(1920*.5, 1080 *1.05, 'plat').setScale(2).refreshBody()

        this.platforms.create(1920 * .9, 1080*.25, 'plat').setScale(0.5).refreshBody()

        this.platforms.create(1920 * .1, 1080*.35, 'plat').setScale(0.5).refreshBody()

        this.platforms.create(1920 * .5, 1080*.65, 'plat').setScale(0.5).refreshBody()

        //Goal
        this.goal.create(1920*.1, 1080*.25,'goal').refreshBody()

        //player
        this.player = this.physics.add.sprite(1920, 0, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);


        //physics stuff
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.goal, this.next2, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    next2(player,goal){
        this.scene.start('tween2');
    }
    
    update(){
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-320);

            //this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(320);

            //this.player.anims.play('right', true);
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-500);
        }
    }
}
class tween1 extends Phaser.Scene {
    
    constructor(){
        super('tween1');
    }

    create(){
        let circle = this.add.image(1920 *.51, 1080 *.5, 'player').setScale(1.5)
        this.add.text(1920 *.5, 1080 *.5,"lvl2");
        this.add.text(1920 *.47, 1080 *.6,"click to continue");
        this.input.on('pointerdown', () => this.scene.start('lvl2'));
    }
}

class tween2 extends Phaser.Scene {
    
    constructor(){
        super('tween2');
    }

    create(){
        let circle = this.add.image(1920 *.51, 1080 *.5, 'player').setScale(1.5)
        //this.add.thing(1920 *.5, 1080 *.5,"player")
        this.add.text(1920 *.5, 1080 *.5,"lvl3");
        this.add.text(1920 *.47, 1080 *.6,"click to continue");
        this.input.on('pointerdown', () => this.scene.start('lvl3'));
    }
}

class lvl1 extends Phaser.Scene {
    //keySpace;
    player;
    cursors;
    platforms;
    goal;
    constructor(){
        super('lvl1');
        //this.rope;
    }
    create(){
        //var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //physics
        //this.matter.world.setBounds();
        //Player
        //let player = this.add.circle(1920/2,1080/2,50,0xFF0000);
        
        //player.setCollisionCategory(playerThing);
        //player.setOnCollideWith(ceil, )

        this.platforms = this.physics.add.staticGroup();
        this.goal = this.physics.add.staticGroup();
        //Ceiling
        this.platforms.create(1920* .5, 1080 * 0, 'plat').setScale(2).refreshBody()

        this.goal.create(1920*.85, 1080*.9,'goal').refreshBody()

        //floor 
        this.platforms.create(1920* .25, 1080 , 'plat').setScale(1.75).refreshBody()

        //player
        this.player = this.physics.add.sprite(100, 450, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        

        //this.input.once('keydown-A', () =>
        //{
         //   console.log("test");
          //  this.rope.destroy();

        //});

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.goal, this.next1, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    next1(player,goal){
        this.scene.start('tween1');
    }
    update(){
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-320);

            //this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(320);

            //this.player.anims.play('right', true);
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-500);
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
        this.load.path = './assets/';
        this.load.image('plat', 'platform.png');
        this.load.image('player', 'player.png');
        this.load.image('goal', 'goal.png');
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
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 300 }
        }
    },
    scene: [intro,lvl1, tween1, lvl2, tween2, lvl3, final],
    title: "D1",
});

