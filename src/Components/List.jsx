import React, { FC } from "react";
import { SeriesProps } from "../Interfaces/SeriesProps";
import "./List.css";

const List: FC<SeriesProps> = ({ seriesList }) => {
  return (
    <div className="series-list">
      {seriesList.map((series, idx) => {
        return (
          <div key={idx}>
            <img src={series.cover} alt={`Series-${series.name}`} />
            <p>
              <b>{series.name}</b>
            </p>
            <p>{series.genre}</p>
            <p>{series.seasons}</p>
            <p>{series.imdb}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
