
const nameComponent = (
<div id ="out">
        <h2 id = "name_comp">Aakash Joshi</h2>
</div>
);

const pictureComponent = (
    <div id = "picture_out">
        <img id = "picture_comp" src = "./assignment_1.png"/>
    </div>
);

const introComponent = (
    <div id= "intro_out">
        <p id = "intro_comp">
        I am a Computer Science graduate Student at San Diego State University with extensive education in software design and development, experienced in
                  automated software developement in Tata Consultancy Services. Fluent in English with excellent communication and interpersonal skills.
				  A fast learner with strong time management and problem-solving skills. The idea behind taking this course is, 
				  my undergrad has laid a foundation in web technology fundamentals and now it's the interest to dwell deeper into the concepts has made me choose this course.
			      I believe I have a decent knowledge in web concepts and by the end of this course I could get expertise in the MERN.
        </p>
    </div>
            
);

const buttonComponent = (
    <div id= "button_out">
        <a href="https://github.com/aakash2028"><button id= "button_comp">VIEW MY GITHUB REPO</button></a>
    </div>

);

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));