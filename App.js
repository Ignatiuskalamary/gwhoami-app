
import { SafeAreaView } from 'react-native';
import Splash from './src/screens/auth/Splash';
import { styles } from "./src/screens/auth/Splash/styles";
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

const App = () =>
{
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* <Splash /> */}
      {/* <Signup /> */}
      <Signin />
    </SafeAreaView>
  );
}

export default App;
