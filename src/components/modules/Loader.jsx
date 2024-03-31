import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full justify-center items-center flex h-screen">
      <ColorRing 
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["rgb(255, 0, 17)", "#ff3300", "#ffd2a4", "#b3ff00", "#00620d"]}
      />
    </div>
  );
}

export default Loader;
