

# Leasing Application Documentation

1. This project is a single-page application (SPA) built with React. It serves as a frontend interface for a car marketplace, allowing users to view, add, edit, and purchase car listings. It utilizes custom hooks for form handling and API requests, and React Context for global state management (User and Car Data).

2.  Core Application Logic & Hooks
These directories contain reusable logic that underpins the application's functionality, separating concerns from the UI.

2.1 client/src/components/context
Handles global state management using the React Context API.

 * UserContext.jsx: Manages the authentication state (user token, user ID, email) across the application. Provides functions for login and logout.

 * CarDataContext.jsx: (Likely) Provides global state and methods for managing the car listings (e.g., fetching the initial collection, updating lists after an addition/deletion).

2.2 client/src/components/hooks
Contains custom React Hooks to encapsulate and reuse common functionalities.

* useForm.js: A custom hook responsible for managing form state. It handles input changes, aggregates form values, and manages the form submission action,  often including the critical e.preventDefault() logic.

* useRequest.js: A custom hook responsible for abstracting API calls. It handles common tasks like setting request headers (especially the authorization token), JSON parsing, and basic error handling.

3.3 client/src/components/guards
Contains components used for route protection based on user roles or authentication status.

* AdminGuard.jsx: A Higher-Order Component (HOC) or functional component that checks if the logged-in user has administrator privileges. It only renders its children if the admin check passes; otherwise, it redirects the user (e.g., to the login page or a 404 page).

3.4. Constants (client/src/components/constrants)
constrants.js: A central repository for application-wide fixed values. It's used to store Admin emails.

4 .Module,Component,Type,Purpose & Key Features

* collection,Collection.jsx => Page,The main vehicle listing view. Fetches the full collection of cars and maps the data to render individual <Car> components.

* details,Details.jsx, => Page,"Renders the single car view (/cars/:carId). Fetches detailed data, displays the large image, and conditionally renders action buttons (Edit, Delete, Buy) based on authentication and ownership/role."

* buyCar,BuyCar.jsx, => Page,Handles the final car purchase flow. Fetches and renders the selected car's details and contains the Lease Calculator logic (using useForm for dynamic calculations).

* addCar,AddCar.jsx, => Form,Component for authenticated users (Admin) to create a new listing. Uses the useForm hook for input handling and a POST request to the API.

* editCar,EditCar.jsx, => Form,Component for Admin/Owner to modify an existing listing. Uses useForm for pre-filling with current data and handles the PUT request.

* login,Login.jsx, => Form,Handles user authentication. Form logic is managed by useForm; success updates UserContext.

* register,Register.jsx, => Form,Handles user account creation. Uses useForm and typically logs the user in upon successful registration.

* logout,Logout.jsx, => Route/Handler,Triggers immediate session termination. Calls the logout function provided by UserContext and redirects to a public page.

5.  UI Building Blocks
These are structural and presentation components used for layout and repetition.

Module,    Component,    Purpose & Key Features
car,       Car.jsx,      Card
header,    Header.jsx,   Layout
footer,    Footer.jsx,   Layout
hero,      Hero.jsx,     Section
feature,   Feature.jsx,  Display
contact,   Contact.jsx,  Page/Section