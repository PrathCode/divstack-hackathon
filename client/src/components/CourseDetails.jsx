import React from 'react';

function CourseDetails() {
    return (
        <div class="courseMainDiv">
            <div class="courseDiv1">
                <h2>Courses Offered</h2>
                <h6>Some of the courses offered for full stack web devlopment...</h6>

                <div class="indiCourse">
                    <div class="row" style={{margin: '0'}}>
                        <div class="col-lg-4 photoSection" style={{backgroundColor: '#ffa089'}}>
                            <img src="./images/html (1).png" />
                        </div>
                        <div class="col-lg-8 descriptionSection">
                            <h4>Html 5</h4>
                            <p>Course Duration: 10+ hours</p>
                            <p>This course is for both beginners and seasoned developers that want to learn how to build responsive websites and user interfaces with modern HTML5 </p>
                        </div>
                    </div>
                </div>

                <div class="indiCourse">
                    <div class="row" style={{margin: '0'}}>
                        <div class="col-lg-4 photoSection" style={{backgroundColor: '#87cefa'}}>
                            <img src="./images/css-3.png" />
                        </div>
                        <div class="col-lg-8 descriptionSection">
                            <h4>Html 5</h4>
                            <p>Course Duration: 10+ hours</p>
                            <p>This course is for both beginners and seasoned developers that want to learn how to build responsive websites and user interfaces with modern HTML5 </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CourseDetails;