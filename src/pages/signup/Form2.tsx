
interface ChildProps {
    onChildEvent: () => void;
  }

function Form2({ onChildEvent }: ChildProps) {
  const handleNext = () => {
    onChildEvent();
    
  };

  return (
    <div>
      <form>
        <div className="mb-4">
        <select style={{maxWidth:'484px', height:'48px', border:'1px solid #9a9ba0', color:'#616161'}} className=" mt-4 mx-auto block w-full px-4 py-2 pr-8 leading-tight border rounded-full appearance-none focus:outline-none focus:border-gray-500">
  <option value="option1">Country</option>
  <option value="option2">Nigeria</option>
  <option value="option3">Ghana</option>
</select>
        </div>

        <div className="mb-4">
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="town"
            type="text"
            placeholder="Town/City"
          />
        </div>

        <div className="mb-4">
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="town"
            type="street"
            placeholder="Street Name"
          />
        </div>

        <div className="mb-4">
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="town"
            type="postalcode"
            placeholder="Zip/Postal Code"
          />
        </div>

        
        <div className="flex items-center justify-center mb-4">
          <button className="base-btn" type="button" onClick={handleNext}>
            Next
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
          <input id="myCheckbox" type="checkbox" className="h-5 w-5 rounded" />
          <label
            htmlFor="myCheckbox"
            className="ml-2"
            style={{ fontSize: "12px" }}
          >
            By creating an account, I acknowledge that I have read and accept
            the terms and conditions of ECS Pay
          </label>
        </div>

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

export default Form2;
