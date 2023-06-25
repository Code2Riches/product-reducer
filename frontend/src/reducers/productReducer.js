import { v4 as uuidv4 } from "uuid";
export default function productReducer(productState, action) {
  switch (action.type) {
    case "DELETE_PRODUCT":
      //let filderedArr = productState.filter(product=>(product.id !==action.id))
      //or
      let filteredArr = productState.filter((product) =>
        product.id === action.id ? false : true
      );
      return filteredArr;
    case "EDIT_PRODUCT":
      //modify the one object matching the id with the object action.data
      let productCopy = productState.map((product) =>
        product.id === action.data.id ? action.data : product
      );
      return productCopy;
    case "ADD_BLANK":
      //create new blank card
      let blankCard = {
        id: uuidv4(),
        title: "",
        publisher: "",
        genre: "",
        price: 0.0,
      };
      //add blank card to productState
      let newState = [blankCard, ...productState];
      return [blankCard, ...productState];
    case "ADD_API":
      //create new card from API
      let payload = {
        id: uuidv4(),
        title: "Doom",
        publisher: "Bethesda",
        studio: "1",
        genre: "FPS",
        price: 40,
      };
      let newCard = {
        id: uuidv4(),
        title: payload.title,
        publisher: payload.publisher,
        studio: payload.studio,
        genre: payload.genre,
        price: payload.price,
      };
      return [newCard, ...productState];
    case "ADD_PAYLOAD":
      //create new card from API

      let newLoad = action.payload.map((e, i) => {
        return {
          id: uuidv4(),
          title: e.gameTitle,
          publisher: e.publisherName,
          studio: e.gameStudio,
          genre: e.genre,
          price: e.MSRP,
        };
      });
      console.log(newLoad);
      return [...newLoad, ...productState];
    default:
      return productState;
  }
}