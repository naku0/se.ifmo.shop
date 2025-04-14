import {useEffect, useRef} from "react";
import Phaser from 'phaser';

export const useGameHook = (config) => {
    const gameRef = useRef(null);

    useEffect(() => {
        gameRef.current = new Phaser.Game(config);

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
            }
        };
    }, [config]);
    return gameRef;
}