import { useEffect } from "react";
import { classroomAddressInfoLoader } from "./classroomAddressInfoLoader";

function CampusNavigation() {
  useEffect(() => {
    console.log("UseEFFECT");
    classroomAddressInfoLoader();
  }, []);
  return <div>CampusNavigation</div>;
}

export default CampusNavigation;
