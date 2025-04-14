import Phaser from 'phaser';

export class PauseScene extends Phaser.Scene {
    SCREEN_WIDTH;
    SCREEN_HEIGHT;

    constructor(w, h) {
        super({ key: 'ScenePause' });
        this.SCREEN_WIDTH = w;
        this.SCREEN_HEIGHT = h
    }

    create() {
        this.add.text(this.SCREEN_WIDTH / 2 - 100, this.SCREEN_HEIGHT / 2 - 100, 'PAUSE', { font: "48px Arial", fill: "#ffffff" });

        // Кнопка для продолжения игры
        this.resumeButton = this.add.text(this.SCREEN_WIDTH / 2 - 70, this.SCREEN_HEIGHT / 2 + 20, 'Resume', { font: "24px Arial", fill: "#00ff00" })
            .setInteractive()
            .on('pointerdown', () => this.resumeGame());
    }

    resumeGame() {
        // Возвращаемся к основной сцене
        this.scene.stop();
        this.scene.resume('SceneMain');
    }
}
