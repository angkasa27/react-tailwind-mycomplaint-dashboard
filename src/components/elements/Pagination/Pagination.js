import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { useHistory, useLocation } from 'react-router-dom';

export default function Pagination(props) {
  const history = useHistory();
  const location = useLocation();
  const { className, meta, query } = props;
  const { page, totalPage } = meta;
  // const classes = [styles.root, className].filter(Boolean).join(' ');
  const toPrevPage = page && page > 1 ? parseInt(page) - 1 : 1;
  const toNextPage = page && page <= totalPage ? parseInt(page) + 1 : totalPage;
  const disablePrev = page <= 1;
  const disableEnd = page >= totalPage;

  const getLink = (toPrevPage) => {
    return {
      pathname: location.pathname,
      search: queryString.stringify({
        page: toPrevPage,
      }),
    };
  };

  return (
    <section className={'flex' + className}>
      <button
        className={
          disablePrev
            ? 'pagination-disabled flex justify-center items-center w-8 h-8 mr-1'
            : 'pagination flex justify-center items-center w-8 h-8 mr-1'
        }
        disabled={disablePrev}
        onClick={() => history.push(getLink(toPrevPage))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 "
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <PageNumber
        location={location}
        meta={meta}
        prevQuery={query}
        getLink={getLink}
      />
      <button
        className={
          disableEnd
            ? 'pagination-disabled flex justify-center items-center w-8 h-8'
            : 'pagination flex justify-center items-center w-8 h-8'
        }
        disabled={disableEnd}
        onClick={() => history.push(getLink(toNextPage))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        {/* <ArrowRight fill={disableEnd} /> */}
      </button>
    </section>
  );
}

Pagination.defaultProps = {
  className: '',
  meta: {},
  query: { size: 10 },
};

Pagination.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.object,
  query: PropTypes.object,
};

export function PageNumber({ meta, getLink }) {
  const history = useHistory();
  const { page, totalPage } = meta;
  const length = totalPage > 5 ? 5 : totalPage;
  const mainPages = Array.from(Array(length).keys()).map((i) => {
    if (totalPage <= 5 || page === 1) return i + 1;
    if (page === totalPage || page === totalPage - 1)
      return totalPage - (4 - i);
    return page + i - 1;
  });
  const leftPages = totalPage > 5 && mainPages[0] - 1 > 1 ? [1, '...'] : [];
  const rightPages =
    totalPage > 5 && totalPage - mainPages[3] > 1 ? ['...', totalPage] : [];
  const pages = leftPages.concat(mainPages, rightPages);

  return pages.map((item, key) => {
    // const activePage = page === item && styles.active;
    // const pageClasses = [styles['page-number'], activePage]
    //   .filter(Boolean)
    //   .join(' ');
    const active = item === parseInt(page);
    // const disabled = typeof item !== 'number';

    if (item === '...') {
      return <h5>{item}</h5>;
    } else {
      return (
        <button
          className={
            active
              ? 'pagination-active flex justify-center items-center w-8 h-8 mr-1'
              : 'pagination flex justify-center items-center w-8 h-8 mr-1'
          }
          disabled={active}
          key={key}
          onClick={() => history.push(getLink(item))}
        >
          {/* <Link
          disabled={disabled}
          key={key}
          to={getLink(query, location, prevQuery)}
        > */}
          {item}
        </button>
      );
    }
  });
}

PageNumber.defaultProps = {
  meta: {},
  prevQuery: {},
  getLink: () => {},
};

PageNumber.propTypes = {
  meta: PropTypes.object,
  prevQuery: PropTypes.object,
  getLink: PropTypes.func,
};
