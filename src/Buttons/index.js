import React from "react";
import { StyledButtons, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <StyledButton onClick={toggleHideDone}>
                    {hideDone ? "Pokaż " : "Ukryj "} ukończone
                </StyledButton>
                <StyledButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </StyledButton>
            </>
        )}
    </StyledButtons>
);

export default Buttons;