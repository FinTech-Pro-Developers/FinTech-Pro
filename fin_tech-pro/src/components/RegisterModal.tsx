import { EyeClosedIcon, EyeIcon, X } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";


interface RegisterModalProps {
  openRegister: boolean;
  onClose: () => void;
  openLoginModal: () => void;
}

export default function RegisterModal({ openRegister, onClose, openLoginModal }: RegisterModalProps) {
    const [viewPassword, setViewPassword] = useState(false)
  const [values, setValues] = useState<{
    name: string;
    newPassword: string;
    confirmPassword: string;
    email: string;
  }>({
    name: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    newPassword?: string;
    confirmPassword?: string;
    email?: string;
  }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!values.name.trim()) newErrors.name = "Full Name is required";
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!values.newPassword) {
      newErrors.newPassword = "Password is required";
    } else if (values.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters long";
    }
    if (!values.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (values.newPassword !== values.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Form submitted successfully", ${JSON.stringify(values)}`)
      setValues({
        name: "",
        email: "",
        confirmPassword: "",
        newPassword: "",
      })
    }
  };

  const handleView = () => {
    setViewPassword((prev) => !prev)
  }


  return (
    <>
      {openRegister && (
        <div className="w-full h-screen overflow-hidden fixed top-0 left-0 backdrop-blur-md bg-black/30 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[380px] min-w-[300px] flex flex-col items-start justify-center gap-6 bg-white border border-gray-500 rounded-lg py-7 px-5 relative"
          >
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-2xl text-black font-bold">Create an account</h1>
              <p className="text-sm text-gray-600 font-medium">Enter your information to create an account</p>
            </div>
            <div className="flex flex-col items-start w-full gap-4">
              <label className="flex flex-col w-full">
                <span className="text-sm text-black font-medium">Full Name</span>
                <input
                  value={values.name}
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full py-2 px-4 text-sm rounded-sm outline-none border border-gray-300"
                />
                {errors.name && <p className="text-red-500 text-sm font-medium">{errors.name}</p>}
              </label>
              <label className="flex flex-col w-full">
                <span className="text-sm text-black font-medium">Email</span>
                <input
                  value={values.email}
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full py-2 px-4 text-sm rounded-sm outline-none border border-gray-300"
                />
                {errors.email && <p className="text-red-500 text-sm font-medium">{errors.email}</p>}
              </label>
              <label className="flex flex-col w-full">
                <span className="text-sm text-black font-medium">Password</span>
                <input
                  value={values.newPassword}
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full py-2 px-4 text-sm rounded-sm outline-none border border-gray-300"
                />
                {errors.newPassword && <p className="text-red-500 text-sm font-medium">{errors.newPassword}</p>}
              </label>


              <label className="flex flex-col w-full">
                <span className="text-sm text-black font-medium">Confirm Password</span>
               <div  className="w-full flex items-center gap-3  py-2 px-4 text-sm rounded-sm outline-none border-[1px] border-[gray]">
               <input
                  value={values.confirmPassword}
                  type={viewPassword? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleChange}
                  autoComplete="new-password"
                  className=" border-none outline-none w-full "
                />
                   <button onClick={handleView} type="button" className="cursor-pointer"  > {viewPassword? <EyeIcon size={15} />: <EyeClosedIcon size={15}/>}
                   </button>
               </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm font-medium">{errors.confirmPassword}</p>}
              </label>



              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 text-sm cursor-pointer rounded-sm hover:scale-95 transition duration-300"
              >
                Register
              </button>
            </div>
            <p className="text-sm text-black font-medium self-center">
              Already have an account?{" "}
              <button onClick={openLoginModal} className="text-gray-600 cursor-pointer">
                Login
              </button>
            </p>
            <div onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
              <X />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
