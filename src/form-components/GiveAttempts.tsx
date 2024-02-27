import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptsInput, setAttemptsInput] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Gain more attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsInput}
                    onChange={(e) => setAttemptsInput(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button
                disabled={attempts <= 0}
                onClick={() => setAttempts(attempts - 1)}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttempts(attempts + (parseInt(attemptsInput) || 0))
                }
            >
                Gain
            </Button>
        </div>
    );
}
