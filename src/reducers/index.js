
import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer'
import comicReducer from './comicReducer';
import creatorsReducer from './creatorsReducer';
import eventsReducer from './eventsReducer';
import seriesReducer from './seriesReducer';
import storiesReducer from './storiesReducers';

const rootReducer = combineReducers({
    characters: charactersReducer,
    comic: comicReducer,
    creators: creatorsReducer,
    events: eventsReducer,
    series: seriesReducer,
    stories: storiesReducer
})

export default rootReducer