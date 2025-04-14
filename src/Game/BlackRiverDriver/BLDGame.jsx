import Phaser from 'phaser';
import { useState, useEffect, useRef } from 'react';
import { useGameHook } from "../Hook/useGameHook";
import { MainScene } from './Classes/MainScene';
import { PauseScene } from './Classes/PauseScene';
import "../../Stylings/pages/Game.css";

const SCREEN_HEIGHT = 600;
const SCREEN_WIDTH = 800;

export const BLDGame = () => {
    const [gameState, setGameState] = useState('playing');
    const gameInstance = useRef(null);  // Используем ref для хранения экземпляра игры

    const conf = {
        type: Phaser.AUTO,
        parent: 'game-window',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        scene: [MainScene, PauseScene],
    };

    useGameHook(conf);

    // Инициализируем Phaser игру только один раз
    useEffect(() => {
        if (!gameInstance.current) {
            const game = new Phaser.Game(conf);
            gameInstance.current = game;
        }

        return () => {
            if (gameInstance.current) {
                gameInstance.current.destroy(true); // Очистка игры при размонтировании
            }
        };
    }, []);

    // Обработчик нажатия пробела
    useEffect(() => {
        const spaceKeyListener = (event) => {
            if (gameState === 'playing') {
                setGameState('paused');
                // Останавливаем игру
                gameInstance.current.scene.getScene('SceneMain').togglePause();
            } else {
                setGameState('playing');
                // Возобновляем игру
                gameInstance.current.scene.getScene('SceneMain').togglePause();
            }
        };

        // Добавляем слушателя на пробел
        window.addEventListener('keydown', spaceKeyListener);

        // Убираем слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('keydown', spaceKeyListener);
        };
    }, [gameState]);

    return (
        <div className="game">
            <div id="game-window" width={SCREEN_WIDTH} height={SCREEN_HEIGHT} className="game-window" />
            <div className="game-ui">
                {/* Здесь может быть интерфейс, например, счет или кнопки */}
            </div>
        </div>
    );
}
