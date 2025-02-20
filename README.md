# Product Management App

A simple web-based application for managing products with features like creation, editing, deletion, filtering, and local storage persistence. This app helps users manage product data dynamically and efficiently.

## Features

- Create new products with fields like Name, Price, Category, ID, Taxes, Ads, Discounts, and Count.
- View all products in a table with columns for Name, Price, Category, ID, Taxes, Ads, Discounts, Price After Discount, Total, and Actions.
- Edit product details using a modal popup.
- Delete individual products or all products at once (password-protected).
- Filter products by Name or Category dynamically as you type.
- Persist product data across sessions using localStorage.
- Automatically calculate the total price for each product using the formula:
  ```
  Total = Price - Taxes - Ads + Discounts
  ```

## Installation

1. Clone the repository or download the HTML file:
   ```sh
   git clone https://github.com/ZEROKU-ZZ/WebSite.git
   ```
2. Open the `index.html` file in your preferred browser:
   ```sh
   open index.html
   ```

No additional dependencies are required. The app runs entirely in the browser.

## Usage

### Creating a Product
1. Fill out the form fields:
   - Name, Price, Category, and ID are required.
   - Taxes, Ads, and Discounts are optional (default value is 0).
   - Count allows creating multiple products with unique IDs (default value is 1).
2. Click the "Create Product" button to add the product(s) to the table.

### Editing a Product
1. Click the "Edit" button next to the product you want to modify.
2. Update the product details in the modal popup.
3. Click "Save Changes" to apply the changes.

### Deleting a Product
1. Click the "Delete" button next to the product you want to remove.
2. Enter the password: `ZAKARIA` to confirm deletion.

### Deleting All Products
1. Click the "Delete All Products" button.
2. Enter the password: `ZAKARIA` to confirm deletion of all products.

### Searching for Products
1. Use the search bar at the top of the page.
2. Type a product's Name or Category to filter the table dynamically.

## Password Protection

To ensure data security, certain actions require a password:
- **Deleting a Product**: Enter the password `ZAKARIA` to delete a product.
- **Deleting All Products**: Enter the password `ZAKARIA` to clear all products from the table.

If the password is incorrect, the action will be canceled, and an alert will notify you.

## Contributing

Contributions are welcome! If you'd like to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add YourFeatureName"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Please ensure your code adheres to best practices and includes proper documentation.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Inspired by the need for a simple product management tool.
- Built with HTML, CSS, and JavaScript for a lightweight and responsive experience.

Feel free to use and modify this project as needed. If you encounter any issues or have suggestions, please open an issue in the repository.

Happy coding! 🚀
