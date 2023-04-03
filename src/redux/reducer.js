import { ADD_ITEM, DELETE_ITEM } from "./actions";

const initialState = {
  diaryItems: [],
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let id = 1;
      if (state.diaryItems.length > 0) {
        id = state.diaryItems[0].id + 1;
      }
      let item = {
        id: id,
        title: action.payload.title,
        date: action.payload.date,
        text: action.payload.text,
      };
      let newDiaryItems = [item, ...state.diaryItems];
      newDiaryItems = newDiaryItems.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return {
        ...state,
        diaryItems: newDiaryItems,
      };

    case DELETE_ITEM:
      let deleteItem = state.diaryItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        diaryItems: deleteItem,
      };
     
      // case EDIT_ITEM:
      //   let editItem = state.diaryItems
      //   editItem[action.payload].isEditing = true
      //   return {
      //     ...state,
      //     diaryItems: editItem,
      //   };
    default:
      return state;
  }
};

export default diaryReducer;
