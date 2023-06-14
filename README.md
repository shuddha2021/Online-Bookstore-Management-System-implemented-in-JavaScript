# Online Bookstore Management System

The Online Bookstore Management System is a JavaScript project that allows users to manage books in a virtual bookstore. It provides functionalities for adding, removing, searching, and displaying books. This project serves as a simple demonstration of book inventory management.

## Features

- **Add Books**: Easily add new books to the bookstore inventory.
- **Remove Books**: Remove books from the bookstore inventory when they are no longer available.
- **Display Books**: View the list of books available in the bookstore.
- **Search Books**: Search for books by title, providing a convenient way to find specific books.

## Usage

To use the Online Bookstore Management System, follow these steps:

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Open the `index.html` file in a web browser.
4. Use the provided input fields and buttons to interact with the bookstore system.

## Sample Code

Here's an example of how to add a book to the bookstore inventory:

```javascript
const bookstore = new Bookstore();
const newBook = new Book("JavaScript Programming", "John Smith", 29.99);
bookstore.addBook(newBook);
