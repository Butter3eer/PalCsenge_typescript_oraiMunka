import { Book } from './Book';

let books : Book[] = [];

for (let i = 0; i < 30; i++) {
  let ratingRandom = Math.floor(Math.random() * 10) + 1;
  books.push(new Book(`Book#${i.toString()}`, ratingRandom));
}

books.forEach(element => {
  console.log(element.name);
});

books.forEach(element => {
  if (element.rating > 7) {
    console.table(element);
  }
});

function bestof(books : Book[]) : Book[] {
  return books.filter(x => x.rating === Math.max(...books.map(y => y.rating)));
}

console.table(bestof(books));

console.log("---------------------------------------");

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById('bookForm')!.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = (document.getElementById('nameInput') as HTMLInputElement).value;
    const rating = parseInt((document.getElementById('ratingInput') as HTMLInputElement).value);

    books.push(new Book(name, rating));
    console.log(new Book(name, rating));
  });
}