import "./main.scss";
import { Inter, Roboto, Poppins, Manrope } from "next/font/google";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// all the fonts
export const inter = Inter({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const manrope = Manrope({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Contact us form",
  description: "A test task for Mbunity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
