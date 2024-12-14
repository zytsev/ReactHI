import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('home');
    return (
        <>
            <div>{t('MainPage')}</div>
            <div>option</div>
        </>
    );
}

export default MainPage;
