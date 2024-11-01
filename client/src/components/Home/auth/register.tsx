import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CommonForm from "./form";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data: { payload: { success: any; message: any; }; }) => {
      if (data?.payload?.success) {
        toast(`${
          data?.payload?.message
          
         }`)
        navigate("/login");
      } else {
        toast(`${
          data?.payload?.message
          
         }`)
      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit} isBtnDisabled={undefined}      />
    </div>
  );
}

export default AuthRegister;
