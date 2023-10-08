import React, { Component } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddStudent from './componets/AddStudent'
import EditStudent from './componets/EditStudent'
import ViewStudent from './componets/ViewStudent';
import Student from './componets/Student'

import Book from './componets/Book'
import AddBook from './componets/AddBook';
import EditBook from './componets/EditBook';
import ViewBook from './componets/ViewBook';
import Subject from './componets/Subject'
import AddSubject from './componets/AddSubject'
import EditSubject from './componets/EditSubject'
import ViewSubject from './componets/ViewSubject'

import  AddNonAcademicStaff from './componets/AddNonAcademicStaff'
import  NonAcademicStaff from './componets/NonAcademicStaff'
import  ViewNonAcademicStaff from './componets/ViewNonAcademicStaff'
import  EditNonAcademicStaff from './componets/EditNonAcademicStaff'

import Teacher from './componets/Teacher'
import AddTeacher from './componets/AddTeacher'
import ViewTeacher from './componets/ViewTeacher'
import SignIn from './componets/SignIn';





export default class App extends Component {
  render() {
    return (
      
      <Router>
        <div className='container'>
            <Routes>
                <Route exact path='/' element={< SignIn />}></Route>

                <Route exact path='/student' element={< Student />}></Route>
                <Route exact path='/student/create' element={< AddStudent />}></Route>
                <Route exact path='/student/update/:id' element={< EditStudent />}></Route>
                <Route exact path='/student/:id' element={< ViewStudent />}></Route>

                <Route exact path='/book' element={< Book />}></Route>
                <Route exact path='/book/create' element={< AddBook />}></Route>
                <Route exact path='/book/update/:id' element={< EditBook />}></Route>
                <Route exact path='/book/:id' element={< ViewBook />}></Route> 

                <Route exact path='/subject' element={< Subject />}></Route>
                <Route exact path='/subject/create' element={< AddSubject />}></Route>
                <Route exact path='/subject/update/:id' element={< EditSubject />}></Route>
                <Route exact path='/subject/:id' element={< ViewSubject />}></Route>


                <Route exact path='/nonAcademicStaff' element={< NonAcademicStaff />}></Route>
                <Route exact path='/nonAcademicStaff/add' element={< AddNonAcademicStaff />}></Route>
                <Route exact path='/nonAcademicStaff/edit/:id' element={< EditNonAcademicStaff />}></Route>
                <Route exact path='/nonAcademicStaff/:id' element={< ViewNonAcademicStaff />}></Route>

                <Route exact path='/teacher' element={< Teacher />}></Route>
                <Route exact path='/teacher/create' element={< AddTeacher />}></Route>
                <Route exact path='/teacher/:id' element={< ViewTeacher />}></Route>
               



            </Routes>
        </div>
        
      </Router>
      
    )
  }
}
