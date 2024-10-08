"use client";

import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import moment from "moment";
import InvoicePdf from "./InvoicePdf";

export const columns = [
  {
    accessorKey: "invoice",
    size: 50,
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Invoice ID <i className="icofont icofont-sort"></i>
        </span>
      );
    },
  },
  {
    accessorKey: "invoice_total",
    size: 70,
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount <i className="icofont icofont-sort"></i>
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
    accessorKey: "invoice_payments_sum_amount",
    size: 70,
    header: ({ column }) => {
      return (
        <span className="f-w-600">Paid</span>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("invoice_payments_sum_amount") || "0");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "due",
    size: 70,
    header: ({ column }) => {
      return (
        <span className="f-w-600">Due</span>
      );
    },
    cell: ({ row }) => {
      const { invoice_total, invoice_payments_sum_amount } = row.original;
      const dueAmount = parseFloat( invoice_total-invoice_payments_sum_amount || "0");
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(dueAmount);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "payment_status",
    size: 50,
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Payment Status <i className="icofont icofont-sort"></i>
        </span>
      );
    },
    cell: ({ row }) => {
      const paymentStatus = parseInt(row.getValue("payment_status"));
      if (paymentStatus === 1) {
        return (
          <span
            className="badge badge-light-success"
            style={{ textAlign: "center" }}
          >
            Paid
          </span>
        );
      }
      return (
        <span
          className="badge badge-light-danger"
          style={{ textAlign: "center" }}
        >
          Due
        </span>
      );
    },
  },
  {
    accessorKey: "created_at",
    size: 100,
    header: ({ column }) => {
      return <span className="f-w-600">Created</span>;
    },
    cell: ({ row }) => {
      const dateTime = moment(row.getValue("created_at")).format(
        "MMMM D, YYYY"
      );
      return <div>{dateTime}</div>;
    },
  },
  {
    accessorKey: "actions",
    size: 50,
    header: ({ column }) => {
      return <span className="f-w-600">Actions</span>;
    },
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <>
          <span
            className="btn btn-xs btn-outline-primary dropdown-toggle"
            type="span"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ...
          </span>
          <div className="dropdown-menu" style={{ cursor: "pointer" }}>
            <span onClick={() => downloadInvoice(id)} className="dropdown-item">
              <strong>Download Invoice</strong>
            </span>
            <span
              onClick={() => downloadPaymentRecipe(id)}
              className="dropdown-item"
            >
              <strong>Download Payment Recipe</strong>
            </span>
          </div>
        </>
      );
    },
  },
];

const downloadInvoice = async (id) => {
  const data = {
    section1: "This is dynamic data for Section 1",
    section2: "This is dynamic data for Section 2",
  };
  const blob = await pdf(<InvoicePdf data={data} />).toBlob();
  saveAs(blob, `${id}-invoice.pdf`);
};

const downloadPaymentRecipe = async (id) => {
  const data = {
    section1: "This is dynamic data for Section 1",
    section2: "This is dynamic data for Section 2",
  };
  const blob = await pdf(<InvoicePdf data={data} />).toBlob();
  saveAs(blob, `${id}-invoice.pdf`);
};
