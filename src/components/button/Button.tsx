import { cx } from "css-variants";
import { type ReactNode, type ButtonHTMLAttributes, type MouseEvent } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "link-color" | "link-gray";

type ButtonSize = "medium" | "large" | "xlarge" | "xxlarge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    isLoading?: boolean;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
    children,
    variant = "primary",
    size = "medium",
    type = "button",
    isLoading,
    disabled,
    onClick,
    ...props
}: ButtonProps) => {
    const buttonClassName = cx({
        button: true,
        [`${size}`]: size,
        [`${variant}`]: variant,
        [`${disabled}`]: disabled,
    });

    return (
        <button
            className={buttonClassName}
            disabled={disabled || isLoading}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
