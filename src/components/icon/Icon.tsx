import { cx } from "css-variants";
import { type IconName, iconRegistry } from "./IconMap";
import "./Icon.css";

type IconSize = "x-small" | "small" | "medium" | "large" | "x-large" | "2x-large";
type IconColor = "default" | "inherit" | "blue";

type IconProps = {
    name: IconName;
    size?: IconSize;
    color?: IconColor;
    label?: string;
};

const sizeMap: Record<IconSize, number> = {
    "x-small": 10,
    small: 14,
    medium: 20,
    large: 24,
    "x-large": 32,
    "2x-large": 48,
};

const Icon = ({ name, size = "medium", color = "inherit", label }: IconProps) => {
    const IconComponent = iconRegistry[name];

    const className = cx({
        icon: true,
        [`${color}`]: color !== "inherit",
    });

    return (
        <span
            className={className}
            aria-hidden={!label || undefined}
            aria-label={label}
            role={label ? "img" : undefined}
        >
            <IconComponent
                size={sizeMap[size]}
                color="currentColor"
            />
        </span>
    );
};

export default Icon;
