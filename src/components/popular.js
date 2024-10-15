import two from "../assets/images/c1.jpg"
import three from "../assets/images/c2.jpg"
import four from "../assets/images/c3.jpg"
import five from "../assets/images/c4.jpg"
function Popular() {
    return (
      <div class="popular">
        <h1 class="popular__tittle">Most popular</h1>
        <p class="popular__subtittle">pick the best fit</p>
  
        <div class="popular__container">
          <div class="course-card">
            <img src={four} alt="courseimage"></img>
            <h3>2023 Python Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449 <del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={two} alt="courseimage"></img>
            <h3>2023 Python Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={two} alt="courseimage"></img>
            <h3>2023 SQL Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐</p>
            <p>449 <del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={three} alt="courseimage"></img>
            <h3>2023 Python Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={four} alt="courseimage"></img>
            <h3>2023 SQL Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐</p>
            <p>449 <del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={five} alt="courseimage"></img>
            <h3>2023 Python Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={four} alt="courseimage"></img>
            <h3>2023 SQL Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐</p>
            <p>449 <del>999</del></p>
          </div>
  
          <div class="course-card">
            <img src={five}alt="courseimage"></img>
            <h3>2023 Python Data Visulaization Master Class </h3>
            <p>col steel</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>999</del></p>
          </div>
        </div>
      </div>
    )
  }
  export default Popular