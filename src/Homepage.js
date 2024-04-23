import React from "react"
import './Company.css'

function Homepage() {
    return (
        <div id=''>
            <div className="header navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <h1 className="schoolname">Sacred Heart Higher Secondary School, Anilady</h1>
            </div>
            <div class="navigate">
                <ul class="d-flex justify-content-between">
                    <li><a className="arefer" href="/company"> Admission</a></li>
                    <li><a className="arefer" href="/Susai"> Fees</a></li>
                    <li><a className="arefer" href="/Susai"> Exam</a></li>
                    <li><a className="arefer" href="/Susai"> Staff</a></li>
                    <li><a className="arefer" href="/Susai"> Management</a></li>
                </ul>
            </div>
            <div id='myDivtwo' className="heightpic">
                            

            </div>

        </div>

    )
}
export default Homepage;

