// ----------------------------USER------------------------------------
export const addUserToLocalStorage = (user) =>{
    localStorage.setItem('user',JSON.stringify(user));
};

export const removeUserFromLocalStorage = () =>{
    localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () =>{
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
}
// ----------------------------BOOK------------------------------------
export const addBookToLocalStorage = (book) =>{
    localStorage.setItem('book',JSON.stringify(book));
};

export const removeBookFromLocalStorage = () =>{
    localStorage.removeItem('book');
};

export const getBookFromLocalStorage = () =>{
    const result = localStorage.getItem('book');
    const book = result ? JSON.parse(result) : null;
    return book;
}
// ----------------------------ISSUE------------------------------------
