import { Box } from '@mui/material';
import { MainContent, Sidebar, Topbar } from './components';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Class, Rules, Schedule, School, SemesterReport, Students, Subject, SubjectReport, Teachers, Transcript } from './screens';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <Box
        bgcolor='background.default'
        display='flex'
        color='colorText.main'
        position='relative'
      >
        <Topbar open={open} setOpen={setOpen}></Topbar>
        <Sidebar open={open} setOpen={setOpen}></Sidebar>
        <MainContent open={open}>
          <Routes>
            <Route path='/' element={<School />}></Route>
            <Route path='/bao-cao-mon-hoc' element={<SubjectReport />}></Route>
            <Route path='/bao-cao-hoc-ky' element={<SemesterReport />}></Route>
            <Route path='/thong-tin-hoc-sinh' element={<Students />}></Route>
            <Route path='/thong-tin-giao-vien' element={<Teachers />}></Route>
            <Route path='/thong-tin-lop' element={<Class />}></Route>
            <Route path='/bang-diem' element={<Transcript />}></Route>
            <Route path='/phan-cong-giang-day' element={<Schedule />}></Route>
            <Route path='/mon-hoc' element={<Subject />}></Route>
            <Route path='/noi-qui' element={<Rules />}></Route>
          </Routes>
        </MainContent>
      </Box>
    </div>
  );
}

export default App;
