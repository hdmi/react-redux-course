import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
  console.log('songdetal', props)
  return (
    <div>SongDetail: </div>
  );
}


const mapStateToProps = state => {
  return  {song: state.selectedSongReducer}
}

export default connect(mapStateToProps)(SongDetail);
