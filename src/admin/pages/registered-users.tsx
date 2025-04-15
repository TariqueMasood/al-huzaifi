import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import { Spinner, Alert, Form, Pagination } from "react-bootstrap";
import styled from "styled-components";
import { useUsers } from "../../hooks/use-users";
import { User } from "../../@types/registered-user";

const RegisteredUsers: React.FC = () => {
  const { data: users, isLoading, isError } = useUsers();
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageSize, setPageSize] = useState(5);

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "role",
        header: "Role",
      },
    ],
    []
  );

  const table = useReactTable({
    data: users || [],
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  if (isLoading) return <Spinner animation="border" />;

  if (isError) return <Alert variant="danger">Error fetching users data</Alert>;

  return (
    <Wrapper>
      <Header>
        <h2>Registered Users</h2>
        <Form.Control
          type="text"
          placeholder="Search users..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="search-input"
        />
      </Header>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTh
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc" ? " 🔼" : ""}
                  {header.column.getIsSorted() === "desc" ? " 🔽" : ""}
                </StyledTh>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledTr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
      <PaginationWrapper>
        <Pagination>
          <Pagination.Prev
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          {Array.from({ length: table.getPageCount() }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index === table.getState().pagination.pageIndex}
              onClick={() => table.setPageIndex(index)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </Pagination>
        <Form.Select
          value={pageSize}
          onChange={(e) => {
            const size = Number(e.target.value);
            setPageSize(size);
            table.setPageSize(size);
          }}
          className="page-size-select"
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </Form.Select>
      </PaginationWrapper>
    </Wrapper>
  );
};

export default RegisteredUsers;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .search-input {
    max-width: 300px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.themeTextColor};
    padding: 0.5rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const StyledTh = styled.th`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.themeTextColor2};
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeBg};
  }
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

const StyledTd = styled.td`
  padding: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.themeTextColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardDividerColor};
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  .page-size-select {
    max-width: 150px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.themeTextColor};
    padding: 0.5rem;
  }
`;
