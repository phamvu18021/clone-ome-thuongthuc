import { FixHead } from "@/src/app/components/atoms/FixHead";
import { TrackingSession } from "@/src/app/components/atoms/TrackingSession";
import Cta from "@/src/app/components/organisms/Cta";
import Navbar from "@/src/app/components/organisms/Navbar";
import "@/src/styles/globals.css";
import dynamic from "next/dynamic";

const Footer = dynamic(() =>
  import("@/src/app/components/molecules/Footer").then((mod) => mod.Footer)
);

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </noscript>
      </head>
      <body>
        <FixHead />
        {gaId && (
          <script
            id="delayed-ga"
            dangerouslySetInnerHTML={{
              __html: `
                var timeoutID; 
                setTimeout(function() {
                  var script = document.createElement('script');
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=${gaId}';
                  script.async = true;
                  document.body.appendChild(script);
                  
                  var inlineScript = document.createElement('script');
                  inlineScript.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');";
                  document.body.appendChild(inlineScript);
                }, 6000);
              `
            }}
          />
        )}
        <div className="max-w-[1920px] mx-auto">
          <TrackingSession />
          <Navbar />
          {children}
          <Footer />
          <Cta />
        </div>
      </body>
    </html>
  );
}
