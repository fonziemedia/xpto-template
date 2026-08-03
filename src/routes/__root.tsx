import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Card } from "../components/UI";
import "../integrations/i18n";

import appCss from "../styles/app.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=stored==='light'||stored==='dark'?stored:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(stored!=='light'&&stored!=='dark'){window.localStorage.setItem('theme',mode);}var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(mode);root.setAttribute('data-theme',mode);root.style.colorScheme=mode;}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "North Harbor Studio"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  notFoundComponent: RootNotFound,
  shellComponent: RootDocument
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: "bottom-right"
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />
            }
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootNotFound() {
  return (
    <main className="page-wrap px-4 pb-12 pt-10">
      <Card
        as="section"
        radius="4xl"
        className="px-6 py-12 text-center sm:px-10"
      >
        <p className="island-kicker mb-3">404</p>
        <h1 className="display-title mb-4 text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-7">
          <Button href="/">Back to Home</Button>
        </div>
      </Card>
    </main>
  );
}
