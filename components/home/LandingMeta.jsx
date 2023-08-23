import { FunctionComponent } from "react";

/**
 * HomePageMetaProps is a React Component properties that passed to React Component HomePageMeta
 */

/**
 * HomePageMeta is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */

const LandingMeta = ({}) => {
  return (
    <>
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://lokamining.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Loka Mining | Get More BTC, Pay Less $"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:description"
        content="On-chain Bitcoin Mining as a Service, using excess power from renewable energy. Get your sats daily at 30%++ discount rate."
      />
      <meta
        property="og:image"
        content="https://lokamining.com/preview_loka.jpg"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lokamining.com" />
      <meta property="twitter:url" content="https://twitter.com/lokamining" />
      <meta
        name="twitter:title"
        content="Loka Mining | Get More BTC, Pay Less $"
      />
      <meta
        name="twitter:description"
        content="On-chain Bitcoin Mining as a Service, using excess power from renewable energy. Get your sats daily at 30%++ discount rate."
      />
      <meta
        name="twitter:image"
        content="https://lokamining.com/preview_loka.jpg"
      />
    </>
  );
};

export default LandingMeta;
