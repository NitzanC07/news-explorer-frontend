import profilePicture from '../../images/nitzan.jpg';

function About(props) {

    return(
        <section className="about">
            <img className="about__image" src={profilePicture} alt="Author profile pic"/>

            <div className="about__description">
                <h2 className="about__title">Nitzan Cohen</h2>
                <p className="about__text">
                    Hello, I am Nitzan, I built this SPA (Single Page Application) as my final project of Full Stack Web Development course in Practicum program by Yandex and Masterschool.
                </p>
                <p className="about__text">
                    I used in this project with some technologies tools which I learned in the course. Firstly, the purpose of this website is to give the users to search news articles from the whole internet, and registered users can save articles for later reading.
                </p>
                <p className="about__text">
                    On the technical side, I built this website with HTML and CSS according to design from Figma. I used with React.js to build the framework and JSX to create the functionality of all the features on the website.
                </p>
                <p className="about__text">
                    I'm working with NewsApi to search articles from anothers websites. I built a server with Express.js that keep the registered users and their saved articles, with database that I created with MongoDB. And I deployed all of that to Linux Virtual Machine on Google Cloud.
                </p>
            </div>
        </section>
    )
}

export default About;