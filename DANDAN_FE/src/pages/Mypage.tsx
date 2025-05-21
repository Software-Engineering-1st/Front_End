import My from '../components/My';
import EditCount from '../components/EditCount';
import HomeLayout from '../layout/HomeLayout';
import EditUser from '../components/EditUser';
import { Routes, Route  } from 'react-router-dom';

const Mypage = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<My />} />
        <Route path="editcount" element={<EditCount />} />
        <Route path="edituser" element={<EditUser />} />
      </Routes>
    </HomeLayout>
  );
};

export default Mypage;