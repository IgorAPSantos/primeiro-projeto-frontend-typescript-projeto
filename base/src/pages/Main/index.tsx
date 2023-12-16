import './styles.css';
import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';

function Main() {
  return (
    <div className='container'>
      <Header />

      <div>
        <TeacherCard teacher={{ id: 1, name: 'Daniel', avatar: 'https://media.licdn.com/dms/image/D4D03AQEBbT7FDX7ZJw/profile-displayphoto-shrink_800_800/0/1692652307494?e=1707955200&v=beta&t=FElrqRdi5RvZhQ_yB3A3HJHXt_u0SugZefTPwFrPyRI' }} />
      </div>
    </div>
  );
}

export default Main;
