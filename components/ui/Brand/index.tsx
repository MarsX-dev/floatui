import Image from "next/image";
import logoDark from "public/logo-dark.svg";

export default () => (
  <>
    <div>
      <Image src={logoDark} alt="Float UI logo" />
    </div>
  </>
);
