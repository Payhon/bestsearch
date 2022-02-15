import { combineReducers } from 'redux';
import * as actions from '../actions/types';
import { decodeKeyword } from '../../util';

const initialState = {
  isLoading: false,
  keyword: '',
  productTrends: [],
  message: '',
};

const searchReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case actions.KEYWORD_INPUT:
      return {
        ...state,
        keyword: action.payload.keyword,
      }
    case actions.KEYWORD_FORMAT:
      return {
        ...state,
        keyword: decodeKeyword(action.payload.keyword),
      }
    case actions.KEYWORD_CLEAR:
        return {
          ...state,
          keyword: '',
        }
    case actions.TRENDS_SEARCH_START:
      return {
        ...state,
        isLoading: true,
        productTrends: [],
        message: '',
      }
    case actions.TRENDS_SEARCH_FETCH:
      return {
        ...state,
        isLoading: false,
        productTrends: action.payload.data,
      }
    case actions.TRENDS_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        productTrends: [],
        message: action.payload.message,
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  searchReducer,
})

export { reducers }
