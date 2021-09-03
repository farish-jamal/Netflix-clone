import React from "react";
import './Banner.css'
function Banner() {
  function truncate(string, n){
      return string?.length > n ? string.substr(0, n-1) + '---' : string
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">
            <i className="fa fa-play" aria-hidden="true"></i>Play
          </button>
          <button className="banner__button">
            <i className="fa fa-plus" aria-hidden="true"></i>My List
          </button>
        </div>
        <h1 className="banner__description">{truncate("ewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusd ewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusdewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusdewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusdewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusdewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusdewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusdewygyuewc hdvsdsv  gdgd dgyudgudyguydsgyusd", 150)}{" "}</h1>
      </div>
        <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
