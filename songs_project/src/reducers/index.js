import {combineReducers} from 'redux';

const songReducer = () => {
  return [
    { title: 'La Macarena', duration: '3:45'},
    { title: 'Wonderwall', duration: '4:20'},
    { title: 'I Will Survive', duration: '2:55'},
    { title: 'All Star', duration: '4:05'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SELECT_SONG') {
    return action.payload;
  }

  return selectedSong;

};

export default combineReducers({
  songReducer,
  selectedSongReducer
});
