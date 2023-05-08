import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  setDestPath: (destpath: string) => void;
}

export default function Douglas({ setDestPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setDestPath(location.pathname);
  }, [location]);
  return <></>;
}
