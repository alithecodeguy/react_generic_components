//types
import { Base, GenericSelectProps } from "./types";

const GenericSelect = <TValue extends Base>({
  values,
  onChange,
}: GenericSelectProps<TValue>) => {
  const onSelectChange = (e: any) => {
    const val = values.find((value) => value.id === e.target.value);

    if (val) onChange(val);
  };

  return (
    <select onChange={onSelectChange}>
      {values.map((value) => (
        <option key={value.id} value={value.id}>
          {value.title}
        </option>
      ))}
    </select>
  );
};

export default GenericSelect;
