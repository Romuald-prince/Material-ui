import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToBeEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        name={name}
        format="MM/dd/yyyy"
        value={value}
        onChange={(date) => onChange(convertToBeEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
