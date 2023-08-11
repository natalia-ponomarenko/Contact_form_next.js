import "./main.scss";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";
import ContactPage from "./components/layouts/ContactPage/ContactPage";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Contact us form",
  description: "A test task for Mbunity",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Header />
        <ContactPage />
        <Footer />
      </body>
    </html>
  );
}
