
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Hook/AuthProvider';
import { ProtectedRoute } from './Components/ProtectedRoute';
import Contact from './Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Branding } from "./Components/Theme/Branding";
import EdtBranding from "./admin/branding/EdtBranding";
import EdtFeatur from "./admin/featur/EdtFeatur";
import EdtBullet from "./admin/bullet/EdtBullet";
import EdtRealisation from "./admin/realisation/EdtRealisation";
import { BulletPoint } from "./Components/Theme/BulletPoints";
import { CallToAction } from "./Components/Theme/CallToAction";
import { Features } from "./Components/Theme/Features";
import { Footer } from "./Components/Theme/Footer";
import { Pricing } from "./Components/Theme/Pricing";
import Admin from './admin/Admin';
import Produits, { ProduitsBranding } from './admin/branding/ProduitsBranding';
import AddBranding from './admin/branding/AddBranding';
import AddBulletPoint from './admin/bullet/AddBulletPoint';
import AddFeaturs from './admin/featur/AddFeaturs';
import AddRealisation from './admin/realisation/AddRealisation';
import ProduitsFeaturs from './admin/featur/ProduitsFeaturs';
import ProduitsBulletPoints from './admin/bullet/ProduitsBulletPoints';
import ProduitsRealisation from './admin/realisation/ProduitsRealisation';
import Portfolio from './pages/Portfolio';
import ContactList from './admin/contact/ContactList';
import ContactDetail from './admin/contact/ContactDetail';
import UsersList from './admin/users/UsersList';
import CreateUser from './admin/users/CreateUser';
import UserDeails from './admin/users/userDetails'; 
function App() {
  return (
    <AuthProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Branding />
            <Features />
            <CallToAction />
            <BulletPoint />
            <CallToAction />
            <Pricing/>
          </>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/create-user" element={<CreateUser />} />
          
          {/* Routes protégées */}
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/admin/branding" element={
            <ProtectedRoute requireAdmin={true}>
              <ProduitsBranding/>
            </ProtectedRoute>
          } />
          <Route path="/add-branding" element={
            <ProtectedRoute requireAdmin={true}>
              <AddBranding />
            </ProtectedRoute>
          } />
          <Route path="/add-bulletpoint" element={
            <ProtectedRoute requireAdmin={true}>
              <AddBulletPoint />
            </ProtectedRoute>
          } />
          <Route path="/add-featurs" element={
            <ProtectedRoute requireAdmin={true}>
              <AddFeaturs />
            </ProtectedRoute>
          } />
          <Route path="/add-feature" element={
            <ProtectedRoute requireAdmin={true}>
              <AddFeaturs />
            </ProtectedRoute>
          } />
          <Route path="/add-realisation" element={
            <ProtectedRoute requireAdmin={true}>
              <AddRealisation />
            </ProtectedRoute>
          } />
          <Route path="/admin/features" element={
            <ProtectedRoute requireAdmin={true}>
              <ProduitsFeaturs />
            </ProtectedRoute>
          } />
          <Route path="/admin/bulletPoints" element={
            <ProtectedRoute requireAdmin={true}>
              <ProduitsBulletPoints />
            </ProtectedRoute>
          } />
          <Route path="/admin/realisation" element={
            <ProtectedRoute requireAdmin={true}>
              <ProduitsRealisation />
            </ProtectedRoute>
          } />
          <Route path="/admin/contacts" element={
            <ProtectedRoute requireAdmin={true}>
              <ContactList />
            </ProtectedRoute>
          } />
          <Route path="/admin/contacts/:id" element={
            <ProtectedRoute requireAdmin={true}>
              <ContactDetail />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute requireAdmin={true}>
              <UsersList />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/branding/:brandingId" element={
            <ProtectedRoute requireAdmin={true}>
              <EdtBranding />
            </ProtectedRoute>
          } />
          <Route path="/edit-branding/:id" element={
            <ProtectedRoute requireAdmin={true}>
              <EdtBranding />
            </ProtectedRoute>
          } />
          <Route path="/edit-feature/:id" element={
            <ProtectedRoute requireAdmin={true}>
              <EdtFeatur />
            </ProtectedRoute>
          } />
          <Route path="/edit-bulletpoint/:id" element={
            <ProtectedRoute requireAdmin={true}>
              <EdtBullet />
            </ProtectedRoute>
          } />
          <Route path="/edit-realisation/:id" element={
            <ProtectedRoute requireAdmin={true}>
              <EdtRealisation />
            </ProtectedRoute>
          } />
           <Route path="/user-Details/:id" element={
            <ProtectedRoute requireAdmin={true}>
              <UserDeails />
            </ProtectedRoute>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
