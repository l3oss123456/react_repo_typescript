import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { SeriesProps } from "../interfaces/SeriesProps";

interface Props {
  seriesList: SeriesProps["seriesList"];
  setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>;
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {
  const [seriesInfo, setSeriesInfo] = useState({
    name: "",
    genre: "",
    cover: "",
    imdb: 0,
    seasons: 0,
  });

  const setSeriesInfoHandler = (
    dataType: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSeriesInfo({ ...seriesInfo, [dataType]: event.target.value });
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      !seriesInfo.name ||
      !seriesInfo.genre ||
      !seriesInfo.cover ||
      !seriesInfo.imdb ||
      !seriesInfo.seasons
    ) {
      alert(`Please enter series info!`);
      return;
    }

    setSeriesList([...seriesList, seriesInfo]);
    setSeriesInfo({ name: "", genre: "", cover: "", imdb: 0, seasons: 0 });
  };

  return (
    <div>
      <h1>Form</h1>
      <div className="form-container">
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type={`text`}
            name={`name`}
            value={seriesInfo.name}
            onChange={(e) => setSeriesInfoHandler(`name`, e)}
          />
        </div>

        <div className="form-div">
          <label htmlFor="name">Genre</label>
          <input
            type={`text`}
            name={`name`}
            value={seriesInfo.genre}
            onChange={(e) => setSeriesInfoHandler(`genre`, e)}
          />
        </div>

        <div className="form-div">
          <label htmlFor="name">Image Cover Link</label>
          <input
            type={`text`}
            name={`name`}
            value={seriesInfo.cover}
            onChange={(e) => setSeriesInfoHandler(`cover`, e)}
          />
        </div>

        <div className="form-div">
          <label htmlFor="name">Imdb</label>
          <input
            type={`number`}
            min={0}
            name={`name`}
            value={seriesInfo.imdb}
            onChange={(e) => setSeriesInfoHandler(`imdb`, e)}
          />
        </div>

        <div className="form-div">
          <label htmlFor="name">Seasons</label>
          <input
            type={`number`}
            min={0}
            name={`name`}
            value={seriesInfo.seasons}
            onChange={(e) => setSeriesInfoHandler(`seasons`, e)}
          />
        </div>

        <button type={`button`} onClick={handleClick}>
          Add Series
        </button>
      </div>
    </div>
  );
};

export default Form;
