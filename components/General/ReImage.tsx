"use client";

import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

interface ReImageProps {
    src: string;
    alt: string;
    className?: string;
}

function ReImage({ src, alt,className }: ReImageProps) {
    const size = useWindowSize();

    const breakpoint=size.width<=640?"sm":size.width<=768?"md":size.width<=1024?"lg":size.width<=1280?"xl":"2xl";

    const dimention=breakpoint==="sm"?150:breakpoint==="md"?180:breakpoint==="lg"?130:breakpoint==="xl"?190:breakpoint==="2xl"?250:130;
    console.log(dimention);

    return <Image className={`${className} transition-all duration-500`} src={src} width={dimention} height={dimention}  priority alt={alt} />;
}
export default ReImage;
