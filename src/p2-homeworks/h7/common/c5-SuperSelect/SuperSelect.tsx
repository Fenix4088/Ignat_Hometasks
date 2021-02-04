import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {v1} from "uuid";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<string>;
  onChangeOption?: (option: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: theme.spacing(2),
      minWidth: 120,
    },
    select: {
      "&:after": {
        borderBottom: "2px solid green",
      },
    },
  })
);

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: Array<JSX.Element> = options
    ? options.map((o, i) => (
        <MenuItem key={i} value={o}>
          {o}
        </MenuItem>
      ))
    : [];

  const onChangeCallback = (e: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = e.target;
    onChangeOption && onChangeOption(value as string);
  };

  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">XYZ</InputLabel>
        <Select
          className={classes.select}
          labelId="demo-simple-select-label"
          id={v1()}
          value={restProps.value}
          onChange={onChangeCallback}
        >
          {mappedOptions}
        </Select>
      </FormControl>
    </div>
  );
};

export default SuperSelect;
