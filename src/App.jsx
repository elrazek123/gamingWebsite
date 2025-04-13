import Layout from "./components/layout/Layout";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ContextProvider } from "./context/ContextStateListProvider";
function App()
{
  useEffect(()=>
  {
    Aos.init({
      duration: 1500,
      once: false, // ده اللي يخلي الأنميشن يتكرر
    })
  },[])
  return <>
  <ContextProvider>
    <Layout></Layout>
  </ContextProvider>
  </>

}
export default App;