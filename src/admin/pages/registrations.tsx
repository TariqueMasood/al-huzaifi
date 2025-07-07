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
import {
  Spinner,
  Alert,
  Form,
  Pagination,
  Button,
  Modal,
} from "react-bootstrap";
import styled from "styled-components";
import {
  useRegistrations,
  useDeleteRegistration,
} from "../../hooks/use-queries";
import { User } from "../../@types/registered-user";
import { scholarshipTypeLabels } from "../../components/registration-form";
import { useNavigate, Link } from "react-router-dom";

const Registrations: React.FC = () => {
  const {
    data: registrations,
    isLoading,
    isError,
    refetch,
  } = useRegistrations();
  const deleteRegistration = useDeleteRegistration();
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageSize, setPageSize] = useState(5);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (deleteId) {
      deleteRegistration.mutate(deleteId, {
        onSuccess: () => {
          refetch();
          setShowConfirm(false);
          setDeleteId(null);
        },
        onError: () => {
          alert("Failed to delete registration.");
          setShowConfirm(false);
          setDeleteId(null);
        },
      });
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  const columns: ColumnDef<User, any>[] = useMemo(
    () => [
      {
        id: "fullName",
        header: "Full Name",
        enableSorting: true,
        accessorFn: (row: any) =>
          `${(row as any).firstName || ""} ${
            (row as any).lastName || ""
          }`.trim(),
        cell: ({ row }) => (
          <Link
            to={`/dashboard/registrations/${(row.original as any)._id}`}
            style={{
              textDecoration: "underline",
              color: "#0d6efd",
              cursor: "pointer",
            }}
          >
            {`${(row.original as any).firstName || ""} ${
              (row.original as any).lastName || ""
            }`.trim()}
          </Link>
        ),
      },
      { accessorKey: "age", header: "Age", enableSorting: true },
      { accessorKey: "gender", header: "Gender", enableSorting: true },
      { accessorKey: "email", header: "Email", enableSorting: true },
      { accessorKey: "phone", header: "Phone", enableSorting: false },
      { accessorKey: "religion", header: "Religion", enableSorting: false },
      {
        accessorKey: "nativeLanguage",
        header: "Native Language",
        enableSorting: false,
      },
      {
        accessorKey: "knownLanguage",
        header: "Known Languages",
        enableSorting: false,
        cell: (info) =>
          Array.isArray(info.getValue())
            ? (info.getValue() as string[]).join(", ")
            : String(info.getValue()),
      },
      {
        accessorKey: "guardianName",
        header: "Guardian Name",
        enableSorting: false,
      },
      {
        accessorKey: "relationship",
        header: "Relationship",
        enableSorting: false,
      },
      { accessorKey: "faculty", header: "Faculty", enableSorting: true },
      { accessorKey: "course", header: "Course", enableSorting: true },
      {
        accessorKey: "availability",
        header: "Availability",
        enableSorting: false,
      },
      { accessorKey: "timing", header: "Timing", enableSorting: false },
      { accessorKey: "country", header: "Country", enableSorting: true },
      {
        accessorKey: "scholarshipType",
        header: "Scholarship Type",
        enableSorting: false,
        cell: (info) => {
          const value = info.getValue();
          return value
            ? scholarshipTypeLabels[value as string] || String(value)
            : "-";
        },
      },
      {
        accessorKey: "scholarshipReason",
        header: "Scholarship Reason",
        enableSorting: false,
        cell: (info) => {
          const value = info.getValue();
          return value ? String(value) : "-";
        },
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        enableSorting: true,
        cell: (info) => new Date(info.getValue() as string).toLocaleString(),
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
        enableSorting: false,
        cell: (info) => new Date(info.getValue() as string).toLocaleString(),
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <>
            <Button
              variant="primary"
              size="sm"
              style={{ marginRight: 8 }}
              onClick={() =>
                navigate(`/dashboard/registrations/${row.original._id}`)
              }
            >
              View
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDeleteClick(row.original._id)}
            >
              Delete
            </Button>
          </>
        ),
        enableSorting: false,
      },
    ],
    []
  );

  const table = useReactTable({
    data: registrations || [],
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
      <TableWrapper>
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <StyledTh
                    key={header.id}
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                    style={{
                      cursor: header.column.getCanSort()
                        ? "pointer"
                        : "default",
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() &&
                    header.column.getIsSorted() === "asc"
                      ? " 🔼"
                      : ""}
                    {header.column.getCanSort() &&
                    header.column.getIsSorted() === "desc"
                      ? " 🔽"
                      : ""}
                  </StyledTh>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <StyledTd
                  colSpan={columns.length}
                  style={{ textAlign: "center" }}
                >
                  No registered users found.
                </StyledTd>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <StyledTr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <StyledTd key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </StyledTd>
                  ))}
                </StyledTr>
              ))
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>
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
      <Modal show={showConfirm} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this registration?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default Registrations;

const Wrapper = styled.div`
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

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 1rem;
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
