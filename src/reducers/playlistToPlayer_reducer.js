import Redux from 'redux';

import { PLAYLIST_TO_PLAYER} from '../actions';

export default  function(state ="",action){

    switch(action.type){

      case PLAYLIST_TO_PLAYER:
        return action.payload;

    default:     
      return state;

    }

}