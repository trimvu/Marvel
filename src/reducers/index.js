
import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer'
import charactersResultsReducer from './charactersResultsReducer';
import comicReducer from './comicReducer';
import comicResultsReducer from './comicResultsReducer';
import creatorsReducer from './creatorsReducer';
import creatorsResultsReducer from './creatorsResultsReducer';
import eventsReducer from './eventsReducer';
import eventsResultsReducer from './eventsResultsReducer';
import favoriteReducer from './favoriteReducer';
import seriesReducer from './seriesReducer';
import seriesResultsReducer from './seriesResultsReducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
    charactersResults: charactersResultsReducer,
    comic: comicReducer,
    comicResults: comicResultsReducer,
    creators: creatorsReducer,
    creatorsResults: creatorsResultsReducer,
    events: eventsReducer,
    eventsResults: eventsResultsReducer,
    series: seriesReducer,
    seriesResults: seriesResultsReducer,
    favorite: favoriteReducer
})

export default rootReducer