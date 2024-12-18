import classNames from 'shared/lib/classNames/classNames';
import style from './Spinner.module.css';

interface SpinnerProps {
    className?: string;
}
export const Spinner = ({ className }: SpinnerProps) => {
    return <div className={classNames(style.Spinner, {}, [className])}></div>;
};
