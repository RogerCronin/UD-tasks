import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMultipleChoiceQuestion">
                <Form.Label>Answer</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                >
                    {options.map((o) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
