
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from './Header/Header';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses"
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import Header from "./Components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      
      <Routes>
        <Route path="/" element = {<Home></Home>} />
        <Route path="/about" element = {<About></About>} />
        <Route path="/contact" element = {<Contact></Contact> } />
        <Route path="/cart" element = { <Cart></Cart> } />
        <Route path="/login" element = { <Login></Login> } />
        <Route path="/signup" element = { <SignUp></SignUp> } />
        
        <Route path="/courses" element = {<Courses></Courses>} />
        <Route path="/home" element = {<Home></Home>} />
        <Route path="*" element = { <PageNotFound></PageNotFound> } />

       
        
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
  
    </div>
  );
    }
 
    

export default App;

