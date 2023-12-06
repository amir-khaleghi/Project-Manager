import '@/app/globals.css';
import GlassPane from '@/components/GlassPane';

const AuthRootLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen rainbow-mesh p-6 ">
      <GlassPane className="w-full h-full flex items-center justify-center">
        {children}
      </GlassPane>
    </div>
  );
};
export default AuthRootLayout;
