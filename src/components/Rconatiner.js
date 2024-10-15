import two from "../assets/images/c1.jpg"
import three from "../assets/images/c2.jpg"
import four from "../assets/images/c3.jpg"
import five from "../assets/images/c4.jpg"
function Rcontainer() {
    return (
        <div>
            <div class="recommand">
                <h1 class="recommand__tittle">Reccomand For You</h1>
                <p>pick the best fit</p>
            </div>

            <div class="recommand-container">
                <div class="course-card">
                    <img src={two} alt="section-image"></img>
                    <h3>2023 Python Data Visulaization Master Class </h3>
                    <p>col steel</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>

                <div class="course-card">
                    <img src={three} alt="section-image"></img>
                    <h3>2023 Python Data Visulaization Master Class </h3>
                    <p>col steel</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449<del>999</del></p>
                </div>

                <div class="course-card">
                    <img src={four} alt="section-image"></img>
                    <h3>2023 SQL Data Visulaization Master Class </h3>
                    <p>col steel</p>
                    <p>4.9⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>

                <div class="course-card">
                    <img src={five} alt="section-image"></img>
                    <h3>2023 Python Data Visulaization Master Class </h3>
                    <p>col steel</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449<del>999</del></p>
                </div>
            </div>

</div>
            )
}
            export default Rcontainer