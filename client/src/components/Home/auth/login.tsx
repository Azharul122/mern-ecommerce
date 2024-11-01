// import CommonForm from "./CommonForm";
// // import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CommonForm from "./form";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const rouetr = useNavigate()
  // const { toast } = useToast();

  function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data: { payload: { success: unknown; message: unknown; }; }) => {
      if (data?.payload?.success) {
        rouetr("/")
        toast.success(`${data?.payload?.message}`);
      } else {
        toast(`${data?.payload?.message

          }`);
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit} isBtnDisabled={undefined} />
    </div>
  );
}

export default AuthLogin;
