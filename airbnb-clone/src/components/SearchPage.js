import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 August to 30 August . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexiblity</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://tchelete.com/wp-content/uploads/2023/06/airbnb-hero--1024x683.jpg"
        location="Private room in Roodeport"
        title="Stay at this peaceful space"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={5}
        price="R1500 / night"
        total="R2800 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/9517200f-b4fb-4203-b1c2-90ddf913c675.jpg?im_w=1440"
        location="Private room in Sandton"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.3}
        price="R200 / night"
        total="R800 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-36880518/original/75f493f4-912a-45bf-b881-7cc533c4ada9.jpeg?im_w=720"
        location="Private room in Capetown"
        title="Stay at this luxurious Candy House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.90}
        price="R700 / night"
        total="R1800 total"
      />
    </div>
  );
};

export default SearchPage;
