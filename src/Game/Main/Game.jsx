import "../../Stylings/pages/Game.css";
import Phaser from 'phaser'
import {useGameHook} from "../Hook/useGameHook";

import sky from '../assets/sky.png';
import platform from '../assets/NeedForSnus/platform.png';
import star from '../assets/NeedForSnus/star.png';
import bomb from '../assets/NeedForSnus/bomb.png';
import dude from '../assets/NeedForSnus/dude.png';

const SCREEN_HEIGHT = 600;
const SCREEN_WIDTH = 800;

export const Game = () => {

    const conf = {
        type: Phaser.AUTO,
        parent: 'game-window',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 300},
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    }



    function preload ()
    {
        this.load.image('sky', sky);
        this.load.image('ground', platform);
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.spritesheet('dude',
            dude,
            { frameWidth: 45, frameHeight: 68 }
        );
    }

    var platforms;
    var player;
    var stars;

    var score = 0;
    var scoreText;

    function create ()
    {
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(player, platforms);

        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.physics.add.collider(stars, platforms);
        this.physics.add.overlap(player, stars, collectStar, null, this);

        function collectStar (player, star)
        {
            star.disableBody(true, true);

            score += 10;
            scoreText.setText('Score:' + score);
        }

        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    }
    function update ()
    {
        var cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }

    useGameHook(conf);

    return (
        <div className="game">
            <div id="game-window" width={SCREEN_HEIGHT} height={SCREEN_WIDTH} className="game-window"/>
            <div className="game-ui">

            </div>
        </div>
    );
};
