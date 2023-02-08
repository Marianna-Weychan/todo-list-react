import React from "react";
import { Wrapper, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Wrapper>
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
    </Wrapper>
);

export default Buttons;