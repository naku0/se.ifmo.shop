import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
    SCREEN_WIDTH;
    SCREEN_HEIGHT;
    constructor(w, h) {
        super({ key: 'SceneMain' });
        this.SCREEN_WIDTH = w;
        this.SCREEN_HEIGHT = h;
    }

    preload() {
        // Загрузка всех нужных ресурсов
    }

    create() {
        this.add.text(100, 100, "Game Running", { font: "32px Arial", fill: "#ffffff" });

        // Создаем кнопку паузы
        this.pauseButton = this.add.text(this.SCREEN_WIDTH - 150, 20, 'Pause', { font: "24px Arial", fill: "#ff0000" })
            .setInteractive()
            .on('pointerdown', () => this.togglePause());

        // Добавляем обработчик для пробела
        this.input.keyboard.on('keydown-SPACE', () => this.togglePause());
    }

    update(time, delta) {
        // Если сцена на паузе, не обновляем игру
        if (this.scene.isPaused()) {
            this.add.text(this.SCREEN_WIDTH / 2 - 100, this.SCREEN_HEIGHT / 2, "PAUSE", { font: "48px Arial", fill: "#ffffff" });
            return;
        }

        // Логика для обновления игры, если игра не на паузе
    }

    togglePause() {
        // Если сцена на паузе, возобновляем её, иначе ставим на паузу
        if (this.scene.isPaused()) {
            this.scene.resume();
        } else {
            this.scene.pause();
        }
    }
}
