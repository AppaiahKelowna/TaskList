import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(getAuth(), firebaseUser => {
      console.log('Firebase User --> ', firebaseUser);
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return unSubscribe;
  }, []);

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(getAuth(), email, password).catch(e => {
      setLoginError(e?.message);
      setTimeout(() => {
        setLoginError(null);
      }, 2000);
    });

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(getAuth(), email, password).catch(e => {
      console.log('Signup Error', e);
    });
  const logOut = () => getAuth().signOut();
  return (
    <AuthContext.Provider
      value={{ user, authLoading, login, signup, logOut, loginError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
