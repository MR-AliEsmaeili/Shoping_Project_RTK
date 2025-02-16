import { Vortex } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 flex flex-1 items-center place-content-center justify-center align-middle">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["blue", "orange", "blue", "orange", "orange", "blue"]}
      />
    </div>
  );
};

export default Loader;
