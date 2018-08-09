import actionConstant  from '../../constants/actionConstant';
import fetch from "isomorphic-fetch";


export function updateClasses(input) {
  return dispatch =>

    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/admin/classes/${input.id}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": input.id,
        "name": input.name,

      }),
    })
    .catch(error => { console.log('request failed', error); });
}


export function startingEditing(id){
  return {
    type: actionConstant.STARTING_EDITING,
    id
  }
}

export function finishEditing(){
  return {
    type: actionConstant.FINISH_EDITING
  }
}

export function changeTheStateOfTheModal(){
  return {
    type: actionConstant.CHANGE_THE_STATE_OF_THE_MODAL
  }
}