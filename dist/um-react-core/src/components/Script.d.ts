/// <reference types="react" />
declare type ScriptProps = {
    src: string;
};
export declare const ScriptResource: import("react-cache").Resource<ScriptProps, {}>;
export declare const Script: React.FC<ScriptProps>;
export declare function useScript({ src }: ScriptProps): {};
export {};
