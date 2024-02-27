import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer (try &quot;42&quot;):</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
