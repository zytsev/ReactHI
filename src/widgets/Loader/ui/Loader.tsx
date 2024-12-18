import classNames from 'shared/lib/classNames/classNames';
import style from './Loader.module.css';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(style.Loader, {}, [className])}>
            <Spinner />
        </div>
    );
};
