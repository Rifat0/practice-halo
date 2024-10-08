"use client";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "feather-icons-react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";

export function DataTable({ columns, data, searchColumn }) {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div className="items-center justify-between py-3">
        <div className="row">
          <div className="col-md-10">
            <label>
              <select
                className="form-select form-select-lg"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="col-md-2">
            <div className="input-group input-xs">
              <span className="input-group-text">
                <Search size="20" />
              </span>
              <input
                className="form-control"
                placeholder="Search..."
                type="search"
                value={table.getColumn(searchColumn)?.getFilterValue() ?? ""}
                onChange={(event) =>
                  table
                    .getColumn(searchColumn)
                    ?.setFilterValue(event.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <table className=" table table-striped table-hover">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} style={{ width: header.getSize() }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="items-center justify-end py-3">
        <div className="row">
          <div className="col-md-6 mt-2">
            <h5 className="f-w-400">
              Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
              {table.getRowCount().toLocaleString()} entries
            </h5>
          </div>

          <div className="col-md-6">
            <ul className="pagination pagination-primary justify-content-end">
              <li
                className={`page-item ${
                  table.getCanPreviousPage() === false ? `disabled` : null
                }`}
              >
                <a
                  className="page-link"
                  tabIndex="-1"
                  onClick={() => table.firstPage()}
                >
                  <ChevronsLeft size="15" />
                </a>
              </li>
              <li
                className={`page-item ${
                  table.getCanPreviousPage() === false ? `disabled` : null
                }`}
              >
                <a
                  className="page-link"
                  tabIndex="-1"
                  onClick={() => table.previousPage()}
                >
                  <ChevronLeft size="15" />
                </a>
              </li>
              {/* {Array(table.getPageCount()).fill(null).map((value, index) => (
                ((table.getState().pagination.pageIndex === index) ? (
                  <>                    
                    {(index !== 0 ) ? (
                      <li
                        className="page-item"
                        key={index+10}
                      >
                        <a 
                          className="page-link"
                          onClick={() => table.setPageIndex(index-1)}
                        >{index}</a>
                      </li>
                      ) : null
                    }
                    <li
                      className={`page-item ${table.getState().pagination.pageIndex === index ? 'active' : ''}`}
                      key={index+12}
                    >
                      <a 
                        className="page-link"
                        onClick={() => table.setPageIndex(index)}
                      >{index + 1}</a>
                    </li>

                    { (table.getCanNextPage()) ? (
                      <li
                        className="page-item"
                        key={index+13}
                      >
                        <a 
                          className="page-link"
                          onClick={() => table.setPageIndex(index+1)}
                        >{index + 2}</a>
                      </li>
                    ) : null }
                  </>
                ) : null
                )
              ))} */}
              <li
                className={`page-item ${
                  table.getCanNextPage() === false ? `disabled` : null
                }`}
              >
                <a
                  className="page-link"
                  tabIndex="-1"
                  onClick={() => table.nextPage()}
                >
                  {" "}
                  <ChevronRight size="15" />{" "}
                </a>
              </li>
              <li
                className={`page-item ${
                  table.getCanNextPage() === false ? `disabled` : null
                }`}
              >
                <a
                  className="page-link"
                  tabIndex="-1"
                  onClick={() => table.lastPage()}
                >
                  {" "}
                  <ChevronsRight size="15" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
