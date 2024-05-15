import React, {FC} from "react";
import { LogoProps } from "./logo.types";
import Image from "next/image";

export const Logo: FC<LogoProps> = ({imageSize = 'w-20 h-20', classes}) => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dbsbevgcj/image/upload/v1715643768/Kampala_Events_yrgfcd.png"
        alt="kampala events hub logo"
        className={`object-cover object-center rounded-full mx-auto ${imageSize} ${classes}`}
        width={500}
        height={500}
      />
    </div>
  );
};
