# Final Project - Practicum by Yandex
Date: August 4, 2022\
Student: Nitzan Cohen\
Course: Web Development, Practicum by Yandex

## About the project
I did the project as part of the final project of Practicum's web development course. As part of this project and the course in general, I learned to use a variety of technological tools for website development. Here is the client side (Front End) part of the project. I used with HTML and CSS at this section of designing and building the website. I built it with React.js and I connected this section to two servers, one is the source of articles NewsApi, and other is server that I was created for saving users and articles.\
For building the server I used with JavaScript, I used with Node.js and Express.js. I created database using MongoDB to save all the details about registered users and thier saves articles. Of course all of this work made on Git and GitHub, and every section created with a different branch.

### Live app's demo
Click on the image to see the demo of the project.<br />
<a href="https://www.youtube.com/watch?v=-rEoFPwmu08" target="_blank"><img src="./src/images/ScreenshotProject.png" alt="cover" width="500"></a>

## Technologies in this project
### Front End:
* React.js
* JSX
* CSS
### Back End:
* Node.js
* Express.js
* MongoDB

### Git branches:
* stage-1 - All about building the server with Node.js and Express.js.
* stage-2 - All about building the markup and styles with React and CSS.
* stage-3 - All about functionality and authentication.

### API
* An API for saving users authentication and saving thier articles. [Back End repository](https://github.com/NitzanC07/news-explorer-api)
* An API powered by NewsApi for fetch articles by specific keyword. [NewsApi](https://newsapi.org/)

## How to running the project localy
Firstly, you need to to clone this repository and the back end repository to your local machine.\
```
git clone https://github.com/NitzanC07/news-explorer-frontend.git
git clone https://github.com/NitzanC07/news-explorer-api.git
```
Then you need to running both of them on your local machine.\
The server side is running on port 4000, and the client side is running on port 3000.\
Change directory to the back end, run the the server on your machine.
```
cd ./news-explorer-api
npm run dev
```
And then you can run the front end part of this project. First, make sure that you are in the front end directory.
```
cd .\news-explorer-frontend\
npm start
```
