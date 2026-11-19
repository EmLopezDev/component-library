import { cx } from "css-variants";
import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import "./Button.css";

type ButtonSize = "medium" | "large" | "xlarge" | "xxlarge";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

type LinkVariant = "link-color" | "link-gray";

type BaseButtonProps = {
    size?: ButtonSize;
    children: ReactNode;
    disabled?: boolean;
};

type RegularButtonProps = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        customType: "button";
        variant?: ButtonVariant;
        isLoading?: boolean;
        href?: never;
    };

type LinkButtonProps = BaseButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        customType: "link";
        variant?: LinkVariant;
        href: string;
        isLoading?: never;
    };

type ButtonProps = RegularButtonProps | LinkButtonProps;

const Button = (props: ButtonProps) => {
    if (props.customType === "button") {
        const { size = "medium", variant = "primary", disabled, isLoading, children } = props;
        const buttonClassName = cx({
            button: true,
            [size]: size,
            [variant]: variant,
            "button--interactive": true,
        });
        console.log(buttonClassName);
        return (
            <button
                {...props}
                className={`${buttonClassName}`}
                disabled={disabled || isLoading}
                aria-busy={isLoading}
            >
                {children}
            </button>
        );
    } else {
        const {
            size = "medium",
            variant = "link-color",
            href,
            disabled,
            tabIndex,
            children,
            onClick,
        } = props;
        const linkClassName = cx({
            button: true,
            [`${size}`]: size,
            [`${variant}`]: variant,
            disabled,
        });
        return (
            <a
                {...props}
                className={linkClassName}
                href={disabled ? undefined : href}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : tabIndex}
                onClick={disabled ? undefined : onClick}
            >
                {children}
            </a>
        );
    }
};

export default Button;
