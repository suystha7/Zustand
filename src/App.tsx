import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";

export default function App() {
  const { address } = useStore(
    useShallow((state) => ({
      address: state.address,
    }))
  );
  return <>{address}</>;
}
