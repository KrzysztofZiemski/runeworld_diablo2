import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateSockets } from "../../../store/filters/actions";
import { SocketsSelector } from "../../../store/filters/selectors";
import { useIntl } from "react-intl";
import FilterCategoryTitle from "../FilterCategoryTitle";

const options = [0, 2, 3, 4, 5, 6];

export default function SocketFilter() {
  const intl = useIntl();
  const sockets = useSelector(SocketsSelector);
  const dispatch = useDispatch();

  const onChange = (e: SelectChangeEvent<number | null>) => {
    const value = Number(e.target.value);
    const payload = value;
    dispatch(updateSockets(payload));
  };

  const label = intl.formatMessage({
    id: "tableHeaders.numberSockets",
    defaultMessage: "Number Of Sockets",
  });

  return (
    <Grid>
      <FilterCategoryTitle title={label} />
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          id="sockets-filter"
          value={sockets}
          onChange={onChange}
          variant="outlined"
        >
          {options.map((el) => {
            const label =
              el ||
              intl.formatMessage({ id: "other.all", defaultMessage: "All" });
            return (
              <MenuItem key={el} value={el}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
}
