export interface User {
  id: string;
  name: string;
  email: string;
  image?: string; 
}

export interface AuthState {
  user: User | null; 
  isAuthenticated: boolean; 
  isLoading: boolean;
  error: string | null; 
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
}

export interface AuthContextType extends AuthState {

  signIn: (credentials: LoginCredentials) => Promise<void>; 
  signUp: (credentials: SignupCredentials) => Promise<void>;
  signOut: () => void; 
  signInWithGoogle: () => Promise<void>; 
}
