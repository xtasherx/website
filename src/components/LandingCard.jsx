import avatar from "../assets/avatar.png";
function LandingCard() {
  return (
    <>
      <div className="u-flex u-flex-column u-flex-row-lg u-justify-center u-items-center flex-wrap">
        <div className="avi"></div>
        <div className=" m-1 m-3-md w-80p w-70p-md">
          <h2 className="title leading-tight font-extrathin text-gray-600">
            Hi I'm Natasha Harrington,
          </h2>
          <h3 className="subtitle font-medium text-gray-500">
            a frontend developer.
          </h3>
          <p className="leading-tight text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rhoncus justo quis nisl laoreet ultricies. In faucibus nisi dui, a
            elementum ipsum placerat in. Nam fringilla bibendum consectetur.
          </p>
        </div>
      </div>
    </>
  );
}

export default LandingCard;
