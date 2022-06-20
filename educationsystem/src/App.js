import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListAllTrainers from "./components/ListAllTrainers";

import ViewTrainer from "./components/ViewTrainer";
import AddTrainer from "./components/AddTrainer";
import DeleteTrainer from "./components/DeleteTrainer";

import AdminDasboard from "./components/AdminDasboard";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import Homedashboard from "./components/Homedashboard";
import StudentDashboard from "./components/StudentDashboard";
import UpdateTrainer from "./components/UpdateTrainer";
import AddMessage from "./components/AddMessage";
import ViewAllMessages from "./components/ViewAllMessages";
import ViewMessage from "./components/ViewMessage";
import UpdateMessage from "./components/UpdateMessage";
import DeleteMessage from "./components/DeleteMessage";
import AddFeedback from "./components/AddFeedback";
import ViewAllFeedbacks from "./components/ViewAllFeedbacks";
import ViewAllStudents from "./components/ViewAllStudents";
import ViewSingleStudent from "./components/ViewSingleStudent";
import DeleteStudent from "./components/DeleteStudent";
import RegistrationForm from "./components/RegistrationForm";
import StudentViewTrainers from "./components/StudentViewTrainers";
import StudentViewMessage from "./components/StudentViewMessage";
import ListAllCourse from "./components/ListAllCourse";
import AddCourse from "./components/AddCourse";
import UpdateCourse from "./components/UpdateCourse";
import DeleteCourse from "./components/DeletCourse";
import StudentViewCourse from "./components/StudentViewCourses";
import ViewCourse from "./components/ViewCourse";
import ListAllPayments from "./components/ListAllPayments";
import AddPayment from "./components/AddPayment";
import ViewPayment from "./components/ViewPayment";

import ListAllMaterial from "./components/ListAllMaterial";
import AddMaterial from "./components/AddMaterial";
import ViewMaterial from "./components/ViewMaterial";
import UpdateMaterial from "./components/UpdateMaterial";
import DeleteMaterial from "./components/DeleteMaterial";
import StudentViewMaterial from "./components/StudentViewMaterial";

import ViewTest from "./components/ViewTest";
import DeleteTest from "./components/DeleteTest";
import UpdateTest from "./components/UpdateTest";
import ListAllTest from "./components/ListAllTest";
import AddTest from "./components/AddTest";
import StudentViewTest from "./components/StudentViewTest";

import StudentViewProfile from "./components/StudentViewProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/getAllTrainers" element={<ListAllTrainers />} />
          <Route path="/trainer/view/:id" element={<ViewTrainer />} />
          <Route path="/trainer/edit/:id" element={<UpdateTrainer />} />
          <Route path="/trainer/delete/:id" element={<DeleteTrainer />} />
          <Route path="/trainer/save" element={<AddTrainer />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/admin/dashboard" element={<AdminDasboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/add/message" element={<AddMessage />} />
          <Route path="/view/message/:id" element={<ViewMessage />} />
          <Route path="/update/message/:id" element={<UpdateMessage />} />
          <Route path="/message/delete/:id" element={<DeleteMessage />} />
          <Route path="/viewAll/messages" element={<ViewAllMessages />} />
          <Route path="/add/feedback" element={<AddFeedback />} />

          <Route path="/viewall/feedbacks" element={<ViewAllFeedbacks />} />
          <Route path="/getAllStudents" element={<ViewAllStudents />} />
          <Route path="/view/student/:id" element={<ViewSingleStudent />} />
          <Route path="/delete/student/:id" element={<DeleteStudent />} />
          <Route path="/student/registration" element={<RegistrationForm />} />

          <Route
            path="/student/view/trainers"
            element={<StudentViewTrainers />}
          />
          <Route
            path="/student/view/messages"
            element={<StudentViewMessage />}
          />
          <Route path="/view/student/:id" element={<StudentViewProfile />} />

          <Route path="/getAllCourse" element={<ListAllCourse />} />
          <Route path="/course/save" element={<AddCourse />} />
          <Route path="/course/edit/:id" element={<UpdateCourse />} />
          <Route path="/course/delete/:id" element={<DeleteCourse />} />
          <Route path="/course/view/:id" element={<ViewCourse />} />
          <Route path="/student/view/course" element={<StudentViewCourse />} />
          <Route path="/view/all/payment" element={<ListAllPayments />} />
          <Route path="/enroll/forpayment" element={<AddPayment />} />
          <Route path="/view/all/payment/:id" element={<ViewPayment />} />

          <Route path="/getAllMaterial" element={<ListAllMaterial />} />
          <Route path="/AddMaterial" element={<AddMaterial />} />
          <Route path="/material/view/:id" element={<ViewMaterial />} />
          <Route path="/material/edit/:id" element={<UpdateMaterial />} />
          <Route path="/material/delete/:id" element={<DeleteMaterial />} />
          <Route
            path="/student/view/material"
            element={<StudentViewMaterial />}
          />

          <Route path="/view/test/:id" element={<ViewTest />} />
          <Route path="/delete/test/:id" element={<DeleteTest />} />
          <Route path="/update/test/:id" element={<UpdateTest />} />
          <Route path="/getAllTest" element={<ListAllTest />} />
          <Route path="/add/test" element={<AddTest />} />
          <Route path="/student/view/test" element={<StudentViewTest />} />

          <Route path="/" element={<Homedashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
