import { InputHTMLAttributes, ReactNode } from "react";
import { Colors } from "../../theme";
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: Scales;
    checked?: boolean;
    checkedColor?: keyof Colors;
    defaultColor?: keyof Colors;
    startIcon?: (isActive?: boolean) => ReactNode;
    endIcon?: (isActive?: boolean) => ReactNode;
}
export interface HandleProps {
    scale: Scales;
}
export interface InputProps {
    scale: Scales;
}
export interface StyleToggleProps {
    $checked: boolean;
    $checkedColor: keyof Colors;
    $defaultColor: keyof Colors;
    scale: Scales;
}
export declare const scaleKeys: {
    readonly handleHeight: "handleHeight";
    readonly handleWidth: "handleWidth";
    readonly handleLeft: "handleLeft";
    readonly handleTop: "handleTop";
    readonly checkedLeft: "checkedLeft";
    readonly toggleHeight: "toggleHeight";
    readonly toggleWidth: "toggleWidth";
};
export declare type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
