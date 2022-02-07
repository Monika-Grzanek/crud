//selectors
export const getAllCategories = state => state.categories;
export const getCategoryById = ({categories}, idCat) => categories.find(category => category.idCat === idCat);

// actions
//const createActionName = actionName => `app/categories/${actionName}`;

// action creators

const categoriesReducer =(statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;