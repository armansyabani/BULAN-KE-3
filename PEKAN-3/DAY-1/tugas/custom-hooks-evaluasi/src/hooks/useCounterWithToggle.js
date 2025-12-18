import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle() {
  const counter = useCounter();
  const [visible, toggle] = useToggle(true);

  return { ...counter, visible, toggle };
}
