# FinFit

<img src="https://github.com/user-attachments/assets/6c2801c8-3d7a-4c32-a61e-e67f043ed4d9" alt="Logo" width="600" height="500">

A simple web application to track your daily financial transactions. This project allows you to keep track of your income and expenses with an easy-to-use interface. All data is stored locally in your browser using local storage.

## Features

- **Login System**: Users can log in with their email and password to access their financial data. The login data is stored locally.
- **Transaction History**: Add, view, and delete financial transactions (income/expenses). The transaction history is stored locally in the browser and is persistent across sessions.
- **Income and Expense Tracking**: Automatically calculates total income, total expenses, and balance.
- **Responsive Design**: The layout is designed to work on various screen sizes.

## Getting Started

### Prerequisites

- A modern web browser (Google Chrome, Mozilla Firefox, Safari, etc.)
- Basic understanding of HTML, CSS, and JavaScript.

### Installing

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/finance-tracker.git
    ```
2. Open `index.html` in your preferred browser to use the app.

### File Structure

- `index.html`: The main page where users can view and manage their transactions.
- `login.html`: A separate login page where users log in to access their data.
- `login.js`: Handles the login logic, including storing email and password in local storage.
- `style.css`: Contains the main styling for the web application.
- `login.css`: Contains specific styles for the login page.
- `index.js`: Main JavaScript file to handle transaction addition, deletion, and data display.

## Usage

1. **Login**: Navigate to the login page (`login.html`) and enter your email and password. The email and password are stored in local storage.
2. **Add Transaction**: After logging in, you can add transactions by filling in the description and the amount. Positive amounts are treated as income, and negative amounts are treated as expenses.
3. **View Balance**: Your total income, expenses, and current balance are automatically calculated and displayed.
4. **Delete Transactions**: You can delete any transaction from the list. The balance and totals are updated accordingly.

## Local Storage Information

- **Email**: Stored when the user logs in.
- **Password**: Stored when the user logs in.
- **Transaction History**: Stored as a JSON array in local storage under the key `history`. It persists until manually deleted by the user or cleared via the browser.

## Known Issues

- Currently, there is no option to log out once the user is signed in.
- The login page does not have password validation or encryption for storage, making it less secure.

## Future Improvements

- Add encryption for storing passwords.
- Add a log-out button.
- Implement real user authentication using a backend server.


