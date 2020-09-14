import React from "react";
import Skeleton from "react-loading-skeleton";

const ExternalLinksList = ({ fetchingExternalLink, externalLinks }) => {
  return (
    <div className="px-6 py-10 bg-shade-pink lg:px-60 externalLinksWrapper">
      <div className="mx-auto xl:w-1146">
        {fetchingExternalLink &&
          [1, 2, 3, 4].map(() => (
            <div className="mb-4">
              <Skeleton count={2} />
            </div>
          ))}
        {!fetchingExternalLink &&
          externalLinks.map(({ name, link, id }) => (
            <div className="xs:mb-8 xs:last:mb-0" key={id}>
              <a
                className="text-2xl font-sans 
                        hover:text-text-dark  text-text-dark font-semibold tracking-open"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {name}
              </a>
              <h6 className="mt-3">
                <a
                  className="text-text-blue hover:text-text-blue text-base tracking-open"
                  href={link}
                  el="noopener noreferrer"
                  target="_blank"
                >
                  {link}
                </a>
              </h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExternalLinksList;
