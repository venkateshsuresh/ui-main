import React, {useEffect} from "react";
import ExperimentGridList from "../components/ExperimentGridList";
import Router from "next/router";

export default function Home() {

  useEffect(() => {
    Router.push("/experiments");
  }, []);

  return (
    <React.Fragment />
  )
}
