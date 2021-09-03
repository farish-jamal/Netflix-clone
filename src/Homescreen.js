import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";

function Homescreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGNALS" />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Comedy Movie" />
      <Row title="Horror Movies" />
      <Row title="NRomance Movie" />
      <Row title="Documentries" />
    </div>
  );
}

export default Homescreen;
