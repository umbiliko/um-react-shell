import * as React from 'react';
export declare const ImgResource: import("react-cache").Resource<{
    src: string;
    srcSet?: string | undefined;
}, Event>;
interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}
export declare const Img: React.FC<ImgProps>;
export {};
