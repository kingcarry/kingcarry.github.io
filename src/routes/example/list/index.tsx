import React, { FunctionComponent } from "react";
import { ExampleButton } from "components/example/button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { AppState } from "models";
import { ExampleState } from "models/example/types";

export const ExampleListRoute: FunctionComponent = () => {
    const history = useHistory()
    const { list } = useSelector<AppState, ExampleState>(_state => _state.example)

    return (
        <div>
            {
                list.map(item => <ExampleButton key={item.id} text={item.text} onPress={() => history.push(`/example/detail/${item.id}`)} />)
            }
        </div>
    )
}
