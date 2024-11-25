import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  AuthPage,
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";

import { App } from "@capacitor/app";
import {
  Group,
  House,
  Rule,
  SportsFootball,
  SportsMma,
} from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Sider, Title } from "./components/header/sider";
import { ThemedLayoutV2 } from "./components/layout";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { firestoreDatabase } from "./firebase-config";
import { BlogPostCreate, BlogPostEdit } from "./pages/blog-posts";
import { Home } from "./pages/home";
import { Leagues } from "./pages/leagues";
import { Rules } from "./pages/rules/rules";
import Skills from "./pages/rules/skills";
import { Teams } from "./pages/teams";
import { TeamPage } from "./pages/teams/team";
import authProvider from "./providers/auth";

function AppRoot() {
  useEffect(() => {
    const backButtonListener = App.addListener("backButton", (event) => {
      // Lógica para manejar el back button
      if (window.location.pathname === "/home") {
        // Si estás en la página principal, evitar que cierre la app
        App.exitApp(); // Salir de la app manualmente (opcional)
      } else {
        // Si no estás en la página principal, navega hacia atrás
        window.history.back();
      }
    });

    // Cleanup del listener cuando el componente se desmonte
    return () => {
      backButtonListener.then((listener) => listener.remove());
    };
  }, []);

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={firestoreDatabase.getDataProvider()}
              authProvider={authProvider}
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
                  },
                },
                {
                  name: "skills",
                  list: "/rules/skills",
                  meta: {
                    parent: "rules",
                    label: "Habilidades",
                    icon: <SportsMma />,
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
                    <Route path=":id" element={<TeamPage />} />
                  </Route>
                  <Route path="/leagues">
                    <Route index element={<Leagues />} />
                  </Route>
                  <Route path="/rules">
                    <Route index element={<Rules />} />
                    <Route path="skills">
                      <Route index element={<Skills />} />
                    </Route>
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
                    element={
                      <AuthPage
                        type="login"
                        title="League Forge"
                        formProps={{}}
                      />
                    }
                  />
                  <Route
                    path="/register"
                    element={<AuthPage type="register" title="League Forge" />}
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

export default AppRoot;
