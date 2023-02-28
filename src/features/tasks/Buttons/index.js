import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone, setAllDone,
    selectAreTaskEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    fetchExampleTasks,
} from "../tasksSlice";
import { Wrapper, StyledButton } from "./styled";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </StyledButton>
            {!areTaskEmpty && (
                <>
                    <StyledButton onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż " : "Ukryj "} ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;