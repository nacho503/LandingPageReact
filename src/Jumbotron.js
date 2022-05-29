import "bootstrap/dist/css/bootstrap.css";

let Jumbotron = () => {
  return (
    <>
      <div className="m-5 d-flex align-items-start flex-column p-5 text-center bg-secondary bg-opacity-50">
        <h1 className=" mb-3">A Warm Welcome!</h1>
        <p className="text-start mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a className="btn btn-primary" href="" role="button">
          Call to action
        </a>
      </div>
    </>
  );
};

export default Jumbotron;
