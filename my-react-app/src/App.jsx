import EmojiSwitcher from './Components/useState/EmojiSwitcher.jsx';
import ColorPicker from './Components/useState/ColorPicker.jsx';
import QuantitySelector from './Components/useState/QuantitySelector.jsx';
import FormTracker from './Components/useState/FormTracker.jsx';
import WindowResize from './Components/useEffect/WindowResize.jsx';
import TitleUpdater from './Components/useEffect/TitleUpdater.jsx';
import OnlineStatus from './Components/useEffect/OnlineStatus.jsx';
import API_Polling from './Components/useEffect/ApiPolling.jsx';

function App() {
  return(
    <>
    <EmojiSwitcher/>
    <ColorPicker/>
    <OnlineStatus/>
    <OnlineStatus/>
    <OnlineStatus/>
    <API_Polling/>
    <QuantitySelector/>
    <TitleUpdater/>
    <FormTracker/>
    <WindowResize/>
    </>
  );
}

export default App
