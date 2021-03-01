import React, {ChangeEvent, useCallback} from "react";
import {Slider, withStyles} from "@material-ui/core";

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number[]) => void;
  rangeValues: number | number[]
  // min, max, step, disable, ...
};

const DoubleSlider = withStyles({
  root: {
    width: 150,
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: "red",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 6,
    backgroundColor: '#0075ff',
    borderRadius: "4px"
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 6,
    borderRadius: "4px"
  },
})(Slider);

function valuetext(value: number) {
  return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = React.memo(({
  onChangeRange,
  rangeValues,
}) => {

  const handleChange = useCallback((event: ChangeEvent<{}>, value: any) => {
    onChangeRange && onChangeRange(value);
  }, [onChangeRange]);

  return (
    <>
      <div >
        <DoubleSlider
          value={rangeValues}
          onChange={handleChange}
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>

    </>
  );
});

export default SuperDoubleRange;
