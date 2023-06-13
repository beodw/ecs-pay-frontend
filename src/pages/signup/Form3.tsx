import { useFormik } from "formik";
import { form3ValidationSchema } from "./validationschema";

interface ChildProps {
    onChildEvent: () => void;
  }

function Form3({ onChildEvent }: ChildProps) {

  const handleNext = () => {
    onChildEvent();
  };

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      password: "",
      password_confirmaion: "",
      checkbox: false,
    },
    onSubmit: handleNext,
    validationSchema: form3ValidationSchema,
  });

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>

        
        <div className="mt-4 mb-4">
          <input
            className= {errors.password && touched.password ? 'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="password"
            type="password"
            placeholder="Password"
           value={values.password}
           onChange={handleChange}
           onBlur={handleBlur}></input>
        </div>
        
        {errors.password && touched.password && (
            <div className="mb-4 mx-auto md:ml-10 invalid-text w-[fit-content]">
              {errors.password}
            </div>
          )}

        <div className="mb-4">
          <input
            className={errors.password_confirmaion && touched.password_confirmaion ? 'invalid appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'}
            id="password_confirmaion"
            type="password"
            placeholder="Confirm Password"
            value={values.password_confirmaion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password_confirmaion && touched.password_confirmaion && (
            <div className="mb-4 mx-auto md:ml-10 invalid-text w-[fit-content]">
              {errors.password_confirmaion}
            </div>
          )}

        <div className="flex items-center justify-center mb-4">
          <button className="base-btn" type="submit">
            Sign Up
          </button>
        </div>

        <div
          className="flex items-center mb-3"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "484px",
          }}
        >
          <input id="checkbox" type="checkbox" className="h-5 w-5 rounded"
          checked={values.checkbox}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          <label
            htmlFor="myCheckbox"
            className="ml-2"
            style={{ fontSize: "12px" }}
          >
            By creating an account, I acknowledge that I have read and accept
            the terms and conditions of ECS Pay
          </label>
        </div>

        {errors.checkbox && touched.checkbox && (
            <div className="mb-4 mx-auto md:ml-10 invalid-text w-[fit-content]">
              {errors.checkbox}
            </div>
          )}

        <div
          className="text-center"
          style={{ color: "#FBCC05", fontSize: "12px" }}
        >
          Terms of Service
        </div>
      </form>
    </div>
  );
}

export default Form3;
