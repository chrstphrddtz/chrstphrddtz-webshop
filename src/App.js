import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import Contact from "./routes/contact/contact";
import SignIn from "./routes/sign-in/sign-in";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
