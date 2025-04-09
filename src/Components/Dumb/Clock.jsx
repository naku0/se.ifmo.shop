import {useEffect, useState} from "react";

export const Clock = () => {
    const [time, setTime] = useState('');

    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = formatNumber(now.getHours());
            const minutes = formatNumber(now.getMinutes());
            setTime(`${hours}:${minutes}`);
        }

        updateClock();
        const intervalId = setInterval(updateClock, 1000 * 60);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <h1>{time}</h1>
        </div>
    )
}