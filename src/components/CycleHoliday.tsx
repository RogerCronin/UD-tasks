import React, { useState } from "react";
import { Button } from "react-bootstrap";

type HolidayEmoji = "🌳" | "🎂" | "🎃" | "🦃" | "🎅";

export function CycleHoliday(): JSX.Element {
    // I wanted to use a switch statement but eslint is like "no I don't want to"
    function nextHolidayAlphabetically(current: HolidayEmoji): HolidayEmoji {
        if (current === "🌳") return "🎂";
        else if (current === "🎂") return "🎅";
        else if (current === "🎅") return "🎃";
        else if (current === "🎃") return "🦃";
        else return "🌳";
    }

    function nextHolidayChronologically(current: HolidayEmoji): HolidayEmoji {
        if (current === "🌳") return "🎂";
        else if (current === "🎂") return "🎃";
        else if (current === "🎃") return "🦃";
        else if (current === "🦃") return "🎅";
        else return "🌳";
    }

    const [currentEmoji, setCurrentEmoji] = useState<HolidayEmoji>("🌳");

    return (
        <div>
            <Button
                onClick={() =>
                    setCurrentEmoji(nextHolidayAlphabetically(currentEmoji))
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() =>
                    setCurrentEmoji(nextHolidayChronologically(currentEmoji))
                }
            >
                Advance by Year
            </Button>
            <p>Holiday: {currentEmoji}</p>
        </div>
    );
}
