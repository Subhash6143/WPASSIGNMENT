function showHome(){
document.getElementById("content").innerHTML =
"<h2>Welcome to SkillUp Learning Platform</h2>" +

"<p>Welcome to the E-Learning Platform, a place where students can develop new skills and expand their knowledge through high-quality online courses. Our platform provides a variety of learning programs designed to help learners understand important concepts in technology and programming. With guidance from experienced instructors, students can learn at their own pace and gain practical knowledge through structured lessons and activities. We aim to make education accessible, flexible, and engaging for everyone who wants to improve their skills.</p>" +

"<h4>Watch the video below</h4>" +

"<video class='promo' width='350' controls>" +
"<source src='images/introductionvideo.mp4' type='video/mp4'>" +
"</video>";
}


function showcourses(){
document.getElementById("content").innerHTML =
"<h2>Available Courses</h2>" +

"<table border='1'>" +

"<tr>" +
"<th>Course</th>" +
"<th>Platform</th>" +
"<th>Instructor</th>" +
"<th>Price</th>" +
"<th>Register</th>" +
"</tr>" +

"<tr>" +
"<td>Web Development</td>" +
"<td>freeCodeCamp</td>" +
"<td>Quincy Larson</td>" +
"<td>Free</td>" +
"<td><a href='https://www.freecodecamp.org' target='_blank'>Register</a></td>" +
"</tr>" +

"<tr>" +
"<td>Python Programming</td>" +
"<td>Coursera</td>" +
"<td>Dr. Charles Severance</td>" +
"<td>Free</td>" +
"<td><a href='https://www.coursera.org' target='_blank'>Register</a></td>" +
"</tr>" +

"<tr>" +
"<td>Chemical engineering and thermodynamics</td>" +
"<td>NPTEL</td>" +
"<td>Prof. Sasidhar Gumma</td>" +
"<td>Free</td>" +
"<td><a href='http://onlinecourses.nptel.ac.in/noc26_ch38/preview' target='_blank'>Register</a></td>" +
"</tr>" +
"<tr>" +

"<td>Complete AI enigineer bootcamp</td>" +
"<td>Udemy</td>" +
"<td>365 Careers</td>" +
"<td>569/-</td>" +
"<td><a href='https://www.udemy.com/course/the-ai-engineer-course-complete-ai-engineer-bootcamp/' target='_blank'>Register</a></td>" +
"</tr>"
"</table>";
}

function showcalendar(){
document.getElementById("content").innerHTML =
"<h2>Course Calendar</h2>" +

"<ul>" +
"<li>Web Development - Starts June 10</li>" +
"<li>Python Programming - Starts June 15</li>" +
"<li>Java Programming - Starts June 20</li>" +
"<li>Data Structures - Starts June 25</li>" +
"</ul>";
}


function showabout(){
document.getElementById("content").innerHTML =
"<h2>About Us</h2>" +

"<p>SkillUp Learning Platform is designed to provide students with high-quality online education. Our mission is to help learners gain practical knowledge and develop professional skills through structured courses and expert guidance.</p>" +

"<p>We believe that education should be accessible to everyone. Our platform connects learners with courses from top educational platforms and helps them grow their careers.</p>";
}
window.onload = showHome;
