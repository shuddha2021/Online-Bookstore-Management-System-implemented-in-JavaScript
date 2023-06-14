// Book class representing a book with title, author, and price
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

// Bookstore class for managing books
class Bookstore {
  constructor() {
    this.books = []; // Array to store books
  }

  // Method to add a book to the bookstore
  addBook(book) {
    this.books.push(book); // Add the book to the books array
    console.log(`Book "${book.title}" added successfully!`);
  }

  // Method to remove a book from the bookstore
  removeBook(title) {
    const index = this.findBookIndex(title); // Find the index of the book in the books array
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0]; // Remove the book from the books array
      console.log(`Book "${removedBook.title}" removed successfully!`);
    } else {
      console.log(`Book "${title}" not found in the bookstore.`);
    }
  }

  // Method to display all the books in the bookstore
  displayBooks() {
    if (this.books.length === 0) {
      console.log("No books available in the bookstore.");
    } else {
      console.log("Available Books:");
      this.books.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} ($${book.price})`);
      });
    }
  }

  // Method to search for a book by title
  searchBook(title) {
    const index = this.findBookIndex(title); // Find the index of the book in the books array
    if (index !== -1) {
      const foundBook = this.books[index]; // Get the book from the books array
      console.log(`Book found: ${foundBook.title} by ${foundBook.author} ($${foundBook.price})`);
    } else {
      console.log(`Book "${title}" not found in the bookstore.`);
    }
  }

  // Method to find the index of a book in the books array
  findBookIndex(title) {
    return this.books.findIndex((book) => book.title.toLowerCase() === title.toLowerCase());
  }
}

// Example usage

const bookstore = new Bookstore(); // Create a new Bookstore instance

// Add books
const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", 39.99);
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", 29.99);
const book3 = new Book("JavaScript: The Definitive Guide", "David Flanagan", 49.99);

bookstore.addBook(book1); // Add book1 to the bookstore
bookstore.addBook(book2); // Add book2 to the bookstore
bookstore.addBook(book3); // Add book3 to the bookstore

console.log();

// Display available books
bookstore.displayBooks();

console.log();

// Search for a book
bookstore.searchBook("eloquent javascript");

console.log();

// Remove a book
bookstore.removeBook("JavaScript: The Good Parts");

console.log();

// Display available books again
bookstore.displayBooks();
