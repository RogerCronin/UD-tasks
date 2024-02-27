import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    function toggleIsRevealed(): void {
        setIsRevealed(!isRevealed);
    }

    return (
        <div>
            <Button onClick={() => toggleIsRevealed()}>Reveal Answer</Button>
            {isRevealed ? <p>The answer is 42.</p> : ""}
        </div>
    );
}
