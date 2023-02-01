import Lottie from "react-lottie";
import animationData from "../assets/loading-animation.json";

function LoadingScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default LoadingScreen;
