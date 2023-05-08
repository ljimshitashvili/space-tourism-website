import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  setCrewPath: (destpath: string) => void;
}

export default function Douglas({ setCrewPath }: Props) {
  const location = useLocation();
  useEffect(() => {
    setCrewPath(location.pathname);
  }, [location]);
  return <></>;
}
