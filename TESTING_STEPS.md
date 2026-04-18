# Testing Steps for State Management Application

## Table of Contents  
1. [Context API Authentication Tests](#context-api-authentication-tests)  
2. [Redux Products Slice Tests](#redux-products-slice-tests)  
3. [Combined Role-Based Features Tests](#combined-role-based-features-tests)  

---  

## Context API Authentication Tests

### Step 1: Setup
- Ensure the application is running locally.
- Clear browser cookies and local storage for a clean test environment.

### Step 2: Test Successful Login
- Navigate to the login page.
- Enter valid credentials (e.g., username: `test_user`, password: `securepassword`).
- Click the login button and verify that the user is redirected to the home page.
- Check for an authentication token in the local storage.

### Step 3: Test Invalid Login
- Navigate to the login page.
- Enter invalid credentials (e.g., username: `wrong_user`, password: `wrongpassword`).
- Click the login button and verify that an error message appears.

### Step 4: Test Logout
- Log in with valid credentials as described in Step 2.
- Click the logout button and verify that the user is redirected to the login page.
- Check that the authentication token is removed from local storage.

---  

## Redux Products Slice Tests

### Step 1: Setup
- Ensure the application is running locally and the Redux DevTools are installed.

### Step 2: Test Fetch Products
- Navigate to the products page.
- Verify that the products are fetched from the API and displayed correctly.

### Step 3: Test Add Product
- Click on the button to add a new product.
- Fill in the product details (e.g., name, price, description).
- Submit the form and verify that the new product appears in the product list.

### Step 4: Test Update Product
- Find an existing product in the list and click on the edit button.
- Modify the product details and submit the changes.
- Verify that the updated details are reflected in the product list.

### Step 5: Test Delete Product
- Locate a product in the list and click on the delete button.
- Confirm the deletion and verify that the product is removed from the list.

---  

## Combined Role-Based Features Tests

### Step 1: Setup
- Ensure that multiple user roles are available (e.g., admin, user).

### Step 2: Test Admin Access
- Log in as an admin user.
- Verify access to admin-specific features (e.g., user management, product management).

### Step 3: Test User Access
- Log in as a regular user.
- Verify that the user cannot access admin-specific features and is redirected to the appropriate sections.

### Step 4: Test Role-Based Redirection
- Log in as both roles and verify that the correct home page is displayed based on the role.

### Step 5: Test Role Changes
- Change a user’s role in the backend.
- Log in with that user and verify the access rights match the new role.

---  

## Conclusion
Following these steps will help to ensure the state management application functions correctly, both in terms of authentication and product handling, as well as respecting user roles.