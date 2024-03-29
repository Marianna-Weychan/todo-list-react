import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone, setAllDone,
    selectAreTaskEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
} from "../../tasksSlice";
import { Wrapper } from "./styled";
import StyledButton from "../Button";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <Wrapper>
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