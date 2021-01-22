import React, { SelectHTMLAttributes, DetailedHTMLProps } from "react";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<string>;
  onChangeOption?: (option: string) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: Array<JSX.Element> = options
    ? options.map((o, i) => <option key={i}>{o}</option>)
    : [];

  const onChangeCallback = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { value } = e.currentTarget;
    onChangeOption && onChangeOption(value as string);
  };

  return (
    <select onChange={onChangeCallback} value={restProps.value} {...restProps}>
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
