import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import { listListing } from "../action/ListingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;
  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);
  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZpBgJ9dEXAvv0ofaG1xyAE9mNv-iGxGOvA&s"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
          price="R200/night"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHtTxDbsIvg1P75lz77r9uLgkMa-ivHOMSw&s"
          title="Unique stays"
          description="Spaces that are more than just a space to sleep."
          price="R800/night"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wIHWmE4Qh8xFdJHfK3pFST-Y8LhPylURcA&s"
          title="Entire home"
          description="Comfortable private places, with room for friends or family."
          price="R350/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZpBgJ9dEXAvv0ofaG1xyAE9mNv-iGxGOvA&s"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
          price="R2000/night"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHtTxDbsIvg1P75lz77r9uLgkMa-ivHOMSw&s"
          title="Unique stays"
          description="Spaces that are more than just a space to sleep."
          price="R2000/night"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wIHWmE4Qh8xFdJHfK3pFST-Y8LhPylURcA&s"
          title="Entire home"
          description="Comfortable private places, with room for friends or family."
          price="R1000/night"
        />
      </div> */}
    </div>
  );
};

export default Home;
