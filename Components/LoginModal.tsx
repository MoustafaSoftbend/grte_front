import Link from "next/link";

const LoginModal = ({ authState, setauthState }) => {
  const goToLogin = (e) => {
    if (!authState) {
      setauthState(!authState);
    }
  };
  return (
    <div className="modal p-2">
      <div className="modal-header p-2">
        <h1 className="text-title p-2">Sign In</h1>
        <p className="text-lg p-2">
          Welcome to national enegry company if you can navigate more content by
          creating an account whether you are employee or client
        </p>
      </div>

      <form action="" className="modal-form p-2">
        <label className="p-2" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 my-2"
          type="text"
          id="email"
          name="email"
          required
        />
        <label className="p-2" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 my-2"
          type="password"
          id="password"
          name="password"
          required
        />
        <label className="p-2" htmlFor="check-condition">
          <input
            className="p-2 mr-2"
            type="checkbox"
            id="check-condition"
            name="check-condition"
          />
          Agree to the terms and conditions
        </label>
        <input
          className="submit clr-black  button button-primary p-2"
          type="submit"
          name="submit"
          value="submit"
        />
      </form>
      <div className="modal-footer p-2 flex flex-row">
        <p className="text-md p-2">Don't have an account</p>
        <button
          onClick={(e) => goToLogin(e)}
          href="/"
          className="Sign-link text-md font-bold p-2 link"
        >
          Register
        </button>
      </div>
    </div>
  );
};
export default LoginModal;
