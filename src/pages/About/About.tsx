import { useTranslation } from 'react-i18next';
import PrivateMainLayout from '../../shared/components/MainLayout/PrivateMainLayout';

const About = () => {
    const { t } = useTranslation();
    return (
        <PrivateMainLayout>
            <div>{t('about')}</div>
        </PrivateMainLayout>
    );
};

export default About;
