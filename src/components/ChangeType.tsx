import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function switchQuestionType(): void {
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={() => switchQuestionType()}>Change Type</Button>
            <p>
                {questionType === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
        </div>
    );
}