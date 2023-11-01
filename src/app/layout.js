

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-layout-style="default" data-sidebar-size="lg" data-sidebar="dark" data-layout-width="fluid" data-layout-position="fixed" data-topbar="light" data-layout="vertical" data-sidebar-image="none" data-sidebar-visibility="show">
      <body suppressHydrationWarning={true} data-sidebar="dark" id="root">

          {children}


      </body>
    </html>
  );
}
