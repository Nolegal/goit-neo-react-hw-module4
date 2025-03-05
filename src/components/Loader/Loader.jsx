import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <PropagateLoader
        color="#3537a0"
        cssOverride={{}}
        size={15}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;