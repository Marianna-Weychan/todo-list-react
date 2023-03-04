import Input from "../../Input";
import searchQueryParamName from "../../TasksPage/searchQueryParamName";
import { useQueryPatrameter, useReplaceQueryParameter } from "../../TaskPage/queryParameters";
import { Wrapper } from "./styled";

export default () => {
    const query = useQueryPatrameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };
    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};