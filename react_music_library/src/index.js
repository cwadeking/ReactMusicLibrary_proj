import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Request from 'axios-react';
import Table from '/Users/charl/Desktop/TerbiumNightClass/ReactMusicLibrary/react_music_library/src/table';

const Music = () => (
  <Request
  config ={{
    method:'get',
    url:'www.devcodecampmusiclibrary.com/api/music',
  }}
  >
    {({loading, response, error, refetch, networkStatus}) => (
      <Table/>
    )}
  </Request>
)

ReactDOM.render(
  <Table />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
