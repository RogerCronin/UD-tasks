import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [colors] = useState<string[]>(COLORS);
    const [color, setColor] = useState<string>("white");

    function changeColor(e: React.ChangeEvent<HTMLInputElement>) {
        setColor(e.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <p>
                The selected color is{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color
                    }}
                >
                    {color}
                </span>
            </p>
            {colors.map((c) => (
                <div
                    key={c}
                    style={{
                        backgroundColor: c
                    }}
                >
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={changeColor}
                        id={`colors-${c}`}
                        label={c}
                        value={c}
                        checked={color === c}
                    ></Form.Check>
                </div>
            ))}
        </div>
    );
}
