import classNames from 'shared/lib/classNames/classNames';
import style from './Button.module.css';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
    const { className, children, theme, ...otherprops } = props;
    return (
        <button className={classNames(style.Button, {}, [className, style[theme]])} {...otherprops}>
            {children}
        </button>
    );
};
