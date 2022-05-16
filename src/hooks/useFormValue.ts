import { ChangeEvent, useState } from "react";

type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type Return = [string, (event: Event) => void];

/**
 * InputのvalueとonChangeを生成
 *
 * ## 使い方
 *
 * ```tsx
 * const [state, onChange] = useFormValue();
 *
 * <Input value={state} onChange={onChange}>
 * ```
 *
 */
export const useFormValue = (): Return => {
  const [state, setState] = useState("");

  const onChange = (event: Event) => {
    const value = event.target.value;
    setState(value);
  };

  return [state, onChange];
};
