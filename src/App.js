import { Routes, Route } from "react-router-dom";
// import {setAddress} from "./store/userReducer";
// import {useDispatch, useSelector} from "react-redux";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import AppBackground from './components/AppBackground'

function App() {
  // const dispatch = useDispatch()
  // window.onload = (event) => {
  //   isConnected()
  // };
  //
  // async function isConnected() {
  //   const accounts = await window.ethereum.request({method: 'eth_accounts'})
  //   if (accounts.length) dispatch(setAddress(accounts[0]))
  // }

  return (
    <div className="app">
      <AppBackground />

      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Main />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
