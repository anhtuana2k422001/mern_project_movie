import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import GlobalLoading from "../common/GlobalLoading"
import Topbar from "../common/Topbar";
import Footer from "../common/Footer";
import AuthModalModal from "../common/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {toast} from "react-toastify";
// Tạo giao diện chính cho trang web
const MainLayout = () => {
  return (
    <>
      {/* Global Loading */}
      <GlobalLoading />
      {/* Global Loading */}

      {/* login modal */}
      <AuthModalModal/>
      {/* login modal  */}

      <Box display="flex" minHeight="100vh">
        {/* header  */}
        <Topbar />
        {/* header  */}

        {/* main */}
        <Box
          component="main"
          flexGrow={1}
          overflow="hidden"
          minHeight="100vh"
        >
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
};

export default MainLayout