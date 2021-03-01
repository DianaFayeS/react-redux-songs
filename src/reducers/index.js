import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Always', duration: '4:05' },
        { title: 'Rocket man', duration: '3.10'},
        { title: 'Desert rose', duration: '3:15'},
        { title: 'New york', duration: '4:15'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});