import { Controller } from 'react-hook-form';
import { Radio } from '~/components/molecules';

/**
 * RHFで管理されたラジオボタン
 */
export const RRadio: React.FC<Radio> = ({ name, checked, label, onChange }) => (
  <Controller
    name={name}
    render={({ field: { name, value } }) => (
      <Radio
        name={name}
        checked={checked}
        label={label}
        value={value}
        onChange={onChange}
      />
    )}
  />
);
