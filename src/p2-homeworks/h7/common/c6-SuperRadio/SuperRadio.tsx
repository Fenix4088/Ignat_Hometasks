import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import {Radio} from "@material-ui/core";
import s from "../../HW7.module.scss"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
    color?: {}
}

const SuperRadio: React.FC<SuperRadioPropsType> = React.memo((
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        onChangeOption && onChangeOption(value);
    }

    const mappedOptions: Array<JSX.Element> = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <Radio
                className={s.radio}
                style={{color: "green"}}
                name={name}
                value={o}
                checked={value === o}
                onChange={onChangeCallback}
                size="small"
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
});

export default SuperRadio;
