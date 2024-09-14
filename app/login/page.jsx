import BootstrapClient from "@/components/BootstrapClient";
import "@/public/assets/css/responsive.css";
import "@/public/assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Practice Halo | Login",
  description: "Practice Halo patient portal.",
};

export default function LoginPage() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <div className="login-card login-dark">
            <div>
              <div className="login-main">
                {process.env.NEXT_PUBLIC_BACK_END_URL}
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BootstrapClient />
    </div>  
  );
}
