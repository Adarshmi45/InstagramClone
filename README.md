# Instagram Clone - README

This is a frontend project for an Instagram clone built using React. The project includes functionalities like user authentication, posting images, liking posts, and commenting on posts. The frontend communicates with a backend API for data management. The backend API is not included in this repository. Below are the steps to run the frontend project and an overview of its features.

## Setup Instructions

### 1. Clone the repository

git clone <repository_url>

### 2. Navigate to the project directory

cd instagram-clone-frontend


### 3. Install the required dependencies

npm install


### 4. Start the development server
npm start


### 5. Open the application
Visit http://localhost:3000 in your web browser to view the application.

## Features
### 1. Sign Up
Users can sign up by providing their name, email, username, and password.
Email validation is performed to ensure the user provides a valid email address.
Password validation is enforced to ensure it contains at least 8 characters, including at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.

### 2. Sign In
Users can sign in using their registered email and password.
If the provided credentials are correct, the user is authenticated and redirected to the homepage.

### 3. Homepage
The homepage displays posts created by all users.
Users can like posts by clicking on the heart icon, and the number of likes is updated in real-time.
Users can view all comments on a post by clicking on the "View all comments" link.
Users can add comments to a post and see them updated in real-time.

###4. Create Post
Authenticated users can create new posts by uploading an image and providing a caption.
The image is uploaded to the Cloudinary API for storage.
After creating a post, the user is redirected to the homepage, where the new post is displayed.

### 5. Profile
Users can view their own profile page, which displays their posts.
Users can click on other users profiles to view their posts.

### 6. Logout
Authenticated users can log out, which clears their authentication token and redirects them to the sign-in page.
Technologies Used
React.js: Frontend library for building user interfaces.
React Router: For handling navigation and routing within the application.
React Icons: To include popular icons for various UI elements.
React Toastify: For displaying toast notifications for various events.
Cloudinary API: For image storage and manipulation.
Axios: For making API requests to the backend server.

## Backend API
Please note that this frontend project requires a backend API for full functionality. The backend API handles user authentication, post creation, likes, comments, and other data management operations. The backend API is not included in this repository, and you will need to set up your own backend server or use an existing one to run this application successfully.

## Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please create a pull request or open an issue in the repository.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for checking out this Instagram clone frontend project! If you have any questions or need further assistance, please feel free to reach out to the project maintainers.