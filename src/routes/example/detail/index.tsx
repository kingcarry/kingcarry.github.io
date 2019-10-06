import React, { FunctionComponent, useCallback } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { ExampleButton } from "components/example/button";
import { deleteOne } from "models/example/actions";

interface Params {
    id: string,
}

export const ExampleDetailRoute: FunctionComponent = () => {
    const { id } = useParams<Params>()
    const dispatch = useDispatch()
    const history = useHistory()
    const onDelete = useCallback(
        () => {
            dispatch(deleteOne(parseInt(id)))
            history.goBack()
        },
        [id, dispatch, history],
    )

    return (
        <div>
            <ExampleButton text={`删除${id}`} onPress={onDelete} />
        </div>
    )
}