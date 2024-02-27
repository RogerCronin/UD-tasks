import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attemptCount, setAttemptCount] = useState<number>(4);
    const [isQuizInProgress, setIsQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttemptCount(attemptCount - 1);
        setIsQuizInProgress(true);
    }

    function stopQuiz(): void {
        setIsQuizInProgress(false);
    }

    function incrementAttemptCount(): void {
        setAttemptCount(attemptCount + 1);
    }

    return (
        <div>
            <Button
                disabled={isQuizInProgress || attemptCount === 0}
                onClick={() => startQuiz()}
            >
                Start Quiz
            </Button>
            <Button disabled={!isQuizInProgress} onClick={() => stopQuiz()}>
                Stop Quiz
            </Button>
            <Button
                disabled={isQuizInProgress}
                onClick={() => incrementAttemptCount()}
            >
                Mulligan
            </Button>
            <p>attemptCount: {attemptCount}</p>
            <p>isQuizInProgress: {isQuizInProgress ? "true" : "false"}</p>
        </div>
    );
}
