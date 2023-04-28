import React from 'react';
import { DataTable } from 'carbon-components-react';
import styles from './Tabela.module.css';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

const rowData = [
  { id: '1', nome: 'Ana', idade: 28, cidade: 'São Paulo' },
  { id: '2', nome: 'João', idade: 33, cidade: 'Rio de Janeiro' },
  { id: '3', nome: 'Maria', idade: 45, cidade: 'Belo Horizonte' },
];

const headerData = [
  {
    header: 'Nome',
    key: 'nome',
  },
  {
    header: 'Idade',
    key: 'idade',
  },
  {
    header: 'Cidade',
    key: 'cidade',
  },
];

function Tabela() {
  return (
    <div className={styles.container}>
      <DataTable
        rows={rowData}
        headers={headerData}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </div>
  );
}

export default Tabela;
