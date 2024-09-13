"use client";

import moment from 'moment';

export const columns = [
  {
    accessorKey: "invoice",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Invoice ID <i className="fa fa-sort"></i>
        </span>
      );
    },
  },
  {
    accessorKey: "invoice_total",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount <i className="fa fa-sort"></i>
        </span>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("invoice_total") || "0");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "invoice_total",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Paid <i className="fa fa-sort"></i>
        </span>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("invoice_total") || "0");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "invoice_total",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due <i className="fa fa-sort"></i>
        </span>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("invoice_total") || "0");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "payment_status",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Payment Status <i className="fa fa-sort" ></i>
        </span>
      );
    },
    cell: ({ row }) => {
      const paymentStatus = parseInt(row.getValue("payment_status"));
      if(paymentStatus === 1){
        return (
          <span className="badge badge-light-success">Paid</span>
        );
      }
      return (
        <span className="badge badge-light-danger">Due</span>
      );
      
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <span className="f-w-600">Created</span>
      );
    },
    cell: ({ row }) => {
      const dateTime = moment(row.getValue("created_at")).format("MMMM D, YYYY");
      return <div>{dateTime}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: ({ column }) => {
      return (
        <span className="f-w-600" >Actions</span>
      );
    },
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <>
          <span className="btn btn-xs btn-outline-primary dropdown-toggle" type="span" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</span>
          <div className="dropdown-menu">
            <a className="dropdown-item" href={`#/${id}`}>Download Invoice</a>
            <a className="dropdown-item" href={`#/${id}`}>Download Payment Recipet</a>
          </div>
        </>
      );
    },
  },
];
