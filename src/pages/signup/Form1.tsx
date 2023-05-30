

interface ChildProps {
    onChildEvent: () => void;
  }

function Form1({ onChildEvent }: ChildProps) {
  
  const handleNext = () => {
    onChildEvent();
  };

  return (
    <div>
      <form>

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
            className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="First Name"
          />
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email Address"
          />
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
            className=" appearance-none border rounded-full w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
          />
          <input
            className=" appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
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

export default Form1;
