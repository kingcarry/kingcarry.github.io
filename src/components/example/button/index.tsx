import React, { FunctionComponent } from "react";
import S from './ExampleButton.module.scss';

interface Props {
    text: string,
    onPress?: () => void,
}

export const ExampleButton: FunctionComponent<Props> = ({ onPress, text }) => {
    return (
        <div className={S.container} onClick={onPress}>
            {text}
        </div>
    )
}