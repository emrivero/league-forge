import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import { Group, House, Rule, SportsFootball } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Sider, Title } from "./components/header/sider";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { firebaseAuth, firestoreDatabase } from "./firebase-config";
import { BlogPostCreate, BlogPostEdit, BlogPostShow } from "./pages/blog-posts";
import { Home } from "./pages/home";
import { Leagues } from "./pages/leagues";
import { Rules } from "./pages/rules/rules";
import { Teams } from "./pages/teams";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={firestoreDatabase.getDataProvider()}
              authProvider={firebaseAuth.getAuthProvider()}
              routerProvider={routerBindings}
              notificationProvider={notificationProvider}
              resources={[
                {
                  name: "home",
                  list: "/",
                  meta: {
                    label: "Inicio",
                    icon: <House />,
                    canDelete: true,
                  },
                },
                {
                  name: "teams",
                  list: "/teams",
                  meta: {
                    label: "Equipos",
                    icon: <Group />,
                    canDelete: true,
                  },
                },
                {
                  name: "leagues",
                  list: "/leagues",
                  meta: {
                    label: "Ligas y Torneos",
                    icon: <SportsFootball />,
                    canDelete: true,
                  },
                },
                {
                  name: "rules",
                  list: "/rules",
                  meta: {
                    label: "Reglas",
                    icon: <Rule />,
                    canDelete: true,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "WsdrZZ-Wy7P4l-PmEouG",
              }}
            >
              <Routes>
                <Route
                  element={
                    <ThemedLayoutV2
                      Title={() => <Title />}
                      Sider={Sider}
                      Header={Header}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  }
                >
                  <Route path="/">
                    <Route index element={<Home />} />
                  </Route>
                  <Route path="/teams">
                    <Route index element={<Teams />} />
                    <Route path="create" element={<BlogPostCreate />} />
                    <Route path="edit/:id" element={<BlogPostEdit />} />
                    <Route path="show/:id" element={<BlogPostShow />} />
                  </Route>
                  <Route path="/leagues">
                    <Route index element={<Leagues />} />
                  </Route>
                  <Route path="/rules">
                    <Route index element={<Rules />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-outer"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route
                    path="/login"
                    element={<AuthPage type="login" formProps={{}} />}
                  />
                  <Route
                    path="/register"
                    element={<AuthPage type="register" />}
                  />
                  <Route
                    path="/forgot-password"
                    element={<AuthPage type="forgotPassword" />}
                  />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
