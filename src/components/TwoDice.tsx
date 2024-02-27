import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

type DieId = "left" | "right";

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    function rollDie(id: DieId): void {
        if (id === "left") setLeftDie(d6());
        else setRightDie(d6());
    }

    return (
        <div>
            <Button onClick={() => rollDie("left")}>Roll Left</Button>
            <Button onClick={() => rollDie("right")}>Roll Right</Button>

            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>

            <span>
                {leftDie === rightDie && leftDie !== 1 ? "You Win!" : ""}
                {leftDie === rightDie && leftDie === 1 ? "You Lose!" : ""}
            </span>
        </div>
    );
}