import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutWrapper from "./layouts/LayoutWrapper";
import ContactUsPage from "./pages/ContactUsPage";
import CoursesPage from "./pages/CoursesPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import PurchasedPlanPage from "./pages/PurchasedPlanPage";
import UpdateProfile from './features/profile/UpdateProfile'
import { BookPage } from "./pages/BookPage";
import WatchDemo from "./pages/WatchDemoPage";
import ProgramTeaching from "./pages/Program";
import LinkingPage from "./components/Program-Teaching/LinkingPage";
import LinkingPage2 from "./components/Program-Teaching/LinkingPage2";
import TeachingPage from "./pages/Teaching";
import ResourcesPage from "./pages/ResourcesPage";
import CommonProgram from "./components/Program-Details/CommonProgram";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

import ReusePage from "./pages/SubBlogPages/ReuseBlogPage";
import CreateAccountPage from "./pages/SubBlogPages/CreateAccountPage";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route path="" index element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/purchased-plans" element={<PurchasedPlanPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/profile" element={<UpdateProfile />} />
          <Route path="/watchdemo" element={<WatchDemo />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/programinfo" element={<ProgramTeaching />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/programinfo/:indexing" element={<LinkingPage />} />
          <Route path="/teaching/:indexing" element={<LinkingPage2 />} />
          <Route path="/resources/program/:indexing" element={<CommonProgram />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/create-account" element={<CreateAccountPage />} />
          <Route path="/blog/:pageIndexing" element={<ReusePage />} />
        </Route>
      </Routes>
    </>
  )
}
