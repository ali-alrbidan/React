import { AntDProvider } from './components/ant-design-provider';
import { ThemeProvider } from './components/theme-provider';
import MainApp from './main-app';

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AntDProvider>
          <MainApp />
        </AntDProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;