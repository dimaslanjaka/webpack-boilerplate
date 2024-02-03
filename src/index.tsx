import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Flowbite } from 'flowbite-react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider } from './components/FlowbiteLayout/context/SidebarContext';
import theme from './flowbite-theme';
import './index.css';
import Home from './layout/Home';

const container = document.getElementById('root');

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme }}>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<DashboardPage />} index />
          <Route path="/authentication/sign-in" element={<SignInPage />} />
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route path="/e-commerce/products" element={<EcommerceProductsPage />} />
          <Route path="/users/list" element={<UserListPage />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </Flowbite>
  </StrictMode>
);
