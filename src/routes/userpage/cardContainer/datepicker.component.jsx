
import { DatePicker, Space } from 'antd';

const AlegeData = ({ warning, onChange }) => {
    const handleDateChange = (date, dateString) => {
        onChange(dateString);
    };

    return (
        <Space direction="vertical" style={{ width: '50%' }}>
            <DatePicker
                onChange={handleDateChange}
                picker="month"
                style={warning}
               
            />
        </Space>
    );
};

export default AlegeData;
