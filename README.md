# Personal-Blog Website

A simple single-user personal blog website that allows the owner to post regular blogs, edit them, delete them, and view them in a nice interactive website. The project includes a simple backend to add, delete, view, and edit posts.

## Features
Create Blog Posts:The owner can create and publish new blog posts. Each post includes a title, subtitle and content.

Edit and Update Posts:The owner has the ability to edit existing blog posts and update their content.

Delete Posts: The owner can delete unwanted blog posts from the website.

View Blog Posts: The website provides a user-friendly interface for visitors to view all published blog posts. Visitors can read the full content of each post and view the featured image.

## Installation
  ### Backend
    -Change directory to the backend folder: cd api
    -Install dependencies: yarn install
    -Start the backend server: yarn dev
  ### Frontend
    -Change directory to the frontend folder: cd frontend
    -Install dependencies: yarn install
    -Start the frontend development server: yarn dev

## Technologies Used
 ### Frontend
  HTML, CSS, JavaScript, Vite 
  ### Backend
  Node.js, Express , MongoDB 




# API Documentation
The blog project's backend API provides the following endpoints:<br/>

 GET /api/posts:  Retrieve all blog posts.<br/>
 GET /api/posts/:id :  Retrieve a specific blog post by ID .<br/>
 POST /api/posts: Create a new blog post. <br/>
 PUT /api/posts/:id : Update an existing blog post by ID . Requires a JSON body with title, content, and featuredImage fields.<br/>
 DELETE /api/posts/:id : Delete a blog post by ID .<br/>

## Limitations
  **-No Authentication System:**  Currently, the website only has single-user authentication system, which means that only the owner can access and interact with the site. Other users cannot create accounts or log in to        view the content. This limitation restricts the website's audience to the owner alone.<br/>
  
  **-Testing Limitation:**  While efforts were made to include testing for the project using Jest, Vite's limitations prevented the full integration of the testing framework. As a result, the test coverage may be limited, and  the application has not be adequately tested.<br/>
  
  **Filtering, Searching, and Categorization:** The website was designed with features for filtering, searching, and categorizing blog posts to enhance user experience and content organization. However, these features have not been fully implemented at the moment. <br/>
  
  **-Static Featured Images:** Currently, the featured images for blog posts are static and not dynamically generated. This limitation means that each blog post's featured image is hardcoded or fixed and cannot be changed or customized by the owner when creating or editing a post. <br/>



## Contact
For any inquiries or questions regarding this project, you can contact via email at luniva121@gmail.com.

# Screenshots<br/>

![homepage (2)](https://github.com/zeph11/Personal-Blog/assets/67690169/9a58c0ed-ad81-4ecb-994f-6cd134f719ff)
![blogpage (1)](https://github.com/zeph11/Personal-Blog/assets/67690169/56655a96-4be3-47c2-ab37-0cf3f7d24b1b)
![blogs (1)](https://github.com/zeph11/Personal-Blog/assets/67690169/1b6dff20-6635-4539-a643-85b7cef48d38)
