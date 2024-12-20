import classNames from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.css';
import { useState } from 'react';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div data-testid='sidebar' className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
            <button data-testid='sidebar-toggle' onClick={onToggle}>
                togle
            </button>
        </div>
    );
};
