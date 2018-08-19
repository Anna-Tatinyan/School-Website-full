import React from 'react';
import { connect } from 'react-redux';
import {  updateCourses, getCourses, getClasses, getTeachers  } from '../../../actions/';

import CoursesForm from '../components/CoursesForm'


class EditCoursesContainer extends React.Component {
  componentDidMount() {
    this.props.getClasses();
    this.props.getTeachers();
    this.props.getCourses();
  }
  render() {let objectToEdit = {};
    for(let i = 0; i<this.props.coursesArray.length; i++){
          if(this.props.coursesArray[i].id == this.props.match.params.id){
           objectToEdit = this.props.coursesArray[i]
          }
    }
    return (
      <CoursesForm  onSubmit = {this.props.updateCourses} coursesArray = {this.props.coursesArray} objectToEdit = {objectToEdit} id = {this.props.match.params.id}/>

    )
  }
}
function mapStateToProps(state) {

    return {
      coursesArray: state.getCoursesArray.coursesArray,
    };
}

export default connect(mapStateToProps, { getClasses, getTeachers, updateCourses, getCourses})(EditCoursesContainer);