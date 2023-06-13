import { useFormik } from "formik";
import { form2ValidationSchema } from "./validationschema";
interface ChildProps {
    onChildEvent: () => void;
  }

function Form2({ onChildEvent }: ChildProps) {
  const handleNext = () => {
    onChildEvent();
    
  };

  const listcountries = ['Nigeria', 'United states of America', 'Candada', 'Switzerland', 'Ghana', 'United kingdom', 'China']
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      country: "",
      town_city: "",
    },
    onSubmit: handleNext,
    validationSchema: form2ValidationSchema,
  });
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-4">
        <select style={{maxWidth:'484px', height:'48px', border:'1px solid #9a9ba0', color:'#616161'}} className={errors.country && touched.country ? 'invalid my-4 mx-auto block w-full px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500' : 'my-4 mx-auto block w-full px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500'}
        id="country"
        value={values.country}
        onChange={handleChange}
        onBlur={handleBlur}>

          {listcountries.map((countries, index)=>(

<option key={index} value={countries}>{countries}</option>
          ))}

  
</select>

{errors.country && touched.country && (
            <div className="mb-4 mx-auto md:ml-10 invalid-text w-[fit-content]">
              {errors.country}
            </div>
          )}
        </div>

        <div className="mb-4">
          <input
            className={errors.town_city && touched.town_city ? 'invalid appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' : 'appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'}
            type="text"
            placeholder="Town/City"
            id="town_city"
            value={values.town_city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      
        {errors.town_city && touched.town_city && (
            <div className="mb-4 mx-auto md:ml-10 invalid-text w-[fit-content]">
              {errors.town_city}
            </div>
          )}
        
        <div className="flex items-center justify-center mb-4">
          <button className="base-btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
