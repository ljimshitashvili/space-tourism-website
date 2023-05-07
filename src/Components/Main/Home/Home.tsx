import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  setPath: (path: string) => void;
}

export default function Destination({ setPath }: Props) {
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return <h1>Home</h1>;
}
