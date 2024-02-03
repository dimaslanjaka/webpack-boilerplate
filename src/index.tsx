import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Flowbite } from 'flowbite-react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ActualSidebar } from './components/FlowbiteLayout';
import FlowbiteHeader from './components/FlowbiteLayout/FlowbiteHeader';
import FlowbiteContext from './components/FlowbiteLayout/context/FlowbitContext';
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
      <FlowbiteContext>
        <SidebarProvider>
          <FlowbiteHeader />
          <BrowserRouter>
            <div id="flowbite-main-content">
              <div className="flex flex-col md:flex-row dark:bg-gray-900">
                <div className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]" id="router-wrapper">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
                <div className="order-1">
                  <ActualSidebar />
                </div>
              </div>
            </div>
          </BrowserRouter>
        </SidebarProvider>
      </FlowbiteContext>
    </Flowbite>
  </StrictMode>
);
