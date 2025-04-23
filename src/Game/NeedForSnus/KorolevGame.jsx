import "../../Stylings/pages/Game.css";
import Phaser from 'phaser';
import {useGameHook} from "../Hook/useGameHook";

import sky from '../assets/sky.png';
import platform from '../assets/NeedForSnus/platform.png';
import star from '../assets/NeedForSnus/star.png';
import dude from '../assets/NeedForSnus/dude.png';
import angular from "../assets/NeedForSnus/enemy.png";

const SCREEN_HEIGHT = 600;
const SCREEN_WIDTH = 800;

export const KorolevGame = () => {

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
        };

        function preload() {
            this.load.image('sky', sky);
            this.load.image('ground', platform);
            this.load.image('star', star);
            this.load.spritesheet('dude',
                dude,
                {frameWidth: 45, frameHeight: 68}
            );
            this.load.spritesheet('enemy', angular, {frameWidth: 32, frameHeight: 32});
        }

        var platforms;
        var player;
        var stars;
        var enemies;
        var score = 0;
        var scoreText;
        var gameOver = false;

        function create() {
            this.add.image(400, 300, 'sky');

            platforms = this.physics.add.staticGroup();
            platforms.create(400, 568, 'ground').setScale(2).refreshBody();
            platforms.create(600, 400, 'ground');
            platforms.create(50, 250, 'ground');
            platforms.create(750, 220, 'ground');

            player = this.physics.add.sprite(100, 450, 'dude');
            player.setBounce(0.1);
            player.setCollideWorldBounds(true);

            enemies = this.physics.add.group();
            this.physics.add.collider(enemies, platforms);
            this.physics.add.collider(player, enemies, hit, null, this);


            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn',
                frames: [{key: 'dude', frame: 4}],
                frameRate: 20
            });

            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
                frameRate: 10,
                repeat: -1
            });

            this.physics.add.collider(player, platforms);

            this.anims.create({
                key: 'enemy_move',
                frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 1 }),
                frameRate: 5,
                repeat: -1
            });


            stars = this.physics.add.group({
                key: 'star',
                repeat: 11,
                setXY: {x: 12, y: 0, stepX: 70}
            });

            stars.children.iterate(function (child) {
                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            });
            createNewEnemy.call(this, player);


            this.physics.add.collider(stars, platforms);
            this.physics.add.overlap(player, stars, collectStar, null, this);

            function collectStar(player, star) {
                star.disableBody(true, true);

                score += 10;
                scoreText.setText('Score: ' + score);

                if (stars.countActive(true) === 0) {
                    stars.children.iterate(function (child) {
                        child.enableBody(true, child.x, 0, true, true);
                    });

                    createNewEnemy.call(this, player);
                }
            }

            scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '16px', fill: '#000'});
        }

    function createNewEnemy(player) {
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var enemy = enemies.create(x, 16, 'enemy');
        enemy.anims.play('enemy_move', true);
        enemy.setBounce(0.9);
        enemy.setCollideWorldBounds(true);
        enemy.setVelocity(Phaser.Math.Between(-500, 500), 20);
        enemy.setDrag(0);
        enemy.setFriction(0);
    }


    function hit(player, enemy) {
            if (!gameOver) {
                if (player.y+32 < enemy.y) {
                    enemy.disableBody(true, true);
                    score += 50;
                } else {
                    gameOver = true;
                    this.physics.pause();
                    player.setTint(0xff0000);
                    player.anims.play('turn');
                    scoreText.setText('Game Over! Score: ' + score);
                }
            }
        }

        function update() {
            if (gameOver) {
                return;
            }
            var cursors = this.input.keyboard.createCursorKeys();
            if (cursors.left.isDown) {
                player.setVelocityX(-160);
                player.anims.play('left', true);
            } else if (cursors.right.isDown) {
                player.setVelocityX(160);
                player.anims.play('right', true);
            } else {
                player.setVelocityX(0);
                player.anims.play('turn');
            }

            if (cursors.up.isDown && player.body.touching.down) {
                player.setVelocityY(-330);
            }

            enemies.children.iterate(function (enemy) {
                if (enemy) {
                    if (enemy.x <= 0 || enemy.x >= SCREEN_WIDTH) {
                        const speed = Math.abs(enemy.body.velocity.x);
                        enemy.setVelocityX(enemy.body.velocity.x > 0 ? -speed : speed);
                    }
                }
            });
        }

        useGameHook(conf);

        return (
            <div className="game">
                <div id="game-window" width={SCREEN_WIDTH} height={SCREEN_HEIGHT} className="game-window"/>
                <div className="game-ui">

                </div>
            </div>
        );
    }
;
