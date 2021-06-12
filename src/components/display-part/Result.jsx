import React from 'react'
import CenteredTabs from './NavBar'

const Result = (props) => {
     const { city, setCity, data, setData } = props;
    return (
      <div className="result">
        <CenteredTabs
          city={city}
          setCity={setCity}
          data={data}
          setData={setData}
        />
      </div>
    );
}

export default Result
