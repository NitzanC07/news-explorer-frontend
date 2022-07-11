import profilePicture from '../../images/nitzan.jpg';

function About(props) {

    return(
        <section className="about">
            <img className="about__image" src={profilePicture} alt="Author profile pic"/>

            <div className="about__description">
                <h2 className="about__title">Nitzan Cohen</h2>
                <p className="about__text">
                    Hello, I am Nitzan and this is a website the I built as my final project of Full Stack Web Development course in Practicum program by Yandex and Masterschool.
                </p>
                <p className="about__text">
                    I added some important tools for my tool box, like HTML, CSS, JS, React, MongoDB and more. I really love to develop technology tools, and I have some ideas for personal projects.
                </p>
            </div>
        </section>
    )
}

export default About;