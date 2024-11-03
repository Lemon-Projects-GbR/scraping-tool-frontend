import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,

} from "@remix-run/react";

import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import theme from './theme/theme';
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    },
  ];
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset default browser styles */}
      <GlobalStyles
        styles={{
          body: { margin: 0, padding: '0 6rem', backgroundColor: theme.palette.background.default },
          '*': { boxSizing: 'border-box' },
          a: { textDecoration: 'none', color: theme.palette.primary.main },
        }}
      />
      <Outlet />
    </ThemeProvider>
  );
}
