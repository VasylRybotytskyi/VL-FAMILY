import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProvaiderTheme from "./utils/ProvaiderTheme.jsx";
import ReduxProvider from "./redux/provider";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider>
    <ProvaiderTheme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvaiderTheme>
  </ReduxProvider>
);
