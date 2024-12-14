import { useEffect, useState } from "react";

function useCustom() {
  const [count, setCount] = useState("");
  useEffect(() => {
    setCount(
      "hello change make in this components will be added in that section",
    );
  }, []);
  return count;
}

export default useCustom;
