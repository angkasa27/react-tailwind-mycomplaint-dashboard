import React from 'react';
import PropTypes from 'prop-types';

export default function DataTable(props) {
  const { className, column, data, meta, size } = props;

  return (
    <table className={className}>
      <thead>
        <tr>
          {column.map((item, idx) => (
            <TableHeader item={item} key={idx} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <TableRow
            column={column}
            idx={idx}
            item={item}
            key={idx}
            meta={meta}
            size={size}
          />
        ))}
      </tbody>
    </table>
  );
}

DataTable.defaultProps = {
  className: '',
  column: [],
  data: [],
  meta: {},
  size: 10,
};

DataTable.propTypes = {
  className: PropTypes.string,
  column: PropTypes.array,
  data: PropTypes.array,
  meta: PropTypes.object,
  size: PropTypes.number,
};

export function TableHeader({ item }) {
  return (
    <th className="bg-indigo-100 text-indigo-500 p-2 pl-5 text-left font-bold capitalize ">
      {item.heading}
    </th>
  );
}

TableHeader.defaultProps = {
  item: {},
};

TableHeader.propTypes = {
  item: PropTypes.object,
};

export function TableRow({ column, item }) {
  return (
    <tr className="border-b border-gray-100">
      {column.map((cItem, cIdx) => {
        const { value } = cItem;

        return (
          <td className="p-2 pl-5 truncate bg-transparent" key={cIdx}>
            {typeof value === 'function' ? value(item) : item[value]}
          </td>
        );
      })}
    </tr>
  );
}

TableRow.defaultProps = {
  column: [],
  idx: 0,
  item: {},
  meta: {},
  size: 10,
};

TableRow.propTypes = {
  column: PropTypes.array,
  idx: PropTypes.number,
  item: PropTypes.object,
  meta: PropTypes.object,
  size: PropTypes.number,
};
