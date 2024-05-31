const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

//Destructuring
//To get an element out of an array or an object
const book = getBook(3);

// const title = book.title;
// const author = book.author;

//author;
//title;
//console.log(author, title);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book; // Object destructuring

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
//console.log(primaryGenre, secondaryGenre);


// ---------Using destructuring for arrays-----------------------
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);


//Rest_Operator & Spread_Operator

//Rest Operator

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//Spread Operator

const newGenres = [genres, "epic fantasy"];
newGenres;
//using spread operator
const newGenres1 = ["epic fantasy", ...genres];
newGenres1;

//Using spread operator on objects

const updatedBook = {
  ...book,
  moviePublicationdate: "2001-12-19", //Adding a new property
  pages: 1210, //overwriting an original property
};
updatedBook;

//Template Literals

const summary = ` ${title} , ${pages}-page long book was written by ${author} and publishedin ${
  publicationDate.split("-")[0]
} , The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie `;
summary;

// Ternaries instead of if/else

const pageRange = pages > 1000 ? "Over a thousand" : "Under a thousand";
pageRange;
console.log(`The book has ${pageRange} pages`);

//Arrow functions

//---> Mainly used as a one liner function
//  old way

function getYear(str) {
  return str.split("-")[0];
}

console.log(getYear(publicationDate));

//Using arrow function

const getYear1 = (str) => str.split("-")[0]; // We can also use function block , then we need the return keyword

console.log(getYear1(publicationDate));

//Short_Circuting

console.log(true && "Some string"); // No short circuting
console.log(false && "Some string"); // short circuting{immediatetly return the first value a it sees the boolean vlue false}

console.log(hasMovieAdaptation && " This book has a movie");

//falsy - values: 0,'',null,undefined
console.log("jonas" && "Some string");
console.log(0 && "some string");

//OR operator

console.log(true || "Some string"); // As soon as it sees true its out put it true
console.log(false || "some string");

// example of short circuting

const spanishTranslation = book.translations.spanish || "Not translated";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong; // May out put bug , here still a data that is 0


//Nullish Coaeshing Operator ( operator Symbol ?? )

const count = book.reviews.librarything.reviewsCount ?? "no-data";
count;


//------------------------Optional Chaining----

// The below function shows us the use of both optional chaining and nulish coaelshing operator together
//Optional chaining gievs us the flexiblity to avoid errors.

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

*/

//Array Map Method => will loop through an array and return a new array with the same length with some operation applied to each of the elemenst of the original array

//Note : Here ievery map method expects a callback function{arrow function that is inside the map}
const books = getBooks();
books;
/*
const x = [1, 2, 3, 5, 6, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

//How to output/return data in the form of objects from map method

//1st way

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

essentialData;

//2nd Way {wrapping object to be returned by a parantesis}
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const essentialData1 = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData1;

*/
// Array filter Method

/*
const longBooks = books.filter((book) => book.pages > 500);
longBooks;

//chianing filters --> we can chain flters beacuse each filters outputs an arrays

const longBooks1 = books.filter(
  (book) => book.pages > 500 && book.hasMovieAdaptation
);
// .filter((book) => book.hasMovieAdaptation);
longBooks1;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//Array .reduce() method {Mehod that rules them all}

//It is used to boilit down the entire array

const pagesOfAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // Here 0 is the starter value
pagesOfAllBooks;

// acc or accumulator is the current value of the final value that we want to boil the array down to

//The initial value in a reduce method can be an array,object or anything these things increases the usecase of reduce()

//Sort Method

const arr = [3, 8, 6, 5, 7, 28]; // sort will mutate the array
const sorted = arr.sort((a, b) => a - b);
sorted;
arr;

// Sorting objects based on number of pages
const sortedBypages = books.slice().sort((a, b) => b.pages - a.pages);
sortedBypages;

//Working with immutable Arrays

// 1).Add book object to an array

const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of the Secrets",
  author: "J.K rowling",
};

const booksAfterAddition = [...books, newBook]; // Spreding all the books adding our new book
booksAfterAddition;

//2) Delete a book from the array

const booksAfterDelete = booksAfterAddition.filter((book) => book.id !== 3); // filter added all objects other that the one with id===3
booksAfterDelete;

//3) Update a book object in the Array{very Important}

const booksAfterUpdate = booksAfterDelete.map(
  (book) => (book.id === 2102 ? { ...book, pages: 1 } : book) // overwriting the original property
);
booksAfterUpdate;


*/
//Asynchronous Javscript : Promises
/*
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log(`Adwaith`);
*/
//Asynchrounous JavaScript : Async Await

//Doing promises in cleaner way

async function getTodos() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`); // A way of stoping the code , inside a function
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos); // it will only return a promise beacuse , it does not have a way of knowing what todos is while , beacuse its till is fetching

console.log(`Adwaith`);
