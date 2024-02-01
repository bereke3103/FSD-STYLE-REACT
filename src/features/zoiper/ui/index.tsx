import { PhoneFilled } from '@ant-design/icons';
import { Select } from 'antd';
import './zoiper.scss';

export const Zoiper = () => {
    return (
        <div className='zoiper'>
            <PhoneFilled style={{ color: '#d90404' }} />
            <Select
                defaultValue='****'
                style={{ width: 120 }}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                    },
                ]}
            />
            <button>Подключить</button>
        </div>
    );
};
