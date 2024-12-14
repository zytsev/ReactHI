import classNames from 'shared/lib/classNames/classNames';
import style from './AppLink.module.css';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps } = props;

    return (
        <Link to={to} className={classNames(style.AppLink, {}, [className, style[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
