import React, { Component } from 'react';
import {connect, dispatch} from 'react-redux';
import {fetchCourses} from '../actions' 
class CourseLibrary extends Component {
    constructor(props) {
        super(props)
        this.renderCourse = this.renderCourse.bind(this);
    }
    componentDidMount(){
        this.props.fetchCourses();
    }
    renderCourse(course) {
        return (
        <li key={course.id} className="course">
            <div className="course_info">
                <div className="course_title-container">
                    <div className="course_title">{course.title}</div>
                </div>
            </div>
        </li>
        )
    }
    render() {
        return (
            <div>
                <ul>
                    {/* {alert(JSON.stringify(this.props.fetchCourses()))} */}
                    {this.props.courses.map(this.renderCourse)}
                </ul>
           </div>
        )
    }
}
function mapStateToProps(state){
    console.log(`state: ${JSON.stringify(state.courses)}`)
   // this.props = state;
    return {courses: state.courses}
}

function mapDispatchToProps(dispatch){
  return{  
        fetchCourses:()=>{
            dispatch(fetchCourses())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseLibrary);