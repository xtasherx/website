function ProjectsCard() {
  return (
    <>
      <div className="expCard p-2">
        <div>
          <h3 className="font-extrathin text-gray-600">
            Blue Acorn ici{" "}
            <span className="font-medium text-sm text-purple-400">
              2020 - Present
            </span>
          </h3>
          <div className="expCardDiv p-2">
            <p className="text-gray-600 "> Projects I've worked on:</p>
            <p className="text-lg font-thin text-gray-600  leading-none">
              Toyota Motorcars of North America
            </p>
            <p className="text-gray-600 leading-tight mb-0">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              rhoncus justo quis nisl laoreet ultricies. In faucibus nisi dui, a
              elementum ipsum placerat in. Nam fringilla bibendum consectetur.
            </p>
            <a className="mb-2 u-inline-block" href="#">
              {" "}
              site
            </a>
            <p className="text-lg font-thin text-gray-600 mb-0 leading-none">
              Dupont Community Credit Union
            </p>
            <a href="#"> site</a>
            <p className="text-lg font-thin text-gray-600 mb-0 leading-none">
              GSK Pharmaceutical
            </p>
            <a href="#"> site</a>
          </div>
        </div>
        <div>
          <h3 className="font-extrathin text-gray-600">
            Dispatch Center{" "}
            <span className="font-medium text-sm text-purple-400">
              2018-2020
            </span>
          </h3>
          <div className="expCardDiv p-2">
            <p className="text-gray-600 ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              rhoncus justo quis nisl laoreet ultricies. In faucibus nisi dui, a
              elementum ipsum placerat in. Nam fringilla bibendum consectetur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              rhoncus justo quis nisl laoreet ultricies. In faucibus nisi dui, a
              elementum ipsum placerat in. Nam fringilla bibendum consectetur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              rhoncus justo quis nisl laoreet ultricies. In faucibus nisi dui, a
              elementum ipsum placerat in. Nam fringilla bibendum consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
