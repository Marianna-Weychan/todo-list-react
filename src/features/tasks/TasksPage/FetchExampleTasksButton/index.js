import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import StyledButton from "../Button";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <StyledButton
            disabled={loading}
            onClick={() => dispatch(fetchExampleTasks())}
        >
            {
                loading ? "Chwileczkę... trwa ładowanie..." : "Pobierz przykładowe zadania"
            }
        </StyledButton>
    );
};