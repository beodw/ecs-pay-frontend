
import { useFormik } from "formik";
import { form1ValidationSchema } from "./validationschema";

interface ChildProps {
  onChildEvent: () => void;
}


function Form1({ onChildEvent }: ChildProps) {

  const handleNext = () => {
  
       onChildEvent();
    
  };

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } = useFormik({
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
          className="mb-4 flex justify-between gap-3"
          style={{
            marginTop: "37px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "484px",
          }}
        >
          <input
            className= {errors.firstName && touched.firstName ? 'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="firstName"
            type="text"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            className= {errors.lastName && touched.lastName ? 'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className=" flex justify-between">
        {
            errors.firstName && touched.firstName &&
            <div className="mb-4 ml-10 invalid-text w-[fit-content]">
              {errors.firstName}
            </div>
        }
        {
            errors.lastName && touched.lastName &&
            <div className="mb-4 mr-12 invalid-text w-[fit-content]">
              {errors.lastName}
            </div>
        }
        </div>
        
        <div className="mb-4">
          <input
            className= {errors.userName && touched.userName ? 'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="userName"
            type="text"
            placeholder="Username"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {
            errors.userName && touched.userName &&
            <div className="mt-4 ml-10 invalid-text w-[fit-content]">
              {errors.userName}
            </div>
         }
        </div>

        <div className="mb-4">
          <input
            className= {errors.email && touched.email ?'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="email"
            type="text"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

{
            errors.email && touched.email &&
            <div className="mt-4 ml-10 invalid-text w-[fit-content]">
              {errors.email}
            </div>
         }
        </div>

        <div
          className="mb-3 flex justify-between gap-3"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "484px",
          }}
        >
          <input
            className= {errors.countryCode && touched.countryCode ?'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="countryCode"
            type="text"
            value={values.countryCode}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Country Code"
          />
          <input
            className= {errors.phoneNumber && touched.phoneNumber ?'invalid appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline'}
            id="phoneNumber"
            type="text"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={values.countryCode ? values.countryCode : 'Phone Number'}
          />
        </div>
        <div className=" flex justify-between">
        {
            errors.countryCode && touched.countryCode &&
            <div className="mb-4 ml-10 invalid-text w-[fit-content]">
              {errors.countryCode}
            </div>
        }
        {
            errors.phoneNumber && touched.phoneNumber &&
            <div className="mb-4 mr-12 invalid-text w-[fit-content]">
              {errors.phoneNumber}
            </div>
        }
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
