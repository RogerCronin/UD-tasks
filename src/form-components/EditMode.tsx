import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [isEditModeActive, setIsEditModeActive] = useState<boolean>(false);

    const [nameInput, setNameInput] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            {isEditModeActive ? (
                <div>
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                        ></Form.Control>
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Is this person a student?"
                            checked={isStudent}
                            onChange={(e) => setIsStudent(e.target.checked)}
                        ></Form.Check>
                    </Form.Group>
                </div>
            ) : (
                <div>
                    <p>
                        {nameInput} is {isStudent ? "" : "not "} a student
                    </p>
                </div>
            )}
            <Form.Check
                type="switch"
                id="is-edit-mode-active"
                label="Edit mode"
                checked={isEditModeActive}
                onChange={(e) => setIsEditModeActive(e.target.checked)}
            ></Form.Check>
        </div>
    );
}
