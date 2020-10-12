import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import RecruitJSON from "../data/recruit";
import { ga } from "../init-firebase";
export default function Recruit() {
  useEffect(() => {
    ga.logEvent(`EventName : user visits Home Page`);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Main data={RecruitJSON} />
    </React.Fragment>
  );
}
