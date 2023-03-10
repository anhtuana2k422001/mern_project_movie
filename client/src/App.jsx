import {ThemeProvider }from "@mui/material/styles";
import {useSelector} from "react-redux"
import themeConfigs from "./configs/theme.configs";
import{ToasContainer} from "react-toastify";
import CssBaseLine from "@mui/material/CssBaseLine";
const App = () => {
  const{themeMode} = useSelector((state ) => state.themeMode)
  return (
    <ThemeProvider theme ={themeConfigs.custom({mode: themeMode})}>
      {/* config toastify*/}
      <ToasContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newesOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      theme={themeMode}

      />
      {/* mui reset css */}
      <CssBaseLine/>
        
    </ThemeProvider>
  );
}

export default App;
