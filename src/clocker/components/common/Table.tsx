import { FC } from 'react';

export interface TableProps {
  heads: string[];
  children: JSX.Element[] | JSX.Element;
}

const Table: FC<TableProps> = ({ heads, children }) => {
  return (
    <div className='container mx-auto'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            {heads.map((head: string) => (
              <th
                key={head}
                className='text-left py-3 px-4 uppercase font-semibold text-sm'
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
