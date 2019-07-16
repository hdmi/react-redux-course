// Action creator
export const selectSong = (song) => {
  // Action
  return {
    type: 'SELECT_SONG',
    payload: {
      song
    }
  };
};
