export function selectBook(book) {
  // selectBook is an action creator! Return an action.
  // this is an object with a property type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
