
import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer'
import comicReducer from './comicReducer';
import eventsReducer from './eventsReducer';
import seriesReducer from './seriesReducer';
import storiesReducer from './storiesReducers';

const rootReducer = combineReducers({
    characters: charactersReducer,
    comic: comicReducer,
    events: eventsReducer,
    series: seriesReducer,
    stories: storiesReducer
})

export default rootReducer