import { useFormik } from "formik";
import { form1ValidationSchema } from "./validationschema";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

interface ChildProps {
  onChildEvent: () => void;
}


function Form1({ onChildEvent }: ChildProps) {
  const handleNext = () => {
    onChildEvent();
  };

  const { errors, touched, values, handleChange, setFieldValue, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        userName: "",
        lastName: "",
        firstName: "",
        countryCode: "",
        phoneNumber: "",
      },
      onSubmit: handleNext,
      validationSchema: form1ValidationSchema,
    });

  return (
    <div>

      
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div
          className="mb-4 md:flex justify-between gap-3"
          style={{
            marginTop: "37px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "484px",
          }}
        >
          <input
            className={
              errors.firstName && touched.firstName
                ? "invalid mb-4 md:mb-0 appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline "
                : "appearance-none mb-5 md:mb-0 border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            }
            id="firstName"
            type="text"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <div className="mb-4 mx-auto md:hidden invalid-text w-[fit-content]">
              {errors.firstName}
            </div>
          )}
          <input
            className={
              errors.lastName && touched.lastName
                ? "invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline "
                : "appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            }
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

{errors.lastName && touched.lastName && (
            <div className="mt-4 md:hidden mx-auto invalid-text w-[fit-content]">
              {errors.lastName}
            </div>
          )}
        </div>

        <div className=" hidden md:flex justify-between">
          {errors.firstName && touched.firstName && (
            <div className="mb-4 mx-10 invalid-text w-[fit-content]">
              {errors.firstName}
            </div>
          )}
          {errors.lastName && touched.lastName && (
            <div className="mb-4 mx-11  invalid-text w-[fit-content]">
              {errors.lastName}
            </div>
          )}
        </div>

        <div className="mb-4">
          <input
            className={
              errors.userName && touched.userName
                ? "invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                : "appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            }
            id="userName"
            type="text"
            placeholder="Username"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && (
            <div className="mt-4 mx-auto text-center md:ml-10 invalid-text md:w-[fit-content]">
              {errors.userName}
            </div>
          )}
        </div>

        <div className="mb-4">
          <input
            className={
              errors.email && touched.email
                ? "invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                : "appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            }
            id="email"
            type="text"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />

          {errors.email && touched.email && (
            <div className="mt-4 mx-auto text-center md:ml-10 invalid-text md:w-[fit-content]">
              {errors.email}
            </div>
          )}
        </div>

        <div
          className="mb-3 md:flex justify-between gap-3"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "484px",
          }}
        >
          <PhoneInput
            country={"ng"} // Default country
            value={values.countryCode}
            inputProps={{
              id:'countryCode',
              maxLength: 4,

            }}
            
            onChange={(value)=>setFieldValue('countryCode', value)}
            
            inputStyle={{
              border: "none",
              width: "100%",
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              border: "none",
            }}
            containerClass={
              errors.countryCode && touched.countryCode
                ? "invalid appearance-none border rounded-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                : "appearance-none border border-gray-400 border-solid border-1 rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            }
          />

{errors.countryCode && touched.countryCode && (
            <div className="my-4 mx-auto md:hidden invalid-text w-[fit-content]">
              {errors.countryCode}
            </div>
          )}
          <input
            id="phoneNumber"
            type="number"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={
              values.countryCode ? values.countryCode : "Phone Number"
            }
            className={
              errors.phoneNumber && touched.phoneNumber
                ? "invalid w-[256px] appearance-none border rounded-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                : "appearance-none w-[256px] border rounded-full md:w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            }
          />

{errors.phoneNumber && touched.phoneNumber && (
            <div className="my-4 mx-auto md:hidden invalid-text w-[fit-content]">
              {errors.phoneNumber}
            </div>
          )}
        </div>

        
        <div className=" hidden md:flex justify-between">
          {errors.countryCode && touched.countryCode && (
            <div className="mb-4 md:ml-10 mx-auto text-center md:ml-10 invalid-text md:w-[fit-content]">
              {errors.countryCode}
            </div>
          )}
          {errors.phoneNumber && touched.phoneNumber && (
            <div className="mb-4 mx-auto text-center md:ml-10 md:mr-16 invalid-text md:w-[fit-content]">
              {errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mb-4">
          <button className="base-btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form1;
