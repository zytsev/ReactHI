import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner/Spinner';

function MainPage() {
    const { t } = useTranslation('home');
    return (
        <>
            <div>{t('MainPage')}</div>
        </>
    );
}

export default MainPage;
